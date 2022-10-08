enum RadioMessage {
    message1 = 49434,
    North = 3708
}
let degrees = 0
radio.setGroup(1)
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees >= 345 && degrees <= 15) {
        basic.showArrow(ArrowNames.North)
        radio.sendMessage(RadioMessage.North)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        radio.sendMessage(RadioMessage.message1)
    }
})
