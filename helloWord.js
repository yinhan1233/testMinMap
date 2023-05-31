// 加载地图
var app = new THING.App();
// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用地图组件脚本

var map = null


THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
    let defaultPath = '/Resources/CityMap/admin/1493225';
    map = app.create({
        type: 'Map',
        // 地图场景名：新建城市8
        url: defaultPath + '/map.bundle.json',
        // url: "./cityBuilder/1/map.bundle.json",
        resourceConfig: {
            resourcePrefix: defaultPath
        },
        complete: function (event) {
            // 启动层级控制
            app.level.change(map);
            // 园区的经纬度坐标(GCJ_02坐标系)
            var sceneLonlat = [46.670973, 24.716819];
            // 将园区的经纬度坐标转为三维坐标,第二个参数代表离地高度
            var position = CMAP.Util.convertLonlatToWorld(sceneLonlat, 0.5)
            // 计算园区在地球上的旋转角度，第二个参数可以调整,对园区在地球表面进行旋转
            var angles = CMAP.Util.getAnglesFromLonlat(sceneLonlat, 65);
            // 相机飞到指定的地理位置和指定高度
            app.camera.earthFlyTo({
                lonlat: sceneLonlat,
                height: 200,
                time: 3000,
                complete: function () {
                    var campus = app.create({
                        type: 'Campus',
                        name: '工厂',
                        url: '/api/scene/8134421685014902799', // 园区地址
                        position: position, // 位置
                        angles: angles, // 旋转
                        complete: function () { // 创建成功以后执行 

                            // 初始化机柜等物体
                            init_cabinets();

                        }
                    });


                }
            });


        }
    });
});
 // 初始化机柜
 function init_cabinets() {
    var cabinets = app.query(/Cabinet/);
    cabinets.on('dblclick', function (ev) {      
        // 摄影机飞行
        var pos = this.selfToWorld([0, 2.0, 2.1]);
        var targ = this.position;
        targ[1] += 0.95;
        app.camera.flyTo({
            time: 1000,
            position: pos,
            target: targ,
            isEarth:true,
            complete: function(){
                console.log('飞行完成事件')
                // app.camera.up = THING.Math.normalizeVector(app.camera.position); // app.camera.up获取摄像机方向，校准视角,THING.Math.normalizeVector表示求单位向量
            }
        });
    })
}

