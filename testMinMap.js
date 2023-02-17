 // 加载地图
 var app = new THING.App();
 // 设置app背景为黑色
 app.background = [0, 0, 0];
 // 引用地图组件脚本
 THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
     let defaultPath = '/Resources/CityMap/admin/1059084';
     app.create({
       type: 'Map',
       // 地图场景名：城市
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

// 离线开发引入森大屏图表脚本
THING.Utils.dynamicLoad(['/static/release/thingjs-charts.umd.js'],
async function () {
    const scenebundle = THING.CHARTS.Utils.loadBundle(
        '/Resources/BigScreen/admin/e69d08a5f1414f4ca25c6010e64f8f59', // 前缀
        {
            container: document.querySelector('#div2d'), // 挂载节点
            hide3D: true, // 隐藏场景内的3D，默认为false
            hideCanvasBackground: true, // 画布背景色是否设置为透明的，默认false
            //id: e69d08a5f1414f4ca25c6010e64f8f59, //默认走bundle下的main，main不存在读id
        }
    )
    await scenebundle.waitForComplete() // 等待场景加载完成
    scenebundle.ui // ui实例
}
)
// 离线开发引入森图表脚本
THING.Utils.dynamicLoad([
    '/static/plugins/compile.js',
    '/static/plugins/vue.min.js',
    '/Resources/senChart/admin/f5e187be77074a22833becd4e3492d8a/f5e187be77074a22833becd4e3492d8a.js'
  ],
    function () {
        /**
         * 园区或地图初始化完成后加载图表
         */
        createButton();
        let c = new window.conch['Cf5e187be77074a22833becd4e3492d8a'](document.querySelector('#chartDom'), {
            prefix: '/Resources/senChart/admin/f5e187be77074a22833becd4e3492d8a'
        })
        c.render();
    })
  /**
   * 利用模板字符串 创建页面元素并添加到div2d中
   */
  function createButton() {
    // 使用 bootstrap 样式
    var template =
        "<div id='chartDom' style='position:absolute;left:20px;top:20px;z-index:2;width:400px;height:250px;'></div>";
    var btn = $('#div2d').append($(template));
  return btn;
  }
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
        










    


    

