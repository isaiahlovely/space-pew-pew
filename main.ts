controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.createProjectileFromSprite(assets.image`laser`, space_ship, 0, -90)
})
let laser: Sprite = null
let alien: Sprite = null
let space_ship: Sprite = null
space_ship = sprites.create(assets.image`space ship`, SpriteKind.Player)
controller.moveSprite(space_ship)
space_ship.setStayInScreen(true)
let myEnemy = alien
forever(function () {
    pause(2000)
    for (let index = 0; index < 5; index++) {
        alien.setVelocity(0, 60)
    }
})
