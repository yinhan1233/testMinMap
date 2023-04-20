let app = new THING.App({
  resourceLibraryUrl: "./",
  url: "./scene/2/",
  skyBox: "Night",
});

let roomId = "040002010000000011852274";
// 机柜、设备相关全局变量
const CABINET_DEFAULT_UNITCOUNT = 47; // 默认机柜u数
// const RACK_UNIT_HEIGHT = 0.0483; // 1u为4.3厘米
const RACK_UNIT_HEIGHT = 0.045; // 1u为4.3厘米
const BarGraphColors = [
  "#0000ff",
  "#00ffff",
  "#00ff00",
  "#ff0000",
  "#ff00ff",
  "#ffff00",
];
const PARAMS = getUrlParams(location);
let env = window.location.hash.split("&").at(-1).split("=")[1];
let RequestUrl =
  env == "development" ? "http://134.95.3.140:5555" : "http://10.7.38.77:5555";
let ROOM_ID = "040002050000001123073990";
let compartmentName = "";
let OFFSET = [0, 0, 0];
let COORDTYPE = 1;
let FILTER = PARAMS.filter
  ? PARAMS.filter.split(",")
  : [
      "1",
      "2",
      "3",
      "4",
      "6",
      "7",
      "8",
      "10",
      "12",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ];
let TIMER = null;
let VIEWER = 3;
let isShowPersonnelPosition = false;
let currentSearchPerson = null;
let ALARMDEVICELIST = [];
let wlGlRackIdData = [];
let khglRackIdData = [];
// 定位机柜变量
var focus = "";
var noAlarm = false;
var loadingTemplate;
var curCampus;

// 加载本地、外部资源
THING.Utils.dynamicLoad(
  [
    "/uploads/wechat/407382/file/case_new/api/httpApi.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/cabinet.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/rack.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/air.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/temAndHumi.js",
    "/uploads/wechat/407382/file/case_new/utils/hls.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/camera.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/door.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/smoke.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/led.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/person.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/roomDoor.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/power.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/ups.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/inputPower.js",
    "/uploads/wechat/407382/file/case_new/moduleClass/battery.js",
  ],
  function () {},
  true, // 选填 是否带时间戳
  false // 选填 是否按顺序下载
);
// // 加载场景后执行
// // loadingPage();  // 加载请求页面
// app.on("load", function (ev) {
//   // 切换层级到园区
//   curCampus = ev.campus;
//   // THING.Utils.log(curCampus)
//   app.camera.xAngleLimitRange = [0, 90];
//   app.level.change(curCampus);
//   app.level.options["autoChangeBackground"] = false;
//   // createButtonGrou(ev)
//   createFloorsName();
//   roomEnter();
//   floorEnter();
//   let message = {
//     funcName: "iframOnload", // 所要调用iframe页面里的函数名
//     param: {
//       name: "",
//     },
//   };
//   window.parent.postMessage(message, "*");
//   // 设置木门隐藏
//   loadingPersonPage();
//   $(".load__person_page").css("display", "none");
// });

/**
 * 说明：园区效果模板相关操作
 * 功能：效果模板添加，效果模板切换，效果模板清除，效果模板使用前后对比
 * 操作：点击按钮，查看效果
 */
let ctrl = null; // 模板控制器
let campus = null; // 园区对象
let lighting = null; // 灯光效果
let postEffect = null; // 后期设置
let skyEffect = null; // 天空盒
let background = null; // 背景
let modelData = null; // 模板数据
let modelDataUrl = ""; // 模板路径
let tempData = null; // 临时模板数据，在关闭模板后，再次开启效果时调用
let tempUrl = ""; // 临时模板路径，在关闭模板后，再次开启效果时调用
let groundVisible = true; // 特效地面是否显示
let particleVisible = true; // 特效粒子是否显示
let complate = null; // 效果模板对比类
let ctrl_name = null; // 效果模板名称
// 加载场景后执行
// loadingPage();  // 加载请求页面
// 引用效果模板组件脚本
THING.Utils.dynamicLoad(
  [
    "https://www.thingjs.com/static/plugins/thing.effect.min/1.4.0/EffectThemeControl.min.js",
  ],
  function () {
    app.on("load", function (ev) {
      // 切换层级到园区
      curCampus = ev.campus;
      // THING.Utils.log(curCampus)
      app.camera.xAngleLimitRange = [0, 90];
      app.level.change(curCampus);
      app.level.options["autoChangeBackground"] = false;
      lighting = app.lighting;
      postEffect = app.postEffect;
      skyEffect = app.skyBox;
      background = app.background;
      //初始化
      var control = new THING.EffectThemeControl();
      app.addControl(control, "效果模板控制器");
      //complate = new EffectThemeComplate();
      //获取模板控制器
      ctrl = app.getControl("效果模板控制器");

      // createButtonGrou(ev)
      createFloorsName();
      roomEnter();
      floorEnter();
      let message = {
        funcName: "iframOnload", // 所要调用iframe页面里的函数名
        param: {
          name: "",
        },
      };
      window.parent.postMessage(message, "*");
      // 设置木门隐藏
      loadingPersonPage();
      $(".load__person_page").css("display", "none");
    });
  }
);

/**
 * 普通效果模板
 */
function nomarlEffectTheme() {
  // 场景效果，ThingJS版本为1.2.7.14及以上使用此字符串
  //var themeStr = "{\"version\":\"1.5.0\",\"background\":\"#001326\",\"skybox\":\"None\",\"fog\":{\"type\":\"None\",\"color\":\"#808080\",\"near\":0.1,\"far\":100},\"postEffects\":{\"glow\":{\"strength\":0.28,\"radius\":0.51}},\"class\":{\"Facade\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":true,\"wireframe\":{\"enable\":true,\"color\":\"#217cd1\",\"glow\":true,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FacadeMain\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":true,\"wireframe\":{\"enable\":true,\"color\":\"#217cd1\",\"glow\":true,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Ground\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":false,\"wireframe\":{\"enable\":false,\"color\":\"#ffffff\",\"glow\":false,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FloorFloor\":{\"colormap\":{\"0\":\"#183f5c\",\"1\":\"#183f5c\"},\"opacity\":0.65,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FloorCeiling\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":false,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FloorRoof\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":false,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FloorManualWall\":{\"colormap\":{\"1\":\"#175E93\",\"0.61\":\"#183F5C\"},\"opacity\":0.6,\"wireframe\":{\"enable\":true,\"color\":\"#34CED5\",\"glow\":false,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Door\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0.3,\"wireframe\":{\"enable\":true,\"color\":\"#34CED5\",\"glow\":true,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Objects\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0.3,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0.78},\"glow\":true,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.63,\"roughness\":0.46},\"enable\":false,\"useColormap\":false,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Thing\":{\"enable\":true,\"useColormap\":true,\"colormap\":{\"0\":\"#175E93\",\"1\":\"#175e93\",\"0.76\":\"#063799\",\"0.45\":\"#006bce\",\"0.23\":\"#0767bf\"},\"opacity\":0.67,\"wireframe\":{\"enable\":false,\"color\":\"#217cd1\",\"glow\":false,\"opacity\":0.85},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.76,\"roughness\":0.41000000000000003},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Tree\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#040a26\",\"0.99\":\"#135e1f\",\"0.36\":\"#2fb8d6\",\"0.66\":\"#128cd1\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":1,\"glow\":true,\"wireframe\":{\"enable\":false,\"color\":\"#26e2d7\",\"glow\":false,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"}},\"resourcePrefix\":\"\",\"enviroment\":\"https://www.thingjs.com/static/images/reflect1.jpg\"}";
  //var themeStr = "{\"version\":\"1.5.0\",\"background\":\"#001326\",\"skybox\":\"None\",\"fog\":{\"type\":\"None\",\"color\":\"#808080\",\"near\":0.1,\"far\":100},\"postEffects\":{\"glow\":{\"strength\":0.28,\"radius\":0.51}},\"class\":{\"Facade\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":true,\"wireframe\":{\"enable\":true,\"color\":\"#217cd1\",\"glow\":true,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FacadeMain\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":true,\"wireframe\":{\"enable\":true,\"color\":\"#217cd1\",\"glow\":true,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Ground\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":false,\"wireframe\":{\"enable\":false,\"color\":\"#ffffff\",\"glow\":false,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FloorFloor\":{\"colormap\":{\"0\":\"#183f5c\",\"1\":\"#183f5c\"},\"opacity\":0.65,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FloorCeiling\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":false,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FloorRoof\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":false,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"FloorManualWall\":{\"colormap\":{\"1\":\"#175E93\",\"0.61\":\"#183F5C\"},\"opacity\":0.6,\"wireframe\":{\"enable\":true,\"color\":\"#34CED5\",\"glow\":false,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Door\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0.3,\"wireframe\":{\"enable\":true,\"color\":\"#34CED5\",\"glow\":true,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Objects\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0.3,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":true,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":false,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Thing\":{\"enable\":false,\"useColormap\":false,\"colormap\":{\"0\":\"#175E93\",\"1\":\"#175e93\",\"0.76\":\"#063799\",\"0.45\":\"#006bce\",\"0.23\":\"#0767bf\"},\"opacity\":0.67,\"wireframe\":{\"enable\":false,\"color\":\"#217cd1\",\"glow\":false,\"opacity\":0.85},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.76,\"roughness\":0.41000000000000003},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Tree\":{\"enable\":false,\"useColormap\":false,\"colormap\":{\"0\":\"#040a26\",\"0.99\":\"#135e1f\",\"0.36\":\"#2fb8d6\",\"0.66\":\"#128cd1\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":1,\"glow\":true,\"wireframe\":{\"enable\":false,\"color\":\"#26e2d7\",\"glow\":false,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"}},\"resourcePrefix\":\"\",\"enviroment\":\"https://www.thingjs.com/static/images/reflect1.jpg\"}";
  // ThingJS版本为1.2.7.13及之前的版本使用此字符串
  // var themeStr = "{\"version\":\"1.2.1\",\"background\":\"#001326\",\"skybox\":\"None\",\"fog\":{\"type\":\"None\",\"color\":\"#808080\",\"near\":0.1,\"far\":100},\"postEffects\":{\"glow\":{\"strength\":0.28,\"radius\":0.51}},\"class\":{\"Facade\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":true,\"wireframe\":{\"enable\":true,\"color\":\"#217cd1\",\"glow\":true,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Facade-主建筑\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":true,\"wireframe\":{\"enable\":true,\"color\":\"#217cd1\",\"glow\":true,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Ground\":{\"enable\":false,\"useColormap\":true,\"colormap\":{\"0\":\"#041026\",\"1\":\"#0e0b93\",\"0.72\":\"#1a4aa8\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.9,\"glow\":false,\"wireframe\":{\"enable\":false,\"color\":\"#ffffff\",\"glow\":false,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Floor--floor\":{\"colormap\":{\"0\":\"#183f5c\",\"1\":\"#183f5c\"},\"opacity\":0.65,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Floor--ceiling\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":false,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Floor--roof\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0,\"wireframe\":{\"enable\":false,\"color\":\"#0f8bff\",\"glow\":false,\"opacity\":0},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":false,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Floor--manualWall\":{\"colormap\":{\"1\":\"#175E93\",\"0.61\":\"#183F5C\"},\"opacity\":0.6,\"wireframe\":{\"enable\":true,\"color\":\"#34CED5\",\"glow\":false,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Door\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0.3,\"wireframe\":{\"enable\":true,\"color\":\"#34CED5\",\"glow\":true,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Floor\":{\"colormap\":{\"1\":\"#0844dd\",\"0.61\":\"#031d7a\"},\"opacity\":0.3,\"wireframe\":{\"enable\":true,\"color\":\"#0f8bff\",\"glow\":true,\"opacity\":0.78},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":true,\"metalness\":0.63,\"roughness\":0.46},\"enable\":true,\"useColormap\":true,\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Thing\":{\"enable\":true,\"useColormap\":true,\"colormap\":{\"0\":\"#175E93\",\"1\":\"#175e93\",\"0.76\":\"#063799\",\"0.45\":\"#006bce\",\"0.23\":\"#0767bf\"},\"opacity\":0.67,\"wireframe\":{\"enable\":false,\"color\":\"#217cd1\",\"glow\":false,\"opacity\":0.85},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.76,\"roughness\":0.41000000000000003},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Thing-树\":{\"enable\":true,\"useColormap\":true,\"colormap\":{\"0\":\"#040a26\",\"0.99\":\"#135e1f\",\"0.36\":\"#2fb8d6\",\"0.66\":\"#128cd1\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":1,\"glow\":true,\"wireframe\":{\"enable\":false,\"color\":\"#26e2d7\",\"glow\":false,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Region\":{\"enable\":true,\"useColormap\":true,\"colormap\":{\"0.08\":\"#0b142b\",\"0.21\":\"#114f40\",\"0.3\":\"#2555b2\",\"0.44\":\"#31a4d6\",\"0.59\":\"#0e285b\"},\"opacity\":1,\"wireframe\":{\"enable\":false,\"color\":\"#ffffff\",\"glow\":false,\"opacity\":0.99},\"glow\":false,\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"},\"Fence\":{\"enable\":true,\"useColormap\":true,\"colormap\":{\"0\":\"#064896\",\"0.68\":\"#24d8f2\",\"0.41\":\"#348aef\"},\"useScrollTex\":false,\"scrollColor\":\"#ffffff\",\"opacity\":0.8,\"glow\":false,\"wireframe\":{\"enable\":false,\"color\":\"#ffffff\",\"glow\":false,\"opacity\":0.99},\"reflection\":{\"enable\":false,\"metalness\":0.6,\"roughness\":0.2},\"scrollTex\":\"https://www.thingjs.com/static/images/scroll.jpg\"}},\"resourcePrefix\":\"\",\"enviroment\":\"https://www.thingjs.com/static/images/reflect1.jpg\"}";
  //var theme = JSON.parse(themeStr);
  //console.log(JSON.stringify(theme))
  //THING.ThemeManager.register('theme', theme);
  //app.root.applyTheme('theme');
  //app.applyThemeEnvironment('theme')
}

/**
 * 科技风效果模板
 */
function addEffectTheme() {
  // 引用效果模板组件脚本
  THING.Utils.dynamicLoad(
    [
      "https://campus.thingjs.com/builder/api-campus/scene/template/file/4681/frame.js",
    ],
    function () {
      // 效果模板A，由于底层会对数据更改，数据入参需深拷贝，但最好是由底层对入参进行深拷贝处理
      modelData = data; // 模板数据
      tempData = data; // 模板数据
      modelDataUrl =
        "https://campus.thingjs.com/builder/api-campus/scene/template/file/4681";
      tempUrl =
        "https://campus.thingjs.com/builder/api-campus/scene/template/file/4681"; // 模板包地址
      removeModel(); // 移除模板
      initEffectThemeControl(modelData, modelDataUrl); //
      ctrl_name = "第七颗星";

      /* app.on('load', function (ev) {
     app.level.change(ev.campus);
     //关闭，进到室内自动切换天空盒  
     app.level.options['autoChangeBackground'] = false;
     //初始化
     var control = new THING.EffectThemeControl();
     app.addControl(control, '效果模板控制器');
     //获取模板控制器
     var ctrl = app.getControl('效果模板控制器');
     //注册模板,data是模板数据。如果是本地效果模板包，必须填第三个参数，该参数是模板包相对于该片代码的路径
     ctrl.registerTheme('default_parkbusiness', data, 'https://campus.thingjs.com/builder/api-campus/scene/template/file/4681');
     //获取园区
     c = app.query('.Campus')[0];
     //应用效果模板
     c.applyTheme('default_parkbusiness');
     ctrl.applyEffectTheme('default_parkbusiness', c);
     ctrl.applyThemeEnvironment('default_parkbusiness', c);
  })*/
    }
  );
}
// 模板数据注册和应用
function initEffectThemeControl(modelData, modelDataUrl) {
  //complate.reset()
  //注册模板,data是模板数据。如果是本地效果模板包，必须填第三个参数，该参数是模板包相对于该片代码的路径
  ctrl.registerTheme("default_parkbusiness", modelData, modelDataUrl);
  //获取园区
  campus = app.query(".Campus")[0];
  //应用效果模板
  campus.applyTheme("default_parkbusiness");
  ctrl.applyEffectTheme("default_parkbusiness", campus);
  ctrl.applyThemeEnvironment("default_parkbusiness", campus);
}

// 全局效果配置参数
function globalEffectConfig(config, effectConfig, skyBox, background) {
  app.lighting = config; // 灯光效果
  app.postEffect = effectConfig; // 后期设置
  app.skyBox = skyBox; // 天空盒
  app.background = background; // 背景
}
// 效果模板销毁
function removeModel() {
  // complate.reset()
  // 销毁效果模板
  if (THING.ThemeManager.findStyle("default_parkbusiness")) {
    ctrl.destroyEffectTheme("default_parkbusiness", campus);
    campus.applyTheme(null);
    // 清除全局参数背景和天空盒
    app.skyBox = null;
    app.background = null;
    globalEffectConfig(lighting, postEffect, skyEffect, background);
    THING.App.current.off(
      THING.EventType.EnterLevel,
      null,
      "ThemeEnterLevelToUpdateEnv"
    );
  }
}

function loadingPage() {
  var windowWidth = $(window).width();
  loadingTemplate = ` <style>
            .load_page{
                background: #000000;
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
            }
            .triangle-loading {
                animation: pulsing-fade 3000ms ease infinite;
                color: white;
                font-family: 'Helvetica Neue', Helvetica, sans-serif;
                font-size: 30px;
                font-weight: 300;
                left: 50%;
                letter-spacing: 8px;
                margin-left: 4px;
                margin-top: 10px;
                opacity: 0;
                position: absolute;
                top: 50%;
                transform: translate3d(-50%, -50%, 0);
                text-transform: uppercase;
                z-index: 10000;
            }
            @keyframes pulsing-fade {
                0% {
                    opacity: 0;
                }

                20% {
                    opacity: 0;
                }
                40% {
                    opacity: 0.8;
                }
                60% {
                    opacity: 0;
                }
            }
        </style>
        <div class="load_page">
            <p class="triangle-loading">场景加载中...</p>
        </div>`;
  // 插入到 ThingJS 内置的 2D 界面 div 中
  $("#div2d").append($(loadingTemplate));
}

/**
 * 创建内嵌页面
 */
