namespace SpriteKind {
    export const BetterFood = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    music.baDing.play()
    info.changeScoreBy(1)
    if (info.score() >= 20) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    music.magicWand.play()
    info.changeScoreBy(3)
    if (info.score() >= 20) {
        game.over(true)
    }
})
let strawberry: Sprite = null
let cherry: Sprite = null
game.showLongText("Help the fruit bat eat at least 20 fruits. Strawberries count as 3.", DialogLayout.Center)
scene.setBackgroundColor(15)
let bat = sprites.create(img`
    f f f . . . . . . . . f f f . . 
    c b b c f . . . . . . c c f f . 
    . c b b c f . . . . . . c c f f 
    . c c c b f . . . . . . c f c f 
    . c c b b c f . c c . c c f f f 
    . c b b c b f c c 3 c c 3 c f f 
    . c b c c b f c b 3 c b 3 b f f 
    . . c c c b b c b 1 b b b 1 c . 
    . . . c c c c b b 1 b b b 1 c . 
    . . . . c c b b b b b b b b b c 
    . . . . f b b b b c 1 f f 1 b c 
    . . . c f b b b b f 1 f f 1 f f 
    . . c c f b b b b f 2 2 2 2 f f 
    . . . . f c b b b b 2 2 2 2 f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `, SpriteKind.Player)
bat.setPosition(15, 56)
controller.moveSprite(bat, 0, 100)
bat.setStayInScreen(true)
info.setScore(0)
info.startCountdown(15)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(90)) {
        cherry = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . 6 6 6 6 6 
            . . . . . . . . . 6 6 7 7 7 7 8 
            . . . . . . 8 8 8 7 7 8 8 6 8 8 
            . . e e e e c 6 6 8 8 . 8 7 8 . 
            . e 2 5 4 2 e c 8 . . . 6 7 8 . 
            e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
            e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
            e 2 e e 2 2 2 2 e e e e c 6 8 . 
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
            . c 2 e e e 2 e 2 4 2 2 2 2 c . 
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
            . . . e c c e c 2 2 2 2 2 2 2 e 
            . . . . . . . c 2 e e 2 2 e 2 c 
            . . . . . . . c e e e e e e 2 c 
            . . . . . . . . c e 2 2 2 2 c . 
            . . . . . . . . . c c c c c . . 
            `, -50, 0)
        cherry.setPosition(143, randint(10, 110))
    } else {
        strawberry = sprites.create(img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 8 6 6 . . . 6 8 . . 
            . . . e e e 8 8 6 6 . 6 7 8 . . 
            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
            e e 2 e 2 2 4 2 2 e e e c . . . 
            e e e e 2 e 2 2 e e e c . . . . 
            e e e 2 e e c e c c c . . . . . 
            . c c c c c c c . . . . . . . . 
            `, SpriteKind.Food)
        strawberry.setPosition(146, randint(10, 110))
        strawberry.setVelocity(-50, 0)
    }
})
