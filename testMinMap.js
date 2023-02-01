
// // 加载场景代码 
// var app = new THING.App({ resourceLibraryUrl: "./", 
//    url: './scene/1/'
// });
// /**
//  * 引入场景预览脚本
//  * 说明：引用该脚本需要传递参数，参数为创建的app对象、类型type，type的值有两种，scene和city，
//  *      用于区分园区和地图、如果type值为city，需要额外传递参数，参数值为创建的map对象。
//  * 备注：
//  *      1. 如果引入该脚本是预览园区，自v0.1.8版本起，需要自行决定是否在“load”事件中调用初始
//  *         化方法，初始化方法示例为：new AppPreview({app:app, type:'scene'})
//  *      2. 如果引入该脚本是预览地图，则应在引用地图组件脚本complete回调中引用，初始化
//  *         方法示例为：new AppPreview({app:app, type:'city', map:event.object})
//  */
// // THING.Utils.dynamicLoad(['./guide/ScenePreview/v0.1.9/AppPreview.min.js'],
// //     function () {
// //         // 在load事件中的调用示例如下所示：
// //         app.on('load', function(){
// //             new AppPreview({app: app, type: 'scene'});
// //         });
// //     }
// // )
 // 加载地图
 var app = new THING.App();
 // 设置app背景为黑色
 app.background = [0, 0, 0];
 // 引用地图组件脚本
 THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
     let defaultPath = '/Resources/CityMap/admin/43933';
     app.create({
       type: 'Map',
       // 地图场景名：西城区基础图层
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













    


    

