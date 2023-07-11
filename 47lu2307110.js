
    /**
     * 引入场景预览脚本
     * 说明：引用该脚本需要传递参数，参数为创建的app对象、类型type，type的值有两种，scene和city，
     *       用于区分园区和地图，如果type值为city，需要额外传递参数，参数值为创建的map对象。
     * 备注：
     *       1. 如果引入该脚本是预览园区，则不能在“load”事件中调用。初始化方法示例
     *          为：new AppPreview({app:app, type:'scene'})
     *       2. 如果引入该脚本是预览地图，则应在引用地图组件脚本complete回调中引用，初始化
     *          方法示例为：new AppPreview({app:app, type:'city', map:event.object})
     */


// 加载场景代码 
var app = new THING.App({ resourceLibraryUrl: "./", 
   url: './scene/1/'
});

THING.Utils.dynamicLoad(['/guide/ScenePreview/v0.1.9/AppPreview.min.js'],
    function () {
        new AppPreview({ app: app, type: 'scene' });
    }
)
    