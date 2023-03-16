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

module.exports = async (src, len) => {
    const replacedTxt = "C:/Users/josel/Downloads/" + src
    const content = await getContent(replacedTxt)
    let data = []

    content.items.map((item) => {
        if (item.str * 1 > 0) {
            data.push({ id: item.id, num: item.str })
        }
    })

    const array = []
    while (data.length) {
        array.push(data.splice(0, len))
    }

    const nums = array.map((v) => v.map((d) => parseInt(d.num)))

    return nums
}