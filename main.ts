control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    radio.sendNumber(2)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(10)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(1)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    radio.sendNumber(5)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    radio.sendNumber(3)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P16, PinEventType.Edge)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P14, PinEventType.Edge)
basic.forever(function () {
	
})
