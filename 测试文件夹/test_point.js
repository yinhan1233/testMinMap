var app;
var region = null;  // 自定义区域
var evPosition = null; // 存储触发事件后鼠标的位置
var coordinatesArr = []; // 存储鼠标点击后坐标点的集合
var regionPoint = null;
var existRegion = null; // 已存在的区域
var existPoints = []; // 已存在的区域坐标点集合
var curMapCampus; 
    
THING.Utils.dynamicLoad(['http://www.thingjs.com/uearth/history/uearth.min.v1.7.14.js'],()=>{
    app = new THING.App();
    app = null;
    app = new THING.App();
    app.background = '#000'
    // curMapCampus = app.create({
    //     type: 'Map',
    //     url: "./cityBuilder/1/map.bundle.json",
    //     complete: function (event) {
    //         // console.log(event.object.userLayers.length);
    //         console.timeEnd("map load");
    //     }
    // });
    // new THING.widget.Button('点击跳转场景', function () {
    //     app = null;
    //     curMapCampus.destroy();
    //     // 创建东湖园区
    //     createCampusModel();
    // },'changeScene')
})

function createCampusModel() {
    app = new THING.App({
        // url: 'https://www.thingjs.com/static/models/factory',  // 线上场景地址
        // // url: '/api/scene/dh',  // 本地场景地址
        // background: '#000000',
        // env: 'Seaside',
    });

    // app.on('load', function (ev) {
    //     curCampus = ev.campus;
    //     // 进入层级切换
    //     app.level.change(ev.campus);
    // })
    // new THING.widget.Button('创建自定义形状', function () {
    //     // 物体单击事件
    //     // 点击左键添加节点双击结束绘制
    //     app.on('SingleClick', function (ev) {
    //         if (ev.button === 0) {
    //             if (!ev.picked) return;
    //             evPosition = ev.pickedPosition;
    //             console.log(evPosition)
    //             createPoint(evPosition);
    //             coordinatesArr.push(evPosition);
    //         } else {
    //             if (coordinatesArr.length < 2) {
    //                 destroyModelAll();
    //                 return;
    //             }
    //         }
    //     }, 'createPoint');
    //     // 结束绘制当前测量线段
    //     app.on('DBLClick', function (ev) {
    //         var object = ev.object;
    //         if (coordinatesArr.length < 2) {
    //             throw Error("点位不得少于3个");
    //         }
    //         if (coordinatesArr.length >= 3) {
    //             createPolygon(coordinatesArr);
    //             window.parent.postMessage({ finishCreatePolygon: true }, '*');
    //         }
    //     }, 'closeCreatePoint');
    //     // 右键单击清除
    //     app.on('SingleClick', function (ev) {
    //         if (ev.button === 1) {
    //             regionReset();
    //         }
    //     });
    // });
    // new THING.widget.Button('重置', function () {
    //     regionReset();
    // })
}

// 销毁实例
function destroyModelAll() {
    coordinatesArr = [];
}

// 重置
function regionReset() {
    destroyModelAll();
    var plane = app.query(/existPlane/);
    if (plane.length > 0) {
        plane.destroyAll();
        region = null;
    }
    if (regionPoint) {
        app.query(new RegExp('points')).destroyAll();
    }
    $(document.body).css('cursor', 'default');
}

/**
 * 创建节点
 * @param {Array} ePosition - 坐标点
 */
function createPoint(ePosition) {
    var numIndex = 0;
    regionPoint = app.create({
        type: 'Sphere',
        id: 'points' + numIndex++,
        name: 'points' + numIndex++,
        radius: 0.15, // 半径
        widthSegments: 16,
        heightSegments: 16,
        position: ePosition, // 球体坐标
        style: {
            color: '#c10000',
            roughness: 50,
            opacity: 0.6
        }
    });
}

// 绘制自定义区域
function createPolygon(points) {
    // 创建多边形区域
    region = app.create({
        type: 'PolygonRegion',
        id: 'polygonRegion01',
        name: 'existPlane',
        points: points,  // 传入世界坐标系下点坐标
        style: {
            regionColor: 'rgb(0,47,167)',  // 区域颜色
            lineColor: 'rgb(143,143,127)',  // 边框颜色
            regionOpacity: 0.6  // 不透明度 (默认是 0.5 半透明)
        },
        complete: function () {
            coordinatesArr = [];
        }
    })
    region.draggable = false;  // 开启拖拽
    region.add(app.query(new RegExp('points')));
}