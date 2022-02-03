module.exports = (total) => {
    let totalField = 0

    switch (total) {
        case 10:
            totalField = 0
            break;
        case 12:
            totalField = 1
            break;
        case 14:
            totalField = 2
            break;
        case 15:
            totalField = 3
            break;
        case 16:
            totalField = 4
            break;
        case 17:
            totalField = 5
            break;
        case 18:
            totalField = 6
            break;
        case 20:
            totalField = 7
            break;
        case 25:
            totalField = 8
            break;
        case 30:
            totalField = 9
            break;
        case 35:
            totalField = 10
            break;
        case 40:
            totalField = 11
            break;
        default:
            totalField = 0
    }

    return totalField
}