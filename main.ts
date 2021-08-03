radio.onReceivedNumber(function (receivedNumber) {
    led.setBrightness(receivedNumber)
})
radio.setGroup(1)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
