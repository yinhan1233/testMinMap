// // 通道门相关
// const BarGraphColors = ['#0000ff', '#00ffff', '#00ff00', '#ff0000', '#ff00ff', '#ffff00'];


/**
 * Door 通道门类
 */
class Door extends THING.Thing {
    constructor(app) {
        super(app);
        this.racks = [];
        this.isDoor = true;
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
            // localPosition: [10, (AIR_DEFAULT_UNITCOUNT+1) * RACK_UNIT_HEIGHT, 5.615],
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
    createUI() {
        if (this.ui)
            return;
        var cabinet = this;

        // 创建widget (动态绑定数据用)
        var panel = new THING.widget.Panel({
            width: this.userData.type == 0 ? '330px' : "230px",
            closeIcon: false,
            opacity: 0.8,
            visible: true
        });
        this.panel = panel;
        if (this.userData.cabinetType == 1) {
            panel.addString(this.userData, 'cabinetName').caption('列头柜');
        } else {
            panel.addString(this.userData, 'airconditionType').caption('类型');
            panel.addString(this.userData, 'airconditionNumber').caption('名称');
            panel.addString(this.userData, 'airconditionBrand').caption('品牌');
            panel.addString(this.userData, 'airconditionModel').caption('型号');
            this.userData.coolingType && panel.addString(this.userData, 'coolingType').caption('制冷方式')
        }


        // 创建obj ui (跟随物体用)
        var ui = app.create({
            type: 'UI',
            parent: this,
            el: panel.domElement,
            offset: [0, cabinet.size[1], 0]
        });
        this.ui = ui;
    }

    createDoorNameUI(){
        // 创建widget (动态绑定数据用)
        var cabinet = this;
        var panel = new THING.widget.Panel({
            width: '230px',
            hasTitle: false,
            titleText: '',
            closeIcon: true,
            opacity: 0.8,
            // visible: true
        });
        this.panel = panel;
        let base = {
            "名称": this.userData.coldChannelName || '',
        }
        // 创建obj ui (跟随物体用)
        panel.addString(base, '名称')
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

    showDoorName(boolValue) {
        this.panel.visible = boolValue;
    }
}
THING.factory.registerClass('Door', Door);
Door.current = null;
Door.open = false;
