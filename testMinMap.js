// 引入一键图表脚本
THING.Utils.dynamicLoad(['/static/ScenePreview/chart/PreviewChartControl.js'], function () {
    // 创建图表
    new PreviewChartControl({
        url: '/api/chart/62c39bdbee63ce05082e4a60',
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
