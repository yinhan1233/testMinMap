 // 加载地图
 var app = new THING.App();
 // 设置app背景为黑色
 app.background = [0, 0, 0];
 // 引用地图组件脚本
 THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
     let defaultPath = '/Resources/CityMap/admin/1042044';
    app.create({
        type: 'Map',
        // 地图场景名：唐山市路北区场景
        url: defaultPath + '/map.bundle.json',
        // url: "./cityBuilder/1/map.bundle.json",
       resourceConfig : {
            resourcePrefix: defaultPath
        },
        complete: function (event) {
            console.log(event.object.userLayers.length);
        }
    });
})