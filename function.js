const puppeteer = require('puppeteer');
const numberClicks = require('./numberClicks');
const totalFieldFunc = require('./totalField');

module.exports = async (data) => {
    const numbers = (data.numbers).split(' ')
    const player = data.player
    const total = parseInt(data.total)
    const value = data.value
    const date = data.date
    const totalField = totalFieldFunc(total)

    console.log(data, totalField)

    Array.prototype.duplicates = function () {
        return this.filter(
            function (x, y, k) {
                return y !== k.lastIndexOf(x);
            }
        );
    }

    const duplicados = numbers.duplicates();

    if (duplicados.length > 0) {
        return `Os seguintes números estão repetidos: ${duplicados.map((n) => n)}`
    }

    console.log('ok')

    const browser = await puppeteer.launch({ headless: true });
    console.log('ok 1')
    const page = await browser.newPage();
    await page.goto('http://www.easybets.com.br/UniBetsPatos/seninhas.xhtml', { waitUntil: 'networkidle2' });

    await page.waitForSelector('table[id="j_idt81:campoQtd"]')
    const radioId = `label[for="j_idt81:campoQtd:${totalField}"]`
    await page.click(radioId, { clickCount: 1 })
    await numberClicks(total, page, numbers)
    console.log('ok2')

    await page.waitForSelector('input[name="j_idt81:campoJogador"]');
    await page.type('input[name="j_idt81:campoJogador"]', player)
    await page.waitForSelector('input[name="j_idt81:campoQuina_input"]');

    await page.click('input[name="j_idt81:campoQuina_input"]', { clickCount: 3 })
    await page.type('input[name="j_idt81:campoQuina_input"]', value)

    await page.type('input[name="j_idt81:campoData_input"]', date)

    console.log('ok3')
    await page.waitForTimeout(10000)
    await page.click('span[class="ui-button-icon-left ui-icon ui-c fa fa-check"]', { clickCount: 1 })
    await page.waitForTimeout(1000)
    await page.waitForSelector('div[id="j_idt115"]', { visible: true })
    await page.waitForTimeout(1000)
    console.log('ok4')
    const element = await page.waitForSelector('#j_idt115 > div > div > form > center > div > div > div > div > h3', { visible: true }); // select the element
    await page.waitForTimeout(1000)
    const code = await element.evaluate(el => el.textContent)

    console.log('ok5')
    await browser.close();
    console.log('ok6')
    return code
};