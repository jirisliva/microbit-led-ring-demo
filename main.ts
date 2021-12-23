input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
})
input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 360)
    strip.show()
})
let strip: neopixel.Strip = null
let jas = 10
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
loops.everyInterval(200, function () {
    if (input.rotation(Rotation.Roll) < 0) {
        strip.rotate(1)
        strip.show()
    } else {
        strip.rotate(-1)
        strip.show()
    }
})
