function 创建一个豆子 () {
    豆子x = randint(0, 4)
    豆子y = randint(0, 4)
    while (人物x == 豆子x && 人物y == 豆子y) {
        豆子x = randint(0, 4)
        豆子y = randint(0, 4)
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    人物x += -1
})
function 是否暂停 () {
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
}
function 判断下一局 () {
    basic.clearScreen()
    k = 0
    while (true) {
        basic.showString("" + 积分)
        basic.pause(100)
        if (k == 1) {
            break;
        }
    }
}
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
function 游戏初始化 () {
    k = 0
    人物x = 2
    人物y = 2
    积分 = 0
    创建一个豆子()
}
function 是否吃到豆子 () {
    if (人物x == 豆子x && 人物y == 豆子y) {
        积分 += 1
        创建一个豆子()
    }
}
function 是否出界 () {
    if (人物x < 0 || 人物y < 0) {
        return 1
    }
    if (人物x > 4 || 人物y > 4) {
        return 1
    }
    return 0
}
input.onGesture(Gesture.TiltRight, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 432, 164, 42, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    人物x += 1
})
let 积分 = 0
let k = 0
let 人物y = 0
let 人物x = 0
let 豆子y = 0
let 豆子x = 0
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 164, 31, 34, 16, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
while (true) {
    basic.showString("Hello!")
    if (input.buttonIsPressed(Button.A)) {
        break;
    }
}
// 判断重新开始
basic.forever(function () {
    游戏初始化()
    while (true) {
        k = 0
        basic.pause(100)
        是否暂停()
        是否吃到豆子()
        basic.pause(100)
        led.plotBrightness(人物x, 人物y, 255)
        led.plotBrightness(豆子x, 豆子y, 100)
        if (1 == 是否出界()) {
            break;
        }
    }
    判断下一局()
})
control.inBackground(function () {
    while (true) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 164, 31, 34, 16, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
