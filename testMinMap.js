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