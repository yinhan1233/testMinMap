
// // 加载场景代码 
// var app = new THING.App({ resourceLibraryUrl: "./", 
//    url: './scene/1/'
// });
// /**
//  * 引入场景预览脚本
//  * 说明：引用该脚本需要传递参数，参数为创建的app对象、类型type，type的值有两种，scene和city，
//  *      用于区分园区和地图、如果type值为city，需要额外传递参数，参数值为创建的map对象。
//  * 备注：
//  *      1. 如果引入该脚本是预览园区，自v0.1.8版本起，需要自行决定是否在“load”事件中调用初始
//  *         化方法，初始化方法示例为：new AppPreview({app:app, type:'scene'})
//  *      2. 如果引入该脚本是预览地图，则应在引用地图组件脚本complete回调中引用，初始化
//  *         方法示例为：new AppPreview({app:app, type:'city', map:event.object})
//  */
// // THING.Utils.dynamicLoad(['./guide/ScenePreview/v0.1.9/AppPreview.min.js'],
// //     function () {
// //         // 在load事件中的调用示例如下所示：
// //         app.on('load', function(){
// //             new AppPreview({app: app, type: 'scene'});
// //         });
// //     }
// // )
// 创建APP对象
var app = new THING.App();
// 引用拓扑组件脚本
THING.Utils.dynamicLoad(['/static/js/thing.diagram.min.js'], function () {
    // 初始化拓扑场景
    const graph = new THING.DIAGRAM.Graph({
        container: 'div2d', // 容器元素 id
        url: './diagrams/41d8aad40177a399/topo.json', // 拓扑场景资源路径
      //   resourceRootPath: '/Resources/topo/admin/41d8aad40177a399'
        resourceRootPath: './'
    });
    // 视图加载完成
    graph.on('load', () => {
        console.log('加载完成');
    });
})












    


    

