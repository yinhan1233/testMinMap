// // 列头柜相关
// const BarGraphColors = ['#0000ff', '#00ffff', '#00ff00', '#ff0000', '#ff00ff', '#ffff00'];


/**
 * Power 列头柜类
 */
class Power extends THING.Thing {
    constructor(app) {
        super(app);
        this.racks = [];
        this.isPower = true;
        this.barGraph = null;
        this.ui = null;
        this.mark = null;
        this.number = THING.Math.randomInt(100, 300);
    }

    createMarket() {
        if (this.mark)
            return;
        var cabinet = this;
        var marker = app.create({
            type: "Marker",
            url: "https://www.thingjs.com/static/images/warning1.png",
            parent: this,
            // localPosition: [10, (Power_DEFAULT_UNITCOUNT+1) * RACK_UNIT_HEIGHT, 5.615],
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
        }
    }

    // 创建界面
    createUI(val) {
        // if (this.ui)
        //     return;
        var cabinet = this;

        // 创建widget (动态绑定数据用)
        var panel = new THING.widget.Panel({
            width: '520px',
            hasTitle: true,
            titleText: '设备详情',
            closeIcon: true,
            id: 'hejianxin',
            opacity: 0.8,
            visible: true
        });
        this.panel = panel;
        this.userData.meteValue = this.userData.meteValue + (this.userData.meteValue ? 'kwh' : '')
        this.userData.meteValue1 = this.userData.meteValue1 + (this.userData.meteValue1 ? 'kw' : '')
        // panel.addString(this.userData, 'meteName').caption('编号');
        // panel.addString(this.userData, 'brand').caption('品牌');
        // panel.addString(this.userData, 'xinghao').caption('型号');
        // panel.addString(this.userData, 'meteValue').caption('总输入有功电能');
        // panel.addString(this.userData, 'meteValue1').caption('主路总输入有功功率');

        let base = {
            "编号": this.userData.meteName || '',
            "品牌": this.userData.brand || '',
            "型号": this.userData.xinghao || '',
            "总输入有功电能": this.userData.meteValue || '',
            "主路总输入有功功率": this.userData.meteValue1 || '',
        }
        let alarm = {
            "告警大类": val.alarm.alarmType || '',
            "告警小类": val.alarm.subAlarmType || '',
            "告警设备": val.alarm.neName || '',
            "告警位置": val.alarm.locateInfo || '',
            "告警信息": val.alarm.alarmTitle || '',
            "告警时间": val.alarm.eventTime || '',
            "告警状态": val.alarm.alarmStatus === '0' ? '清除' : '活跃' || '',
            "告警通知人": val.alarm.handleName || '',
        }
        let fault = val.fault.length == 0 ? {
            "故障时间": '',
            "故障单号": '',
            "故障级别": '',
            "故障主题": '',
            "故障发生时间": '',
            "故障原因": '',
            "故障修复时间": '',
        } : {}
        val.fault.length > 0 && val.fault.forEach((i, index) => {
            fault[(index + 1) + "、" + "故障时间"] = i.faultHappenDate || '';
            fault[(index + 1) + "、" + "故障单号"] = i.faultOrderCode || '';
            fault[(index + 1) + "、" + "故障级别"] = i.faultLevelName || '';
            fault[(index + 1) + "、" + "故障主题"] = i.faultTitle || '';
            fault[(index + 1) + "、" + "故障发生时间"] = i.faultHappenDate || '';
            fault[(index + 1) + "、" + "故障原因"] = i.faultAccurateReason || '';
            fault[(index + 1) + "、" + "故障修复时间"] = i.businessRecoverTime || '';
            // base[i.meteName] = i.meteValue || ''
        })
        let change = val.change.length == 0 ? {
            "变更日期": '',
            "变更原因": '',
            "配置变化": '',
            "变更内容": '',
            "变更人": '',
            "变更结果": '',
        } : {}
        val.change.length > 0 && val.change.forEach((i, index) => {
            change[(index + 1) + "、" + "变更日期"] = i.changeDate || '';
            change[(index + 1) + "、" + "变更原因"] = i.changeReason || '';
            change[(index + 1) + "、" + "配置变化"] = i.changeConfig || '';
            change[(index + 1) + "、" + "变更内容"] = i.changeContent || '';
            change[(index + 1) + "、" + "变更人"] = i.changeName || '';
            change[(index + 1) + "、" + "变更结果"] = i.changeResult || '';
        })
        let maintain = val.maintain.length == 0 ? {
            "维保日期": '',
            "当年维保次数": '',
            "维保关联合同号": '',
            "维保责任人": '',
            "维保厂家/联系人/电话": '',
            "维保报告输出": '',
        } : {}
        val.maintain.length > 0 && val.maintain.forEach((i, index) => {
            maintain[(index + 1) + "、" + "维保日期"] = i.maintenanceDate || '';
            maintain[(index + 1) + "、" + "当年维保次数"] = i.maintenanceTimes || '';
            maintain[(index + 1) + "、" + "维保关联合同号"] = i.maintenanceContractNo || '';
            maintain[(index + 1) + "、" + "维保责任人"] = i.maintenanceResponsiblePerson || '';
            maintain[(index + 1) + "、" + "维保厂家/联系人/电话"] = i.maintenanceManufacturerInfo || '';
            maintain[(index + 1) + "、" + "维保报告输出"] = i.maintenanceContent || '';
        })
        panel.addTab({
            "设备信息": base,
            "告警信息": alarm,
            "故障信息": fault,
            "变更信息": change,
            "维护信息": maintain,
        })

        // 创建obj ui (跟随物体用)
        var ui = app.create({
            type: 'UI',
            parent: this,
            el: panel.domElement,
            offset: [0, cabinet.size[1] - 0.1, 0]
        });
        this.ui = ui;

        // .ThingJS_wrap .panel .title .close
        let dom = window.document.querySelector('.panel').querySelector('.close');
        // THING.Utils.log(app.query('#hejianxin'))
        panel.on('click', function (e) {
            THING.Utils.log(app.query('#hejianxin'))
        })
    }

    // 创建界面
    createPowerNameUI() {
        // if (this.ui)
        //     return;
        var cabinet = this;

        // 创建widget (动态绑定数据用)
        var panel = new THING.widget.Panel({
            width: '270px',
            hasTitle: false,
            titleText: '',
            closeIcon: true,
            // id: 'hejianxin',
            opacity: 0.8,
            visible: true
        });
        this.panel = panel;
        this.userData.meteValue = this.userData.meteValue + (this.userData.meteValue ? 'kwh' : '')
        this.userData.meteValue1 = this.userData.meteValue1 + (this.userData.meteValue1 ? 'kw' : '')
        // panel.addString(this.userData, 'meteName').caption('编号');
        // panel.addString(this.userData, 'brand').caption('品牌');
        // panel.addString(this.userData, 'xinghao').caption('型号');
        // panel.addString(this.userData, 'meteValue').caption('总输入有功电能');
        // panel.addString(this.userData, 'meteValue1').caption('主路总输入有功功率');

        let base = {
            "编号": this.userData.meteName || '',
        }

        panel.addString(base, '编号')
        // 创建obj ui (跟随物体用)
        var ui = app.create({
            type: 'UI',
            parent: this,
            el: panel.domElement,
            offset: [0, cabinet.size[1] - 0.1, 0]
        });
        this.ui = ui;

        // .ThingJS_wrap .panel .title .close
        let dom = window.document.querySelector('.panel').querySelector('.close');
        // THING.Utils.log(app.query('#hejianxin'))
        panel.on('click', function (e) {
            THING.Utils.log(app.query('#hejianxin'))
        })
    }

    // 显示界面
    showUI(boolValue) {
        // if (!this.ui)
        //     this.createUI();
        // this.panel.visible = boolValue;
        this.panel && (this.panel.visible = boolValue);
    }

    showPowerName(boolValue) {
        this.panel && (this.panel.visible = boolValue);
    }
   
}
THING.factory.registerClass('Power', Power);
Power.current = null;
Power.open = false;
