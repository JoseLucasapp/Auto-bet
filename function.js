const puppeteer = require('puppeteer');

module.exports = async (data) => {
    const numbers = ((data.numbers).split(' ')).map((n) => parseInt(n))
    const player = data.player
    const total = parseInt(data.total)
    const value = data.value
    const date = data.date
    let totalField = 0

    //j_idt81:campoQtd:9

    switch (total) {
        case 14:
            totalField = 0
            break;
        case 15:
            totalField = 1
            break;
        case 16:
            totalField = 2
            break;
        case 17:
            totalField = 3
            break;
        case 18:
            totalField = 4
            break;
        case 20:
            totalField = 5
            break;
        case 25:
            totalField = 6
            break;
        case 30:
            totalField = 7
            break;
        case 35:
            totalField = 8
            break;
        case 40:
            totalField = 9
            break;
        default:
            totalField = 0
    }


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

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://www.easybets.com.br/UniBetsPatos/seninhas.xhtml', { waitUntil: 'networkidle2' });

    await page.waitForSelector('table[id="j_idt81:campoQtd"]')
    const radioId = `label[for="j_idt81:campoQtd:${totalField}"]`
    await page.click(radioId, { clickCount: 1 })

    for (let i = 0; i < numbers.length; i++) {
        let number = 0
        number = numbers[i] - 1
        await page.click(`button[id="j_idt78:${number}:j_idt79"]`)
    }

    await page.waitForSelector('input[name="j_idt81:campoJogador"]');
    await page.type('input[name="j_idt81:campoJogador"]', player)
    await page.waitForSelector('input[name="j_idt81:campoQuina_input"]');

    await page.click('input[name="j_idt81:campoQuina_input"]', { clickCount: 3 })
    await page.type('input[name="j_idt81:campoQuina_input"]', value)

    await page.type('input[name="j_idt81:campoData_input"]', date)
    //await page.click('button[id="j_idt81:salvar"]', { clickCount: 1 })

    //await page.waitForXPath(`'td[contains(., "<a>${day}</a>")]'`).then(selector => selector.click())

    //j_idt81:campoData_input
    //j_idt81:campoQtd
    //await page.waitForSelector('input[name="j_idt81:campoQtd"]');
    /*const radioBtn = `'input[id=#j_idt81:campoQtd:${totalField}][value=N${total}]'`
    await page.click(radioBtn)*/

    await page.screenshot({ path: 'example.png' });

    //await browser.close();
    return 'ok'
};

//j_idt115_content
//p-col-12 p-md-12 h3