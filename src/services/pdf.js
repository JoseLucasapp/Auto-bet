/*module.exports = async (PdfReader) => {
    new PdfReader().parseFileItems("../pdf/MEGASENA.pdf", function (err, item) {
        if (item && item.text)
            console.log(item.text);
    });
}*/

const pdfjs = require('pdfjs-dist')

async function getContent(src) {
    const doc = await pdfjs.getDocument(src).promise
    const page = await doc.getPage(1)
    return await page.getTextContent()
}

async function getItems(src, len) {
    const content = await getContent(src)
    let data = []

    const items = content.items.map((item) => {
        if (item.str * 1 > 0) {
            data.push({ id: item.id, num: item.str })
        }
    })

    const array = []
    while (data.length) {
        array.push(data.splice(0, len))
    }

    const nums = array.map((v) => v.map((d) => d.num))

    return nums
}

getItems('../pdf/m.pdf', 40)