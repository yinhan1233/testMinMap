
    


/**
* 名称：极光地图
* 说明：当前效果模板仅适用于渲染地图效果
*/
// 加载地图
var app = new THING.App();
// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用地图组件脚本
THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
    // 渲染模板的url
    const mapUrl = '/Resources/EffectTemplate/admin/3940';
    app.create({
        type: 'Map',
        //此处可更换为CityBuilder生成的地图URL链接
        url: 'https://www.thingjs.com/citybuilder_console/mapProject/config/TVRJeE9EQTFDaXR5QnVpbGRlckAyMDE5/true',
        complete: function (event) {
            // 进行效果模板渲染
            const resourceConfig = {
                resourcePrefix: mapUrl
            };
            CMAP.Util.applyTemplate(mapUrl+'/map.json', resourceConfig);
        }
    });
});