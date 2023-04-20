/**
 * Rack 架式设备
 */
class Rack extends THING.Thing {
  constructor(app) {
    super(app);
    this.isRack = true;
    this.ui = null;
    // this.info = this.gen_rack_info();
  }

  createUI() {
    if (!this.userData.listData.length) return;
    var info = {
      基本信息: {
        设备名称: this.userData.listData[0].deviceName,
        SN号: this.userData.listData[0].sn,
        插座号: this.userData.listData[0].switchNum,

        // 线路1: this.userData.listData[0].type,
        // A路设备名称: this.userData.listData[0].deviceName,
        // A路SN号: this.userData.listData[0].sn,
        // A路插座号: this.userData.listData[0].switchNum,
        A路用电量: this.userData.listData[0].value + "(kWh)",

        // 线路2: this.userData.listData[1].type,
        // B路设备名称: this.userData.listData[1].deviceName,
        // B路SN号: this.userData.listData[1].sn,
        // B路插座号: this.userData.listData[1].switchNum,
        B路用电量: this.userData.listData[1].value + "(kWh)",
        // 一级分类: "微机",
        // 二级分类: type2[THING.Math.randomInt(0, 1)],
        // 设备类型: type3[THING.Math.randomInt(0, 2)],
        // 编号: "00" + THING.Math.randomInt(0, 9),
        // 使用人: people[THING.Math.randomInt(0, 2)],
        // 管理员: people[THING.Math.randomInt(0, 2)],
        // 上架时间:
        //   "" +
        //   THING.Math.randomInt(10, 23) +
        //   ":" +
        //   THING.Math.randomInt(10, 23),
      },
      //   扩展信息: {
      //     信息XX: Math.ceil(Math.random() * 27 + 25) + "",
      //     信息YY: Math.ceil(Math.random() * 25 + 20) + "",
      //     信息ZZ: Math.ceil(Math.random() * 27 + 25) + "",
      //     信息AA: Math.ceil(Math.random() * 25 + 20) + "",
      //     信息BB: Math.ceil(Math.random() * 27 + 25) + "",
      //     信息CC: Math.ceil(Math.random() * 25 + 20) + "",
      //     信息DD: Math.ceil(Math.random() * 25 + 20) + "",
      //   },
    };
    var ui = new THING.widget.Panel({
      titleText: this.userData.rackName,
      closeIcon: true,
      dragable: true,
      retractable: true,
      hasTitle: true,
      width: "530px",
      height: "700px",
    });
    ui.zIndex = 999999; //设置ui排序
    ui.addTab(info);
    ui.position = [1320, 310];
    this.ui = ui;
    return ui;
  }

  // 设备信息详情
  gen_rack_info() {
    var type2 = ["PC服务器", "路由器"];
    var type3 = ["IBM", "HP", "DELL"];
    var people = ["王WW", "李LL", "张ZZ"];
    //  "设备类型": this.userData.eqpTypeId,
    //             "设备品牌": this.userData.eqpProductType,
    //             // "设备型号": this.userData.eqpSequence
    //             "SN号": this.userData.eqpSequence

    return info;
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
  showPduNames(boolValue) {
    if (!this.ui) return;
    this.ui.visible = boolValue;
  }

  showUI(boolValue) {
    // if (!this.ui)
    //     this.createUI1();
    // this.ui.show(boolValue);
  }
}
THING.factory.registerClass("Rack", Rack);
Rack.current = null;
