
class Panel {
    constructor() {
        this.init();
    }
    // 初始化方法，只允许去初始化变量，不允许去调用业务逻辑代码。
    init() {
        //获取所有需要显示顶牌的设备
        this.equipmentList = Common.getApp().query(/配电柜/)
        this.ui = null;
    }
    //初始化顶牌信息面板
    resetState() {
        let _this=this;
           _this.equipmentList.forEach((obj, index) => {
                _this.create_html(obj);
                _this.test_create_ui(obj);

            })
    }
    // 创建信息面板
    createPanel(obj) {
        let _this = this;
        const { name } = obj
        const paneldom = _this._panelUI(obj)
        Common.getApp().domElement.appendChild(paneldom)
        if (!Common.getApp().query(`${name}_panel`).length) {
            const panel = Common.getApp().create({
                type: 'Marker',
                name: `${name}_panel`,
                keepSize: true,
                inheritScale: false,
                size: 1,
                visible: false,
                element: paneldom,
                parent: obj,
                localPosition: [0, 0.7, 0],
                style: {
                    alwaysOnTop: false,
                    renderOrder: -1,
                },
                complete: (ev) => {
                    // ev.object.pivot = [0.5, 2.0]
                    setTimeout(() => {
                        ev.object.visible = true
                    }, 300)
                },
            })
        }
    }
    //创建面板dom元素
    create_html(obj) {
        let sign =
            `<div class="sign" id="board-` + obj.id + `" style="font-size: 12px;width: 72px;text-align: center;background-color: rgba(0, 0, 0, .8);border-radius: 8px;color: #eee;position: absolute;top: -1000;left: -1000;z-index: 10;display: none;">
            <div class="s1" style="margin: 5px 0px 5px 0px;line-height: 20px;overflow: hidden;">
                 <span class="span-l font" style="float: left;margin: 0px 0px 0px 6px;">${obj.name.substring(3, obj.name.length)}</span>    
            <div>    
        </div>`
        $('#div3d').append($(sign));
    }
    // 生成一个新面板
    create_element(obj) {
        var srcElem = document.getElementById('board-' + obj.id);
        var newElem = srcElem.cloneNode(true);
        newElem.style.display = "block";
        app.domElement.insertBefore(newElem, srcElem);
        return newElem;
    }

    // 物体顶牌ui界面
    test_create_ui(obj, num) {
        let _this = this;
        _this.ui = app.create({
            type: 'UIAnchor',
            parent: obj,
            element: _this.create_element(obj),
            localPosition: [0, 1.2, 0],
            pivot: [0.5, 1.3] //  [0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
        });
    }

    // 销毁信息面板
    destroyPanel() {
          $('.sign').hide();
    }
}