function createWebView() {
  // 创建平面
  var plane = app.create({
    name: "television",
    type: "Plane",
    angles: [0, 90, 0],
    position: [-7.454, 2.425, 16.965],
    width: 525 * 0.01, // 3D 中实际宽度 单位 米
    height: 195 * 0.01, // 3D 中实际高度 单位 米
  });
  // 平面旋转90度
  // plane.rotateX(-90);
  // plane.style.color = 'transparent'
  plane.style.color = "#ffffff";
  plane.style.image = "./uploads/wechat/407382/file/case_new/yykk.png";
}

// 接收iframe页面传送的数据
window.addEventListener("message", function (e) {
  // var data = e.data;
  // var funcName = data.funcName;
  // var param = data.param || {
  //   name: "",
  // };
  // window[funcName](param);
  try {
    var data = e.data;
    var funcName = data.funcName;
    var param = data.param || {
      name: "",
    };
    window[funcName](param);
  } catch (error) {
    THING.Utils.log(error);
  }
});

window.addEventListener("hashchange", function (e) {
  let hash = new URLSearchParams(window.location.hash.replace("#", "?"));
  if (hash.get("filter")) {
    FILTER = hash.get("filter").split(",");
  }
  if (app.level.current.type == "Room") {
    getDevices();
  }
});

// function getRoomId(val) {
//   let currentRoomScene = val.split("&")[1].split("=")[1];
//   switch (currentRoomScene) {
//     case "pj":
//       return "040002010000000011852305";
//     case "zp":
//       return "040002010000000011852274";
//   }
// }

function getUrlParams() {
  if (!window.location.search) return {};
  var params = window.location.href.split("?")[1].split("&");
  var obj = {};
  params.map((v) => (obj[v.split("=")[0]] = v.split("=")[1]));
  return obj;
}
// dialogClose
function dialogClose() {
  let message = {
    funcName: "dialogClose", // 所要调用iframe页面里的函数名
  };
  window.parent.postMessage(message, "*");
}
// 打印消息
function consoleMessage(data) {
  THING.Utils.log(data, "打印消息");
}
// THING.Utils.log(app.camera)
// changeViewer({type: 2})
// setTimeout(()=>{
//     changeViewer({type: 3})
//     setTimeout(()=>{
//         changeViewer({type: 2})
//     }, 1000 * 20)
// }, 1000 * 20)
// 初始化视角
function changeViewer(data) {
  VIEWER = data.type;
  if (VIEWER == 2) {
    // app.level.options['autoChangeBackground'] = false;
    app.background = "https://www.thingjs.com/static/skyboxes/Dark/posx.jpg";
    app.camera.viewMode = THING.CameraView.TopView;
    return;
    if (app.level.current.type == "Campus") {
    }
    app.on(
      THING.EventType.EnterLevel,
      function (ev) {
        var object = ev.object;
        app.camera.flyTo({
          object: object,
          xAngle: 90, //物体坐标系下沿x轴旋转角度
          yAngle: 0, //物体坐标系下沿y轴旋转角度
          // radiusFactor: 2, //物体包围盒半径的倍数
          time: 1500,
          // lerpType: THING.LerpType.Quartic.In,
          complete: function () {},
        });
      },
      "customLevelFly"
    );
    //  停止进入物体层级的默认飞行行为
    app.pauseEvent(THING.EventType.EnterLevel, THING.EventTag.LevelFly);
  } else {
    // 设置为 3D 视图
    app.camera.viewMode = THING.CameraView.Normal;
    // app.level.change(app.level.current)
    return;
    // app.resumeEvent(THING.EventType.EnterLevel, THING.EventTag.LevelFly)

    //  修改进入层级飞行响应
    // app.camera.flyTo(app.level.current)
    app.level.change(app.level.current);
    return;
    app.on(
      THING.EventType.EnterLevel,
      function (ev) {
        var object = ev.object;

        app.camera.flyTo({
          object: object,
          xAngle: 45, //物体坐标系下沿x轴旋转角度
          yAngle: -45, //物体坐标系下沿y轴旋转角度
          // radiusFactor: 2, //物体包围盒半径的倍数
          time: 1500,
          // lerpType: THING.LerpType.Quartic.In,
          complete: function () {},
        });
      },
      "customLevelFly"
    );

    // //  停止进入物体层级的默认飞行行为
    app.pauseEvent(THING.EventType.EnterLevel, THING.EventTag.LevelFly);
  }
}

// 根据filter获取设备初始显示隐藏
function getStatusByFilter(type) {
  // return FILTER ? (FILTER.includes(type) ? true : false) : true
  return FILTER.includes(type.toString());
}

// 按名称查询设备
function queryDevice(data) {
  var obj = app.query(data.name)[0];
  app.level.change(obj);
}

// 按名称跳转楼层
function changeFloor(data) {
  compartmentName = data.compartmentName; // 清空具体房间 改参数用来区分是否是公共区域照明设备
  app.camera.viewMode = THING.CameraView.Normal;
  var list = app.query(".Floor");
  app.level.change(list.filter((i) => i.name == data.name)[0]);
}

// 按名称跳转房间
function changeRoom(data) {
  compartmentName = "";
  // app.camera.viewMode = THING.CameraView.Normal;
  ROOM_ID = data.compartmentRoomId || "040002050000001123073990";
  OFFSET = data.offset || [0, 0, 0];
  COORDTYPE = data.coordType || 1;
  // var list = app.query('.Room');
  var room = app
    .query(".Room")
    .filter((i) => i.id == data.compartmentRoomId)[0];
  // app.level.change(list.filter(i=>i.name == data.name)[0]['children'].filter(i=>i.id == data.compartmentRoomId)[0]);
  app.level.change(room, {
    complete: function () {
      // setTimeout(()=>{
      // showDeviceByType({
      //     name: [1,2,3,7,11]
      // })
      // },1000)
    },
  });
}

// 默认视角
function normalView() {
  app.camera.viewMode = THING.CameraView.Normal;
  app.level.change(app.query(".Campus")[0]);
  // app.camera.flyTo({
  //     'position': [0.35931884248802826, 36.24311572231852, 164.99156134948643],
  //     'target': [0,0,0],
  //     'time': 1000,
  //     'complete': function() {
  //     }
  // });
  focus = "";
}

//主题切换
function themeView() {
  addEffectTheme();
}
//removeModel
function removeThemeView() {
  removeModel();
}

// 首页默认视角
function homeNormalView() {
  app.level.change(app.query(".Campus")[0], {
    complete: function () {
      app.camera.flyTo({
        // 'position': [-0.5374025549590669, 9.777972996271735, 61.818128892488616],
        // 'target': [0,0,0],
        position: [47.973939036706284, 50.995457350733254, 111.70107272601545],
        target: [50.97660166655983, 1.8885761000278103, -25.5028344762218],
        time: 2000,
        complete: function () {
          // rotateAround('index');
        },
      });
    },
  });

  focus = "";
}

// 放大视角
function bigView() {
  // app.level.change(app.query('.Campus')[0])
  app.camera.flyTo({
    position: [-0.5374025549590669, 9.777972996271735, 61.818128892488616],
    target: [0, 0, 0],
    time: 1000,
    complete: function () {},
  });
}

// 重置
function resetSearchResult() {
  app.query(`#${focus}`)[0].style.color = "#59f2ff";
  app.query(`#${focus}`)[0].style.outlineColor = null;
  app.query(`#${focus}`)[0].type == "Cabinet"
    ? (app.query(`#${focus}`)[0].style.color = "rgb(47,47,47)")
    : (app.query(`#${focus}`)[0].style.color = "");
  app.query(`#${focus}`)[0].showUI(false);
  app.query(`#${focus}`)[0].type == "Cabinet" &&
    app.query(`#${focus}`)[0].showUI1(false);
  focus = "";
  noAlarm = false;
}

function rotateAround(param) {
  if (app.level.current.type != "Campus")
    app.level.change(app.query(".Campus")[0]);
  let position =
    window.location.search.includes("path=index") || param == "index"
      ? [47.973939036706284, 50.995457350733254, 111.70107272601545]
      : [42.778, 113.61899999999999, 162.5330000000001];
  let target =
    window.location.search.includes("path=index") || param == "index"
      ? [50.97660166655983, 1.8885761000278103, -25.5028344762218]
      : [41.647, 8.634, -9.605];
  app.camera.flyTo({
    position: position,
    target: target,
    time: 1000,
    complete: function () {
      app.camera.rotateAround({
        target: target,
        time: 180 * 1000, // 环绕飞行的时间
        yRotateAngle: 360, // 环绕y轴飞行的旋转角度
        loopType: THING.LoopType.Repeat, // 设置循环类型 重复循环
      });
    },
  });
}

function flash(obj) {
  obj.on(
    "update",
    function () {
      obj.style.opacity = 0.5 + 0.5 * Math.sin((2 * app.elapsedTime) / 400);
    },
    "每帧改变透明度"
  );
  setTimeout(() => {
    obj.off("update", null, "每帧改变透明度"); // 卸载事件
    obj.style.opacity = 1;
  }, 2400);
}

function alertPosition(data) {
  if (!app.level.current.type) return;
  ALARMDEVICELIST = data.alarmDeviceList || []; // 多个告警
  ROOM_ID = data.compartmentRoomId;
  if (
    (!focus && app.level.current.type !== "Room") ||
    (!focus && app.level.current.id != ROOM_ID)
  ) {
    focus = data.name;
    // var room = app.query('地板001')[0]
    var room = app.query(".Room").filter((i) => i.id == ROOM_ID)[0];
    app.level.change(room, {
      complete: function () {
        focus = data.name;
      },
    });
    // app.query(`#${data.name}`)[0].trigger('mouseon');
  } else if (!focus && app.level.current.type == "Room") {
    focus = data.name;
    app.query(`#${focus}`)[0].style.color = "#59f2ff";
    app.query(`#${focus}`)[0].type == "Cabinet"
      ? (app.query(`#${focus}`)[0].style.color = "rgb(47,47,47)")
      : (app.query(`#${focus}`)[0].style.color = "");
    app.query(`#${focus}`)[0].closeMarket();
    app.query(`#${focus}`)[0].showUI(false);
    app.query(`#${focus}`)[0].type == "Cabinet" &&
      app.query(`#${focus}`)[0].showUI1(false);
    lookAtDevice(app.query(`#${data.name}`)[0]);
    if (!app.query(`#${data.name}`)[0]) return;
    app.query(`#${data.name}`)[0].style.color = "red";
    app.query(`#${data.name}`)[0].createMarket();
    mark_info();
    app.query(`#${data.name}`)[0].trigger("mouseon");
  } else if (focus && focus != data.name) {
    if (!app.query(`#${focus}`)[0] && !app.query(`#${data.name}`)[0]) {
      focus = data.name;
      return;
    }
    if (app.query(`#${focus}`)[0]) {
      app.query(`#${focus}`)[0].style.color = "#59f2ff";
      app.query(`#${focus}`)[0].style.outlineColor = null;
      app.query(`#${focus}`)[0].type == "Cabinet"
        ? (app.query(`#${focus}`)[0].style.color = "rgb(47,47,47)")
        : (app.query(`#${focus}`)[0].style.color = "");
      app.query(`#${focus}`)[0].mark &&
        (app.query(`#${focus}`)[0].mark.visible = false);
      app.query(`#${focus}`)[0].showUI(false);
      app.query(`#${focus}`)[0].type == "Cabinet" &&
        app.query(`#${focus}`)[0].showUI1(false);
      focus = data.name;
    }
    lookAtDevice(app.query(`#${data.name}`)[0]);
    if (!app.query(`#${data.name}`)[0]) return;
    app.query(`#${data.name}`)[0].style.color = "red";
    app.query(`#${data.name}`)[0].mark &&
      (app.query(`#${data.name}`)[0].mark.visible = true);
    app.query(`#${data.name}`)[0].trigger("mouseon");
    focus = data.name;
  } else if (focus && focus == data.name) {
  }
}

function devicePosition(data) {
  noAlarm = data.noAlarm;
  if (
    (!focus && app.level.current.type !== "Room") ||
    (data.name && ROOM_ID != data.computerRoomId)
  ) {
    focus = data.name;
    ROOM_ID = data.computerRoomId;
    // var room = app.query('地板001')[0]
    var room = app.query(".Room").filter((i) => i.id == data.computerRoomId)[0];
    app.level.change(room, {
      complete: function () {
        focus = data.name;
      },
    });
  } else if (!focus && app.level.current.type == "Room") {
    focus = data.name;
    ROOM_ID = data.computerRoomId;
    // app.query(`#${focus}`)[0].style.color = '#59f2ff';
    // app.query(`#${focus}`)[0].type == 'Cabinet' ? (app.query(`#${focus}`)[0].style.color = 'rgb(47,47,47)') : app.query(`#${focus}`)[0].style.color = '';
    // app.query(`#${focus}`)[0].closeMarket();
    app.query(`#${focus}`)[0].showUI(false);
    app.query(`#${focus}`)[0].style.outlineColor = null;
    app.query(`#${focus}`)[0].type == "Cabinet" &&
      app.query(`#${focus}`)[0].showUI1(false);
    lookAtDevice(app.query(`#${data.name}`)[0]);
    if (!app.query(`#${data.name}`)[0]) return;
    // app.query(`#${data.name}`)[0].style.color = 'red';
    // app.query(`#${data.name}`)[0].createMarket();
    // mark_info();
    app.query(`#${data.name}`)[0].trigger("mouseon");
  } else if (focus && focus != data.name && ROOM_ID == data.computerRoomId) {
    if (!app.query(`#${focus}`)[0] && !app.query(`#${data.name}`)[0]) {
      focus = data.name;
      ROOM_ID = data.computerRoomId;
      return;
    }
    if (app.query(`#${focus}`)[0]) {
      // app.query(`#${focus}`)[0].style.color = '#59f2ff';
      // app.query(`#${focus}`)[0].type == 'Cabinet' ? (app.query(`#${focus}`)[0].style.color = 'rgb(47,47,47)') : app.query(`#${focus}`)[0].style.color = '';
      // app.query(`#${focus}`)[0].mark.visible = false;
      app.query(`#${focus}`)[0].showUI(false);
      app.query(`#${focus}`)[0].style.outlineColor = null;
      app.query(`#${focus}`)[0].type == "Cabinet" &&
        app.query(`#${focus}`)[0].showUI1(false);
      focus = data.name;
      ROOM_ID = data.computerRoomId;
    }
    lookAtDevice(app.query(`#${data.name}`)[0]);
    if (!app.query(`#${data.name}`)[0]) return;
    // app.query(`#${data.name}`)[0].style.color = 'red';
    // app.query(`#${data.name}`)[0].mark.visible = true;
    app.query(`#${data.name}`)[0].trigger("mouseon");
    focus = data.name;
    ROOM_ID = data.computerRoomId;
  } else if (focus && focus == data.name) {
  }
}

// 看向某一设备
function lookAtDevice(device) {
  if (device == undefined || device.position.includes(NaN)) return;
  if (window.location.search.includes("path=index")) {
    device &&
      app.camera.flyTo({
        // 'position': [46.34259748080022, 40.056818511668446, 110.09074928167684],
        // 'position': [47.973939036706284, 50.995457350733254, 111.70107272601545],
        // 'target': [50.97660166655983, 1.8885761000278103, -25.5028344762218],
        // position: device.selfToWorld([-8, 10, 4]),
        target: device.position,
        time: 1000,
        complete: function () {
          flash(device);
        },
      });
    return;
  }
  device &&
    app.camera.flyTo({
      // 'position': [-44.64419286980599, 30.959580289846734, 34.87946247320635],
      // 'position': [0, 30.959580289846734, 0],
      position: device.selfToWorld([-8, 26, 7]),
      target: device.position,
      radiusFactor: 2,
      time: 1000,
      complete: function () {
        if (device.id == focus) {
          // device.style.outlineColor = "#ff0000";
        }
        flash(device);
      },
    });
}

// 定位公共区域的设备
function lookPublicArea(val) {
  compartmentName = "公共区域";
  // var floorList = ["B1F", "1F", "2F", "3F", "4F", "5F"];
  if (app.level.current.type == "Floor" && app.level.current.id == val.floor) {
    return;
  }
  app.camera.viewMode = THING.CameraView.Normal;
  var floorList = app.query(".Floor");
  var floor = floorList.objects.find((ele) => ele.name == val.floor);
  app.level.change(floor);
}

// 根据类型显示设备
function showDeviceByType(data) {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  if (app.level.current.type == "Room" || app.level.current.type == "Floor") {
    // setTimeout(()=>{
    // if (data.name.includes(13) || (data.name.includes(14))) {
    if (data.name.includes(13)) {
      // 网络设备和客户设备显示角标
      let curGjData = data.name.includes(13) ? wlGlRackIdData : khglRackIdData;
      var cabinets = app.query(".Cabinet");
      log("Jinlia l hahah", curGjData);
      cabinets.forEach((el) => {
        el.style.outlineColor = null;
        if (curGjData.includes(el.id)) {
          el.showUI && el.showUI(false);
          el.style.outlineColor = "#3498db";
          el.style.skipOutline = false;
        }
      });
    } else {
      var cabinets = app.query(".Cabinet");
      cabinets.forEach((el) => {
        el.showUI && el.showUI(false);
        el.style.outlineColor = null;
      });

      var roomDoors = app.query(".RoomDoor");
      if (data.name.includes(11)) {
        roomDoors.forEach((e) => {
          if (e.userData.active == "1") {
            e.style.outlineColor = "red";
          } else {
            e.style.outlineColor = "#00FF00";
          }
        });
      } else {
        roomDoors.forEach((e) => {
          e.style.outlineColor = null;
        });
      }

      // 判断人员是否显隐
      var personList = app.query(".Person");
      personList.forEach((v) => {
        v.visible = data.name.includes(10);
      });

      // var tahUIs = app.query('.TahUI')
      arr.forEach((i) => {
        app.query(`["userData/deviceType"=${i}]`).forEach((j) => {
          if (data.name.length == 0) {
            j.visible = false;
            j.showUI && j.showUI(false);
            return;
          }
          if (data.name.includes(i)) {
            j.visible = true;
          } else {
            j.visible = false;
            j.showUI && j.showUI(false);
          }

          // 温度显示弹窗特别判断
          if (j.ui1 && j.type == "Tah") {
            if (data.name.includes(i)) {
              j.visible = true;
              j.showPermanentUI(true);
            } else {
              j.visible = false;
              j.showPermanentUI(false);
            }
          }
        });
      });
      data.name.length !== 0 &&
        data.current &&
        flash(app.query(`["userData/deviceType"=${data.current}]`));
      return;
    }
  }

  // if (app.level.current.type == 'Floor') {
  //     var roomDoors = app.query('.RoomDoor')
  //     if (data.name.includes(11)) {
  //         roomDoors.forEach(e => {
  //             if (e.userData.active == '1') {
  //                 e.style.outlineColor = 'red';
  //             } else {
  //                 e.style.outlineColor = '#00FF00';
  //             }
  //         })
  //     } else {
  //         roomDoors.forEach(e => {
  //             e.style.outlineColor = null
  //         })
  //     }
  // }
  // return
  // arr.forEach(i => {
  //     app.query(`["userData/deviceType"=${i}]`).forEach(j => {
  //         if (data.name.length == 0) {

  //             j.visible = false
  //             j.showUI && j.showUI(false)
  //             return
  //         }
  //         if (data.name.includes(i)) {
  //             j.visible = true
  //         } else {
  //             j.visible = false
  //             j.showUI && j.showUI(false)
  //         }
  //     })
  // })
  data.name.length !== 0 &&
    flash(app.query(`["userData/deviceType"=${data.current}]`));
}

