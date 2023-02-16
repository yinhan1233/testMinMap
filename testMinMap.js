
// // 加载场景代码 
// var app = new THING.App({ resourceLibraryUrl: "./", 
//    url: './scene/1/'
// });
// // 创建Thing
// var obj = app.create({
//     type: 'Thing',
//     name: '北京CBD_北京SKP_G', 
//     url:'/Resources/Model/admin/447aebc08c5e4bc1a2f0d84a0747b763',
//     position: [0, 0, 0],
//     angle: 0,
//     complete: function () {
//         console.log('thing created: ' + this.id);
//     }
// });

//  // 加载地图
//  var app = new THING.App();
//  // 设置app背景为黑色
//  app.background = [0, 0, 0];
//  // 引用地图组件脚本
//  THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
//      let defaultPath = '/Resources/CityMap/admin/43933';
//      app.create({
//        type: 'Map',
//        // 地图场景名：西城区基础图层
//        url: defaultPath + '/map.bundle.json',
//        // url: "./cityBuilder/1/map.bundle.json",
//        resourceConfig : {
//            resourcePrefix: defaultPath
//        },
//        complete: function (event) {
//            console.log(event.object.userLayers.length);
//        }
//    });
//  });
//  // 加载地图
//           var app = new THING.App();
//           // 设置app背景为黑色
//           app.background = [0, 0, 0];
//           // 引用地图组件脚本
//           THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
//               let defaultPath = '/Resources/CityMap/admin/1043850';
//               app.create({
//                 type: 'Map',
//                 // 地图场景名：路北区
//                 url: defaultPath + '/map.bundle.json',
//                 // url: "./cityBuilder/1/map.bundle.json",
//                 resourceConfig : {
//                     resourcePrefix: defaultPath
//                 },
//                 complete: function (event) {
//                     console.log(event.object.userLayers.length);
//                 }
//             });
//           });
        
 // 加载地图
 var app = new THING.App();
 // 设置app背景为黑色
 app.background = [0, 0, 0];
 // 引用地图组件脚本
 THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
     let defaultPath = '/Resources/CityMap/admin/1075716';
     app.create({
       type: 'Map',
       // 地图场景名：马尔康市
       url: defaultPath + '/map.bundle.json',
       // url: "./cityBuilder/1/map.bundle.json",
       resourceConfig : {
           resourcePrefix: defaultPath
       },
       complete: function (event) {
           console.log(event.object.userLayers.length);
       }
   });
 });

        










    


    

