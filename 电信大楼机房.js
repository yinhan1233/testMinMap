



// 加载场景代码 
var app = new THING.App({ 
    // resourceLibraryUrl: "./", 
   url: "./scene/1/"
});

THING.Utils.dynamicLoad(['/guide/ScenePreview/v0.1.9/AppPreview.min.js'],
    function () {
        // 在load事件中的调用示例如下所示：
        app.on('load', function(){
            new AppPreview({app: app, type: 'scene'});
            
// 环境光对象
var ambientLight = {
    intensity:0.3,
    color: 'rgb(255, 255, 255)',
};
// 半球光照
var hemisphereLight = {
    intensity:0,
    color: '#ffffff',
    groundColor: '#222222',
};
// 主灯光对象
var mainLight = {
    shadow:true,
    intensity:0.5,
    color: '#ffffff',
    alpha:147,
    beta:30,
    shadowBias:0,
    shadowNormalBias:0,
};
// 第二光源对象
var secondaryLight = {
    shadow:false,
    intensity:0,
    color: '#ffffff',
    alpha:138,
    beta:10,
};
// 全局配置
var config = {
    showHelper:false,
    ambientLight,
    hemisphereLight,
    mainLight,
    secondaryLight
};
app.lighting = config;



        });
    }
)