// 转换坐标位置
function transCoordinate(coords, type = COORDTYPE) {
  // return COORDTYPE == 1 ?  THING.Math.addVector(coords,OFFSET) :  THING.Math.addVector(THING.Math.swapArray(THING.Math.scaleVector(coords,-1),0,2),OFFSET)
  return THING.Math.addVector(coords, OFFSET);
  return;
  if (COORDTYPE == 1) {
    return THING.Math.addVector(coords, OFFSET);
  } else {
    coords[1] = -coords[1];
    return THING.Math.addVector(
      THING.Math.swapArray(THING.Math.scaleVector(coords, -1), 0, 2),
      OFFSET
    );
    // return THING.Math.addVector(coords,OFFSET)
  }
}

function transAngle() {
  return COORDTYPE == 1 ? [0, -90, 0] : [0, 0, 0];
}

// 创建楼层名
function createFloorsName() {
  var floors = app.query(".Floor");
  floors.forEach((i, index) => {
    if (i.name.includes("F")) {
      var textRegion03 = app.create({
        type: "TextRegion",
        parent: i,
        position: [
          i.center[0] + i.size[0] / 2 + 2.5,
          i.center[1],
          i.center[2] + i.size[2] / 2,
        ],
        text: i.name,
        style: {
          // fontColor: "#ff0000", // 文本颜色 支持16进制颜色 和 rgb颜色
          fontColor: "#487eb0", // 文本颜色 支持16进制颜色 和 rgb颜色
          fontSize: 35, // 文本字号大小
        },
      });
      textRegion03.translate([0, 0.3, 0]);
    }
  });
}

// 创建房间号
function createRoomNumber(floor) {
  if (app.query("#myMarker02").length > 0) return;
  floor.rooms.forEach((i) => {
    var marker02 = app.create({
      type: "Marker",
      id: "myMarker02",
      name: "roomNumber",
      parent: i,
      canvas: createTextCanvas(i.userData.roomNumber),
      localPosition: [0, 0, 0], // 父物体坐标系下的相对位置
      size: 3.5, // 图标长宽比例大小
    });
    marker02.pickable = false;
  });
}

/**
 * 创建canvas内容
 */
function createTextCanvas(text, canvas) {
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.width = 300;
    // canvas.height = 64;
    canvas.height = 200;
  }
  const ctx = canvas.getContext("2d");
  ctx.stroke();
  drawText(text, 90, 0, 120, 30, 1.2, ctx);
  return canvas;
}

/**
 * text         文本
 * x,y          轴
 * width        行宽
 * fontSize     字体大小
 * rouHeight    行高，如果字体16px，1.5倍行距应该是24px
 * ctx          画板内容对象
 */
function drawText(text, x, y, width, fs, rowHeight, ctx) {
  // 1 将字符串转换成数组
  let test = text.split("");
  let temp = "";
  let row = [];
  // // 1.1 设置样式
  ctx.font = `${fs}px 微软雅黑`;
  ctx.fillStyle = "#085fb9";
  // ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  // 1.2 计算文字宽度，若文字宽度大于设定的宽度，则push到数组下一个元素，否则将字符串++
  for (let i = 0; i < test.length; i++) {
    if (ctx.measureText(temp).width > width) {
      row.push(temp);
      temp = "";
    }
    temp += test[i];
  }
  // 1.3 循环结束将temp最后一段字符push
  row.push(temp);
  // 1.4 遍历数组,输出文字
  for (let j = 0; j < row.length; j++) {
    ctx.fillText(row[j], x, y + (j + 1) * fs * rowHeight);
  }
}

// 标注信息
function mark_info() {
  var marker01 = app.query(".Marker")[0];
  // 判断自定义popMarker是否存在，存在即显示，不存在即创建；
  if ($("#popMarkerTo" + marker01.id).length > 0) {
    $("#popMarkerTo" + marker01.id).css("display", "block");
  } else {
    createElement(marker01, "popMarker");
  }

  marker01.getAttribute("popMarker").visible = false;
  marker01.on("click", function () {
    // 点击图片标注，popMarker显隐
    var popMarker = this.getAttribute("popMarker");
    if (popMarker) {
      popMarker.visible = !popMarker.visible;
    }
  });

  // 关闭自定义popMarker标注
  $("#popMarkerTo" + marker01.id + " .myPopClose").on("click", function () {
    marker01.getAttribute("popMarker").visible = false;
  });
}

// 创建Dom
function createElement(obj, value) {
  var popMarkerHtml =
    `<div class="popMarker" id="popMarkerTo` +
    obj.id +
    `" style="font-size: 14px;width: 210px;text-align: left;background-color: rgba(0, 0, 0, .9);border: 2px solid #eeeeee;border-radius: 8px;color: #eee;position: absolute;">
            <div class="s1" style="margin: 5px 10px;line-height: 20px;overflow: hidden;">
                <h3>告警</h3>
            </div>
            <div class="s2" style="margin: 5px 10px 10px 10px;line-height: 18px;font-size: 12px;overflow: hidden;">
                <pS>告警信息*************</p>
            </div>
            <div class="myPopClose" style="position: absolute;top: -6px;right: -6px;background-color: #3F6781;width: 8px;height: 8px;border: 2px solid #eee;border-radius: 50%;cursor: pointer"></div>
        </div>`;
  $("#div3d").append($(popMarkerHtml));
  obj.setAttribute("popMarkerID", $(popMarkerHtml).attr("id"));
  $("head").append(
    $(`
        <style>
            .rotateAnimation{
                animation: rotateTo 1s infinite normal ;
            }
            @keyframes rotateTo{
                from{transform:rotateY(0deg);}
                to{transform:rotateY(180deg);}
            }
        </style>
    `)
  );
  createUIAnchor(obj, value);
  registerEvent(obj, value);
}

/**
 * 创建UIAnchor界面
 */
function createUIAnchor(obj, value) {
  // 创建界面的json数据
  let anchorCreateJson = {
    type: "UIAnchor",
    element: $(".pictureMarker")[0],
    position: [0, 1, -10],
    parent: app.query("#108")[0],
    pivotPixel: [
      parseFloat($(".textAndPictureMarker").css("width")) / 2,
      parseFloat($(".textAndPictureMarker").css("height")),
    ],
  };

  let objTopCardEleID = obj.getAttribute("popMarkerID");
  if (value == "popMarker") {
    let objTopCardEleID = obj.getAttribute("popMarkerID");
    let anchorCreateJson = {
      type: "UIAnchor",
      parent: obj,
      element: $("#" + objTopCardEleID)[0],
      localPosition: [0, 1.5, 0],
      pivotPixel: [
        parseFloat($("#" + objTopCardEleID).css("width")) / 2,
        parseFloat($("#" + objTopCardEleID).css("height")),
      ],
    };
    let tempTopCard = app.create(anchorCreateJson); // 创建顶牌
    tempTopCard.visible = false; // 设置初始顶牌状态
    obj.setAttribute("popMarker", tempTopCard); // 给当前物体绑定对应的顶牌对象
  }
}

/**
 * 标注注册事件
 */
function registerEvent(obj, value) {
  if (value == "popMarker") {
    let tempTopCard = obj.getAttribute("popMarker");
    let isVisible = obj.visible;
    if (isVisible == true) {
      tempTopCard.visible = true;
    }
  }
}

// 客户设备信息弹窗
var hoverCustomerTimer = null;
function customerEquipment(obj) {
  hoverCustomerTimer && clearTimeout(hoverCustomerTimer);
  hoverCustomerTimer = setTimeout(() => {
    window.parent.postMessage(
      {
        isShow: true,
        funcName: "customerInfoChange",
        alarmSign: obj.alarmSign,
        custId: obj.custId,
        endU: obj.endU,
        eqpId: obj.eqpId,
        eqpName: obj.eqpName,
        eqpProductType: obj.eqpProductType,
        eqpSequence: obj.eqpSequence,
        eqpTypeId: obj.eqpTypeId,
        heigth: obj.heigth,
      },
      "*"
    );
  }, 200);
}

// 展示告警信息 调取parent父页面告警弹窗
var hoverPostMessageTimer = null;

function getAlarmInfoMessage(alarmId, isUpsEq = "") {
  hoverPostMessageTimer && clearTimeout(hoverPostMessageTimer);
  hoverPostMessageTimer = setTimeout(() => {
    window.parent.postMessage(
      {
        isShow: true,
        funcName: "alarmInfoChange",
        eqpId: alarmId,
        isUpsEq,
      },
      "*"
    );
  }, 200);
}

// 性能数据展示
var performanceIndex = null;

function getPerformanceIndexMessage(alarmId, isUpsEq = "") {
  performanceIndex && clearTimeout(performanceIndex);
  performanceIndex = setTimeout(() => {
    window.parent.postMessage(
      {
        isShow: true,
        funcName: "alarmInfoChange",
        eqpId: alarmId,
        isUpsEq,
      },
      "*"
    );
  }, 200);
}

// 展示摄像头播放界面
var cameraMessageTimer = null;

function getCameraMessage(obj) {
  cameraMessageTimer && clearTimeout(cameraMessageTimer);
  cameraMessageTimer = setTimeout(() => {
    window.parent.postMessage(
      {
        isShow: true,
        funcName: "cameraMessageChange",
        deviceId: obj.deviceId,
        deviceName: obj.name,
        relationCamereId: obj.relationCamereId,
        startTimeStamp: obj.startTimeStamp,
        endTimeStamp: obj.endTimeStamp,
        cameraIndexCode: obj.cameraIndexCode,
      },
      "*"
    );
  }, 200);
}

// 初始化机柜
var hoverTimer = null;

function init_cabinets() {
  var cabinets = app.query(".Cabinet");
  var currenRackId = "";
  cabinets.on("mouseon", function (ev) {
    if (app.level.current.type == "Cabinet") return; // 判断当前如果是机柜层级就无法执行后续逻辑
    cabinets.forEach((i) => {
      if (i.ui1) {
        // i.ui1 && i.ui1.destroy()
        i.ui1 = null;
        i.showEqNameUI(false);
      }
      i.style.outlineColor = null;
    });
    this.style.outlineColor = "#00ff00";
    if (!this.ui1) {
      this.createEqNameUI();
    } else {
      this.showEqNameUI(true);
    }
  });

  cabinets.on("click", function (ev) {
    // if (app.level.current.type == 'Cabinet') return  // 判断当前如果是机柜层级就无法执行后续逻辑
    currenRackId = this.userData.rackId;
    setTimeout(() => {
      if (app.level.current.type == "Cabinet") return;
      // getAlarmInfoMessage(this.userData.rackId, 'Cabinet')
      getAlarmInfoMessage(this.userData.rackId);
    }, 500);
    // cabinets.forEach(i => {
    //     if (i.ui1) {
    //         i.ui1 = null
    //         i.showUI1(false)
    //     }
    //     i.style.outlineColor = null;
    // })
    // this.style.outlineColor = '#00ff00';
    // hoverTimer && clearTimeout(hoverTimer)
    // this.showUI(false);
    // if (!this.ui1) {
    //     hoverTimer = setTimeout(() => {
    //         // var cabinets = app.query('.Cabinet');
    //         Promise.all([
    //             getCabinetInfo(this),
    //             getAlarmInfo(this.userData.rackId),
    //             getFaultInfo(this.userData.rackId),
    //             getChangeInfo(this.userData.rackId),
    //             getMaintainInfo(this.userData.rackId),
    //         ]).then((res) => {
    //             let data = {
    //                 base: res[0].datas,
    //                 alarm: res[1] && res[1].datas.list[0] || {},
    //                 fault: res[2] && res[2].data || [],
    //                 change: res[3] && res[3].data || [],
    //                 maintain: res[4] && res[4].data || [],
    //             }
    //             this.createUI1(data);
    //         })
    //     }, 500)
    // } else {
    //     this.showUI1(true)
    // }
  });

  // cabinets.forEach(i => {
  //     if (i.ui1) {
  //         i.showUI1(false)
  //     }
  //     i.style.outlineColor = null;
  // })
  // this.style.outlineColor = '#00ff00';
  // this.showUI(false);
  // if (!this.ui1) {
  //     hoverTimer = setTimeout(() => {
  //         var cabinets = app.query('.Cabinet');
  //         Promise.all([
  //             getCabinetInfo(this),
  //             getAlarmInfo(this.userData.rackId),
  //             getFaultInfo(this.userData.rackId),
  //             getChangeInfo(this.userData.rackId),
  //             getMaintainInfo(this.userData.rackId),
  //         ]).then((res) => {
  //             // return
  //             let data = {
  //                 base: res[0].datas,
  //                 alarm: res[1] && res[1].datas.list[0] || {},
  //                 fault: res[2] && res[2].data || [],
  //                 change: res[3] && res[3].data || [],
  //                 maintain: res[4] && res[4].data || [],
  //             }
  //             // this.style.outlineColor = null;
  //             this.createUI1(data);
  //         })
  //     }, 500)
  // } else {
  //     this.showUI1(true)
  // }
  cabinets.on("mouseoff", function () {
    this.style.outlineColor = null;
    this.showEqNameUI(false);
    // this.showEqNameUI(false);
    // hoverTimer && clearTimeout(hoverTimer)
    // i.showUI1(false);
  });

  app.on("mouseon", ".Marker", null, function (ev) {
    // this.parent.showUI && this.parent.showUI(false)
  });

  // 架式服务器事件（尚未创建，预先注册）

  app.on("mouseon", ".Rack", null, function (ev) {
    this.style.outlineColor = "#ff0000";
  });

  app.on("mouseoff", ".Rack", null, function (ev) {
    this.style.outlineColor = null;
    hoverPostMessageTimer && clearTimeout(hoverPostMessageTimer);
  });

  // app.on('dblclick', '.Rack', null, function (ev) {
  app.on("click", ".Rack", null, function (ev) {
    if (window.location.hash.includes("pdu")) {
      var Racks = app.query(".Rack");
      Racks.forEach((v) => {
        if (v.ui) {
          v.showPduNames(false);
          v.ui = null;
        }
      });
      rackRealtime(currenRackId, this.userData.eqpId).then((res) => {
        this.userData.listData = res;
        if (!this.ui) {
          this.createUI(res);
        } else {
          this.showPduNames(true);
        }
      });
      return;
    }

    //判断当前是否是客户设备
    if (
      ev.object.userData.eqpTypeId !== "自用网络设备" &&
      ev.object.userData.eqpTypeId !== "网络设备"
    ) {
      customerEquipment(ev.object.userData);
    } else {
      if (Rack.current == ev.object) {
        getAlarmInfoMessage(ev.object.userData.eqpId);
        if (ev.object.userData.eqpTypeId == "自用网络设备") {
          getPerformanceIndexMessage(ev.object.userData.eqpName, "wlsb");
        }
        return;
      }
      if (Rack.current) {
        // Rack.current.showUI(false);
        Rack.current = null;
      }
      getAlarmInfoMessage(ev.object.userData.eqpId);
      if (ev.object.userData.eqpTypeId == "自用网络设备") {
        getPerformanceIndexMessage(ev.object.userData.eqpName, "wlsb");
      }
    }

    Rack.current = ev.object;
  });
}

// initDeviceDialog
function initDeviceDialog(self, devices, key) {
  // if (!self.userData.coldChannelName || !self.userData.coldChannelName.includes('通道')) {
  // if (self.type !== "Tah") {
  // }
  devices.forEach((i) => {
    if (i.ui) {
      i.showUI(false);
    }
    self.type != "RoomDoor" && (i.style.outlineColor = null);
  });
  self.type != "RoomDoor" && (self.style.outlineColor = "#ff0000");
  hoverTimer && clearTimeout(hoverTimer);
  // if(!self.ui){
  hoverTimer = setTimeout(() => {
    Promise.all([
      getAlarmInfo(self.userData[key]),
      getFaultInfo(self.userData[key]),
      getChangeInfo(self.userData[key]),
      getMaintainInfo(self.userData[key]),
    ]).then((res) => {
      let data = {
        alarm: (res[0] && res[0].datas.list[0]) || {},
        fault: (res[1] && res[1].data) || [],
        change: (res[2] && res[2].data) || [],
        maintain: (res[3] && res[3].data) || [],
      };
      //  判断是否是冷热通道点位数据
      if (
        self.userData &&
        self.userData.coldChannelName &&
        self.userData.coldChannelName.includes("通道")
      ) {
        self.createPermanentUI(self);
      } else {
        self.createUI(data);
      }
    });
  }, 500);
  // }else {
  // self.showUI(true)
  // }
}

