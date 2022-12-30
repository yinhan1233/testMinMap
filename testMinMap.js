// /**
//  * 说明：小地图控件
//  * 难度：★★☆☆☆
//  */
// var app = new THING.App({
//     url: 'https://www.thingjs.com/static/models/factory',
//     background: '#000000',
//     env: 'Seaside',
// });
// var control;
// app.on('load', function () {
//     // 创建提示
//     initThingJsTip("本例程展示了平台内置的小地图控件，点击左侧按钮进行体验");
//     new THING.widget.Button('添加控件', add_control);
//     new THING.widget.Button('重置', remove_control);
// });

// /**
//  * 添加控件
//  */
// function add_control() {
//     if (control) return;
//     // 摄像机飞行到某位置
//     app.camera.flyTo({
//         'position': [29.94499415627374, 30.51853855043671, 27.57498676778577],
//         'target': [4.330696213040164, -0.6832814144239165, -8.422960580769757],
//         'time': 1000,
//         'complete': function () {
//             control = new THING.MiniMapControl({
//                 width: 200,
//                 height: 200,
//                 position: THING.CornerType.LeftBottom,
//                 opacity: 0.8,
//                 scale: 2,
//                 center: [0, -10],
//                 cameraViewImg: './/static/images/minimap1.png',
//                 cameraCenterImg: './/static/images/minimap0.png',
//                 // hasClose: true, // 是否有关闭按钮（默认没有）当点击关闭按钮时，小地图 enable 为 false
//                 // closeBtnImg: 'https://www.thingjs.com/static/images/minimap2.png'
//             })
//             // 添加小地图控件
//             app.addControl(control);
//         }
//     });
// }

// /**
//  * 删除控件
//  */
// function remove_control() {
//     if (control) {
//         // 摄像机飞行到某位置
//         app.camera.flyTo({
//             'position': [36.013, 42.67799999999998, 61.72399999999999],
//             'target': [1.646, 7.891, 4.445],
//             'time': 1000,
//             'complete': function () {
//                 app.removeControl(control);
//                 control = null;
//                 // control.minimap.enable = !control.minimap.enable;  // 显示、隐藏小地图
//             }
//         });
//     }
// }
 // 加载地图
 var app = new THING.App();
 // 设置app背景为黑色
 app.background = [0, 0, 0];
 // 引用地图组件脚本
 THING.Utils.dynamicLoad(['./source/uearth.min.js'], function () {
     app.create({
       type: 'Map',
       // 地图场景名：城市
       url:"/city/cityBuilder/1042044",
       // url: "./cityBuilder/1/map.bundle.json",
       resourceConfig : {
           resourcePrefix: '/Resources'
       },
       complete: function (event) {
           console.log(event.object.userLayers.length);
       }
   });
 });