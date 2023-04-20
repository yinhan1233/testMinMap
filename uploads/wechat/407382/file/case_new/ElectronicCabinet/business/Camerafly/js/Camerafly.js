
class Camerafly {
    constructor() {
        this.init();
    }
    // 初始化方法，只允许去初始化变量，不允许去调用业务逻辑代码。
    init() {
        //获取所有需要视角飞行的设备
        this.equipmentList = Common.getApp().query(/配电柜/)
        //获取指示灯
        this.light_Off = Common.getApp().query(/暗/);
        this.light_On = Common.getApp().query(/亮/);
        this.switch1List = Common.getApp().query('switch_vs1');
        this.switch2List = Common.getApp().query('switch_vs2');
        this.timer = null;
        this.move1 = null;
        this.move2 = null;
        this.move3 = null;
        this.move4 = null;
        this.opentimer1 = null;
    }
    //初始化按钮
    resetState() {
        let _this = this;
        _this.bindFlyevents();
        let resetLight = THING.widget.Button('重置', function () {
            _this.light_On.visible = false;
            _this.light_Off.visible = true;
            _this.equipmentList.pickable=true;
            for (let i = 0; i < _this.switch1List.length; i++) {
                Common.getApp().query(`#cabC_${Common.transformNum(i + 1)}redLightoff`).visible = false;
                Common.getApp().query(`#cabC_${Common.transformNum(i + 1)}redLighton`).visible = true;

            }
            _this.switch1List.forEach((obj) => {
                obj.rotateTo({
                    angles: [0, 0, 0],
                    time: 100,
                    lerpType: THING.LerpType.Quadratic.In, // 速度插值
                    complete: function () {
                    }
                })
            })

            // 摄像机飞行到某位置
            Common.getApp().camera.flyTo({
                'position': [0.648, 2.5029999999999997, -0.03200000000000003],
                'target': [0.437, 1.61, -4.799],
                'time': 2000,
                'complete': function () {
                }
            });

            clearInterval(_this.timer)
            _this.timer = null;
            $('.sign').show();
            for (let i = 0; i < _this.switch2List.length; i++) {
                Common.getApp().query(`#cabA_${Common.transformNum(i + 1)}redLightoff`).visible = false;
                Common.getApp().query(`#cabA_${Common.transformNum(i + 1)}redLighton`).visible = true;
            }
            _this.switch2List.forEach((obj) => {
                obj.rotateTo({
                    angles: [0, 0, 0],
                    time: 100,
                    lerpType: THING.LerpType.Quadratic.In, // 速度插值
                    complete: function () {
                    }
                })
            })
        })
        initThingJsTip('·鼠标左键单击配电柜模型可拉近视角对开关进行操作，点击配电柜按钮/旋钮可控制指示灯亮暗。<br /><br />·右键点击配电柜模型可恢复视角位置，点击[重置]按钮可恢复初始默认状态。<br /></br>·点击配电柜功能展示可演示控制按钮/旋钮开关操作。')
        $('.alert-warning').css('max-width', '700px')
        $('.alert-warning').css('top', '32px')

    }

    show() {
        let _this = this;


        Common.getApp().camera.flyTo({
            'position': [2.9120869362500192, 1.9686855807415449, -3.6448354270069805],
            'target': [2.9145778816649814, 1.764045334385983, -4.835418579680181],
            'time': 1000,
            'complete': function () {
                initThingJsTip("自动触发配电柜上方第一组[旋钮]的点击操作，旋钮旋转---控制指示灯亮暗");  // 设置提示
                _this.flash(Common.getApp().query('#cabA_01switch')[0])
                _this.move1 = setTimeout(function () {
                    clearInterval(_this.timer)
                    _this.timer = null;
                    Common.getApp().query('#cabA_01switch')[0].trigger("click")
                    initThingJsTip("旋钮逆时针旋转90°，控制[合闸指示灯]关闭");
                    _this.move2 = setTimeout(function () {

                        _this.flash(Common.getApp().query('#cabA_01switch')[0])
                    }, 3000)

                }, 4000)

                _this.move3 = setTimeout(function () {
                    clearInterval(_this.timer)
                    _this.timer = null;
                    initThingJsTip("旋钮恢复初始角度，控制[合闸指示灯]开启");
                    Common.getApp().query('#cabA_01switch')[0].trigger("click")
                }, 9500)
                _this.move4 = setTimeout(function () {
                    initThingJsTip('演示结束！')
                    _this.recoverButton()
                    Common.getApp().camera.flyTo({
                        'position': [0.648, 2.5029999999999997, -0.03200000000000003],
                        'target': [0.437, 1.61, -4.799],
                        'time': 2000,
                        'complete': function () {
                            _this.recoverButton()
                            initThingJsTip('·鼠标左键单击配电柜模型可拉近视角对开关进行操作，点击配电柜按钮/旋钮可控制指示灯亮暗。<br /><br />·右键点击配电柜模型可恢复视角位置，点击[重置]按钮可恢复初始默认状态。<br /></br>·点击配电柜功能展示可演示控制按钮/旋钮开关操作。')
                        }
                    });
                }, 13000)

            }
        });
    }