// // 设备信息详情
// function gen_rack_info() {
//   var type2 = ["PC服务器", "路由器"];
//   var type3 = ["IBM", "HP", "DELL"];
//   var people = ["王WW", "李LL", "张ZZ"];
//   var info = {
//     基本信息: {
//       一级分类: "微机",
//       二级分类: type2[THING.Math.randomInt(0, 1)],
//       设备类型: type3[THING.Math.randomInt(0, 2)],
//       编号: "00" + THING.Math.randomInt(0, 9),
//       使用人: people[THING.Math.randomInt(0, 2)],
//       管理员: people[THING.Math.randomInt(0, 2)],
//       上架时间:
//         "" + THING.Math.randomInt(10, 23) + ":" + THING.Math.randomInt(10, 23),
//     },
//     扩展信息: {
//       信息XX: Math.ceil(Math.random() * 27 + 25) + "",
//       信息YY: Math.ceil(Math.random() * 25 + 20) + "",
//       信息ZZ: Math.ceil(Math.random() * 27 + 25) + "",
//       信息AA: Math.ceil(Math.random() * 25 + 20) + "",
//       信息BB: Math.ceil(Math.random() * 27 + 25) + "",
//       信息CC: Math.ceil(Math.random() * 25 + 20) + "",
//       信息DD: Math.ceil(Math.random() * 25 + 20) + "",
//     },
//   };
//   return info;
// }

function getAngel(val) {
  let angle = 0;
  switch (val) {
    case "0":
      angle = 180;
      break;
    case "1":
      angle = 90;
      break;
    case "2":
      angle = 0;
      break;
    case "3":
      angle = -90;
      break;
    default:
      angle = 0;
      break;
  }
  return angle;
}

// 创建机柜模型 替代柱子
function createColumnModel(d) {
  var currentLevel = app.level.current;
  // var dd = d.datas.rmeRacks.flat(1).filter((i) => i.eType != 0);
  d.forEach((i) => {
    i.deviceType = "2";
    var obj = app.create({
      type: "cabinetSeizeASeat",
      id: i.pillarId,
      name: "cabinetSeizeASeat",
      // url: './models/9b6148cde5254e8a8608f8a628612fa3/0/gltf/', // 模型地址
      url: "./models/eab660532ff44a4a878064399152c6ff/0/gltf/", // 模型地址
      position: [i.x || 0, currentLevel.position[1], i.y || 0],
      userData: i,
      parent: currentLevel,
      visible: getStatusByFilter(2),
      angle: getAngel(i.alias),
      inheritTheme: false,
      scale: [0.923, 0.972, 1.25],
      complete: function (ev) {
        this.style.color = "white";
      },
    });
  });
}

// 创建机柜模型
function createCabinetModel(d) {
  var currentLevel = app.level.current;
  // 机柜
  var dd = d.datas.rmeRacks.flat(1).filter((i) => i.eType != 0);
  dd.forEach((i) => {
    i.deviceType = "2";
    var obj = app.create({
      type: "Cabinet",
      id: i.rackId,
      name: i.rackName,
      // url: './models/9b6148cde5254e8a8608f8a628612fa3/0/gltf/', // 模型地址
      url: "./models/eab660532ff44a4a878064399152c6ff/0/gltf/", // 模型地址
      position: [i.x || 0, currentLevel.position[1], i.y || 0],
      userData: i,
      parent: currentLevel,
      visible: getStatusByFilter(2),
      angle: getAngel(i.alias),
      inheritTheme: false,
      scale:
        i.contractUcount == 800 ? [1.23, 0.972, 1.25] : [0.923, 0.972, 1.25],
      // scale: [0.978, 1.123, 1.935],
      complete: function (ev1) {
        if (i.rackId == focus) {
          lookAtDevice(this);
          this.trigger("mouseon");
          this.style.outlineColor = "#00ff00";
          if (!window.location.search.includes("path=index")) {
            //this.trigger('click');
          }
        }

        // 多个告警设备标红
        if (ALARMDEVICELIST.includes(i.rackId)) {
          this.style.color = "red";
          this.style.outlineColor = "red";
        }

        if (i.assetNo == "1") {
          this.style.color = "red";
          this.style.outlineColor = "red";
        }
      },
    });
    obj.style.opacity = 1;
    if (i.purpose == "占用") {
      obj.style.color = "rgb(47,47,47)";
    } else if (i.purpose == "预占") {
      obj.style.color = "RoyalBlue";
    } else {
      obj.style.color = "gray";
    }

    if (i.rackId == focus && !noAlarm) {
      obj.style.color = "red";
    }
  });
  cabinetEnter();
  init_cabinets();
}

// 创建空调模型
function createAirModel(d) {
  if (!d.datas.airConditionings.length) return;
  var currentLevel = app.level.current;
  // 空调
  var airs = d.datas.airConditionings.flat(2);
  // var airs = d.datas.filter(i=>i.type == 2 || i.type == 4)
  airs.forEach((i, index) => {
    // i.deviceType = i.type == 0 ? '3' : '4';
    i.deviceType = 3;
    var airItem = app.create({
      type: "Air",
      id: i.id,
      name: i.airconditionNumber,
      url:
        i.type == 0
          ? "./models/20160506100850050553478/0/gltf/"
          : "./models/CAD800E016E644BFBDBE0B28710BCA88/0/gltf/",
      position: [i.x, currentLevel.position[1], i.y],
      parent: currentLevel,
      userData: i,
      visible: getStatusByFilter(3),
      // angles: transAngle(),
      angle: getAngel(i.alias),
      inheritTheme: false,
      complete: function (ev) {
        //物体创建成功以后执行函数
        if (i.airconditionNumber == focus) {
          lookAtDevice(this);
          // if(!noAlarm) {
          //     this.createMarket();
          //     mark_info();
          // }
          this.showUI(true);
        }

        if (i.alarmStatus == 1) {
          airItem.style.color = "red";
        }

        if (i.deviceColor == "0") {
          this.style.color = "#2f3640";
        }
      },
    });
    if (i.airconditionNumber == focus) {
      airItem.style.color = "red";
    }
    airItem.draggable = false;
  });

  var airList = app.query(".Air");
  airList.off("click");
  airList.on("click", function () {
    if (!this.userData.deviceId) return;
    getAlarmInfoMessage(this.userData.deviceId);
    getPerformanceIndexMessage(this.userData.deviceId, "Air");
  });

  airList.on("mouseon", function () {
    if (this != Air.current) {
      this.style.outlineColor = "#00ff00";
      // this.showUI(true);
    }
    airList.forEach((i) => {
      if (i.ui) {
        i.ui = null;
        i.showAirName(false);
      }
    });
    if (!this.ui) {
      this.createAirNameUI();
    } else {
      this.showAirName(true);
    }
  });

  airList.on("mouseoff", function () {
    this.showAirName(false);
    this.style.outlineColor = null;
    hoverTimer && clearTimeout(hoverTimer);
    // this.showUI(false);
  });
}

// 创建摄像头模型
function createCameraModel(d) {
  if (!d.datas.records.length) return;
  var currentLevel = app.level.current;
  d.datas.records
    .filter((i) => i.type == "摄像头")
    .forEach((i) => {
      i.deviceType = "5";
      var th1 = app.create({
        type: "Camera",
        name: i.name,
        id: i.deviceId,
        // url: '/api/models/D378A2ECBB844AD990DC4C8C106D6D28/0/gltf/',
        url: "./models/20140813240003/0/gltf/",
        // url: '/uploads/wechat/407382/file/case_new/camera_img.png',
        // url: '/uploads/wechat/407382/file/case_new/camera_img2.png',
        position: [i.x, currentLevel.position[1] + 3.5, i.y],
        scale: [2.5, 2.5, 2.5],
        userData: i,
        visible: getStatusByFilter(5),
        parent: currentLevel,
        // angles: transAngle(),
        angle: getAngel(i.alias),
        inheritTheme: false,
        complete: function () {
          // this.scale = [2.5,2.5,2.5]
          if (i.deviceId && i.deviceId == focus) {
            lookAtDevice(this);
            // if(!noAlarm) {
            //     this.createMarket();
            //     mark_info();
            // }
            // this.showUI(true);
            this.trigger("mouseon");
          }
        },
      });
      // th1.scale = [2.5,2.5,2.5]
      if (i.deviceId == focus && !noAlarm) {
        th1.style.color = "red";
      }
    });
  var cameraList = app.query(".Camera");
  cameraList.off("click");
  cameraList.on("dblclick", function (ev) {
    Camera.current = ev.object;
    // getvideoUrl(this)
    hoverPostMessageTimer && clearTimeout(hoverPostMessageTimer);
    getCameraMessage(this.userData);
    this.showUI(false);
  });

  cameraList.on("click", function (ev) {
    // if (this != Camera.current) {
    //     this.style.outlineColor = '#00ff00';
    //     // this.showUI(true);
    // }
    getAlarmInfoMessage(this.userData.deviceId);
    // initDeviceDialog(this, cameraList, 'deviceId')
  });

  cameraList.on("mouseon", function () {
    if (this != Camera.current) {
      this.style.outlineColor = "#00ff00";
      // this.showUI(true);
    }
    cameraList.forEach((i) => {
      if (i.ui) {
        i.ui = null;
        this.showCameraName(false);
      }
    });
    if (!this.ui) {
      this.createCameraNameUI();
    } else {
      this.showCameraName(true);
    }
  });

  cameraList.on("mouseoff", function () {
    this.style.outlineColor = null;
    this.showUI(false);
    this.showCameraName(false);
  });
}

// 创建烟温感模型
function createSmokeModel(d) {
  if (!d.datas.records.length) return;
  var currentLevel = app.level.current;
  d.datas.records
    .filter((i) => i.type == "烟感" || i.type == "温感")
    .forEach((i) => {
      i.deviceType = "8";
      var th1 = app.create({
        type: "Smoke",
        name: i.name,
        id: i.deviceId,
        url: "./models/20160509171503580858085/0/gltf/",
        // url: '/uploads/wechat/407382/file/case_new/yangan_img2.png',
        position: [i.x, currentLevel.position[1] + 3.5, i.y],
        // scale: [0.5,0.5,0.5],
        userData: i,
        visible: getStatusByFilter(8),
        parent: currentLevel,
        inheritTheme: false,
        complete: function () {
          if (i.deviceId == focus) {
            // lookAtDevice(this);
            // this.showUI(true);
            app.camera.flyTo({
              // position: this.selfToWorld([-8, -7, 4]),
              target: this.position,
              time: 1000,
              complete: function () {
                // flash(device);
              },
            });
            this.trigger("mouseon");
            this.style.outlineColor = "red";
            if (!window.location.search.includes("path=index")) {
              //this.trigger('click');
            }
          }

          // 多个告警设备标红
          if (ALARMDEVICELIST.includes(i.deviceId)) {
            this.style.color = "red";
            this.style.outlineColor = "red";
          }

          if (i.warnStatus == 1) {
            this.style.color = "red";
          }
        },
      });
      // th1.rotateX(-180)
      th1.scale = [2.5, 2.5, 2.5];
      // th1.style.color = i.type == '烟感' ? '#ffffff' : '#FFD700'
      // th1.style.color = i.type == '烟感' ? '#ffffff' : '#DCDCDC'
      th1.style.color = i.type == "烟感" ? "#696969" : "#ffffff";
      if (i.deviceId == focus && !noAlarm) {
        th1.style.color = "red";
      }
    });
  var smokeList = app.query(".Smoke");
  smokeList.off("click");
  smokeList.on("click", function () {
    if (this != Smoke.current) {
      // this.style.outlineColor = '#00ff00';
      this.style.outlineColor = "red";
    }
    getAlarmInfoMessage(this.userData.deviceId);
  });

  smokeList.on("mouseon", function () {
    if (this != Smoke.current) {
      // this.style.outlineColor = '#00ff00';
      this.style.outlineColor = "red";
    }
    smokeList.forEach((el) => {
      if (el.ui) {
        el.showEqNameUI(false);
      }
    });
    if (!this.ui) {
      this.createEqNameUI();
    } else {
      this.showEqNameUI(true);
    }
    // initDeviceDialog(this, smokeList, 'deviceId')
  });

  smokeList.on("mouseoff", function () {
    this.style.outlineColor = null;
    this.showUI(false);
    this.showEqNameUI(false);
  });
}

// 创建灯管模型
function createLedModel(d) {
  // let dd = d.datas.records.filter(i => i.type == '灯管')
  if (!d.datas.records.length) return;
  var currentLevel = app.level.current;
  d.datas.records.forEach((i, index) => {
    i.deviceType = "9";
    // if ([3, 4, 5, 6].includes(index)) i.isopen = 1
    var th1 = app.create({
      type: "Led",
      name: i.name,
      id: i.id,
      // url: i.isopen != 0 ? './models/f7866a2940774f20938147142c0226a4/0/gltf/' : './models/245b08a53a614a0d96aeb0f74fbcf32c/0/gltf/',
      url: "./models/20160510091927002987675/0/gltf/",
      // url: './models/245b08a53a614a0d96aeb0f74fbcf32c/0/gltf/',
      position: [i.x, currentLevel.position[1] + 3.5, i.y],
      // size: 6,
      userData: i,
      visible: getStatusByFilter(9),
      parent: currentLevel,
      // scale: [1.5, 1.5, 1.5],
      angle: getAngel(i.alias),
      // inheritTheme: false,
      complete: function () {
        // this.addMarket();
        i.isopen == 0 &&
          this.playAnimation({
            name: "关",
            speed: 0.1,
          });
      },
    });
    th1.scale = [0.7, 0.7, 0.7];
    // th1.rotateX(-180)
    // 智慧照明
    if (i.isopen == "1" && i.lightingType == "1") {
      th1.style.outlineColor = "#BDB76B";
      th1.style.color = "#BDB76B";
      th1.style.emissive = "#BDB76B";
      // createSpotLight(THING.Math.addVector([i.x, currentLevel.position[1] + 3.5, i.y], [0, 5, 0]), [i.x, currentLevel.position[1], i.y], i.id)
    }
    // 普通照明
    if (i.isopen == "1" && i.lightingType == "2") {
      th1.style.outlineColor = "#FFA500";
      th1.style.color = "#FFA500";
      th1.style.emissive = "#FFA500";
    }
    // th1.rotateY(-90)
  });
  var ledList = app.query(".Led");
  ledList.off("click");
  ledList.on("click", function (ev) {
    if (this.userData.isopen == "1") {
      this.style.outlineColor = "#BDB76B";
      this.style.color = "#BDB76B";
      this.style.emissive = "#BDB76B";
    }
    // initDeviceDialog(this, ledList, 'id')
    getAlarmInfoMessage(this.userData.id);
  });

  ledList.on("mouseon", function () {
    // this.style.outlineColor = '#BDB76B'
    if (this.userData.isopen == "1") {
      this.style.outlineColor = "#BDB76B";
      this.style.color = "#BDB76B";
      this.style.emissive = "#BDB76B";
    }
    ledList.forEach((i) => {
      if (i.ui) {
        i.ui = null;
        i.showLedName(false);
      }
    });
    if (!this.ui) {
      this.createLedNameUI();
    } else {
      this.showLedName(true);
    }
    // initDeviceDialog(this, ledList, 'id')
  });

  ledList.on("mouseoff", function (ev) {
    if (this.userData.isopen == "1") {
      this.style.outlineColor = "#BDB76B";
      this.style.color = "#BDB76B";
      this.style.emissive = "#BDB76B";
    }
    this.showLedName(false);
  });
}

// 创建聚光灯方法
function createSpotLight(position, target, parentId) {
  //创建聚光灯
  var spotLight = app.create({
    type: "SpotLight", // 类型
    id: parentId,
    lightAngle: 30, // 角度
    intensity: 0.2, // 灯光亮度
    penumbra: 0.25, // 半影
    castShadow: false, // 影子
    position: position, // 位置
    // localPosition: target,
    visible: getStatusByFilter(9),
    distance: 15, // 距离
    // 'color': 0xb4a41c, // 颜色
    color: "#bdb76b", // 颜色
    helper: false, // 辅助线
    follow: false, // 跟随
    userData: {
      deviceType: 9,
    },
  });
  spotLight.lookAt(target);
  spotLight.lightColor = "#bdb76b";
  // curLight = spotLight;
  // curLightPosition = spotLight.position;
  // createSpotLightControlPanel(spotLight);
}

// 创建房间门模型 门禁
function createRoomDoorModel(d) {
  if (!d.datas.length) return;
  var currentLevel = app.level.current;
  // var doorFilterData = d.datas.filter(e => e.pos3X == '202机房2号门')
  d.datas
    .filter((i) => i.type == "2")
    .forEach((i) => {
      // let url = i.doorType == 2 ? './models/8c41cfe965524038ba48aeeec0ce979d/0/gltf/' : './models/E99150EF0AC24D4F92C17ED572CACC45/0/gltf/'
      // i.deviceType = '11';
      var door = app.create({
        type: "RoomDoor",
        id: i.id,
        name: "铁门1m8x2m1",
        position: [i.x, currentLevel.position[1], i.y],
        parent: currentLevel,
        userData: i,
        // visible: getStatusByFilter(11),
        visible: true,
        scale: [1.12, 1.1, 1.1],
        url: "./models/E674B392FFA74A61BEE0E3EE26B1BD55/0/gltf/", //2双门  1单门
        // url: i.doorType == 2 ? './models/E674B392FFA74A61BEE0E3EE26B1BD55/0/gltf/' : './models/E99150EF0AC24D4F92C17ED572CACC45/0/gltf/',
        angle: i.doorSign == 1 ? 90 : 180,
        complete: function () {
          // this.scale = [1.1, 1.1, 1.1]
          if (!window.location.search.includes("path=index")) {
            if (i.deviceId && i.deviceId == focus) {
              lookAtDevice(this);
              this.trigger("mouseon");
              //this.trigger('click');
              this.style.outlineColor = "red";
            } else {
              // this.style.outlineColor = '#00FF00';
              // if (i.active == 1) {
              //     this.style.outlineColor = 'red';
              //     this.playAnimation('Auto_Open')
              // } else {
              //     this.style.outlineColor = '#00FF00';
              // }
            }
          } else {
            if (i.deviceId && i.deviceId == focus) {
              lookAtDevice(this);
              this.trigger("mouseon");
              this.style.outlineColor = "red";
            } else {
              this.style.outlineColor = null;
            }
          }

          if (i.active == "1") {
            this.style.outlineColor = "red";
            this.playAnimation("Auto_Open");
          }
          // this.scale = i.sign == 4 ? [0.9, 1.1, 0.9] : [1, 1, 1]
        },
      });
    });

  var roomDoorList = app.query(".RoomDoor");
  roomDoorList.off("click");
  roomDoorList.on("click", function () {
    if (this.userData.active == "1") {
      this.style.outlineColor = "red";
    } else {
      this.style.outlineColor = "#00FF00";
    }
    if (!this.userData.deviceId) return;
    getAlarmInfoMessage(this.userData.deviceId);
    getAccessControlMessage(this.userData);
    // initDeviceDialog(this, roomDoorList, 'id')
  });

  roomDoorList.on("mouseon", function () {
    roomDoorList.forEach((i) => {
      if (i.ui) {
        i.ui = null;
        i.showDoorNameUI(false);
      }
    });
    if (!this.ui) {
      this.createDoorNameUI();
    } else {
      this.showDoorNameUI(true);
    }

    if (this.userData.active == "1") {
      this.style.outlineColor = "red";
    } else {
      this.style.outlineColor = "#00FF00";
    }
  });

  roomDoorList.on("mouseoff", function () {
    if (this.userData.active == "1") {
      this.style.outlineColor = "red";
    } else {
      this.style.outlineColor = "#00FF00";
    }

    this.showDoorNameUI(false);
  });

  roomDoorList.on(THING.EventType.LeaveLevel, function (ev) {
    if (ev.previous.type == "RoomDoor") {
      if (this.userData.active == "1") {
        this.style.outlineColor = "red";
      } else {
        this.style.outlineColor = "#00FF00";
      }
    }
  });
}

