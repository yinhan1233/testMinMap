 // 加载地图
 var app = new THING.App();
 // 设置app背景为黑色
 app.background = [0, 0, 0];
 // 引用地图组件脚本
 THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
     let defaultPath = '/Resources/CityMap/admin/1009432';
     app.create({
       type: 'Map',
       // 地图场景名：新建城市117
       url: defaultPath + '/map.bundle.json',
       // url: "./cityBuilder/1/map.bundle.json",
       resourceConfig : {
           resourcePrefix: defaultPath
       },
       complete: function (event) {
           console.log(event.object.userLayers.length);
       }
   });
   let geopoint = app.create({
    type: 'GeoPoint',
    name:'ceshi',
    coordinates:  [116.44778,39.9565],
    modelAngel: 90,
    renderer: {
        type: 'model',
        url: './file/common/models/bus.glb',
        size: 50
    }

   })
 });
 