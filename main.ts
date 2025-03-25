input.onButtonPressed(Button.A, function () {
    punto.change(LedSpriteProperty.X, 1)
    horizontal += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("derecha", horizontal)
    radio.sendNumber(vertical)
})
input.onButtonPressed(Button.B, function () {
    punto.change(LedSpriteProperty.Y, 1)
    vertical += 1
})
let punto: game.LedSprite = null
let horizontal = 0
let vertical = 0
radio.setGroup(1)
vertical = 0
horizontal = 0
punto = game.createSprite(0, 0)
basic.forever(function () {
    if (horizontal > 4) {
        punto.change(LedSpriteProperty.X, -4)
        horizontal = 0
    }
    if (vertical > 4) {
        punto.change(LedSpriteProperty.Y, -4)
        vertical = 0
    }
})