    reset() {
        let _this = this;
        clearInterval(_this.timer);
        clearTimeout(_this.move1);
        clearTimeout(_this.move2);
        clearTimeout(_this.move3);
        clearTimeout(_this.move4);
        clearTimeout(_this.opentimer1);
        _this.move1 = null;
        _this.move2 = null;
        _this.move3 = null;
        _this.move4 = null;
        _this.opentimer1 = null;
        _this.timer = null;
        //     红色亮灯：cabA_01redLighton
        // 红色暗灯：cabA_01redLightoff
        Common.getApp().query('#cabA_01redLighton').visible = true;
        Common.getApp().query('#cabA_01redLightoff').visible = false;
        Common.getApp().query('#cabA_01switch')[0].style.outlineColor = null;
        Common.getApp().query('#cabA_01switch')[0].rotateTo({
            angles: [0, 0, 0],
            time: 100,
            lerpType: THING.LerpType.Quadratic.In, // 速度插值
            complete: function () {
            }
        })
        for (let i = 0; i < _this.switch1List.length; i++) {
            Common.getApp().query(`#cabC_${Common.transformNum(i + 1)}redLightoff`).visible = false;
            Common.getApp().query(`#cabC_${Common.transformNum(i + 1)}redLighton`).visible = true;

        }
        _this.switch1List.forEach((obj) => {
            obj.rotateTo({
                angles: [0, 0, 0],
                time: 100,
                lerpType: THING.LerpType.Quadratic.In, // 速度插值
                complete: function () {
                }
            })
        })
        Common.getApp().camera.stopFlying();
    }
    flash(obj) {
        let _this = this;
        _this.timer = setInterval(function () {
            if (obj.style.outlineColor == null) {
                obj.style.outlineColor = "#ff7f00";
            } else {
                obj.style.outlineColor = null;
            }
        }, 500)
    }
    recoverButton() {
        $("input.widget-button").attr("disabled", false);
        $("input.widget-button").css("cursor", "pointer");
        Common.getApp().query('.Thing').pickable = true;
        Common.getApp().query(/灯/).pickable = false;
    }
    forbidButton() {
        $("input.widget-button").attr("disabled", true);
        $("input.widget-button").css("cursor", "not-allowed");
        Common.getApp().query('.Thing').pickable = false;
    }

    //物体绑定飞行事件
    bindFlyevents() {
        let _this = this;
        _this.equipmentList.forEach((obj, index) => {
            obj.on('click', function (ev) {
                let objPosition = obj.position;
                $('.sign').hide();
                if (ev.button == 0) {
                    $('.sign').hide();
                    Common.getApp().camera.flyTo({
                        'position': [objPosition[0] - 0.0387587891, objPosition[1] + 0.633700225, objPosition[2] + 2.32209701],
                        'target': [objPosition[0] - 0.0342505646, objPosition[1] + 0.263333148, objPosition[2] + 0.167326333],
                        'time': 1000,
                        'complete': function () {
                        }
                    });
                } else if (ev.button == 2) {
                    $('.sign').show();
                    Common.getApp().camera.flyTo({
                        'position': [0.648, 2.5029999999999997, -0.03200000000000003],
                        'target': [0.437, 1.61, -4.799],
                        'time': 2000,
                        'complete': function () {
                        }
                    });
                }
            },'tagfly')
        })
    }
}

