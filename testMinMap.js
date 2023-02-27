
// /**
// * 名称：极光地图
// * 说明：当前效果模板仅适用于渲染地图效果
// */
// // 加载地图
// var app = new THING.App();
// // 设置app背景为黑色
// app.background = [0, 0, 0];
// // 引用地图组件脚本
// THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
//     // 渲染模板的url
//     const mapUrl = '/Resources/EffectTemplate/admin/3940';
//     app.create({
//         type: 'Map',
//         //此处可更换为CityBuilder生成的地图URL链接
//         url: 'https://www.thingjs.com/citybuilder_console/mapProject/config/TVRJeE9EQTFDaXR5QnVpbGRlckAyMDE5/true',
//         complete: function (event) {
//             // 进行效果模板渲染
//             const resourceConfig = {
//                 resourcePrefix: mapUrl
//             };
//             CMAP.Util.applyTemplate(mapUrl+'/map.json', resourceConfig);
//         }
//     });
// });
// 创建Thing
var app = new THING.App();
var obj = app.create({
    type: 'Thing',
    name: '桌子', 
    url:'/Resources/Model/admin/4ce8d7c7045b4782b5caade8db35cda8',
    position: [0, 0, 0],
    angle: 0,
    complete: function () {
        console.log('thing created: ' + this.id);
    }
});
// 引入一键图表脚本
THING.Utils.dynamicLoad(['/static/ScenePreview/chart/PreviewChartControl.js'], function () {
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
        complete: function () {

        }
    });
})