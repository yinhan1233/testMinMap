
class Button_control {
    constructor() {
        this.init();
    }
    // 初始化方法，只允许去初始化变量，不允许去调用业务逻辑代码。
    init() {
        //控制开关获取
        this.buttonGreen = Common.getApp().query('greenBtn');
        this.buttonRed = Common.getApp().query('redBtn');
        //灯获取
        this.light_Off = Common.getApp().query(/暗/);
        this.light_On = Common.getApp().query(/亮/);
        

    }
    //初始化指示灯状态
    resetState() {
        let _this = this;
        _this.light_On.visible = false;
        _this.light_Off.visible = true;
        _this.bindEvents();
      
    }
    //按钮绑定事件
    bindEvents() {
        let _this = this;
        _this.buttonGreen.forEach((obj, index) => {
            obj.on('click', function () {
                _this.pushBtn(obj)
            })
        })
        _this.buttonRed.forEach((obj, index) => {
            obj.on('click', function () {
                _this.pushBtn(obj)
            })
        })
    }
    //按钮push
    pushBtn(obj) {
        let _this = this;
        if (obj.name == 'redBtn') {
            let cabId = obj.id.substring(0, nameList.prefixLength);
            _this.close(Common.getApp().query('#' + cabId + 'redLighton')[0]);
            if (Common.getApp().query('#' + cabId + 'greenLighton')[0].visible) {
                _this.close(Common.getApp().query('#' + cabId + 'greenLighton')[0]);
            } else {
                _this.open(Common.getApp().query('#' + cabId + 'greenLighton')[0])
            }

        } else {
            let cabId = obj.id.substring(0, nameList.prefixLength);
            _this.close(Common.getApp().query('#' + cabId + 'greenLighton')[0]);

            if (Common.getApp().query('#' + cabId + 'redLighton')[0].visible) {
                _this.close(Common.getApp().query('#' + cabId + 'redLighton')[0]);

            } else {
                _this.open(Common.getApp().query('#' + cabId + 'redLighton')[0])
            }
        }
    }
    //开灯，传入id以'Lighton'结尾的灯对象
    open(obj) {
        let cabId = obj.id.substring(0, nameList.prefixLength);
        let btnType = obj.name == '绿灯亮' ? 'greenLight' : 'redLight'
        let another = cabId + btnType + 'off'
        Common.getApp().query('#' + another).visible = false;
        obj.visible = true;
    }
    //关灯，传入id以'Lighton'结尾的灯对象
    close(obj) {
        let cabId = obj.id.substring(0, nameList.prefixLength);
        let btnType = obj.name == '绿灯亮' ? 'greenLight' : 'redLight'
        let another = cabId + btnType + 'off'
        Common.getApp().query('#' + another).visible = true;
        obj.visible = false;
    }

}