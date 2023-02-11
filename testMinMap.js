
// 加载场景代码 
var app = new THING.App({ resourceLibraryUrl: "./", 
   url: './scene/1/'
});
// 创建Thing
var app = new THING.App();
var obj = app.create({
    type: 'Thing',
    name: '北京CBD_北京SKP_G', 
    url:'/Resources/Model/admin/447aebc08c5e4bc1a2f0d84a0747b763',
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
        url: '/api/chart/638ede8aee63ce091cc770ca',
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











    


    

