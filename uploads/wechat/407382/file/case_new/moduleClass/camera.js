// // 摄像头相关
// const BarGraphColors = ['#0000ff', '#00ffff', '#00ff00', '#ff0000', '#ff00ff', '#ffff00'];

/**
 * Camera 摄像头类
 */
class Camera extends THING.Thing {
  constructor(app) {
    super(app);
    this.racks = [];
    this.isCamera = true;
    this.barGraph = null;
    this.ui = null;
    // this.mark = this.addMarket();
    this.number = THING.Math.randomInt(100, 300);
    this.uiAnchor = null;
    this.hlsObj = null;
    this.heartTimer = null;
  }
  addMarket() {
    var marker = app.create({
      type: "Marker",
      url: "/uploads/wechat/407382/file/case_new/camera_img2.png",
      parent: this,
      scale: [0.2, 0.2, 0.2],
      // localPosition: [10, (AIR_DEFAULT_UNITCOUNT+1) * RACK_UNIT_HEIGHT, 5.615],
      size: 1,
      offset: [0, 0.55, 0],
    });
    return marker;
  }
  createMarket() {
    if (this.mark) return;
    var cabinet = this;
    var marker = app.create({
      type: "Marker",
      url: "https://www.thingjs.com/static/images/warning1.png",
      parent: this,
      // localPosition: [10, (AIR_DEFAULT_UNITCOUNT+1) * RACK_UNIT_HEIGHT, 5.615],
      size: 1,
      offset: [0, 0.5, 0],
    });

    marker.on(
      "update",
      function () {
        marker.style.opacity =
          0.5 + 0.5 * Math.sin((2 * app.elapsedTime) / 600);
      },
      "每帧改变透明度"
    );

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
      hasTitle: true,
      titleText: "设备详情",
      closeIcon: true,
      width: "520px",
      opacity: 0.8,
      visible: true,
    });
    this.panel = panel;
    // panel.addString(this.userData, 'type').caption('设备类型');
    // panel.addString(this.userData, 'name').caption('设备名称');
    // panel.addString(this.userData, 'brand').caption('设备品牌');
    // panel.addString(this.userData, 'model').caption('设备型号');
    // panel.addString(this.userData, 'compartmentRoomName').caption('所属机房');
    // panel.addString(this.userData, 'belongArea').caption('归属区域');

    let base = {
      设备类型: this.userData.type || "",
      设备名称: this.userData.name || "",
      设备品牌: this.userData.brand || "",
      设备型号: this.userData.model || "",
      所属机房: this.userData.compartmentRoomName || "",
      归属区域: this.userData.belongArea || "",
    };
    let alarm = {
      告警大类: val.alarm.alarmType || "",
      告警小类: val.alarm.subAlarmType || "",
      告警设备: val.alarm.neName || "",
      告警位置: val.alarm.locateInfo || "",
      告警信息: val.alarm.alarmTitle || "",
      告警时间: val.alarm.eventTime || "",
      告警状态: val.alarm.alarmStatus === "0" ? "清除" : "活跃" || "",
      告警通知人: val.alarm.handleName || "",
    };
    let fault =
      val.fault.length == 0
        ? {
            故障时间: "",
            故障单号: "",
            故障级别: "",
            故障主题: "",
            故障发生时间: "",
            故障原因: "",
            故障修复时间: "",
          }
        : {};
    val.fault.length > 0 &&
      val.fault.forEach((i, index) => {
        fault[index + 1 + "、" + "故障时间"] = i.faultHappenDate || "";
        fault[index + 1 + "、" + "故障单号"] = i.faultOrderCode || "";
        fault[index + 1 + "、" + "故障级别"] = i.faultLevelName || "";
        fault[index + 1 + "、" + "故障主题"] = i.faultTitle || "";
        fault[index + 1 + "、" + "故障发生时间"] = i.faultHappenDate || "";
        fault[index + 1 + "、" + "故障原因"] = i.faultAccurateReason || "";
        fault[index + 1 + "、" + "故障修复时间"] = i.businessRecoverTime || "";
        // base[i.meteName] = i.meteValue || ''
      });
    let change =
      val.change.length == 0
        ? {
            变更日期: "",
            变更原因: "",
            配置变化: "",
            变更内容: "",
            变更人: "",
            变更结果: "",
          }
        : {};
    val.change.length > 0 &&
      val.change.forEach((i, index) => {
        change[index + 1 + "、" + "变更日期"] = i.changeDate || "";
        change[index + 1 + "、" + "变更原因"] = i.changeReason || "";
        change[index + 1 + "、" + "配置变化"] = i.changeConfig || "";
        change[index + 1 + "、" + "变更内容"] = i.changeContent || "";
        change[index + 1 + "、" + "变更人"] = i.changeName || "";
        change[index + 1 + "、" + "变更结果"] = i.changeResult || "";
      });
    let maintain =
      val.maintain.length == 0
        ? {
            维保日期: "",
            当年维保次数: "",
            维保关联合同号: "",
            维保责任人: "",
            "维保厂家/联系人/电话": "",
            维保报告输出: "",
          }
        : {};
    val.maintain.length > 0 &&
      val.maintain.forEach((i, index) => {
        maintain[index + 1 + "、" + "维保日期"] = i.maintenanceDate || "";
        maintain[index + 1 + "、" + "当年维保次数"] = i.maintenanceTimes || "";
        maintain[index + 1 + "、" + "维保关联合同号"] =
          i.maintenanceContractNo || "";
        maintain[index + 1 + "、" + "维保责任人"] =
          i.maintenanceResponsiblePerson || "";
        maintain[index + 1 + "、" + "维保厂家/联系人/电话"] =
          i.maintenanceManufacturerInfo || "";
        maintain[index + 1 + "、" + "维保报告输出"] =
          i.maintenanceContent || "";
      });
    panel.addTab({
      设备信息: base,
      告警信息: alarm,
      故障信息: fault,
      变更信息: change,
      维护信息: maintain,
    });

    // 创建obj ui (跟随物体用)
    var ui = app.create({
      type: "UI",
      parent: this,
      el: panel.domElement,
      offset: [0, cabinet.size[1], 0],
    });
    this.ui = ui;
  }

  // 创建界面
  createCameraNameUI(val) {
    // if (this.ui)
    //     return;
    var cabinet = this;
    // 创建widget (动态绑定数据用)
    var panel = new THING.widget.Panel({
      hasTitle: false,
      titleText: "",
      closeIcon: true,
      width: "220px",
      opacity: 0.8,
      visible: true,
    });
    this.panel = panel;
    // panel.addString(this.userData, 'type').caption('设备类型');
    // panel.addString(this.userData, 'name').caption('设备名称');
    // panel.addString(this.userData, 'brand').caption('设备品牌');
    // panel.addString(this.userData, 'model').caption('设备型号');
    // panel.addString(this.userData, 'compartmentRoomName').caption('所属机房');
    // panel.addString(this.userData, 'belongArea').caption('归属区域');
    let base = {
      设备名称: this.userData.name || "",
    };

    panel.addString(base, "设备名称");
    // 创建obj ui (跟随物体用)
    var ui = app.create({
      type: "UI",
      parent: this,
      el: panel.domElement,
      offset: [0, cabinet.size[1], 0],
    });
    this.ui = ui;
  }
  // 显示界面
  showUI(boolValue) {
    // if (!this.ui)
    //     this.createUI();
    this.panel && (this.panel.visible = boolValue);
  }
  showCameraName(boolValue) {
    this.panel && (this.panel.visible = boolValue);
  }
  showVideoFrame(data) {
    var _this = this;
    // THING.Utils.log(this)
    // data.address = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    // 判断是否已存在
    this.uiAnchor && this.uiAnchor.destroy();
    var mon = document.getElementById("monitor");
    if (mon) {
      mon.remove();
    }
    // 使用UI布局外观
    var template = `<div id="monitor" style='
                            border: 1px #787070 solid;
                            width:450px;
                            height:300px;
                            position:absolute;
                            bottom:0px;
                            margin: 0px 20px;
                            padding: 0px 0px 0px;
                            background: rgba(16, 28, 46, .3);
                            background: rgba(40, 44, 56, 1);
                            background: #242323;'> 
                            <div class="title ThingJS_Title" style="    
                                margin: 0;
                                padding: 0;
                                box-sizing: border-box;
                                height: 38px;
                                background: linear-gradient(0deg, #252935 0%, #2b2e3a 100%);
                                border-radius: 2px 2px 0px 0px;
                                position: relative;
                                border-bottom: 1px solid #0D1013;">
                                    <p class="text" style="
                                        margin: 0;
                                        padding: 0;
                                        box-sizing: border-box;
                                        font-size: 14px;
                                        font-family: 'MicrosoftYaHei';
                                        font-weight: 400;
                                        color: #dcdcdc;
                                        line-height: 38px;
                                        padding-left: 20px;">
                                        <span class="ThingJS_Name ThingJS_Up">${_this.userData.name}</span>
                                    </p>
                                    <span class="close ThingJS_Close" id="heddin" style="
                                        margin: 0;
                                        padding: 0;
                                        box-sizing: border-box;
                                        position: absolute;
                                        top: 14px;
                                        right: 14px;
                                        width: 10px;
                                        height: 10px;
                                        background: url('https://www.thingjs.com/static/r/DIY/panel/css/../images/panel/icon-close.png') no-repeat;
                                        cursor: pointer;">
                                    </span>
                            </div>
                            <video id="video" controls="controls" style="width:100%;height:262px;"></video> 
                            
                            <div style="position:absolute;top: 145px;left: 225px; display: none;"> 
                                 <i id="img" class="iconfont icon-loading" style="color: #fff;display: none;"></i>
                            </div> 
                        </div>`;

    $("#div2d").append($(template));

    var uiAnchor = app.create({
      type: "UIAnchor",
      element: document.querySelector("#monitor"), // 界面元素的 dom 节点
      parent: this, // 绑定的父物体
      localPosition: [0, 2, 0], // 在父物体坐标系下锚点放置的相对位置
      pivot: [0.5, 1], // 界面的轴心，以百分比表示界面轴心位置。[0,0] 代表界面左上；[1,1] 代表界面右下
    });
    this.uiAnchor = uiAnchor;
    $(function () {
      // 图片加载效果
      var angle = 0;
      var time = setInterval(function () {
        angle += 30;
        $("#img").css({ transform: "rotate(" + angle + "deg)" });
      }, 100);
      // 创建视频
      if (Hls.isSupported()) {
        var video = document.getElementById("video");
        video.useCORS = true;
        video.crossOrigin = "Anonymous";
        var hls = new Hls();
        _this.hlsObj = hls;
        hls.loadSource(data.url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play();
          // 隐藏图片
          clearInterval(time);
          clearInterval(Camera.current.heartTimer);
          $("#img").css({ display: "none" });

          Camera.current.heartTimer = setInterval(function () {
            $.ajax({
              type: "post",
              headers: {
                token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
              },
              // url: "https://shvip.10010sh.cn:15581/idc-content-union/alarmReceive/heartbeat?deviceId="+_this.userData.deviceId,
              //   url: RequestUrl + "/idc-ito-monitor/spcCamera/actualVideo3D",
              url:
                RequestUrl +
                "/idc-situational-awareness/spcCamera/actualVideo3D",
              data: { streamType: 0, cameraIndexCode: this.userData.deviceId },
              dataType: "json", // 返回的数据类型 json
              success: function (d) {
                THING.Utils.log("timer", d);
                // obj.showUI1(true)
              },
            });
          }, 10000);
        });
      }
      // 关闭事件
      $("#heddin").click(function () {
        var video = document.getElementById("video");
        Camera.current.hlsObj.destroy();
        Camera.current.uiAnchor.destroy();
        $("#monitor").remove();
        clearInterval(Camera.current.heartTimer);
      });
    });
  }
}
THING.factory.registerClass("Camera", Camera);
Camera.current = null;
Camera.open = false;
