input.onGesture(Gesture.TiltLeft, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    x += -1
})
input.onGesture(Gesture.LogoDown, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    y += -1
})
input.onGesture(Gesture.LogoUp, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    y += 1
})
input.onButtonPressed(Button.AB, function () {
    k = 1
})
input.onGesture(Gesture.TiltRight, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    x += 1
})
let yy = 0
let xx = 0
let k = 0
let y = 0
let x = 0
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 164, 31, 34, 16, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
let score = 0
while (true) {
    basic.showString("Hello!")
    if (input.buttonIsPressed(Button.A)) {
        break;
    }
}
/**
 * 上
 */
/**
 * 下
 */
/**
 * 生成一个和人物不同的点
 */
/**
 * 右
 */
/**
 * 判断是否需要暂停
 */
/**
 * 左
 */
/**
 * 判断是否吃到豆子
 */
/**
 * 判断人物是否出界
 */
/**
 * 判断重新开始
 */
basic.forever(function () {
    k = 0
    x = 2
    y = 2
    xx = randint(0, 4)
    yy = randint(0, 4)
    while (x == xx && y == yy) {
        xx = randint(0, 4)
        yy = randint(0, 4)
    }
    while (true) {
        k = 0
        basic.pause(100)
        if (k == 1) {
            k = 0
            while (true) {
                basic.showIcon(IconNames.SmallDiamond)
                if (k == 1) {
                    k = 0
                    break;
                }
            }
        }
        basic.clearScreen()
        led.plotBrightness(x, y, 255)
        led.plotBrightness(xx, yy, 100)
        if (x == xx && y == yy) {
            score += 1
            while (x == xx && y == yy) {
                xx = randint(0, 4)
                yy = randint(0, 4)
            }
        }
        if (x < 0 || y < 0 || (x > 4 || y > 4)) {
            break;
        }
        basic.pause(100)
    }
    k = 0
    basic.clearScreen()
    while (true) {
        basic.showString("" + (score))
        if (k == 1) {
            break;
        }
    }
})
control.inBackground(function () {
    while (true) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 164, 31, 34, 16, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