//门禁展示 刷卡记录 关联视频
// 展示告警信息 调取parent父页面告警弹窗
var hoverAccessControlMessage = null;
function getAccessControlMessage(obj) {
  hoverAccessControlMessage && clearTimeout(hoverAccessControlMessage);
  hoverAccessControlMessage = setTimeout(() => {
    window.parent.postMessage(
      {
        isShow: true,
        funcName: "accessControlChange",
        deviceId: obj.deviceId,
        relationCameraId: obj.relationCameraId,
        isActive: obj.active, // 是否告警  1告警 0 否
        srcIndex: obj.id,
      },
      "*"
    );
  }, 200);
}

// var heatMap = null;
// 创建热力图模型 点位数据
function createHeatArea(d) {
  if (!d.datas.length) return;
  let currentLevel = app.level.current;
  let temperaturePosition = [];
  let shapeDatas = [];
  let temperatureWidth = 0;
  let temperatureHeight = 0;
  let temperatureRotateX = 0; // X轴翻转角度
  let temperatureRotateZ = 0; // Z轴翻转角度
  switch (currentLevel.id) {
    case "040002050000001123073987": // 201
      temperatureWidth = 16;
      temperatureHeight = 28;
      temperatureRotateX = 90;
      temperaturePosition = [
        -24.96082456749747,
        currentLevel.position[1] + 0.12,
        -15.349448280531357,
      ];
      break;
    case "040002050000001123073990": // 202
      temperatureWidth = 9;
      temperatureHeight = 35;
      temperatureRotateX = -90;
      temperaturePosition = [
        -28.8285819049988,
        currentLevel.position[1] + 0.12,
        // 16.73,
        16.532459374814422,
      ];
      break;
    case "040002050000001123073991": // 203
      temperatureWidth = 8;
      temperatureHeight = 25;
      temperatureRotateX = -90;
      temperatureRotateZ = 90;
      temperaturePosition = [
        -12.288136182363619,
        currentLevel.position[1] + 0.12,
        27.340111370728394,
      ];
      break;
    case "040002050000001123073992": // 204
      temperatureWidth = 9;
      temperatureHeight = 36;
      temperatureRotateX = -90;
      temperatureRotateZ = 90;
      temperaturePosition = [
        18.247711697497266,
        currentLevel.position[1] + 0.12,
        27.826048105414998,
      ];
      break;
    case "040002050000001123074022": // 205
      temperatureWidth = 8.2;
      temperatureHeight = 24.5;
      temperatureRotateX = -90;
      temperaturePosition = [
        29.219140746932297,
        currentLevel.position[1] + 0.12,
        10.872135325446992,
      ];
      break;
    case "040002050000001123074023": // 206
      temperatureWidth = 16;
      temperatureHeight = 28;
      temperatureRotateX = 90;
      temperatureRotateZ = 180;
      temperaturePosition = [
        25.43147275839131,
        currentLevel.position[1] + 0.12,
        -15.307883848886924,
      ];
      break;
    case "040002050000001123074024": // 207
      temperatureWidth = 10;
      temperatureHeight = 16;
      // temperatureWidth = 16
      // temperatureHeight = 28
      temperatureRotateX = 90;
      temperaturePosition = [
        -19.536156967867612,
        currentLevel.position[1] + 0.12,
        11.029212139120453,
      ];
      break;
  }
  let heatMap = app.create({
    type: "Heatmap",
    id: "6",
    // width: 8.3,
    // height: 36,
    width: temperatureWidth,
    height: temperatureHeight,
    minValue: 16,
    maxValue: 42,
    // radius: 0.6,
    radius: 0.8,
    visible: getStatusByFilter(6),
    alpha: true,
    userData: {
      deviceType: 6,
    },
    clipShape: shapeDatas.length
      ? {
          // (可选) 热力图的裁剪形状，坐标系以热力图平面中心为原点
          shape: shapeDatas,
          // holes: [   //洞
          //     [[2, -1], [4, -1], [4, -3], [2, -3]]
          // ]
        }
      : null,
  });
  heatMap.position = temperaturePosition;
  heatMap.setGradient({
    0: "blue",
    0.2: "blue",
    0.3: "green",
    // 0.4: "green",
    0.6: "cyan",
    0.7: "lime",
    0.8: "yellow",
    1.0: "red",
  });
  heatMap.rotateX(temperatureRotateX);
  heatMap.rotateZ(temperatureRotateZ);
  // 热图数值
  // let data = d.datas.filter(i => i.type == 1 || i.type == 5).map(i => {
  let rooms = app.query(".Room");
  let currentRoom = rooms.objects.find((ele) => ele.id == currentLevel.id);
  let data = d.datas
    .filter((i) => i.meteValue !== "")
    .map((i) => {
      return [
        // -(i.posY / 100)  + 4.2,
        -(i.posY / 100) + temperatureWidth / 2,
        // -(i.posX / 100) + 18.5,
        -(i.posX / 100) + temperatureHeight / 2 - 1,
        // -(i.posX / 100) + temperatureHeight,
        Number(i.meteValue),
      ];
      // return [
      //   i.posY,
      //   i.posX,
      //   Number(i.meteValue),
      // ]
      // return temperaturePosition.worldToSelf([
      //   i.posY,
      //   currentLevel.position[1] + 0.12,
      //   i.posX,
      // ]);
      // return [currentRoom.worldToSelf([]), Number(i.meteValue)];
    });
  heatMap.setData(data); // 数值以平面中心
}

// 创建热力底图底图
function createBGHeatArea(r, datas) {
  if (!datas.length) return;
  let currentLevel = app.level.current;
  let shapeDatas = []; // 裁切点
  let temperatureWidth = null; // 宽度
  let temperatureHeight = null; // 高度
  let temperaturePosition = null; // 底图中心点
  let temperatureRotateX = 0; // X轴翻转角度
  let temperatureRotateZ = 0; // Z轴翻转角度
  switch (currentLevel.id) {
    case "040002050000001123073987": // 201
      temperatureWidth = 16;
      temperatureHeight = 28;
      temperatureRotateX = -90;
      temperaturePosition = [
        -24.96082456749747,
        currentLevel.position[1] + 0.1,
        -15.349448280531357,
      ];
      shapeDatas = [
        [0, 0],
        [8, 14],
        [8, 3],
        [0.5, 3],
        [0.5, -14],
        [-8, -14],
        [-8, 14],
        [8, 14],
      ];
      break;
    case "040002050000001123073990": // 202
      temperatureWidth = 8.5;
      temperatureHeight = 36.5;
      temperatureRotateX = -90;
      temperaturePosition = [
        // -28.8285819049988,
        -28.60517981331122,
        currentLevel.position[1] + 0.1,
        // 16.73,
        16.513336118819595,
      ];
      break;
    case "040002050000001123073991": // 203
      temperatureWidth = 8;
      temperatureHeight = 25;
      temperatureRotateX = -90;
      temperatureRotateZ = 90;
      // temperatureRotateZ = 180
      temperaturePosition = [
        -12.227799913474746,
        currentLevel.position[1] + 0.1,
        27.283586095508728,
      ];
      break;
    case "040002050000001123073992": // 204
      temperatureWidth = 9;
      temperatureHeight = 36;
      temperatureRotateX = -90;
      temperatureRotateZ = 90;
      temperaturePosition = [
        18.247711697497266,
        currentLevel.position[1] + 0.1,
        27.826048105414998,
      ];
      break;
    case "040002050000001123074022": // 205
      temperatureWidth = 8.2;
      temperatureHeight = 24.5;
      temperatureRotateX = -90;
      temperaturePosition = [
        29.219140746932297,
        currentLevel.position[1] + 0.1,
        10.872135325446992,
      ];
      break;
    case "040002050000001123074023": // 206
      temperatureWidth = 16;
      temperatureHeight = 28;
      temperatureRotateX = 90;
      temperatureRotateZ = 180;
      shapeDatas = [
        [0, 0],
        [8, 14],
        [8, 3],
        [0.5, 3],
        [0.5, -14],
        [-8, -14],
        [-8, 14],
        [8, 14],
      ];
      temperaturePosition = [
        25.43147275839131,
        currentLevel.position[1] + 0.1,
        -15.307883848886924,
      ];
      break;
    case "040002050000001123074024": // 207
      temperatureWidth = 10;
      temperatureHeight = 16;
      // temperatureWidth = 16
      // temperatureHeight = 28
      temperatureRotateX = 90;
      temperaturePosition = [
        -19.536156967867612,
        currentLevel.position[1] + 0.1,
        11.029212139120453,
      ];
      break;
  }

  let bGheatMap = app.create({
    type: "Heatmap",
    id: "6",
    width: temperatureWidth,
    height: temperatureHeight,
    minValue: 0, // 热力值下限
    maxValue: 100, // 热力值上限
    radius: r, // （可选）单个点的热力影响半径，默认为0.8
    blur: 17, // (可选) 单个点的热力影响模糊半径，默认为0.8
    alpha: true, // （可选）未插值区域是否透明，默认为 false 不透明
    mapSize: 2048, // （可选）实际分辨率大小，值越大分辨率越高，推荐为2次幂的值但不大于2048，默认为256
    mosaic: false, // (可选) 是否叠加马赛克效果，默认为false
    visible: getStatusByFilter(6),
    offset: [0, 3, -1],
    userData: {
      deviceType: 6,
    },
    clipShape: shapeDatas.length
      ? {
          // (可选) 热力图的裁剪形状，坐标系以热力图平面中心为原点
          shape: shapeDatas,
          // holes: [   //洞
          //     [[2, -1], [4, -1], [4, -3], [2, -3]]
          // ]
        }
      : null,

    gradient: {
      0.0: "rgba(39,122,236,0.5)",
      0.1: "rgba(39,122,236,0.4)",
      0.2: "rgba(39,122,236,0.3)",
      1.0: "rgba(0,255,0,0.3)",
    },
  });

  // 0.0: "rgba(39,122,236,0.2)",
  // 0.1: "rgba(39,122,236,0.2)",
  // 0.2: "rgba(39,122,236,0.2)",
  // 0.3: "rgba(39,122,236,0.2)",
  // 0.4: "rgba(39,122,236,0.2)",
  // 0.5: "rgba(39,122,236,0.2)",
  // 0.6: "rgba(39,122,236,0.2)",
  // 0.7: "rgba(39,122,236,0.2)",
  // 0.8: "rgba(39,122,236,0.2)",
  // 0.9: "rgba(39,122,236,0.2)",
  // 1.0: "rgba(0,255,0,0.3)",
  bGheatMap.position = temperaturePosition;
  bGheatMap.rotateX(temperatureRotateX);
  bGheatMap.rotateZ(temperatureRotateZ);
  let data = datas.map((e) => {
    return [
      e.y,
      e.x,
      e.temperature == "50"
        ? Number(e.temperature) - 40
        : Number(e.temperature) - 5,
    ];
  });
  bGheatMap.setData(data);
}

// 创建温度传感器模型
function createTahModel(d) {
  let tahDatas = d.datas.filter((i) => i.type == 1 || i.type == 5);
  if (!tahDatas.length) return;
  var currentLevel = app.level.current;
  tahDatas.forEach((i) => {
    i.deviceType = "4";
    var ltItem = app.create({
      type: "Tah",
      id: i.deviceId,
      name: i.deviceId,
      url: "./uploads/wechat/407382/file/case_new/images/iconset0480.png",
      position: [
        i.x,
        i.coldChannelName && i.coldChannelName.includes("通道")
          ? currentLevel.position[1] + 2
          : currentLevel.position[1],
        i.y,
      ],
      userData: i,
      visible: getStatusByFilter(4),
      parent: currentLevel,
      angles: transAngle(),
      inheritTheme: false,
      scale: [1.2, 1.2, 1.2],
      complete: function (ev) {
        this.translate([0, 0.3, 0]);
        // if (ev.object.userData.compartmentName) {
        // }
        if (i.deviceId == focus) {
          ev.object.bindParams.url =
            "./uploads/wechat/407382/file/case_new/images/tahAlarm.png";
          this.trigger("mouseon");
          if (!window.location.search.includes("path=index")) {
            //this.trigger('click');
          }
          lookAtDevice(this);
        }
      },
    });

    if (ALARMDEVICELIST.includes(i.deviceId)) {
      ltItem.url = "./uploads/wechat/407382/file/case_new/images/tahAlarm.png";
    }

    if (i.alarmStatus == 1) {
      ltItem.url = "./uploads/wechat/407382/file/case_new/images/tahAlarm.png";
    }

    if (
      (i.type && i.coldChannelName && i.coldChannelName.includes("通道")) ||
      i.type == 5
    ) {
      createTahGs(ltItem);
    }
  });
  var tahList = app.query(".Tah");
  tahList.off("click");
  tahList.on("click", function (ev) {
    getAlarmInfoMessage(this.userData.deviceId); //展示弹窗
  });

  tahList.on("mouseon", function (ev) {
    tahList.forEach((i) => {
      if (i.ui) {
        i.ui = null;
        i.showTahUI(false);
      }
    });
    if (!this.ui) {
      this.createTahUI();
    } else {
      this.showTahUI(true);
    }
    // initDeviceDialog(this, tahList, 'meteName')
  });

  tahList.on("mouseoff", function () {
    this.style.outlineColor = null;
    this.showTahUI(false);
    // hoverTimer && clearTimeout(hoverTimer)
  });
}

// 创建传感器跟随panel
function createTahGs(ev) {
  var marker02 = app.create({
    type: "Marker",
    id: "myMarker02",
    name: "roomNumber",
    parent: ev,
    canvas: createTextCanvas(
      ev.userData.meteValue + (ev.userData.meteValue ? "℃" : "")
    ),
    localPosition: [0, 0, 0], // 父物体坐标系下的相对位置
    size: 1, // 图标长宽比例大小
  });
  marker02.pickable = false;
}

// 监控平台输入配电柜输入配电柜
function createInputPowerDistributionCabinet(d) {
  let inputPowerData = d.datas.filter((i) => i.type == "6");
  if (!inputPowerData.length) return;
  var currentLevel = app.level.current;
  inputPowerData.forEach((i) => {
    i.deviceType = 15;
    i.splitDeviceMeasure = i.deviceMeasure
      ? i.deviceMeasure.split("*").map((e) => e / 1000)
      : "";
    var obj = app.create({
      type: "InputPower",
      id: i.deviceId,
      name: i.name,
      // url: '/api/models/20160718174742030112154/0/gltf/', // 模型地址
      url: i.modelName
        ? modelMatchingModel(i.modelName, i.splitDeviceMeasure).modelUrl
        : "./models/02FE0AB20DD045E9AE64C7B06B3B2171/0/gltf/", // 模型地址
      // url: './models/eab660532ff44a4a878064399152c6ff/0/gltf/', // 模型地址
      position: [i.x, currentLevel.position[1], i.y],
      userData: i,
      parent: currentLevel,
      visible: getStatusByFilter(15),
      angle: getAngel(i.alias),
      inheritTheme: false,
      // scale: [0.923,0.972,1.25],
      // scale: [0.923,1.123,1.935],
      scale: i.modelName
        ? modelMatchingModel(i.modelName, i.splitDeviceMeasure).scale
        : [1, 1, 1],
      complete: function (ev1) {
        if (i.deviceId == focus) {
          this.style.color = "red";
          this.trigger("mouseon");
          if (!window.location.search.includes("path=index")) {
            //this.trigger('click');
          }
          lookAtDevice(this);
          // obj.style.highlight = 'red';
        }

        if (ALARMDEVICELIST.includes(i.deviceId)) {
          this.style.color = "red";
          this.style.outlineColor = "red";
        }

        if (i.alarmStatus == 1) {
          this.style.outlineColor = "red";
        }
      },
    });
  });
  var inputPowerrList = app.query(".InputPower");
  inputPowerrList.off("click");
  inputPowerrList.on("click", function () {
    // THING.Utils.log(this.userData.deviceId,'this.userData.deviceIdthis.userData.deviceId')
    getAlarmInfoMessage(this.userData.deviceId); //展示弹窗
    getPerformanceIndexMessage(this.userData.deviceId, "InputPower");
  });

  inputPowerrList.on("mouseon", function () {
    if (this != InputPower.current) {
      this.style.outlineColor = "#00ff00";
      // this.showUI(true);
    }
    inputPowerrList.forEach((v) => {
      if (v.ui) {
        v.ui = null;
        v.showInputPowerName(false);
      }
    });
    if (!this.ui) {
      this.createInputPowerNameUI();
    } else {
      this.showInputPowerName(true);
    }
  });
  inputPowerrList.on("mouseoff", function () {
    this.style.outlineColor = null;
    this.showInputPowerName(false);
    hoverTimer && clearTimeout(hoverTimer);
  });
}

