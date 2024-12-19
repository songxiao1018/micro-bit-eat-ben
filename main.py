def 创建一个豆子():
    global 豆子x, 豆子y
    豆子x = randint(0, 4)
    豆子y = randint(0, 4)
    while 人物x == 豆子x and 人物y == 豆子y:
        豆子x = randint(0, 4)
        豆子y = randint(0, 5)

def on_gesture_tilt_left():
    global 人物x
    music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
            432,
            164,
            42,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.IN_BACKGROUND)
    人物x += -1
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def 是否暂停():
    global k
    if k == 1:
        k = 0
        while True:
            basic.show_icon(IconNames.SMALL_DIAMOND)
            if k == 1:
                k = 0
                break
    basic.clear_screen()
def 判断下一局():
    global k
    basic.clear_screen()
    k = 0
    while True:
        basic.show_string("" + str(积分))
        if k == 1:
            break

def on_gesture_logo_down():
    global 人物y
    music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
            432,
            164,
            42,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.IN_BACKGROUND)
    人物y += -1
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_gesture_logo_up():
    global 人物y
    music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
            432,
            164,
            42,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.IN_BACKGROUND)
    人物y += 1
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_button_pressed_ab():
    global k
    k = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def 游戏初始化():
    global k, 人物x, 人物y, 积分
    k = 0
    人物x = 2
    人物y = 2
    积分 = 0
    创建一个豆子()
def 是否吃到豆子():
    global 积分
    if 人物x == 豆子x and 人物y == 豆子y:
        积分 += 1
        创建一个豆子()
def 是否出界():
    if 人物x < 0 or 人物y < 0:
        return 1
    if 人物x > 4 or 人物y > 4:
        return 1
    return 0

def on_gesture_tilt_right():
    global 人物x
    music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
            432,
            164,
            42,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.IN_BACKGROUND)
    人物x += 1
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

积分 = 0
k = 0
人物y = 0
人物x = 0
豆子y = 0
豆子x = 0
music.play_sound_effect(music.create_sound_effect(WaveShape.NOISE,
        164,
        31,
        34,
        16,
        750,
        SoundExpressionEffect.NONE,
        InterpolationCurve.LINEAR),
    SoundExpressionPlayMode.IN_BACKGROUND)
while True:
    basic.show_string("Hello!")
    if input.button_is_pressed(Button.A):
        break
# 判断重新开始

def on_forever():
    global k
    k = 0
    basic.pause(100)
    是否暂停()
    是否吃到豆子()
    basic.pause(100)
    led.plot_brightness(人物x, 人物y, 255)
    led.plot_brightness(豆子x, 豆子y, 100)
    if 1 == 是否出界():
        判断下一局()
basic.forever(on_forever)

def on_in_background():
    while True:
        music.play_sound_effect(music.create_sound_effect(WaveShape.NOISE,
                164,
                31,
                34,
                16,
                750,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            SoundExpressionPlayMode.UNTIL_DONE)
control.in_background(on_in_background)
