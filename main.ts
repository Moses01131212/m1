//codeByMoses
radio.onReceivedValue(function (M1, value) {
    basic.showNumber(value)
})
// setGroup
radio.setGroup(2428)
//reset
radio.onReceivedNumber(function (receivedNumber: number) {
    control.reset()
})