// 创建列头柜模型
function createPowerModel(d) {
  let powerDataList = d.datas.filter(
    (i) => i.type == "3" && i.x !== null && i.y !== null
  );
  if (!powerDataList.length) return;
  var currentLevel = app.level.current;
  powerDataList.forEach((i) => {
    i.deviceType = "1";
    i.splitDeviceMeasure = i.deviceMeasure
      ? i.deviceMeasure.split("*").map((e) => e / 1000)
      : "";
    var ltItem = app.create({
      type: "Power",
      // id: i.meteId,
      id: i.deviceId,
      name: "列头柜",
      // url: "./models/DD497D1FFBD74220880AE376B4E810E7/0/gltf/",
      url: i.modelName
        ? modelMatchingModel(i.modelName, i.splitDeviceMeasure).modelUrl
        : "./models/DD497D1FFBD74220880AE376B4E810E7/0/gltf/", // 模型地址
      position: [i.x, currentLevel.position[1], i.y],
      userData: i,
      visible: getStatusByFilter(1),
      parent: currentLevel,
      // angles: [0,-90,0],
      angle: getAngel(i.alias),
      // scale: [0.6 / 0.35, 2.2 / 1.7, 0.6 / 0.7],
      scale: i.modelName
        ? modelMatchingModel(i.modelName, i.splitDeviceMeasure).scale
        : [0.6 / 0.35, 2.2 / 1.7, 0.6 / 0.7],
      inheritTheme: true,
      complete: function (ev) {
        //物体创建成功以后执行函数
        if (i.deviceId == focus) {
          lookAtDevice(this);
          this.style.color = "red";
          this.showUI(true);
        }
        if (i.deviceColor == "0") {
          this.style.color = "black";
        }

        if (i.deviceColor == "1") {
          this.style.color = "#ffffff";
        }

        if (i.alarmStatus == 1) {
          this.style.color = "red";
        }
        // this.style.image = 'https://www.thingjs.com/static/images/avatar.png';
      },
    });
  });
  var powerList = app.query(".Power");
  powerList.off("click");
  powerList.on("click", function () {
    if (this != Power.current) {
      this.style.outlineColor = "#00ff00";
      // this.showUI(true);
    }
    // initDeviceDialog(this, powerList, 'meteId')
    getAlarmInfoMessage(this.userData.deviceId);
    getPerformanceIndexMessage(this.userData.deviceId, "Power");
  });

  powerList.on("mouseon", function () {
    if (this.type !== "Power") return;
    powerList.forEach((i) => {
      if (i.ui) {
        i.ui = null;
        i.showPowerName(false);
      }
    });
    if (!this.ui) {
      this.createPowerNameUI();
    } else {
      this.showPowerName(true);
    }
    // initDeviceDialog(this, powerList, 'meteId')
  });

  powerList.on("mouseoff", function () {
    this.showPowerName && this.showPowerName(false);
  });
}

// 创建冷通道顶/冷通道门/冷通道文字模型
function createCoolModel(d) {
  if (!d.datas.length) return;
  var currentLevel = app.level.current;
  d.datas.forEach((i) => {
    i.deviceType = "7";
    var th = app.create({
      type: "Door",
      name: i.coldChannelId + "A",
      id: i.coldChannelId + "A",
      url: "./models/20150312752987/0/gltf/",
      position: [i.doorMxd1, currentLevel.position[1], i.doorMyd1],
      userData: i,
      visible: getStatusByFilter(7),
      parent: currentLevel,
      angle: i.doorSign == 0 ? 0 : 90,
      inheritTheme: false,
      complete: function () {
        this.pickable = false;
        this.scale =
          i.doorSign == 1
            ? [
                Math.max(this.size[2], i.doorw / 100) /
                  Math.min(this.size[2], i.doorw / 100),
                1,
                1,
              ]
            : [
                Math.max(this.size[0], i.doorw / 100) /
                  Math.min(this.size[0], i.doorw / 100),
                1,
                1,
              ];
      },
    });

    var th1 = app.create({
      type: "Door",
      name: i.coldChannelId + "A",
      id: i.coldChannelId + "B",
      url: "./models/20150312752987/0/gltf/",
      position: [i.doorMxd2, currentLevel.position[1], i.doorMyd2],
      userData: i,
      visible: getStatusByFilter(7),
      parent: currentLevel,
      angle: i.doorSign == 0 ? 0 : 90,
      inheritTheme: false,
      complete: function () {
        this.pickable = false;
        this.scale =
          i.doorSign == 1
            ? [
                Math.max(this.size[2], i.doorw / 100) /
                  Math.min(this.size[2], i.doorw / 100),
                1,
                1,
              ]
            : [
                Math.max(this.size[0], i.doorw / 100) /
                  Math.min(this.size[0], i.doorw / 100),
                1,
                1,
              ];
      },
    });

    var th2 = app.create({
      type: "Door",
      name: "top",
      id: "top",
      url: "./models/20150702292750/0/gltf/",
      position: [
        i.coldChannelMxd,
        currentLevel.position[1] + 2.2,
        i.coldChannelMyd,
      ],
      userData: i,
      visible: getStatusByFilter(7),
      angle: i.doorSign == 1 ? 0 : -90,
      parent: currentLevel,
      inheritTheme: false,
      complete: function () {
        this.pickable = true;
        this.scale =
          i.doorSign == 1
            ? [
                // (0.62 * 8) / this.size[0],
                i.coldLong ? Number(i.coldLong) : (0.62 * 8) / this.size[0],
                1,
                Math.max(this.size[2], i.doorw / 100) /
                  Math.min(this.size[2], i.doorw / 100) +
                  0.8,
              ]
            : [
                // (0.62 * 8) / this.size[2],
                i.coldLong ? Number(i.coldLong) : (0.62 * 8) / this.size[2],
                1,
                Math.max(this.size[0], i.doorw / 100) /
                  Math.min(this.size[0], i.doorw / 100) +
                  0.8,
              ];
      },
    });
    // 冷通道挡板 0左 2右
    if (i.boundary == 0 || i.boundary == 2) {
      var th3 = app.create({
        type: "Door",
        name: "top",
        id: "top",
        url: "./models/92bd3751dfd641e78deb5c69cddf0b37/0/gltf/",
        position: getDbPosition(i),
        userData: i,
        visible: getStatusByFilter(7),
        // angle: i.doorSign == 1 ? 0 : -90,
        angles: i.doorSign == 0 ? [0, -90, 0] : [0, 0, 0],
        parent: currentLevel,
        inheritTheme: false,
        complete: function () {
          this.pickable = false;
          this.scale =
            i.doorSign == 0
              ? [
                  // (0.62 * 8) / this.size[0],
                  9,
                  // 5,
                  1,
                  // Math.max(this.size[2], i.doorw / 100) /
                  //   Math.min(this.size[2], i.doorw / 100),
                  1,
                ]
              : [
                  // (0.62 * 8) / this.size[2],
                  // 5 / this.size[2],
                  // 5 / this.size[0],
                  9, 1,
                  // Math.max(this.size[0], i.doorw / 100) /
                  //   Math.min(this.size[0], i.doorw / 100),
                  1,
                ];
        },
      });
    }
  });
  var doorList = app.query(".Door");
  doorList.on("mouseon", function () {
    if (this != Door.current) {
      this.style.outlineColor = "#00ff00";
    }

    doorList.forEach((e) => {
      if (e.ui) {
        e.ui = null;
        e.showDoorName(false);
      }
    });
    if (!this.ui) {
      this.createDoorNameUI();
    } else {
      this.showDoorName(true);
    }
  });
  doorList.on("mouseoff", function () {
    this.style.outlineColor = null;
    this.showDoorName(false);
  });
}
//  boundary 0 2 doorSign 0 1
function getDbPosition(i) {
  // i.boundary == 0 ? [Number(i.coldChannelMxd) - 0.95, currentLevel.position[1], i.coldChannelMyd] : [Number(i.coldChannelMxd) + 1.15, currentLevel.position[1], i.coldChannelMyd]
  var currentLevel = app.level.current;
  let postition = [];
  if (i.boundary == 0 && i.doorSign == 0) {
    postition = [
      Number(i.coldChannelMxd) - 0.95,
      currentLevel.position[1],
      i.coldChannelMyd,
    ];
  }
  if (i.boundary == 2 && i.doorSign == 0) {
    postition = [
      Number(i.coldChannelMxd) + 1.25,
      currentLevel.position[1],
      i.coldChannelMyd,
    ];
  }

  if (i.boundary == 0 && i.doorSign == 1) {
    postition = [
      i.coldChannelMxd,
      currentLevel.position[1],
      Number(i.coldChannelMyd) + 1.2,
    ];
  }

  if (i.boundary == 2 && i.doorSign == 1) {
    postition = [
      i.coldChannelMxd,
      currentLevel.position[1],
      Number(i.coldChannelMyd) + 1.2,
    ];
  }
  return postition;
}

// 创建人员模型
function createPersonModel(d, isPath) {
  if (!d.datas.list.length) return;
  let currentLevel = app.level.current;
  let personArr =
    d.datas.list &&
    [...new Set(d.datas.list.map((v) => v.personnelName))].map((e) => {
      return {
        userData: null,
        name: e,
      };
    });

  personArr.forEach((v) => {
    v.userData = d.datas.list.find((o) => o.personnelName == v.name);
    v.userData.path = [];
    d.datas.list.forEach((b) => {
      if (v.name == b.personnelName) {
        v.userData.path.push([b.x, currentLevel.position[1], b.y]);
      }
    });
  });

  app.query(".Person").destroyAll();
  personArr.forEach((i, index) => {
    i.deviceType = 10;
    i.userData.index = index;
    var person = app.create({
      type: "Person",
      name: "3d小人02",
      id: i.userData.id,
      // url: '/api/models/0bcba8ca78734b64a3dae3eb699a913c/0/gltf/',
      url: "./models/fbaa7b897e6a4897aef4eda4abe09166/0/gltf/",
      position: [
        i.userData.path[0][0],
        i.userData.path[0][1],
        i.userData.path[0][2],
      ],
      angles: COORDTYPE == 1 ? [0, 0, 0] : [0, -90, 0],
      parent: currentLevel,
      userData: i.userData,
      visible: getStatusByFilter(10),
      complete: function (ev) {
        if (isPath) {
          this.patrol(ev.object);
        }
        this.createPersonElement(
          [i.userData.path[0][0], i.userData.path[0][1], i.userData.path[0][2]],
          i.userData,
          person,
          index
        ); // 创建人员头部标注
      },
    });
  });

  var personList = app.query(".Person");
  personList.on("click", function () {
    this.showUI(false);
  });

  personList.on("mouseon", function () {
    this.style.outlineColor = "#00ff00";
    personList.forEach((i) => {
      if (i.ui) {
        i.ui = null;
        i.showUI(false);
      }
    });
    this.createUI(this);
  });
  personList.on("mouseoff", function () {
    this.style.outlineColor = null;
    // this.showUI(false);
  });

  personList.on("click", "personUIAnchor", function (ev) {
    THING.Utils.log(ev.object.name, "ev.object.nameev.object.name");
  });
}

// 退出人员轨迹做的操作
function signOutPersonPage() {
  // 开启场景层级控制
  $(".load__person_page").css("display", "none");
  // app.query('.Person').destroyAll();
  // app.query('.Line').destroyAll();
  destroyAllModel();
  app.level.change();
  // 将层级切换至某楼层
  var campus = app.query(".Campus")[0];
  app.level.change(campus);
}

function personnelPositioning(param, whetherToPerformPositioning) {
  isShowPersonnelPosition = whetherToPerformPositioning;
  currentSearchPerson = param;
  let personData = app.query(".Person");
  // 判断当前人员是否创建 已经创建了就直接显示 没有就跳过
  // if (personData.length && !param.isPath) {
  //     personData.forEach(e => {
  //         if (e.userData.deviceId == param.deviceId) {
  //             e.visible = true
  //             e.stopPatrol();
  //         } else {
  //             e.visible = false
  //         }
  //     })
  //     $('.load__person_page').remove();
  //     return
  // }
  // 查询人员轨迹
  $(".load__person_page").css("display", "block");
  getPerson(param).then((d) => {
    createPersonModel(d, param.isPath);
    // $('.load__person_page').remove();
    $(".load__person_page").css("display", "none");
  });
}

var loadingPersonTemplate = null;
function loadingPersonPage() {
  var windowWidth = $(window).width();
  $("head").append(
    $(`
                     <style>
                        .load__person_page{
                            background: rgba(44,62,80,0.4);
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 100%;
                            height: 100%;
                        }
                        .triangle-loading {
                            animation: pulsing-fade 3000ms ease infinite;
                            color: white;
                            font-family: 'Helvetica Neue', Helvetica, sans-serif;
                            font-size: 40px;
                            font-weight: 300;
                            left: 50%;
                            letter-spacing: 8px;
                            margin-left: 4px;
                            margin-top: 10px;
                            opacity: 0;
                            position: absolute;
                            top: 50%;
                            transform: translate3d(-50%, -50%, 0);
                            text-transform: uppercase;
                            z-index: 10000;
                        }
                        @keyframes pulsing-fade {
                            0% {
                                opacity: 0;
                            }

                            20% {
                                opacity: 0;
                            }
                            40% {
                                opacity: 0.8;
                            }
                            60% {
                                opacity: 0;
                            }
                        }
                 </style>
         `)
  );
  loadingPersonTemplate = `<div class="load__person_page">
            <p class="triangle-loading" style="color:white" >资源加载中...</p>
        </div>`;
  // 插入到 ThingJS 内置的 2D 界面 div 中
  $("#div2d").append($(loadingPersonTemplate));
}

// 更改人员类型
function changePerson(param) {
  app.query(".Person").destroyAll();
  app.query(".Line").destroyAll();
  // params.isPath = true;
  getPerson(param).then((d) => {
    createPersonModel(d, param.isPath);
  });
}

function getDevices() {
  getData().then((d) => {
    createCabinetModel(d);
    createAirModel(d);
  });

  getCamerasData().then((d) => {
    createCameraModel(d);
    createSmokeModel(d);
    // createLedModel(d);
  });

  getLightList().then((d) => {
    createLedModel(d);
  });
  Promise.all([getTemAndHumi(), getTemAndHumiNew()]).then((res) => {
    createTahModel(res[0]);
    createPowerModel(res[0]);
    createInputPowerDistributionCabinet(res[0]);
    if (res[1].datas.rackAccessList.length !== 0 || res[0].datas.length !== 0) {
      res[1].datas.rackAccessList.forEach((i) => {
        i.type = 1;
      });

      let data = {
        datas: [res[0].datas, res[1].datas.rackAccessList].flat(1),
      };
      createHeatArea(data);
    }

    if (res[1].datas.radiusList.length) {
      res[1].datas.radiusList.forEach((ele) => {
        createBGHeatArea(ele.radius, ele.radiusPositions);
      });
    }
  });
  getColdChannel().then((d) => {
    createCoolModel(d);
  });

  if (!isShowPersonnelPosition) {
    getPerson().then((d) => {
      createPersonModel(d, false);
    });
  }
  getDoors().then((d) => {
    createRoomDoorModel(d);
  });
  getPowerCabinet().then((v) => {
    createPowerCabinetModel(v);
  });
}

// ups设备
function createPowerCabinetModel(d) {
  if (!d.length) return;
  var currentLevel = app.level.current;
  d.filter((e) => e.x !== null && e.y !== null).forEach((i) => {
    i.deviceType = 12;
    i.splitDeviceMeasure = i.deviceMeasure
      ? i.deviceMeasure.split("*").map((e) => e / 1000)
      : "";
    var obj = app.create({
      type: "Ups",
      id: i.id,
      name: i.name,
      // url: './models/7A731167F5B34008AA7F2935DF70FDBA/0/gltf/', // 模型地址
      url: i.modelName
        ? modelMatchingModel(i.modelName, i.splitDeviceMeasure).modelUrl
        : "./models/7A731167F5B34008AA7F2935DF70FDBA/0/gltf/", // 模型地址
      position: [
        i.x,
        i.wallHeight ? currentLevel.position[1] + 2 : currentLevel.position[1],
        i.y,
      ],
      // position: [i.x, currentLevel.position[1], i.y],
      userData: i,
      parent: currentLevel,
      visible: getStatusByFilter(12),
      angle: getAngel(i.alias),
      inheritTheme: false,
      // scale: [0.923,0.972,1.25],
      scale: i.modelName
        ? modelMatchingModel(i.modelName, i.splitDeviceMeasure).scale
        : [1, 1, 1],
      complete: function (ev) {
        if (i.deviceColor == "0") {
          this.style.color = "#2f3640";
        } else {
          this.style.color = "gray";
        }

        if (i.deviceId == focus) {
          this.style.color = "red";
          this.style.outlineColor = "red";
          this.trigger("mouseon");
          if (!window.location.search.includes("path=index")) {
            //this.trigger('click');
          }
          lookAtDevice(this);
        }

        if (i.alarmStatus == 1) {
          this.style.color = "red";
          this.style.outlineColor = "red";
        }

        if (ALARMDEVICELIST.includes(i.deviceId)) {
          this.style.color = "red";
          this.style.outlineColor = "red";
        }
      },
    });
  });
  var upsList = app.query(".Ups");
  upsList.off("click");
  upsList.on("click", function (ev) {
    getAlarmInfoMessage(this.userData.deviceId);
    if (this.userData.name == "UPS") {
      getPerformanceIndexMessage(this.userData.deviceId, "ups");
    }

    if (ALARMDEVICELIST.includes(this.userData.deviceId)) {
      this.style.color = "red";
      this.style.outlineColor = "red";
    }
  });

  upsList.on("mouseon", function (ev) {
    upsList.forEach((v) => {
      if (v.ui1) {
        v.ui1 = null;
        v.showUpsName(false);
      }
    });
    if (!this.ui1) {
      this.createUpsNameUI();
    } else {
      this.showUpsName(true);
    }

    if (ev.object.userData.alarmStatus == 1) {
      ev.object.style.color = "red";
      ev.object.style.outlineColor = "red";
    }

    if (ev.object.userData.deviceId == focus) {
      ev.object.style.color = "red";
      ev.object.style.outlineColor = "red";
    }
  });

  upsList.on("mouseoff", function (ev) {
    upsList.forEach((v) => {
      if (v.alarmStatus == 1) {
        this.style.color = "red";
        this.style.outlineColor = "red";
      }
      if (v.deviceId == focus) {
        this.style.color = "red";
        this.style.outlineColor = "red";
      }
    });

    if (ALARMDEVICELIST.includes(this.userData.deviceId)) {
      this.style.color = "red";
      this.style.outlineColor = "red";
    }
    this.showUpsName(false);
  });

  //监听ups层级跳转
  upsList.on(THING.EventType.LeaveLevel, function (ev) {
    if (ev.previous.type == "Ups") {
      if (ALARMDEVICELIST.includes(this.userData.deviceId)) {
        this.style.color = "red";
        this.style.outlineColor = "red";
      }

      if (this.userData.alarmStatus == 1) {
        this.style.color = "red";
        this.style.outlineColor = "red";
      }
      if (this.userData.deviceId == focus) {
        this.style.color = "red";
        this.style.outlineColor = "red";
      }
    }
  });
}

