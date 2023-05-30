// 加载地图
var app = new THING.App();
// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用地图组件脚本




THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
    let defaultPath = '/Resources/CityMap/admin/1493224';
    var map = app.create({
        type: 'Map',
        // 地图场景名：新建城市8
        url: defaultPath + '/map.bundle.json',
        // url: "./cityBuilder/1/map.bundle.json",
        resourceConfig: {
            resourcePrefix: defaultPath
        },
        complete: function (event) {

            // 启动层级控制
            app.level.change(map);
            // 园区的经纬度坐标(GCJ_02坐标系)
            var sceneLonlat = [46.670973, 24.716819];
            // 将园区的经纬度坐标转为三维坐标,第二个参数代表离地高度
            var position = CMAP.Util.convertLonlatToWorld(sceneLonlat, 0.5)
            // 计算园区在地球上的旋转角度，第二个参数可以调整,对园区在地球表面进行旋转
            var angles = CMAP.Util.getAnglesFromLonlat(sceneLonlat, 65);
            // 相机飞到指定的地理位置和指定高度
            app.camera.earthFlyTo({
                lonlat: sceneLonlat,
                height: 200,
                time: 3000,
                complete: function () {
                    var campus = app.create({
                        type: 'Campus',
                        name: '工厂',
                        url: '/api/scene/8134421685014902799', // 园区地址
                        position: position, // 位置
                        angles: angles, // 旋转
                        complete: function () { // 创建成功以后执行函数

                            app.on(THING.EventType.EnterLevel, '*', function (ev) {
                                if (ev.object.type == 'Map') {
                                    map.visible = true
                                } else {
                                    map.visible = false
                                }
                            });
                            app.on('click', function (ev) {
                                if (ev.button == 2 && ev?.object?.parent.type == 'Campus') {
                                    app.level.change(map)
                                }
                            })
                            // 查询得到 name 中包含 car 字符串的物体集合
                            var cars = app.query(/Cabinet/);
                            // 遍历物体集合，逐个转换成自定义的 Car 类
                            cars.forEach(function (obj) {
                                THING.Utils.convertObjectClass(obj, 'Cabinet')
                            })
                            // app.pauseEvent(THING.EventType.EnterLevel, '.Cabinet', THING.EventTag.LevelFly);        

                            // 初始化机柜等物体
                            init_cabinets();

                        }
                    });


                }
            });


        }
    });
});

app.on(THING.EventType.Progress, function (ev) {
    let progress = ev.progress;
    console.log(progress, 'progress')
});



// 机柜相关
const CABINET_DEFAULT_UNITCOUNT = 42; // 默认机柜u数
const RACK_UNIT_HEIGHT = 0.0445; // 1u为4.3厘米
const BarGraphColors = ['#0000ff', '#00ffff', '#00ff00', '#ff0000', '#ff00ff', '#ffff00'];
// 架式设备模型
const RackModels = [
    ['https://model.3dmomoda.cn/models/3817338017ff4776a5dd05f03a3e2fd4/0/gltf', 1],
    ['https://model.3dmomoda.cn/models/37972dd2c96c4a37a3245a00bee3628b/0/gltf', 2]
];

/**
 * Cabinet 机柜类
 */
class Cabinet extends THING.Thing {
    constructor(app) {

        super(app);
        this.racks = [];
        this.isCabinet = true;
        this.barGraph = null;
        this.ui = null;
        this.number = Math.randomInt(100, 300);
    }

    createRack(url, u) {
        var y = 40 * RACK_UNIT_HEIGHT;
        var cabinet = this;
        var rack = this.app.create({
            type: 'Rack',
            name: 'rack',
            url: url,
            complete: function () {
                cabinet.add({
                    object: this,
                    basePoint: 'BasePoint',
                    localPosition: [0, y, 0],
                    localAngles: [0, 0, 0]
                });

            }
        });
        return rack;
    }

    createRacks() {
        var curUPos = 0;
        while (true) {
            var pair = RackModels[0];
            // var pair = RackModels[Math.randomInt(0, RackModels.length - 1)];
            var url = pair[0];
            var uHeight = pair[1];

            var rack = this.createRack(url, curUPos);
            this.racks.push(rack);

            if (curUPos >= 0)
                // if (curUPos >= CABINET_DEFAULT_UNITCOUNT - 4)
                break;

            curUPos += uHeight;
        }
        return rack;
    }

    destroyRacks() {
        for (var i = 0; i < this.racks.length; i++) {
            var rack = this.racks[i];
            rack.destroy();
        }
        this.racks = [];
    }

