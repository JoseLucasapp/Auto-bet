module.exports = async (total, page, numbers) => {
    const number = numbers
    await page.evaluate(async (number) => {
        console.log(number)
        const elements = [...document.querySelectorAll('div > div > div > div > div > div > div > div >div > table > tbody > tr > td > button > span')];
        if (number.includes('01')) {
            const targetElement = await elements.find(e => e.innerText === `01`)
            if (targetElement) await targetElement.click();
        }
        if (number.includes('02')) {
            const targetElement2 = await elements.find(e => e.innerText === `02`)
            if (targetElement2) await targetElement2.click();
        }
        if (number.includes('03')) {
            const targetElement3 = await elements.find(e => e.innerText === `03`)
            if (targetElement3) await targetElement3.click();
        }
        if (number.includes('04')) {
            const targetElement4 = await elements.find(e => e.innerText === `04`)
            if (targetElement4) await targetElement4.click();
        }
        if (number.includes('05')) {
            const targetElement5 = await elements.find(e => e.innerText === `05`)
            if (targetElement5) await targetElement5.click();
        }
        if (number.includes('06')) {
            const targetElement6 = await elements.find(e => e.innerText === `06`)
            if (targetElement6) await targetElement6.click();
        }
        if (number.includes('07')) {
            const targetElement7 = await elements.find(e => e.innerText === `07`)
            if (targetElement7) await targetElement7.click();
        }
        if (number.includes('08')) {
            const targetElement8 = await elements.find(e => e.innerText === `08`)
            if (targetElement8) await targetElement8.click();
        }
        if (number.includes('09')) {
            const targetElement9 = await elements.find(e => e.innerText === `09`)
            if (targetElement9) await targetElement9.click();
        }
        if (number.includes('10')) {
            const targetElement10 = await elements.find(e => e.innerText === `10`)
            if (targetElement10) await targetElement10.click();
        }
        if (number.includes('11')) {
            const targetElement11 = await elements.find(e => e.innerText === `11`)
            if (targetElement11) await targetElement11.click();
        }
        if (number.includes('12')) {
            const targetElement12 = await elements.find(e => e.innerText === `12`)
            if (targetElement12) await targetElement12.click();
        }
        if (number.includes('13')) {
            const targetElement13 = await elements.find(e => e.innerText === `13`)
            if (targetElement13) await targetElement13.click();
        }
        if (number.includes('14')) {
            const targetElement14 = await elements.find(e => e.innerText === `14`)
            if (targetElement14) await targetElement14.click();
        }
        if (number.includes('15')) {
            const targetElement15 = await elements.find(e => e.innerText === `15`)
            if (targetElement15) await targetElement15.click();
        }
        if (number.includes('16')) {
            const targetElement16 = await elements.find(e => e.innerText === `16`)
            if (targetElement16) await targetElement16.click();
        }
        if (number.includes('17')) {
            const targetElement17 = await elements.find(e => e.innerText === `17`)
            if (targetElement17) await targetElement17.click();
        }
        if (number.includes('18')) {
            const targetElement18 = await elements.find(e => e.innerText === `18`)
            if (targetElement18) await targetElement18.click();
        }
        if (number.includes('19')) {
            const targetElement19 = await elements.find(e => e.innerText === `19`)
            if (targetElement19) await targetElement19.click();
        }
        if (number.includes('20')) {
            const targetElement20 = await elements.find(e => e.innerText === `20`)
            if (targetElement20) await targetElement20.click();
        }
        if (number.includes('21')) {
            const targetElement21 = await elements.find(e => e.innerText === `21`)
            if (targetElement21) await targetElement21.click();
        }
        if (number.includes('22')) {
            const targetElement22 = await elements.find(e => e.innerText === `22`)
            if (targetElement22) await targetElement22.click();
        }
        if (number.includes('23')) {
            const targetElement23 = await elements.find(e => e.innerText === `23`)
            if (targetElement23) await targetElement23.click();
        }
        if (number.includes('24')) {
            const targetElement24 = await elements.find(e => e.innerText === `24`)
            if (targetElement24) await targetElement24.click();
        }
        if (number.includes('25')) {
            const targetElement25 = await elements.find(e => e.innerText === `25`)
            if (targetElement25) await targetElement25.click();
        }
        if (number.includes('26')) {
            const targetElement26 = await elements.find(e => e.innerText === `26`)
            if (targetElement26) await targetElement26.click();
        }
        if (number.includes('27')) {
            const targetElement27 = await elements.find(e => e.innerText === `27`)
            if (targetElement27) await targetElement27.click();
        }
        if (number.includes('28')) {
            const targetElement28 = await elements.find(e => e.innerText === `28`)
            if (targetElement28) await targetElement28.click();
        }
        if (number.includes('29')) {
            const targetElement29 = await elements.find(e => e.innerText === `29`)
            if (targetElement29) await targetElement29.click();
        }
        if (number.includes('30')) {
            const targetElement30 = await elements.find(e => e.innerText === `30`)
            if (targetElement30) await targetElement30.click();
        }
        if (number.includes('31')) {
            const targetElement31 = await elements.find(e => e.innerText === `31`)
            if (targetElement31) await targetElement31.click();
        }
        if (number.includes('32')) {
            const targetElement32 = await elements.find(e => e.innerText === `32`)
            if (targetElement32) await targetElement32.click();
        }
        if (number.includes('33')) {
            const targetElement33 = await elements.find(e => e.innerText === `33`)
            if (targetElement33) await targetElement33.click();
        }
        if (number.includes('34')) {
            const targetElement34 = await elements.find(e => e.innerText === `34`)
            if (targetElement34) await targetElement34.click();
        }
        if (number.includes('35')) {
            const targetElement35 = await elements.find(e => e.innerText === `35`)
            if (targetElement35) await targetElement35.click();
        }
        if (number.includes('36')) {
            const targetElement36 = await elements.find(e => e.innerText === `36`)
            if (targetElement36) await targetElement36.click();
        }
        if (number.includes('37')) {
            const targetElement37 = await elements.find(e => e.innerText === `37`)
            if (targetElement37) await targetElement37.click();
        }
        if (number.includes('38')) {
            const targetElement38 = await elements.find(e => e.innerText === `38`)
            if (targetElement38) await targetElement38.click();
        }
        if (number.includes('39')) {
            const targetElement39 = await elements.find(e => e.innerText === `39`)
            if (targetElement39) await targetElement39.click();
        }
        if (number.includes('40')) {
            const targetElement40 = await elements.find(e => e.innerText === `40`)
            if (targetElement40) await targetElement40.click();
        }
        if (number.includes('41')) {
            const targetElement41 = await elements.find(e => e.innerText === `41`)
            if (targetElement41) await targetElement41.click();
        }
        if (number.includes('42')) {
            const targetElement42 = await elements.find(e => e.innerText === `42`)
            if (targetElement42) await targetElement42.click();
        }
        if (number.includes('43')) {
            const targetElement43 = await elements.find(e => e.innerText === `43`)
            if (targetElement43) await targetElement43.click();
        }
        if (number.includes('44')) {
            const targetElement44 = await elements.find(e => e.innerText === `44`)
            if (targetElement44) await targetElement44.click();
        }
        if (number.includes('45')) {
            const targetElement45 = await elements.find(e => e.innerText === `45`)
            if (targetElement45) await targetElement45.click();
        }
        if (number.includes('46')) {
            const targetElement46 = await elements.find(e => e.innerText === `46`)
            if (targetElement46) await targetElement46.click();
        }
        if (number.includes('47')) {
            const targetElement47 = await elements.find(e => e.innerText === `47`)
            if (targetElement47) await targetElement47.click();
        }
        if (number.includes('48')) {
            const targetElement48 = await elements.find(e => e.innerText === `48`)
            if (targetElement48) await targetElement48.click();
        }
        if (number.includes('49')) {
            const targetElement49 = await elements.find(e => e.innerText === `49`)
            if (targetElement49) await targetElement49.click();
        }
        if (number.includes('50')) {
            const targetElement50 = await elements.find(e => e.innerText === `50`)
            if (targetElement50) await targetElement50.click();
        }
        if (number.includes('51')) {
            const targetElement51 = await elements.find(e => e.innerText === `51`)
            if (targetElement51) await targetElement51.click();
        }
        if (number.includes('52')) {
            const targetElement52 = await elements.find(e => e.innerText === `52`)
            if (targetElement52) await targetElement52.click();
        }
        if (number.includes('53')) {
            const targetElement53 = await elements.find(e => e.innerText === `53`)
            if (targetElement53) await targetElement53.click();
        }
        if (number.includes('54')) {
            const targetElement54 = await elements.find(e => e.innerText === `54`)
            if (targetElement54) await targetElement54.click();
        }
        if (number.includes('55')) {
            const targetElement55 = await elements.find(e => e.innerText === `55`)
            if (targetElement55) await targetElement55.click();
        }
        if (number.includes('56')) {
            const targetElement56 = await elements.find(e => e.innerText === `56`)
            if (targetElement56) await targetElement56.click();
        }
        if (number.includes('57')) {
            const targetElement57 = await elements.find(e => e.innerText === `57`)
            if (targetElement57) await targetElement57.click();
        }
        if (number.includes('58')) {
            const targetElement58 = await elements.find(e => e.innerText === `58`)
            if (targetElement58) await targetElement58.click();
        }
        if (number.includes('59')) {
            const targetElement59 = await elements.find(e => e.innerText === `59`)
            if (targetElement59) await targetElement59.click();
        }
        if (number.includes('60')) {
            const targetElement60 = await elements.find(e => e.innerText === `60`)
            if (targetElement60) await targetElement60.click();
        }
    }, number);
}