// 创建电池设备模型
function createBatteryModel(d) {
  if (!d.length) return;
  var currentLevel = app.level.current;
  d.filter((e) => e.x !== null && e.y !== null && e.type == "蓄电池").forEach(
    (i) => {
      // i.deviceType = 16;
      i.deviceType = 12;
      i.splitDeviceMeasure = i.deviceMeasure
        ? i.deviceMeasure.split("*").map((e) => e / 1000)
        : "";
      // console.log(i.splitDeviceMeasure,'splitDeviceMeasuresplitDeviceMeasure');
      var obj = app.create({
        type: "Battery",
        id: i.id,
        name: i.name,
        //   url: "./models/7A731167F5B34008AA7F2935DF70FDBA/0/gltf/", // 模型地址
        url: "./models/20150612811543/0/gltf/", // 模型地址
        position: [i.x, currentLevel.position[1], i.y],
        userData: i,
        parent: currentLevel,
        // visible: getStatusByFilter(16),
        visible: getStatusByFilter(12),
        angle: getAngel(i.alias),
        inheritTheme: false,
        scale: i.splitDeviceMeasure
          ? [
              i.splitDeviceMeasure[1] / 3.2, // 长
              i.splitDeviceMeasure[2] / 1.6,
              i.splitDeviceMeasure[0] / 1.1, // 宽
            ]
          : [0.423, 1, 0.423],
        // scale:
        //   i.deviceMeasure == "LHR12800W"
        //     ? [1.2 / 3.2, 1.25 / 1.6, 4.8 / 1.1]
        //     : i.deviceMeasure == "LHR12600W"
        //     ? [1.2 / 3.2, 1.25 / 1.6, 5.5 / 1.1]
        //     : i.deviceMeasure == "6-GFMHR-700W"
        //     ? [1.1 / 3.2, 1, 2.4 / 1.1]
        //     : [0.423, 1, 0.423],

        //   scale: i.modelName ? modelMatchingModel(i.modelName).scale : [1, 1, 1],
        complete: function (ev) {
          if (i.deviceColor == "0") {
            this.style.color = "#2f3640";
          } else {
            this.style.color = "gray";
          }
          if (i.deviceId == focus) {
            this.style.color = "red";
            this.trigger("mouseon");
            if (!window.location.search.includes("path=index")) {
              //this.trigger('click');
            }
            lookAtDevice(this);
          }

          if (i.alarmStatus == 1) {
            this.style.color = "red";
          }
          if (ALARMDEVICELIST.includes(i.deviceId)) {
            this.style.color = "red";
            this.style.outlineColor = "red";
          }
        },
      });
    }
  );
  var batteryList = app.query(".Battery");
  batteryList.off("click");
  batteryList.on("click", function () {
    getAlarmInfoMessage(this.userData.deviceId);
    // if (this.userData.name == "UPS") {
    //   getPerformanceIndexMessage(this.userData.deviceId, "ups");
    // }
  });

  batteryList.on("mouseon", function (ev) {
    batteryList.forEach((v) => {
      if (v.ui) {
        v.ui = null;
        v.showUI(false);
      }
    });
    if (!this.ui) {
      this.createUI();
    } else {
      this.showUI(true);
    }
  });

  batteryList.on("mouseoff", function () {
    this.style.outlineColor = null;
    // this.showUI(false);
    this.showUI(false);
  });
}

/**
 * 0 内刷全程水处理器
 * 1 冷却水泵
 * 2 智能加药装置
 * 3 板式换热器
 * 4 离心式冷水机组
 * 5 自动定压补水装置
 * 6 补水箱
 * 7 软化水装置
 */
function createRefrigerationStationEquipment(d) {
  d.forEach((e) => {
    // if (e.type == "0") {
    //   e.deviceType = "17";
    //   e.sbName = "qcsclq"; // 内刷全程水处理器
    //   e.url = "";
    //   e.leval = "17";
    // }
    if (e.type == "1") {
      e.deviceType = 17;
      e.sbName = "lqsb"; // 冷冻水泵
      e.url = "./models/70a168a8f9c14e71beba5dffff6e6cfe/0/gltf/";
      e.leval = 17;
      batchCreateEquipment(e);
    }
    // if (e.type == "2") {
    //   e.deviceType = "19";
    //   e.sbName = "znjyzz"; // 智能加药装置
    //   e.url = "";
    //   e.leval = "19";
    // }
    if (e.type == "3") {
      e.deviceType = 18;
      e.sbName = "bshrq"; // 板式换热器 散热器
      e.url = "./models/06103047f3a64f8f9720e8c972f5d121/0/gltf/";
      e.leval = 18;
      batchCreateEquipment(e);
    }
    if (e.type == "4") {
      e.deviceType = 19;
      e.sbName = "lxslsjz"; // 离心式冷水机组
      e.url = "./models/3520693daab445409c7c38b254fcc6ba/0/gltf/";
      e.leval = 19;
      batchCreateEquipment(e);
    }
    // if (e.type == "5") {
    //   e.deviceType = "22";
    //   e.sbName = "zddybszz"; // 自动定压补水装置
    //   e.url = "";
    //   e.leval = "22";
    // }
    if (e.type == "6") {
      e.deviceType = 20;
      e.sbName = "bsx"; // 补水箱
      e.url = "./models/ca6058412a7f46cb8ee5c724e3fbed2f/0/gltf/";
      e.leval = 20;
      batchCreateEquipment(e);
    }
    // if (e.type == "7") {
    //   e.deviceType = "24";
    //   e.sbName = "rhszz"; // 软化水装置
    //   e.url = "";
    //   e.leval = "24";
    // }
  });
}

function batchCreateEquipment(val) {
  var currentLevel = app.level.current;
  var obj = app.create({
    type: "Thing",
    id: val.id,
    // name: val.sbName,
    name: val.sbName,
    url: val.url, // 模型地址
    position: [val.x, currentLevel.position[1], val.y],
    userData: val,
    parent: currentLevel,
    visible: getStatusByFilter(val.deviceType),
    angle: getAngel(val.alias),
    inheritTheme: false,
    //   scale: i.modelName ? modelMatchingModel(i.modelName).scale : [1, 1, 1],
    scale: val.type == "1" ? [3, 1.5, 2.7] : [1, 1, 1],
    complete: function (ev) {
      if (val.deviceColor == "0") {
        this.style.color = "#2f3640";
      } else {
        this.style.color = "gray";
      }
      if (val.deviceId == focus) {
        this.style.color = "red";
        this.trigger("mouseon");
        if (!window.location.search.includes("path=index")) {
          //this.trigger('click');
        }
        lookAtDevice(this);
      }
      if (val.alarmStatus == 1) {
        this.style.color = "red";
      }
      if (ALARMDEVICELIST.includes(val.deviceId)) {
        this.style.color = "red";
        this.style.outlineColor = "red";
      }
    },
  });
  let sbList = [
    "qcsclq",
    "lqsb",
    "znjyzz",
    "bshrq",
    "lxslsjz",
    "zddybszz",
    "bsx",
    "rhszz",
  ];
  sbList.map((v) => {
    var lqsb = app.query(v);
    if (lqsb.length) {
      lqsb.off("click");
      lqsb.on("click", function () {
        getAlarmInfoMessage(this.userData.deviceId);
        // if (this.userData.name == "UPS") {
        //   getPerformanceIndexMessage(this.userData.deviceId, "ups");
        // }
      });
      lqsb.on("mouseon", function (ev) {
        lqsb.forEach((b) => {
          if (b.ui && this.panel) {
            b.ui = null;
            this.panel.visible = false;
          }
        });
        if (!this.ui) {
          createLdsbUI(this);
        } else {
          this.panel.visible = true;
        }
      });
      lqsb.on("mouseoff", function () {
        this.style.outlineColor = null;
        this.panel.visible = false;
      });
    } else {
      return;
    }
  });
}

function createLdsbUI(val) {
  var that = val;
  // 创建widget (动态绑定数据用)
  var panel = new THING.widget.Panel({
    width: that.userData.type == 0 ? "330px" : "230px",
    closeIcon: false,
    opacity: 0.8,
    visible: true,
  });
  that.panel = panel;
  // if (this.userData.cabinetType == 1) {
  //   panel.addString(this.userData, "cabinetName").caption("列头柜");
  // } else {
  panel.addString(that.userData, "name").caption("名称");
  // 创建obj ui (跟随物体用)
  var ui = app.create({
    type: "UI",
    parent: that,
    el: panel.domElement,
    offset: [0, that.size[1], 0],
  });
  that.ui = ui;
}

/**
 * 动力设备模型尺寸调整
 * @param {*} modelName  模型匹配的标识
 * @param {*} splitDeviceMeasure  模型具体尺寸 [长 * 高 * 宽]
 * @param {*} type
 * @returns  1.模型路径  2.具体尺寸
 */
function modelMatchingModel(modelName, splitDeviceMeasure, type = "") {
  let obj = {
    scale: [],
    modelUrl: "",
  };
  switch (modelName) {
    case "189646B02C2C4CBFB": // ABB进线开关柜
      obj.modelUrl = "./models/189646B02C2C4CBFBDAF41F96B16A71E/0/gltf/";
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 1.2,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[1] / 1,
          ]
        : [1 / 1.2, 1, 1.2 / 1];
      break;
    case "189646B02C2C4CBFBDAF41F96": // ABB进线开关柜
      obj.modelUrl = "./models/189646B02C2C4CBFBDAF41F96B16A71E/0/gltf/";
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 1.2,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[1] / 1,
          ]
        : [1 / 1.2, 1, 1.2 / 1];
      break;
    case "20160927150627601": // ABB 进线开关柜(宽)
      obj.modelUrl = "./models/20160927150627601191778/0/gltf/";
      // obj.scale = [0.6, 1.16, 0.3];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 1.04,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[0] / 1,
          ]
        : [0.6, 1.16, 0.3];
      break;
    case "20160927150627601191778": // ABB 进线开关柜(宽)
      obj.modelUrl = "./models/20160927150627601191778/0/gltf/";
      // obj.scale = [0.6, 1.16, 0.3];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 1.04,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[0] / 1,
          ]
        : [0.6, 1.16, 0.3];
      break;
    case "417312464AD743889": // ABB开关柜
      obj.modelUrl = "./models/417312464AD74388915BB0286B1028B8/0/gltf/"; //ss
      // obj.scale = [1.65 / 1.5, 2.2 / 2.26, 1.2 / 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 1.2,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[0] / 0.6,
          ]
        : [1.65 / 1.5, 2.2 / 2.26, 1.2 / 1];
      break;
    case "20150612976134": // 施耐德 OKKEN低压开关柜-1
      obj.modelUrl = "./models/20150612976134/0/gltf/";
      // obj.scale = [1 / 1.05, 2.3 / 2.2, 1 / 0.7];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.7,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[1] / 1.05,
          ]
        : [1 / 1.05, 2.3 / 2.2, 1 / 0.7];
      break;
    case "20160913162612944" || "20160913162612944220623": // 其他 UPS电池开关柜
      obj.modelUrl = "./models/20160913162612944220623/0/gltf/";
      // obj.scale = [0.6 / 0.5, 2 / 1.6, 0.6 / 0.65];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.65,
            splitDeviceMeasure[2] / 1.6,
            splitDeviceMeasure[1] / 0.5,
          ]
        : [0.6 / 0.5, 2 / 1.6, 0.6 / 0.65];
      break;
    case "20160913162612944220623": // 其他 UPS电池开关柜
      obj.modelUrl = "./models/20160913162612944220623/0/gltf/";
      // obj.scale = [0.6 / 0.5, 2 / 1.6, 0.6 / 0.65];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.65,
            splitDeviceMeasure[2] / 1.6,
            splitDeviceMeasure[1] / 0.5,
          ]
        : [0.6 / 0.5, 2 / 1.6, 0.6 / 0.65];
      break;
    case "A7E8E7EFAFFE4C398": // ABB_低压配电柜
      obj.modelUrl = "./models/A7E8E7EFAFFE4C3980BAE486A55F3A65/0/gltf/";
      // obj.scale = [1, 1 / 1.9, 0.4 / 0.7];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.4,
            splitDeviceMeasure[2] / 1.9,
            splitDeviceMeasure[0] / 0.7,
          ]
        : [1, 1 / 1.9, 0.4 / 0.7];
      break;
    case "A7E8E7EFAFFE4C3980BAE486A55F3A65": // ABB_低压配电柜
      obj.modelUrl = "./models/A7E8E7EFAFFE4C3980BAE486A55F3A65/0/gltf/";
      // obj.scale = [1, 1 / 1.9, 0.4 / 0.7];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.4,
            splitDeviceMeasure[2] / 1.9,
            splitDeviceMeasure[0] / 0.7,
          ]
        : [1, 1 / 1.9, 0.4 / 0.7];
      break;
    case "7A731167F5B34008A": // SIVACON_输出开关柜
      obj.modelUrl = "./models/7A731167F5B34008AA7F2935DF70FDBA/0/gltf/";
      // obj.scale = [1, 2.3 / 2, 1.2 / 0.8];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 1,
            splitDeviceMeasure[2] / 2,
            splitDeviceMeasure[0] / 0.8,
          ]
        : [1, 2.3 / 2, 1.2 / 0.8];
      break;
    case "7A731167F5B34008AA7F2935DF70FDBA": // SIVACON_输出开关柜
      obj.modelUrl = "./models/7A731167F5B34008AA7F2935DF70FDBA/0/gltf/";
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.8,
            splitDeviceMeasure[2] / 2,
            splitDeviceMeasure[1] / 1,
          ]
        : [1, 1, 1];
      break;
    case "FAEB6AEBE9524BFOA": //CANATAL空调
      obj.modelUrl = "./models/FAEB6AEBE9524BF0A178F72F872F303A/0/gltf/";
      // obj.scale = [1 / 0.6, 2.5 / 1.9, 2.4 / 0.8];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.6,
            splitDeviceMeasure[2] / 1.9,
            splitDeviceMeasure[1] / 0.8,
          ]
        : [1 / 0.6, 2.5 / 1.9, 2.4 / 0.8];
      break;
    case "FAEB6AEBE9524BF0A178F72F872F303A": //CANATAL空调
      obj.modelUrl = "./models/FAEB6AEBE9524BF0A178F72F872F303A/0/gltf/";
      // obj.scale = [1 / 0.6, 2.5 / 1.9, 2.4 / 0.8];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.6,
            splitDeviceMeasure[2] / 1.9,
            splitDeviceMeasure[1] / 0.8,
          ]
        : [1 / 0.6, 2.5 / 1.9, 2.4 / 0.8];
      break;
    case "3A45309974B54A359": // 端口箱
      obj.modelUrl = "./models/3A45309974B54A3595496D006AD6F7E1/0/gltf/";
      // obj.scale = [1, 0.4 / 0.3, 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.4,
            splitDeviceMeasure[2] / 0.3,
            splitDeviceMeasure[1] / 0.2,
          ]
        : [1, 0.4 / 0.3, 1];
      break;
    case "3A45309974B54A3595496D006AD6F7E1": // 端口箱
      obj.modelUrl = "./models/3A45309974B54A3595496D006AD6F7E1/0/gltf/";
      // obj.scale = [1, 0.4 / 0.3, 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.4,
            splitDeviceMeasure[2] / 0.3,
            splitDeviceMeasure[1] / 0.2,
          ]
        : [1, 0.4 / 0.3, 1];
      break;
    case "20150612811543": // 其他 电池组
      obj.modelUrl = "./models/20150612811543/0/gltf/";
      // obj.scale = [1, 1, 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 1.1,
            splitDeviceMeasure[2] / 1.6,
            splitDeviceMeasure[0] / 3.2,
          ]
        : [1, 1, 1];
      break;
    case "ED109E3F18E74C9C8": // 梅兰日兰_MLS_UPS出线总柜
      obj.modelUrl = "./models/BF82A71AE89E4791B96E21F7AF8E41EF/0/gltf/";
      // obj.scale = [1, 1.32, 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 1,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[0] / 0.8,
          ]
        : [1, 1.32, 1];
      break;
    case "20150925175803722": // EMERSON 开关柜
      obj.modelUrl = "./models/20150925175803722610657/0/gltf/";
      // obj.scale = [0.6 / 1.8, 1, 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.6,
            splitDeviceMeasure[2] / 2,
            splitDeviceMeasure[0] / 1.8,
          ]
        : [0.6 / 1.8, 1, 1];
      break;
    case "20160516164337423": // EATON 空调
      obj.modelUrl = "./models/20160516164337423748930/0/gltf/";
      // obj.scale = [1 / 0.8, 2.2 / 2, 1.98 / 2.4];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.8,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[0] / 2.4,
          ]
        : [1 / 0.8, 2.2 / 2, 1.98 / 2.4];

      break;
    case "20160516165058142": // 未知 温湿度感应器
      obj.modelUrl = "./models/20160516165058142594227/0/gltf/";
      // obj.scale = [1.2 / 0.6, 2 / 2.2, 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.1,
            splitDeviceMeasure[2] / 0.3,
            splitDeviceMeasure[0] / 0.1,
          ]
        : [1.2 / 0.6, 2 / 2.2, 1];
      break;
    case "20151201115325417": // 未知 配电柜A
      obj.modelUrl = "./models/20151201115325417242844/0/gltf/";
      // obj.scale = [1.2 / 0.6, 1.37, 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.6,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[0] / 1,
          ]
        : [1.2 / 0.6, 1.37, 1];
      break;
    case "20160112233916016": // 梅河 UPS
      obj.modelUrl = "./models/20160112233916016943367/0/gltf/";
      // obj.scale = [0.6 / 0.8, 1.8 / 1.75, 0.6 / 0.96];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.8,
            splitDeviceMeasure[2] / 1.75,
            splitDeviceMeasure[0] / 0.96,
          ]
        : [0.6 / 0.8, 1.8 / 1.75, 0.6 / 0.96];
      break;
    case "20160112233916016943367": // 梅河 UPS
      obj.modelUrl = "./models/20160112233916016943367/0/gltf/";
      // obj.scale = [0.6 / 0.8, 1.8 / 1.75, 0.6 / 0.96];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.96,
            splitDeviceMeasure[2] / 1.75,
            splitDeviceMeasure[1] / 0.8,
          ]
        : [0.6 / 0.8, 1.8 / 1.75, 0.6 / 0.96];
      break;
    case "02FE0AB20DD045E9": // 监控平台输入配电柜
      obj.modelUrl = "./models/02FE0AB20DD045E9AE64C7B06B3B2171/0/gltf/";
      // obj.scale = [0.6 / 0.8, 1 / 1.4, 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.8,
            splitDeviceMeasure[2] / 1.4,
            splitDeviceMeasure[0] / 0.6,
          ]
        : [0.6 / 0.8, 1 / 1.4, 1];
      break;
    case "20150730584999": // 创力列头柜（黑）
      obj.modelUrl = "./models/02FE0AB20DD045E9AE64C7B06B3B2171/0/gltf/";
      // obj.scale = [1, 2.2 / 1.9, 1.2 / 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[1] / 0.6,
            splitDeviceMeasure[2] / 1.9,
            splitDeviceMeasure[0] / 1,
          ]
        : [1, 2.2 / 1.9, 1.2 / 1];
      break;
    case "SCB14-2500/10-NX2":
      obj.modelUrl = "./models/02FE0AB20DD045E9AE64C7B06B3B2171/0/gltf/";
      // obj.scale = [1, 2.2 / 1.9, 1.2 / 1];
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.6,
            splitDeviceMeasure[2] / 1.4,
            splitDeviceMeasure[1] / 0.8,
          ]
        : [1, 2.2 / 1.9, 1.2 / 1];
      break;
    case "417312464AD74388915BB0286B1028B8": // 开关柜
      obj.modelUrl = "./models/417312464AD74388915BB0286B1028B8/0/gltf/";
      obj.scale = splitDeviceMeasure.length
        ? [
            splitDeviceMeasure[0] / 0.6,
            splitDeviceMeasure[2] / 2.2,
            splitDeviceMeasure[1] / 1.2,
          ]
        : [1, 1, 1];
      break;
    default:
      obj.modelUrl = "./models/02FE0AB20DD045E9AE64C7B06B3B2171/0/gltf/";
      obj.scale = [1, 1, 1];
      break;
  }

  return obj;
}