    openDoor() {
        this.playAnimation('open1');
        this.createRacks();
    }

    closeDoor() {
        this.playAnimation({
            name: 'close2',
            complete: function () {
                // this.destroyRacks();
                // if (Rack.current)
                //     Rack.current.showUI(false);
            }
        });
    }

    // 创建柱状图
    createBarGraph() {
        if (this.barGraph)
            return;

        var box = app.create({
            type: 'Box',
            width: this.size[0] * 0.9,
            height: this.size[1],
            depth: this.size[2] * 0.9,
            position: this.position,
            center: 'Bottom'
        });

        this.barGraph = box;
    }

    // 显示柱状图
    showBarGraph(bool) {
        if (bool) {
            // 确认创建了盒子
            this.createBarGraph();
            // 隐藏机柜，显示盒子
            this.visible = false;
            this.barGraph.visible = true;
            this.barGraph.style.color = Math.randomFromArray(BarGraphColors);
            //this.barGraph.style.opacity = 0.9;
            // 缩放盒子
            this.barGraph.scale = [1, 0.1, 1];
            this.barGraph.scaleTo({
                scale: [1, Math.randomFloat(0.2, 1.0), 1],
                time: 400,
                lerpType: THING.LerpType.Linear.Quadratic
            });
        } else {
            // 隐藏盒子，显示机柜
            this.visible = true;
            if (this.barGraph)
                this.barGraph.visible = false;
        }
    }

    // 创建界面
    createUI() {
        if (this.ui)
            return;
        var cabinet = this;

        // 创建widget (动态绑定数据用)
        var panel = new THING.widget.Panel({
            width: "230px",
            closeIcon: true,
            opacity: 0.8,
        });
        this.panel = panel;
        panel.addString(this, 'name').name('机柜' + this.number);

        // 创建obj ui (跟随物体用)
        var ui = app.create({
            type: 'UI',
            parent: this,
            el: panel.domElement,
            offset: [0, cabinet.size[1], 0]
        });
        this.ui = ui;
    }

    // 显示界面
    showUI(boolValue) {
        if (!this.ui)
            this.createUI();

        this.panel.visible = boolValue;
    }

    getPivotPixel(e) {
        if (null == e)
            return [0, 0];
        let t = e.bbIdx;
        return "1" == t || "2" == t || "4" == t || "5" == t || "7" == t ? [parseFloat($("#scene-card-" + e.obj.id).css("width")) / 2, parseFloat($("#scene-card-" + e.obj.id).css("height")) * ((1 - e.scaleH) / 2 + e.scaleH)] : "3" == t ? [parseFloat($("#scene-card-" + e.obj.id).css("width")) * ((1 - e.scaleW) / 2), parseFloat($("#scene-card-" + e.obj.id).css("height")) * ((1 - e.scaleH) / 2 + e.scaleH)] : "6" == t ? [44, parseFloat($("#scene-card-" + e.obj.id).css("height"))] : void 0
    }
    createWarnPanl(width, cb) {
        width = width || 220;
        // 创建widget (动态绑定数据用)
        var panel = new THING.widget.Panel({
            id: this.id,
            template: 'default',
            cornerType: 's2c5',
            width: width.toString() + "px",
            isClose: false,
            opacity: 0.8,
            media: true
        });
        this.topPanel = panel;
        cb && cb(this.topPanel)

        const placement = utils.calcTopPlacement(this, panel)
        // 创建obj ui (跟随物体用)
        var ui = app.create({
            type: 'UI',
            parent: this,
            el: panel.domElement,
            localPosition: placement.localPosition,
            pivotPixel: placement.pivotPixel
        });

        setTimeout(() => {
            console.warn('ui', ui)
        })
        this.topUi = ui;
        return panel;
    }

    toggerWarnPanl(isShow, cb) {
        if (!this.topUi) {
            if (cb) {
                this.createWarnPanl(null, cb);
            } else {
                this.createWarnPanl();
            }
        }
        this.topPanel.visible = isShow;
    }

    hideWarnPanl() {
        this.toggerWarnPanl(false)
    }
}
THING.factory.registerClass('Cabinet', Cabinet);
Cabinet.current = null;
Cabinet.open = false;
var uiAnchor = null


