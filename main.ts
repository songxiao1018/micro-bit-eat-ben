input.onGesture(Gesture.TiltLeft, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    人物x += -1
})
input.onGesture(Gesture.LogoDown, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    人物y += -1
})
input.onGesture(Gesture.LogoUp, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    人物y += 1
})
input.onButtonPressed(Button.AB, function () {
    k = 1
})
input.onGesture(Gesture.TiltRight, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    人物x += 1
})
let 豆子y = 0
let 豆子x = 0
let 积分 = 0
let k = 0
let 人物y = 0
let 人物x = 0
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 164, 31, 34, 16, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
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
    人物x = 2
    人物y = 2
    积分 = 0
    豆子x = randint(0, 4)
    豆子y = randint(0, 4)
    while (人物x == 豆子x && 人物y == 豆子y) {
        豆子x = randint(0, 4)
        豆子y = randint(0, 4)
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
        basic.pause(100)
        led.plotBrightness(人物x, 人物y, 255)
        led.plotBrightness(豆子x, 豆子y, 100)
        if (人物x == 豆子x && 人物y == 豆子y) {
            积分 += 1
            while (人物x == 豆子x && 人物y == 豆子y) {
                豆子x = randint(0, 4)
                豆子y = randint(0, 4)
            }
        }
        if (人物x < 0 || 人物y < 0 || (人物x > 4 || 人物y > 4)) {
            break;
        }
    }
    basic.clearScreen()
    k = 0
    while (true) {
        basic.showString("" + (积分))
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
