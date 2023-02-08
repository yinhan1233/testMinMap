
// 加载场景代码 
var app = new THING.App({ resourceLibraryUrl: "./", 
   url: './scene/1/'
});


// 引入一键图表脚本
THING.Utils.dynamicLoad(['./static/ScenePreview/chart/PreviewChartControl.js'], function () {
    // 创建图表
    new PreviewChartControl({
        url: '/api/chart/63870ddd05108267c4a1b6df',
        tag: '1',
        isLoad: true,  // 加载页，默认为true
        isApplyBackground: false,  // 是否应用图表背景，启用该参数会替换app.background的值，默认false
        autoResize: {  // 图表自适应
           enable: false,  // 自适应图表分辨率，默认为false
           orgin: 'center center'  // 自适应的基准点，第一个参数取值为:left、center、right，第二个参数取值为:top、center、bottom，默认值为“center center”
        },
        complete: function(){
           
        }
    });
})
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

















    


    