// 创建楼层所有机柜模型
function createAllCabinetModel(d) {
  if (!d.datas.length) return;
  var currentLevel = app.level.current;
  var dd = d.datas.flat(2).filter((i) => i.eType != 0);
  dd.forEach((i) => {
    i.deviceType = "2";
    var obj = app.create({
      type: "Cabinet",
      id: i.rackId,
      name: i.rackName,
      // url: "./models/9b6148cde5254e8a8608f8a628612fa3/0/gltf/", // 模型地址
      url: "./models/eab660532ff44a4a878064399152c6ff/0/gltf/", // 模型地址
      position: [i.x, currentLevel.position[1], i.y],
      userData: i,
      parent: currentLevel,
      // angles: COORDTYPE == 1 ? [0,i.rackDire == '左'? 180: 0,0] : [0,i.rackDire == '左'? 90: -90,0],
      angle: getAngel(i.alias),
      inheritTheme: false,
      complete: function (ev1) {
        if (i.rackId == focus) {
          lookAtDevice(this);
          //this.trigger('click');
        }
      },
    });

    obj.style.opacity = 1;
    if (i.purpose == "占用") {
      obj.style.color = "rgb(47,47,47)";
    } else if (i.purpose == "预占") {
      obj.style.color = "RoyalBlue";
    } else {
      obj.style.color = "gray";
    }
    if (i.rackId == focus && !noAlarm) {
      obj.style.color = "red";
    }
  });
  // cabinetEnter()
  init_cabinets();
  var cabinets = app.query(".Cabinet");
  cabinets.pauseEvent(THING.EventType.EnterLevel);
}

// 进入房间层级
function roomEnter() {
  var rooms = app.query(".Room");
  rooms.on(THING.EventType.EnterLevel, function (ev) {
    // 楼层层级进入房间
    if (
      ev.previous &&
      ev.previous.type == "Floor" &&
      ev.current.userData.SpaceGroup == "工程/UPS机房"
    ) {
    } else if (
      ev.previous &&
      ev.previous.type == "Floor" &&
      ev.current.userData.SpaceGroup == "工程/空调机房"
    ) {
    }
    // 机柜层级进入房间
    if (ev.previous.type == "Cabinet") {
      var cabinets = app.query(".Cabinet");
      cabinets.pickable = true;
      if (Cabinet.current) {
        Cabinet.current.closeDoor();
        Cabinet.current = null;
      }
      focus = "";
    }
  });
}

// 进入机柜层级
function cabinetEnter() {
  var cabinets = app.query(".Cabinet");
  cabinets.on(THING.EventType.EnterLevel, function (ev) {
    // 房间层级进入机柜
    if (ev.previous.type == "Room") {
      this.brothers.pickable = false;
      // var pos = this.selfToWorld([0, 2.0, 2.3]);
      var pos = this.selfToWorld([0, 2.0, 2.2]);
      var targ = ev.current.position;
      // targ[1] += 1.23;
      targ[1] += 0.95;
      app.camera.flyTo({
        time: 500,
        // radiusFactor: 2,
        position: pos,
        target: targ,
      });
      // 机柜开门动画
      if (Cabinet.current) {
        Cabinet.current.closeDoor();
        Cabinet.current = null;
      }
      ev.current.openDoor();
      Cabinet.current = ev.current;
    }
    // 进入机柜层级把机柜颜色置成默认颜色
    if (ev.current.type == "Cabinet") {
      // if (Cabinet.current) {
      //     Cabinet.current.showUI1(false)
      // }
      if (
        Cabinet.current.id == focus ||
        ALARMDEVICELIST.includes(Cabinet.current.id) ||
        Cabinet.current.userData.assetNo == "1"
      ) {
        this.style.color = "rgb(47,47,47)";
        this.style.outlineColor = null; // 当前机柜不沟边4-7
      }
    }
    // 设备层级进入机柜
    if (ev.previous.type == "Rack") {
      if (Rack.current) {
        // Rack.current = null
        hoverPostMessageTimer && clearTimeout(hoverPostMessageTimer);
      }
    }
  });
  // 退出机柜层级的操作
  cabinets.on(THING.EventType.LeaveLevel, function (ev) {
    let curAlarmRackId = Cabinet.current.id;
    if (
      ev.current.type !== "Cabinet" &&
      ev.current.type !== "Rack" &&
      ALARMDEVICELIST.includes(curAlarmRackId)
    ) {
      var doorList = app.query(".Door");
      if (doorList) {
        doorList.pickable = false;
      }
      this.style.color = "#ff0000";
      this.style.outlineColor = "#ff0000"; // 当前机柜不沟边4-7
      this.brothers.pickable = true;
    }
  });
}

// 注销所有模型
function destroyAllModel() {
  app.query(".Cabinet").destroyAll();
  app.query(".Air").destroyAll();
  app.query(".Camera").destroyAll();
  app.query(".Tah").destroyAll();
  app.query(".Heatmap").destroyAll();
  app.query(".Box").destroyAll();
  app.query(".Door").destroyAll();
  app.query("#Text").destroyAll();
  app.query(".Smoke").destroyAll();
  app.query(".Led").destroyAll();
  app.query(".Person").destroyAll();
  app.query(".RoomDoor").destroyAll();
  app.query(".Power").destroyAll();
  app.query(".SpotLight").destroyAll();
  app.query(".Ups").destroyAll();
  app.query(".Line").destroyAll();
  app.query(".InputPower").destroyAll();
  app.query("television").destroyAll();
  app.query(".Battery").destroyAll();
  app.query("cabinetSeizeASeat").destroyAll();
  //   冷冻站设备
  app.query("lqsb").destroyAll();
  app.query("bshrq").destroyAll();
  app.query("lxslsjz").destroyAll();
  app.query("bsx").destroyAll();
}

// 进入楼层层级
function floorEnter() {
  var floors = app.query(".Floor");
  if (!floors.length) return;
  floors.forEach((i, index) => {
    i.position = [i.position[0], i.position[1] + index * 10, i.position[2]];
  });
  floors.on(THING.EventType.EnterLevel, function (ev) {
    if (ev.current.type !== "Room") {
      // destroyAllModel();
    }
    if (ev.previous.type == "Room" && ev.current.type == "Floor") {
      destroyAllModel();
    }
    if (ev.previous.type == "Building" && ev.current.type == "Floor") {
      createRoomNumber(ev.current);
    }
  });
}

// 创建按钮
function createButtonGrou() {
  THING.widget.Button("打印摄像机镜头位置", function () {});
}

// 场景层级跳转监听
app.on(THING.EventType.LevelFlyEnd, async function (ev) {
  // app.on(THING.EventType.EnterLevel, async function (ev) {
  /* 参数
   * {Number} progress 场景加载进度 （0~1）.
   */
  if (app.level.current.type == "Floor") {
    app.level.current.misc.visible = false;
  }
  if (ev.previous && ev.previous.type == "Floor") {
    ev.previous.misc.visible = false;
  }

  var offsets = {
    201: [-16.7, 0, -28.5],
    202: [-24.5, 0, -1.8],
    203: [-10.8, 0, 13.7],
    205: [33.6, 0, -1],
    206: [33.6, 0, -28.5],
    207: [21.6, 0, 7],
    208: [-16.6, 0, 7],
  };
  if (
    (ev.previous && ev.previous.type == "Floor" && ev.current.isRoom) ||
    (ev.previous && ev.previous.type == "Room" && ev.current.isRoom)
  ) {
    clearTimeout(TIMER);
    destroyAllModel();
    ROOM_ID = ev.current.id;
    OFFSET = offsets[ev.current.userData.roomNumber];

    // 1楼ECC监控室
    // 1楼ECC监控室显示大屏项目webview界面

    // if (app.level.current.name == '浦江IDC-ECC监控室') {
    //     createWebView()
    // }

    // 获取房间相同坐标的机柜数
    // selectRackCount()
    getData().then((d) => {
      createCabinetModel(d);
      createAirModel(d);
    });
    /**
     * wlGlRackIdData 网络设备集合
     * khglRackIdData 客户设备集合
     */
    getNewAllCabinet().then((v) => {
      if (v.datas && v.datas.length) {
        wlGlRackIdData = [...new Set(v.datas.map((d) => d.rackId))];
      }
      // if (v[0].length) {
      //   wlGlRackIdData =
      //     v[0].length !== 0 ? [...new Set(v[0].map((d) => d.rackId))] : [];
      // }
      // if (v[1].length) {
      //   khglRackIdData =
      //     v[1].length !== 0 ? [...new Set(v[0].map((d) => d.rackId))] : [];
      // }
    });

    getCamerasData().then((d) => {
      createCameraModel(d);
      createSmokeModel(d);
    });

    getLightList().then((d) => {
      createLedModel(d);
    });
    Promise.all([getTemAndHumi(), getTemAndHumiNew()]).then((res) => {
      createTahModel(res[0]);
      createPowerModel(res[0]);
      createInputPowerDistributionCabinet(res[0]);
      if (
        res[1].datas.rackAccessList.length !== 0 ||
        res[0].datas.length !== 0
      ) {
        res[1].datas.rackAccessList.forEach((i) => {
          i.type = 1;
        });
        let data = {
          datas: [res[0].datas, res[1].datas.rackAccessList].flat(1),
        };
        createHeatArea(data);
      }
      if (res[1].datas.radiusList.length) {
        res[1].datas.radiusList.forEach((ele) => {
          createBGHeatArea(ele.radius, ele.radiusPositions);
        });
      }
    });

    getColdChannel().then((d) => {
      createCoolModel(d);
    });
    // currentSearchPerson  有值查个人  无值查全部
    if (!isShowPersonnelPosition) {
      getPerson(currentSearchPerson).then((d) => {
        createPersonModel(d, false);
      });
    }
    getDoors().then((d) => {
      createRoomDoorModel(d);
    });

    getPowerCabinet().then((v) => {
      createPowerCabinetModel(v);
    });
    // 获取电池室数据
    getBatteryDeviceData().then((v) => {
      createBatteryModel(v);
      createRefrigerationStationEquipment(v); // 创建冷冻站设备
    });

    // 查询机房柱子接口 (使用机柜模型)
    getPillarByFloorRoom().then((res) => {
      createColumnModel(res);
    });
  }

  if (ev.current.type == "Room" && ev.previous.type == "Cabinet") {
    ev.previous.brothers.style.opacity = 1;
  }
  if (ev.current.type == "Floor" && ev.previous.type == "Room") {
    focus = "";
  }
  // if (ev.current.type == 'Room' || ev.current.type == 'Floor' || ev.current.type == 'Building' || ev.current.type == 'Campus') {
  //     window.parent.postMessage({
  //         funcName: 'levelChange',
  //         level: ev.current.type,
  //         levelId: ev.current.id,
  //         previous: ev.previous ? ev.previous.type : null
  //     }, '*')
  // }

  if (ev.current.type == "Cabinet") {
    ev.current.brothers.style.opacity = 0.05;
  }

  if (ev.current.type == "Building" && ev.previous.type == "Room") {
    setTimeout(() => {
      destroyAllModel();
    }, 2000);
  }

  if (ev.current.type == "Floor") {
    destroyAllModel();
    ROOM_ID = "";
    // TIMER = setTimeout(() => {
    // }, 1500)

    getAllCabinet(ev.current.name).then((res) => {
      createAllCabinetModel(res);
    });

    getCamerasData().then((d) => {
      createCameraModel(d);
      createSmokeModel(d);
      // createLedModel(d);
    });

    getLightList().then((d) => {
      createLedModel(d);
    });

    getTemAndHumi().then((res) => {
      createTahModel(res);
      createPowerModel(res);
      createInputPowerDistributionCabinet(res);
    });
    // getColdChannel().then((d) => {
    //     createCoolModel(d);
    // })

    // 获取全楼层冷通道
    getColdChannelInfoByFloor().then((d) => {
      createCoolModel(d);
    });
    //如果是人员轨迹页面  不执行
    if (!isShowPersonnelPosition) {
      getPerson(currentSearchPerson).then((d) => {
        createPersonModel(d, false);
      });
    }
    getDoors().then((d) => {
      createRoomDoorModel(d);
    });

    getPowerCabinet().then((v) => {
      createPowerCabinetModel(v);
    });

    // 获取楼层空调
    queryKongTiaoDataByFloor().then((v) => {
      let d = {
        datas: {
          airConditionings: v.datas,
        },
      };
      createAirModel(d);
    });

    // 获取电池室数据
    getBatteryDeviceData().then((v) => {
      createBatteryModel(v);
      createRefrigerationStationEquipment(v); // 创建冷冻站设备
    });

    getPillarByFloorRoom().then((res) => {
      createColumnModel(res);
    });

    // await getTemAndHumi().then((res) => {
    //     createTahModel(res);
    //     createPowerModel(res);
    //     createInputPowerDistributionCabinet(res)
    // })

    // await getColdChannel().then((d) => {
    //     createCoolModel(d);
    // })
    // //如果是人员轨迹页面  不执行
    // if (!isShowPersonnelPosition) {
    //     await getPerson(currentSearchPerson).then((d) => {
    //         createPersonModel(d, false);
    //     })
    // }
    // await getDoors().then((d) => {
    //     createRoomDoorModel(d);
    // })

    // await getPowerCabinet().then(v => {
    //     createPowerCabinetModel(v)
    // })
  }
});

//  层级变化
// {String} ev.level 当前层级标识枚举值 可通过 THING.LevelType 获取枚举值，如建筑层级标识为 THING.LevelType.Building
// {THING.BaseObject} ev.object 当前层级对象（将要进入的层级对象）
// {THING.BaseObject} ev.current 当前层级对象（将要进入的层级对象）
// {THING.BaseObject} ev.previous 上一层级对象（离开的层级对象）
app.on(THING.EventType.LevelChange, function (ev) {
  var object = ev.current;
  // app.camera.flyTo({
  //     object: object,
  //     xAngle: 90, // 绕物体自身X轴旋转角度
  //     yAngle: 0, // 绕物体自身Y轴旋转角度
  //     radiusFactor: 3, // 物体包围盒半径的倍数
  //     time:  1000,
  //     complete: function () {
  //         THING.Utils.log("飞行结束");
  //     }
  // });
  if (object instanceof THING.Campus) {
    THING.Utils.log("Campus: " + object.type);
  } else if (object instanceof THING.Building) {
    THING.Utils.log("Building: " + object.type);
    app.query("roomNumber").destroyAll();
    destroyAllModel();
  } else if (object instanceof THING.Floor) {
    THING.Utils.log("Floor: " + object.userData);
    // object.wall.style.color = 'red';
  } else if (object instanceof THING.Room) {
    clearTimeout(TIMER);
    THING.Utils.log("Room: " + object.type);

    // THING.Utils.log(object.doors)
  } else if (object instanceof THING.Thing) {
    THING.Utils.log("Thing: " + object.type);
  }
  // window.parent.postMessage({
  //     funcName: 'levelChange',
  //     level: ev.current.type,
  //     levelId: ev.current.id,
  //     previous: ev.previous ? ev.previous.type : null
  // }, '*')
});

app.on(THING.EventType.LevelFlyEnd, function (ev) {
  if (
    ev.current.type == "Room" ||
    ev.current.type == "Floor" ||
    ev.current.type == "Campus" ||
    ev.current.type == "Building"
  ) {
    window.parent.postMessage(
      {
        funcName: "levelChange",
        level: ev.current.type,
        levelId: ev.current.type == "Floor" ? ev.current.name : ev.current.id,
        previous: ev.previous ? ev.previous.type : null,
      },
      "*"
    );
  }
});
// app.on("click", function (ev) {
//   THING.Utils.log(
//     ev.pickedPosition[0],
//     ev.pickedPosition[2],
//     "ev.objectev.objectev.object"
//   );
// });
