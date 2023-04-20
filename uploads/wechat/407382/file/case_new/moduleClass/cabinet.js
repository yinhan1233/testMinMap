// // 机柜相关
// const CABINET_DEFAULT_UNITCOUNT = 42; // 默认机柜u数
// const RACK_UNIT_HEIGHT = 0.0445; // 1u为4.3厘米
// const BarGraphColors = ['#0000ff', '#00ffff', '#00ff00', '#ff0000', '#ff00ff', '#ffff00'];
// // 架式设备模型
// const RackModels = [
//     ['https://model.3dmomoda.cn/models/3817338017ff4776a5dd05f03a3e2fd4/0/gltf', 1], 
//     ['https://model.3dmomoda.cn/models/37972dd2c96c4a37a3245a00bee3628b/0/gltf', 2]
// ];

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
        this.ui1 = null;
        this.ui2 = null;
        this.mark = null;
        this.number = THING.Math.randomInt(100, 300);
        this.panel1 = { visible: false }
        this.panel2 = { visible: false }
    }

    createRack(url, u) {
        var y = u * RACK_UNIT_HEIGHT;
        var cabinet = this;
        var rack = this.app.create({
            type: 'Rack',
            name: 'rack',
            url: url,
            scale: [1, 1, 0.5],
            inheritStyle: false,
            complete: function () {
                cabinet.add({
                    object: this,
                    // basePoint: 'BasePoint',
                    localPosition: [0, y, 0],
                    localAngles: [0, 0, 0],
                });

            }
        });
        return rack;
    }

    total() {
        arr.reduce((sum, item, index, list) => {
            return (Object.prototype.toString.call(sum) == '[object Object]' ? sum.val : sum) + item.val
        })
    }
    getCabinetRacks(obj) {
        $.ajax({
            // https://shvip.10010sh.cn:28077/oss/logout
            type: "post",
            headers: {
                token: '13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1'
            },
            // url: "https://shvip.10010sh.cn:15581/idc-client/spc/getUInfoById",
            url: RequestUrl + "/idc-situational-awareness/spc/getUInfoById",
            // data: { jsonData: JSON.stringify({ rackId: this.userData.rackId }) },
            data: { "rackId": this.userData.rackId }, dataType: "json", // 返回的数据类型 json
            success: (d) => {
                if (!d.datas.list || d.datas.list.length == 0) return
                let height = Number((CABINET_DEFAULT_UNITCOUNT * RACK_UNIT_HEIGHT).toFixed(2))  // 机柜总高度
                let wlsbList = d.datas.list.filter(v => v.eqpTypeId == '自用网络设备' || v.eqpTypeId == '网络设备')
                let nonNetworkEquipments = d.datas.list.filter(v => v.eqpTypeId !== '自用网络设备')
                // d.datas.list.forEach(v => {
                //     if (v.eqpTypeId == '自用网络设备') {
                //         wlsbList.push(v)
                //     } else {
                //         nonNetworkEquipments.push(v)
                //     }
                // })
                wlsbList.length && wlsbList.forEach(ele => {
                    ele.y = Number(ele.startU) * RACK_UNIT_HEIGHT + (1 * RACK_UNIT_HEIGHT + 0.026)
                    // ele.sbHeigth = Number(ele.height) * RACK_UNIT_HEIGHT
                })
                if (nonNetworkEquipments.length == 1) {
                    nonNetworkEquipments.forEach(ele => {
                        ele.y = height - Number((ele.heigth * RACK_UNIT_HEIGHT).toFixed(2))
                    })
                } else if (nonNetworkEquipments.length > 1) {
                    nonNetworkEquipments.reduce((sum, item, index, list) => {
                        let isObj = Object.prototype.toString.call(sum) == '[object Object]';
                        if (isObj) {
                            sum.y = height - Number((sum.heigth * RACK_UNIT_HEIGHT).toFixed(2))
                        }
                        // item.y = isObj ? (sum.y ) : sum * RACK_UNIT_HEIGHT)
                        //  item.y = isObj ? (sum.heigth + item.heigth) * RACK_UNIT_HEIGHT : sum * RACK_UNIT_HEIGHT
                        item.y = isObj ? sum.y - Number((item.heigth * RACK_UNIT_HEIGHT).toFixed(2)) : sum - ((item.heigth * RACK_UNIT_HEIGHT).toFixed(2))
                        return item.y
                    })
                }

                let dataList = [...wlsbList, ...nonNetworkEquipments]
                // 沿 Z 轴移动 1m (即 向前移动 1m)
                // obj.translate([0,0,1]);
                // d.datas.list && d.datas.list.forEach(i => {
                dataList.forEach(i => {
                    var cabinet = this;
                    let rack = this.app.create({
                        type: 'Rack',
                        name: 'rack',
                        id: i.eqpId,
                        // heigth: i.height,
                        url: i.modelName ? this.modelConversionFun(i, i.modelName).url : 'https://model.3dmomoda.cn/models/37972dd2c96c4a37a3245a00bee3628b/0/gltf',
                        scale: i.modelName ? this.modelConversionFun(i, i.modelName).scaleData : [1.5, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.085), 1],
                        inheritStyle: false,
                        userData: i,
                        inheritTheme: false,
                        complete: function () {
                            this.style.color = '#ffffff'
                            if (i.alarmSign == '1') {
                                this.style.color = '#FF0000'
                            }
                            cabinet.add({
                                object: this,
                                // basePoint: 'BasePoint',
                                localPosition: [0, i.y, 0.35],
                                localAngles: [0, 0, 0],
                            });

                        }
                    });
                    this.racks.push(rack);
                })
            }
        })
    }


    // 网络设备模型
    modelConversionFun(i, modelName) {
        let modelUrl = {
            url: '',
            scaleData: []
        }
        switch (modelName) {
            case 'CISCO_WS_C3750_48TS':
                modelUrl.url = '/api/models/20150507190453/0/gltf/'
                modelUrl.scaleData = [1.4, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.04), 1]
                break;
            case 'HUAWEI_Quidway_Netengine_40_Series_A':
                modelUrl.url = '/api/models/fc121bb37d374d70bd670199b98b71ba/0/gltf/'
                modelUrl.scaleData = [1.4, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.81), 1]
                break;
            case 'HUAWEI_数据中心核心交换机CE12808S':
                modelUrl.url = '/api/models/f45e77a1210d43a4b39a3665fd496478/0/gltf/'   //ss
                modelUrl.scaleData = [1.4, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.7), 1]
                break;
            case 'CISCO_WS_C3750X_24T_S':
                modelUrl.url = '/api/models/20160715114315578364662/0/gltf/'
                modelUrl.scaleData = [1.4, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.04), 1]
                break;
            case 'HUAWEI_S7703_A':
                modelUrl.url = '/api/models/956517dbaf8d4004b95038da344c1051/0/gltf/'
                modelUrl.scaleData = [1.4, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.19), 1]
                break;
            case 'CISCO_Nexus_7010':
                modelUrl.url = '/api/models/f9693639-7097-478d-be3f-de5060355e1f/0/gltf/'
                modelUrl.scaleData = [1.4, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.93), 1]
                break;
            case '数字认证_签名验证服务器':
                modelUrl.url = '/api/models/20150129708215/0/gltf/'
                modelUrl.scaleData = [1.4, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.088), 1]
                break;
            case 'HUAWEI_USG_6000':
                modelUrl.url = '/api/models/fb40096ba5c24708a3780dfdc5deb542/0/gltf/'
                modelUrl.scaleData = [1.4, Number((i.heigth * RACK_UNIT_HEIGHT) / 0.044), 1]
                break;
            default:
                modelUrl.url = 'https://model.3dmomoda.cn/models/37972dd2c96c4a37a3245a00bee3628b/0/gltf'
                modelUrl.scaleData = [1.5, 1, 1]
                break;
        }
        return modelUrl;
    }


    createRacks() {
        var curUPos = 0;
        while (true) {
            var pair = RackModels[THING.Math.randomInt(0, RackModels.length - 1)];
            var url = pair[0];
            var uHeight = pair[1];
            var rack = this.createRack(url, curUPos);
            this.racks.push(rack);

            if (curUPos >= CABINET_DEFAULT_UNITCOUNT - 4)
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
        // this.playAnimation('open1');
        // this.playAnimation('HM_OPEN');
        this.playAnimation({
            name: ["QMZ_OPEN", "QMY_OPEN"]
        });
        // this.playAnimation();
        // this.createRacks();
        this.getCabinetRacks()
    }

    closeDoor() {
        this.playAnimation({
            // name: 'close1',
            // name: 'HM_CLOSE',
            name: 'CLOSE_ALL',
            complete: function () {
                this.destroyRacks();
                if (Rack.current)
                    Rack.current.showUI(false);
            }
        });
    }

    createMarket() {
        if (this.mark)
            // this.mark.visible = true;
            return;
        var cabinet = this;
        var marker = app.create({
            type: "Marker",
            url: "https://www.thingjs.com/static/images/warning1.png",
            parent: this,
            // localPosition: [10, (CABINET_DEFAULT_UNITCOUNT+1) * RACK_UNIT_HEIGHT, 5.615],
            size: 1,
            offset: [0, 0.5, 0]
        })

        marker.on('update', function () {
            marker.style.opacity = 0.5 + 0.5 * Math.sin(2 * app.elapsedTime / 600);
        }, '每帧改变透明度');
        this.mark = marker;

    }
    closeMarket() {
        if (this.mark) {
            this.mark.visible = false;
            // this.mark.destroyAll()
        }
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
            this.barGraph.style.color = THING.Math.randomFromArray(BarGraphColors);
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
            closeIcon: false,
            opacity: 0.8,
            visible: true
        });
        this.panel = panel;
        panel.addString(this, 'name').caption(this.id);
        // 创建obj ui (跟随物体用)
        var ui = app.create({
            type: 'UI',
            parent: this,
            el: panel.domElement,
            offset: [0, cabinet.size[1], 0]
        });
        this.ui = ui;
    }

    createEqNameUI() {
        var panel = new THING.widget.Panel({
            hasTitle: false,
            titleText: '',
            width: "320px",
            closeIcon: true,
            cornerType: 's2c5',
            opacity: 0.8,
            visible: true
        });
        this.panel1 = panel;
        let base = {
            "设备名称": this.userData.rackName || '',
            // "所属客户": this.userData.custName || '',
            // "合同电量": this.userData.contractEleQuantity || '',
            // "建设电量A": this.userData.buildEleQuantityA || '',
            // "建设电量B": this.userData.buildEleQuantityB || '',
            // "总U位数": this.userData.totalCount.toString() || '',
            // "已占U位数": this.userData.useCount.toString() || '',
            // "状态": this.userData.purpose || '',
        }
        // panel.addTab({
        //     "设备信息": base,
        // })
        panel.addString(
            base, '设备名称'
        )
        // var ui = app.create({
        //     type: 'UIAnchor',
        //     element: panel.domElement, // 界面元素的 dom 节点
        //     parent: this, // 绑定的父物体
        //     localPosition: [0, 2, 0],// 在父物体坐标系下锚点放置的相对位置
        //     pivot: [0.5, 1] // 界面的轴心，以百分比表示界面轴心位置。[0,0] 代表界面左上；[1,1] 代表界面右下
        // });
        // 创建obj ui (跟随物体用)

        var ui = app.create({
            type: 'UI',
            parent: this,
            el: panel.domElement,
            offset: [0, this.size[1], 0]
        });
        this.ui1 = ui;
    }

    // 显示界面
    showUI(boolValue) {
        if (!this.ui)
            this.createUI();

        this.panel.visible = boolValue;
    }
    // 显示界面
    showUI1(boolValue) {
        // if (this.ui1)
        this.ui1 && this.ui1.destroy();
        this.panel1.visible = boolValue;
    }

    // 悬浮显示设备名称
    showEqNameUI(boolValue) {
        // if (this.ui1)
        this.panel1.visible = boolValue;
    }
}
THING.factory.registerClass('Cabinet', Cabinet);
Cabinet.current = null;
Cabinet.open = false;
// export {
//     Cabinet
// }
