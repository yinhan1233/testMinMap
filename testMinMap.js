// 加载地图
var app = new THING.App();
// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用地图组件脚本
THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
    let defaultPath = '/Resources/CityMap/admin/1064811';
    app.create({
        type: 'Map',
        // 地图场景名：唐山市路北区场景
        url: defaultPath + '/map.bundle.json',
        // url: "./cityBuilder/1/map.bundle.json",
        resourceConfig: {
            resourcePrefix: defaultPath
        },
        complete: function (event) {
            console.log(event.object.userLayers.length);
        }
    });
});
// 创建APP对象
var app = new THING.App();
// 引用拓扑组件脚本
THING.Utils.dynamicLoad(['./static/js/thing.diagram.min.js'], function () {
    // 初始化拓扑场景
    const graph = new THING.DIAGRAM.Graph({
        container: 'div2d', // 容器元素 id
        url: './diagrams/c3c94e7a7548d9da/topo.json' // 拓扑场景资源路径
    });
    // 视图加载完成
    graph.on('load', () => {
        console.log('加载完成');
    });
})

// 离线开发引入森大屏图表脚本
THING.Utils.dynamicLoad(['./static/release/thingjs-charts.umd.js'],
async function () {
    const scenebundle = THING.CHARTS.Utils.loadBundle(
        '/Resources/BigScreen/admin/f232639c3439491e861cc7823f6ef38d', // 前缀
        {
            container: document.querySelector('#div2d'), // 挂载节点
            hide3D: true, // 隐藏场景内的3D，默认为false
            hideCanvasBackground: true, // 画布背景色是否设置为透明的，默认false
            //id: f232639c3439491e861cc7823f6ef38d, //默认走bundle下的main，main不存在读id
        }
    )
    await scenebundle.waitForComplete() // 等待场景加载完成
    scenebundle.ui // ui实例
}
)