/**
 * 电池设备
 */
class Battery extends THING.Thing {
  constructor(app) {
    super(app);
    this.isRack = true;
    this.ui = null;
    this.panel = null;
    // this.info = gen_rack_info();
  }

  createUI() {
    // var ui = new THING.widget.Panel({
    //     titleText: this.name,
    //     closeIcon: true,
    //     dragable: true,
    //     retractable: true,
    //     hasTitle: true,
    //     width: "230px",
    // });
    // ui.zIndex = 999999;//设置ui排序
    // ui.addTab(this.info);
    // ui.position = [390, 350];
    // this.ui = ui;
    // return ui;
    var cabinet = this;
    // 创建widget (动态绑定数据用)
    var panel = new THING.widget.Panel({
      width: this.userData.type == 0 ? "330px" : "230px",
      closeIcon: false,
      opacity: 0.8,
      visible: true,
    });
    this.panel = panel;
    // if (this.userData.cabinetType == 1) {
    //   panel.addString(this.userData, "cabinetName").caption("列头柜");
    // } else {
    panel.addString(this.userData, "name").caption("名称");
    //   panel.addString(this.userData, "airconditionNumber").caption("名称");
    //   panel.addString(this.userData, "airconditionBrand").caption("品牌");
    //   panel.addString(this.userData, "airconditionModel").caption("型号");
    //   this.userData.coolingType &&
    //     panel.addString(this.userData, "coolingType").caption("制冷方式");
    // }
    // 创建obj ui (跟随物体用)
    var ui = app.create({
      type: "UI",
      parent: this,
      el: panel.domElement,
      offset: [0, cabinet.size[1], 0],
    });
    this.ui = ui;
  }
  // createUI1() {
  //     var ui = new THING.widget.Panel({
  //         titleText: '设备详情',
  //         closeIcon: true,
  //         dragable: true,
  //         retractable: true,
  //         hasTitle: true,
  //         width: "230px",
  //     });
  //     ui.zIndex = 999999;//设置ui排序
  //     ui.addTab({
  //         "基本信息": {
  //             "设备类型": this.userData.eqpTypeId,
  //             "设备品牌": this.userData.eqpProductType,
  //             // "设备型号": this.userData.eqpSequence
  //             "SN号": this.userData.eqpSequence
  //         },
  //         "扩展信息": {
  //             "设备ID": this.userData.eqpId,
  //         }
  //     });
  //     ui.position = [390, 350];
  //     this.ui = ui;
  //     return ui;
  // }

  showUI(boolValue) {
    if (this.panel) {
      this.panel.visible = boolValue;
    }
  }
}
THING.factory.registerClass("Battery", Battery);
Battery.current = null;
