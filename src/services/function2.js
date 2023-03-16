const puppeteer = require('puppeteer');
const numberClicks = require('../helpers/numberClicks');
const totalFieldFunc = require('../helpers/totalField');
const checkNumbersLessThan10 = require('../helpers/checkNumbersLessThan10');
const getNumbers = require('./pdf')

const doGame = async (websiteUrl, total, numbersArray, player, value, date) => {
    const totalField = totalFieldFunc(total)
    const numbers = checkNumbersLessThan10(numbersArray)

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

    const browser = await puppeteer.launch({
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.goto(websiteUrl, { waitUntil: 'networkidle2' });

    await page.waitForSelector('table[id="j_idt81:campoQtd"]')
    const radioId = `label[for="j_idt81:campoQtd:${totalField}"]`
    await page.click(radioId, { clickCount: 1 })
    await numberClicks(total, page, numbers)

    await page.waitForSelector('input[name="j_idt81:campoJogador"]');
    await page.type('input[name="j_idt81:campoJogador"]', player)
    await page.waitForSelector('input[name="j_idt81:campoQuina_input"]');

    await page.click('input[name="j_idt81:campoQuina_input"]', { clickCount: 3 })
    await page.type('input[name="j_idt81:campoQuina_input"]', value)

    await page.type('input[name="j_idt81:campoData_input"]', date)

    await page.waitForTimeout(10000)
    await page.click('span[class="ui-button-icon-left ui-icon ui-c fa fa-check"]', { clickCount: 1 })
    await page.waitForTimeout(1000)

    //Testes
    //await page.click('input[name="j_idt81:campoJogador"]', { clickCount: 1 })

    /*
    const datePanel = await page.waitForSelector('#j_idt81:campoData_panel', { visible: true })
    if (datePanel) {
        await page.evaluate(() => document.querySelector('#j_idt81:campoJogador').click());
    }*/

    const processError = await page.waitForSelector('#messages_container div > div > .ui-growl-title', { visible: true })
    if (processError) {
        const error = await processError.evaluate(el => el.textContent)
        if (error === 'Registro adicionado com sucesso') {
            const element = await page.waitForSelector('#j_idt115 > div > div > form > center > div > div > div > div > h3', { visible: true }); // select the element
            const code = await element.evaluate(el => el.textContent)

            await browser.close();
            return code
        } else {
            await browser.close();
            return {
                error: error
            }
        }
    }
}

module.exports = async (data) => {
    const total = parseInt(data.totalNumbers)
    const numbersArray = await getNumbers(data.path, total) //(data.numbers).split(' ')
    const player = data.playerName
    const value = data.valueMoney
    const date = data.date
    const websiteUrl = 'http://www.easybets.com.br/UniBetsPatos/seninhas.xhtml'
    const codeArray = []

    for (let i = 0; i < numbersArray.length; i++) {
        console.log(`Jogo ${i + 1}: `, numbersArray[i])
        codeArray.push(await doGame(websiteUrl, total, numbersArray[i], player, value, date))
        console.log(codeArray[i])
    }

    return codeArray
};