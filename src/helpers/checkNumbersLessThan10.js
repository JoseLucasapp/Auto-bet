module.exports = (numbers) => {
    numbers.map((n, i) => {
        if (parseInt(n) < 10) {
            if (n[0] !== '0') {
                numbers[i] = `0${n}`
            }
        }
    })

    return numbers
}