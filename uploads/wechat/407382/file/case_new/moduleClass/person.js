// // 人物相关
// const BarGraphColors = ['#0000ff', '#00ffff', '#00ff00', '#ff0000', '#ff00ff', '#ffff00'];

/**
 * Person 人物类
 */
class Person extends THING.Thing {
  constructor(app) {
    super(app);
    this.racks = [];
    this.isPerson = true;
    this.barGraph = null;
    this.ui = null;
    this.mark = null;
    this.line = null;
    this.line1 = null;
    this.line2 = null;
    this.timer = null;
    this.number = THING.Math.randomInt(100, 300);
  }

  createMarket() {
    if (this.mark) return;
    var cabinet = this;
    var marker = app.create({
      type: "Marker",
      url: "https://www.thingjs.com/static/images/warning1.png",
      parent: this,
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
  createUI(parent) {
    if (parent.ui) return;
    var _this = this;
    // var cabinet = this;
    // // 创建widget (动态绑定数据用)
    // var panel = new THING.widget.Panel({
    //     hasTitle: true,
    //     titleText: '人员详情',
    //     closeIcon: true,
    //     width: '300px',
    //     opacity: 0.8,
    //     visible: true,
    //     dragable: true
    // });
    // var dataObj = {
    //     '人员照片': this.userData.picUrl
    // }
    // this.panel = panel;
    // panel.addIframe(dataObj, '人员照片')
    // this.userData.sex = this.userData.gender == 1 ? '男性' : '女性';
    // panel.addString(this.userData, 'personnelName').caption('姓名');
    // panel.addString(this.userData, 'personnelCard').caption('证件号');
    // // panel.addString(this.userData, 'sex').caption('性别');
    // // panel.addString(this.userData, 'age').caption('年龄');
    // panel.addString(this.userData, 'personnelType').caption('人员类型');
    // panel.addString(this.userData, 'jobContent').caption('工作内容');
    // panel.addString(this.userData, 'createTime').caption('更新时间');

    // // 创建obj ui (跟随物体用)
    // var ui = app.create({
    //     type: 'UI',
    //     parent: this,
    //     el: panel.domElement,
    //     offset: [0, cabinet.size[1], 0]
    // });
    // this.ui = ui;
    let template = `
            <div class="sign" id="board${this.userData.id}" style="font-size: 12px;width: 250px;text-align: center;background-color: rgba(0, 0, 0, .6);border: 1px solid #eeeeee;border-radius: 8px;color: #eee;position: absolute;top: 0;left: 0;z-index: 10;display: none;">
                 <div class="s1" style="margin: 5px 0px 5px 0px;line-height: 32px;overflow: hidden;">
                    <span class="span-l icon" style="float: left;width: 150px;height: 150px;background:url(${this.userData.picUrl}) no-repeat center;margin: 1px 1px 1px 5px;"></span>
                 </div>

                 <div class="s2" style="margin: 5px 0px 10px 0px;line-height: 18px;font-size: 10px;overflow: hidden;">
                    <span class="span-l font1" style="float: left;margin: 0px 10px 0px 10px;">姓名:</span>
                    <span class="span-l font2" style="float: left;width: 70px;">${this.userData.personnelName}</span>
                 </div>

                 <div class="s2" style="margin: 5px 0px 10px 0px;line-height: 18px;font-size: 10px;overflow: hidden;">
                    <span class="span-l font1" style="float: left;margin: 0px 10px 0px 10px;">证件号:</span>
                    <span class="span-l font2" style="float: left;width: 70px;">${this.userData.personnelCard}</span>
                 </div>

                 <div class="s2" style="margin: 5px 0px 10px 0px;line-height: 18px;font-size: 10px;overflow: hidden;">
                    <span class="span-l font1" style="float: left;margin: 0px 10px 0px 10px;">人员类型:</span>
                    <span class="span-l font2" style="float: left;width: 70px;">${this.userData.personnelType}</span>
                 </div>

                  <div class="s2" style="margin: 5px 0px 10px 0px;line-height: 18px;font-size: 10px;overflow: hidden;">
                    <span class="span-l font1" style="float: left;margin: 0px 10px 0px 10px;">工作内容:</span>
                    <span class="span-l font2" style="float: left;width: 70px;">${this.userData.jobContent}</span>
                 </div>

                 <div class="s2" style="margin: 5px 0px 10px 0px;line-height: 18px;font-size: 10px;overflow: hidden;">
                    <span class="span-l font1" style="float: left;margin: 0px 10px 0px 10px;">更新时间:</span>
                    <span class="span-l font2" style="float: left;width: 120px;">${this.userData.createTime}</span>
                 </div>
                <div class="point-top" id="pointClose" style="position: absolute;top: -7px;right: -7px;background-color: #3F6781;width: 20px;height: 20px;border: 3px solid #eee;border-radius: 50%;display: flex;
                justify-content: center;
                align-items: center;cursor: pointer;">
                  <span  style="color: #fff;
                  font-size: 18px;
                  padding-bottom: 4px;">x</span>
                </div>
            </div>`;
    $("#div3d").append($(template));
    let uIAnchorUi = app.create({
      type: "UIAnchor",
      name: "personUIAnchor",
      parent: parent,
      element: _this.create_element(),
      localPosition: [0, 5, 0],
      pivot: [0.5, 1], //  [0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
    });

    // uIAnchorUi.on("click", function () {
    //   THING.Utils.log(this.'uIAnchorUiuIAnchorUiuIAnchorUi');
    // });
    parent.ui = uIAnchorUi;

    let pointClose = document.querySelector("#pointClose");
    pointClose.addEventListener("click", function (ev) {
      if(parent.ui) parent.ui.visible = false
    });
    // let uIAnchorList = app.query('UIAnchor')
    // THING.Utils.log(uIAnchorList, 'personUIAnchorpersonUIAnchorpersonUIAnchor')
    // uIAnchorList.on('click', function () {
    //     THING.Utils.log(this, 'uIAnchorListuIAnchorListuIAnchorListuIAnchorList')
    // })
  }

  create_element(personnelName) {
    var srcElem = document.getElementById(`board${this.userData.id}`);
    var newElem = srcElem.cloneNode(true);
    newElem.style.display = "block";
    app.domElement.insertBefore(newElem, srcElem);
    return newElem;
  }

  // 显示界面
  showUI(boolValue) {
    if (document.getElementById(`board${this.userData.id}`)) {
      document.getElementById(`board${this.userData.id}`).remove();
    }

    if (!boolValue && document.getElementById(`board${this.userData.id}`)) {
      document.getElementById(`board${this.userData.id}`).remove();
    }
  }
  // 移动
  // patrol(evObject) {
  //     this.playAnimation({
  //         name: evObject.userData.personnelName,
  //         loopType: THING.LoopType.Repeat,
  //         // loopType: THING.LoopType.PingPong,
  //     });
  //     this.createLine()
  //     this.movePath({
  //         orientToPath: true,
  //         path: evObject.userData.path,
  //         time: (evObject.userData.index + 2) * 0.9 * 70 * 2000,
  //         delayTime: 0,
  //         lerpType: null,
  //         loopType: THING.LoopType.PingPong,
  //         complete: function (ev) {
  //             THING.Utils.log(evObject.userData.personnelName + "移动结束")
  //             this.stopAnimation([evObject.userData.personnelName]);
  //         },
  //     });
  //     // THING.Utils.log(this)
  // }
  patrol() {
    this.playAnimation({
      name: "go",
      loopType: THING.LoopType.Repeat,
    });
    this.createLine();
    this.movePath({
      orientToPath: true,
      path: this.userData.path,
      time: (this.userData.index + 2) * 0.9 * 70 * 1000,
      delayTime: 0,
      lerpType: null,
      loopType: THING.LoopType.PingPong,
      complete: function (ev) {
        THING.Utils.log(ev.object.name + "移动结束");
        this.stopAnimation();
      },
    });
    // THING.Utils.log(this)
  }

  // 停止动画
  stopPatrol() {
    this.stopAnimation();
    this.stopMoving();
    // this.movePath({
    //     orientToPath: true,
    //     path: [],
    //     time: (this.userData.index + 2) * 0.9 * 70 * 1000,
    //     delayTime: 0,
    //     lerpType: null,
    //     loopType: THING.LoopType.PingPong,
    //     complete: function (ev) {
    //         THING.Utils.log(ev.object.name + "移动结束")
    //         this.stopAnimation();
    //     },
    // });
  }
  // 创建人员标注dom
  createPersonElement(position, el, parent, index) {
    // 创建人员头部标注
    let textAndPictureMarkerHtml = `<div class="textAndPictureMarker${index}" style="position: absolute;">
			<div class="text" style="color: #FF0000;font-size: 12px;text-shadow: white  0px 2px, white  2px 0px, white  -2px 0px, white  0px -2px, white  -1.4px -1.4px, white  1.4px 1.4px, white  1.4px -1.4px, white  -1.4px 1.4px;margin-bottom: 5px;">
				${this.userData.personnelName}
			</div>
			<div class="picture" style="height: 20px;width: 20px;margin: auto;">
				<img src="./uploads/wechat/407382/file/case_new/images/pointer.png" style="height: 100%;width: 100%;">
			</div>
		</div>`;
    $("#div3d").append($(textAndPictureMarkerHtml));
    this.createUIAnchor(position, el, parent, index);
    // registerEvent(obj, value);
  }

  /**
   * 创建UIAnchor界面
   * @param {Object} obj - 创建界面的父物体
   * @param {String} value - 创建界面的类型
   */
  createUIAnchor(position, el, parent, index) {
    // if (app.query('.UIAnchor')) {
    //     app.query('.UIAnchor').destroyAll();
    // }
    // 创建界面的json数据
    let anchorCreateJson = {
      type: "UIAnchor",
      element: $(`.textAndPictureMarker${index}`)[0],
      // position: THING.Math.addVector(position, [0, 5, 0]),
      localPosition: [0, 2.3, 0],
      parent: parent,
      pivotPixel: [
        parseFloat($(`.textAndPictureMarker${index}`).css("width")) / 2,
        parseFloat($(`.textAndPictureMarker${index}`).css("height")),
      ],
    };
    anchorCreateJson.pivotPixel = [
      parseFloat($(`.textAndPictureMarker${index}`).css("width")) / 2,
      parseFloat($(`.textAndPictureMarker${index}`).css("height")),
    ];

    let tempTopCard = app.create(anchorCreateJson); // 创建顶牌
    tempTopCard.visible = true; // 设置初始顶牌状态
  }

  /**
   * 创建轨迹线
   */
  createLine() {
    // this.reset();
    // initThingJsTip("创建动态轨迹线");

    // var things = app.query('5')[0];
    // things.showAllRoofs(false);
    // var x = this.userData.path[0][0];
    // var y = this.userData.path[0][2];
    // var z = this.userData.path[0][1];
    let flag = true;
    let that = this;
    // 创建轨迹线
    let line = app.create({
      type: "Line",
      // color: 0x00FF00, // 轨迹线颜色
      dotSize: 6, // 轨迹点的大小
      dotColor: 0xff0000, // 轨迹点的颜色
    });

    this.userData.path.forEach((e) => {
      line.addPoint(e);
    });

    // this.timer = setInterval(function () {
    //     line.addPoint([x, y, 8]);
    //     var points = that.userData.path;
    //     if (points.length < 6) {
    //         // z--;
    //     } else if (points.length < 16) {
    //         y += 0.33;
    //         // z -= 0.5;
    //     } else if (points.length < 20) {
    //         // z--;
    //     } else {
    //         x++;
    //     }
    //     if (points.length == 30) {
    //         clearInterval(that.timer);
    //     }

    // }, 100);
  }

  /**
   * 重置
   */
  reset() {
    // initThingJsTip("点击按钮，创建轨迹线、管线、UV 曲线");
    if (this.line) {
      clearInterval(this.timer);
      var lines = app.query(".Line");
      this.lines.forEach(function (item) {
        item.showLines(false);
        item.showPoints(false);
        item = null;
      });
      this.line = null;
    }
    // if (line1) {
    //     var lines = app.query(".PolygonLine");
    //     lines.forEach(function (item) {
    //         item.destroy();
    //     })
    // }
    // app.query('.Building').style.opacity = 1;
    // if (line2) {
    //     if (app.query('CurveLine')[0].scrollUV) {
    //         app.query('CurveLine')[0].scrollUV = false;
    //     }
    // }
  }
}
THING.factory.registerClass("Person", Person);
Person.current = null;
Person.open = false;