// 初始化机柜
function init_cabinets() {
    var cabinets = app.query('.Cabinet');
    // 双击左键开门
    // app.pauseEvent(THING.EventType.EnterLevel, '.Cabinet', THING.EventTag.LevelFly);        
    app.pauseEvent(THING.EventType.EnterLevel, '.Thing', THING.EventTag.LevelFly);        

    cabinets.on('dblclick', function (ev) {
        //  app.pauseEvent(THING.EventType.EnterLevel, '.Cabinet', THING.EventTag.LevelFly);        
        // app.pauseEvent(THING.EventType.EnterLevel, '.Thing', THING.EventTag.LevelFly);        
        // 摄影机飞行
        var pos = this.selfToWorld([0, 2.0, 2.1]);
        // var pos = this.selfToWorld([-0.6, 1.1, 2.3]);
        var targ = this.position;
        targ[1] += 0.95;
        app.camera.flyTo({
            time: 1000,
            position: pos,
            target: targ,
        });
        // 机柜开门动画
        console.log(Cabinet, 'CabinetCabinet');
        if (Cabinet.current) {
            Cabinet.current.closeDoor();
            Cabinet.current = null;
        }
        this.playAnimation('open2');
        // 设置为当前
        Cabinet.current = this;

    })
    // 右键关门
    app.on('click', function (event) {
        if (event.button == 2) {
            Cabinet.current.closeDoor();
            Cabinet.current = null;
        }
    });
    // 机柜 滑过沟边
    cabinets.on('mouseon', function (event) {
        // if (this != Cabinet.current) {
        console.log(event);
        let domElement = `<div id="test2" style="position:absolute;padding:10px;background:#fff;border-radius:"6px;><span style="background-image: linear-gradient(to right, orange, purple);
        -webkit-background-clip: text;
        color: transparent;padding-left:10px;">ID: ${event.object.name}</span></div>`
        $('#div3d').append($(domElement))
        this.style.outlineColor = 'red';
        uiAnchor = app.create({
            type: 'UIAnchor',
            element: $('#test2')[0], // 界面元素的 dom 节点
            parent: event.object, // 绑定的父物体
            localPosition: [0, 2, 0],// 在父物体坐标系下锚点放置的相对位置
            pivot: [0.5, 1] // 界面的轴心，以百分比表示界面轴心位置。[0,0] 代表界面左上；[1,1] 代表界面右下
        });
        // this.showUI(true);
        // }
    });
    cabinets.on('mouseoff', function () {
        this.style.outlineColor = null;
        uiAnchor.destroy()
        // this.showUI(false);
    });
    return
    // 右键关门
    app.on('click', function (event) {
        if (event.button == 2) {
            if (Cabinet.current) {
                Cabinet.current.closeDoor();
                Cabinet.current = null;
            } else {
                // 如果没有当前机柜则飞到一个最佳位置
                app.camera.flyTo({
                    time: 1500,
                    position: [-10.4, 13.6, 12.3],
                    target: [3.6, -4, -1.7],
                });
            }
        }

        if (app._pro) {
            app._pro.hideWarnPanl()
        }
    });
    // 点击
    cabinets.on('click', function () {
        if (app._pro) {
            app._pro.hideWarnPanl()
        }
        this.toggerWarnPanl(true, (panel) => {
            // let data = {
            //     key: 'nodata'
            // }
            // panel.add(data, 'key')
            // setTimeout(() => {
            let data = {
                ['机柜' + this.number]: this.name,
                "库存数量": Math.ceil(Math.random() * 9000) + "",
                "报关员": Math.ceil(Math.random() * 2) == 1 ? "张三" : "李四",
                "入库时间": Math.ceil(Math.random() * 2) == 1 ? "11:24" : "19:02",
                "用电量": Math.ceil(Math.random() * 100) + "",
                "单仓核算": "无"
            }
            for (var key in data) {
                panel.add(data, key)
            }
            // console.log('topui',this.topUi.localPosition, this.topUi.domElement, this.size[1])
            // }, 2000)
        })
        app._pro = this
    })

    // 机柜 滑过沟边
    cabinets.on('mouseon', function () {
        if (this != Cabinet.current) {
            this.style.outlineColor = 'red';
            this.showUI(true);
        }
    });
    cabinets.on('mouseoff', function () {
        this.style.outlineColor = null;
    }, 'color');
    cabinets.on('mouseoff', function () {
        this.showUI(false);
    }, 'ui');

    // 架式服务器事件（尚未创建，预先注册）
    app.on('mouseon', '.Rack', null, function (ev) {
        this.style.outlineColor = '#ff0000';
    });
    app.on('mouseoff', '.Rack', null, function (ev) {
        this.style.outlineColor = null;
    });
    app.on('click', '.Rack', null, function (ev) {
        if (Rack.current == ev.object)
            return;

        if (Rack.current) {
            Rack.current.showUI(false);
            Rack.current = null;
        }
        Rack.current = ev.object;
        ev.object.showUI(true);
    });
}

