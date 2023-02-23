


//  var app = new THING.App({ 
//     url: '/api/scene/6065231662535370718'
//  });
var app = new THING.App({
           url: '/api/scene/2498821636707953215',  // 场景地址
        //    resourceLibraryUrl:'./'
       });

// // 引入数据面板标记
// THING.Utils.dynamicLoad([
//    '/static/attachment/js/objectdecorator.min.js',
// ],
// function () {
//    var app = new THING.App({
//        url: 'https://www.thingjs.com/static/models/factory',  // 场景地址
//        background: '#000000',
//        env: 'Seaside'
//    });
//    // 创建标记实例
//    let atm = new Attachment();
//    // 路径
//    let acssessorysrc = '/Resources/bundle/admin/RMK100000000187590';
//    // 加载场景后执行
//    app.on('load', function (ev) {
//        // 收集标记挂载对象
//        let car = app.query('car01')[0];
//        /**
//         * 创建标记
//         * @param {'地图'，'园区'，'室内'} sceneType - 使用环境
//         */
//        atm.create(car, acssessorysrc, { sceneType: '园区' }).then(function () {
//        });
//    });
// })
// // 离线开发引入森图表脚本
// THING.Utils.dynamicLoad([
//    '/static/plugins/compile.js',
//    '/static/plugins/vue.min.js',
//    '/Resources/senChart/admin/f5e187be77074a22833becd4e3492d8a/f5e187be77074a22833becd4e3492d8a.js'
//  ],
//    function () {
//        /**
//         * 园区或地图初始化完成后加载图表
//         */
//        createButton();
//        let c = new window.conch['Cf5e187be77074a22833becd4e3492d8a'](document.querySelector('#chartDom'), {
//            prefix: '/Resources/senChart/admin/f5e187be77074a22833becd4e3492d8a'
//        })
//        c.render();
//    })
//  /**
//   * 利用模板字符串 创建页面元素并添加到div2d中
//   */
//  function createButton() {
//    // 使用 bootstrap 样式
//    var template =
//        "<div id='chartDom' style='position:absolute;left:20px;top:20px;z-index:2;width:400px;height:250px;'></div>";
//    var btn = $('#div2d').append($(template));
//  return btn;
//  }
// // 引入一键图表脚本
// THING.Utils.dynamicLoad(['/static/ScenePreview/chart/PreviewChartControl.js'], function () {
//    // 创建图表
//    new PreviewChartControl({
//        url: '/api/chart/63870ddd05108267c4a1b6df',
//        tag: '1',
//        isLoad: true,  // 加载页，默认为true
//        isApplyBackground: false,  // 是否应用图表背景，启用该参数会替换app.background的值，默认false
//        autoResize: {  // 图表自适应
//            enable: false,  // 自适应图表分辨率，默认为false
//            orgin: 'center center'  // 自适应的基准点，第一个参数取值为:left、center、right，第二个参数取值为:top、center、bottom，默认值为“center center”
//        },
//        complete: function () {

//        }
//    });
// })

// /**
//   * 名称：默认A_太空旅客Day
//   * 说明：此效果模板适用于园区
//   */

// // 设置app背景为黑色
// app.background = [0, 0, 0];
// // 引用效果模板组件脚本
// THING.Utils.dynamicLoad([
//     '/static/plugins/thing.effect.min/1.5.2/EffectThemeControl.min.js',
//     '/Resources/EffectTemplate/admin/697/frame.js',
// ], function () {
//     app.on('load', function (ev) {
//         app.level.change(ev.campus);
//         //关闭，进到室内自动切换天空盒  
//         app.level.options['autoChangeBackground'] = false;
//         //初始化
//         var control = new THING.EffectThemeControl();
//         app.addControl(control, '效果模板控制器');
//         //获取模板控制器
//         var ctrl = app.getControl('效果模板控制器');
//         //注册模板,data是模板数据。如果是本地效果模板包，必须填第三个参数，该参数是模板包相对于该片代码的路径
//         ctrl.registerTheme('default_parkbusiness', data, '/Resources/EffectTemplate/admin/697');
//         //获取园区
//         c = app.query('.Campus')[0];
//         //应用效果模板
//         c.applyTheme('default_parkbusiness');
//         ctrl.applyEffectTheme('default_parkbusiness', c);
//         ctrl.applyThemeEnvironment('default_parkbusiness', c);
//     })
// })





    


    

