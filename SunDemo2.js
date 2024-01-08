



var jiguiJson = []   //机柜
let picturesJson = [
    { id: 26, name: '温湿度计', x: '-2.197518997376103', y: '0.1409924609261307', z: '2.7296974824781643', type: 'wsd', direction: '0', model: '/uploads/wechat/407382/file/SunDemo2/images/iconset0480.png', l: 1, w: 1, h: 1 },
    { id: 28, name: '温湿度计', x: '1.883813126785322', y: '-0.3996796086556482', z: '0', type: 'wsd', direction: '0', model: '/uploads/wechat/407382/file/SunDemo2/images/iconset0480.png', l: 1, w: 1, h: 1 },
]


let equipmentArrays = []

console.log('_______________________________');

/**
 * 说明：通过动态加载场景 动态加载建筑里的楼层
 * 操作：双击建筑，动态加载场景
 */

var dataObj = { progress: 0 };  // 场景加载进度条数据对象
var loadingPanel;  // 进度条界面组件
var curCampus;
var panel = null;//设备信息面板、
var textRegion = '';//全局的文字
var markerCanvasTitle = '' //canvas文字


let ctrl = null; // 模板控制器
let lighting = null; // 灯光效果
let postEffect = null; // 后期设置
let skyEffect = null; // 天空盒
let background = null; // 背景
let modelData = null; // 模板数据
let modelDataUrl = ''; // 模板路径
let tempData = null; // 临时模板数据，在关闭模板后，再次开启效果时调用
let tempUrl = ''; // 临时模板路径，在关闭模板后，再次开启效果时调用
let groundVisible = true; // 特效地面是否显示
let particleVisible = true; // 特效粒子是否显示
let complate = null;// 效果模板对比类
let ctrl_name = null; // 效果模板名称

var curRoomCampus = {
    id:1,
    ids: '1,16,17',
    type: 'RoomCampus',
    name: "房间场景1",
   url: './scene/1/',
    isAlaram:false,//是否从告警列表点进来
    jiguiId:'',//告警机柜ID
    assetsNumber:''  // 告警设备ID
    // url: "/api/scene/40cc52234494058a4922d07c"
}
// 配置相应建筑的园区场景url  场景地址
var campusUrl = [

    {
        id:1,
        type: 'RoomCampus',
        name: "周家桥",
        url: './scene/1/'
        // url: "/api/scene/40cc52234494058a4922d07c"
    },

    {
        id:2,
        type: 'RoomCampus',
        name: "房间场景2",
        url: "/api/scene/40cc52234494058a4922d07c"
    },
   ];

var jiguiCampusUrl= {
        type: 'CabinetCampus',
        name: "机柜场景",
        url: "./scene/2/"
    }


var curRoomCampus = {
    id:1,
    ids: '1,16,17',
    type: 'RoomCampus',
    name: "房间场景1",
   url: './scene/1/',
    isAlaram:false,//是否从告警列表点进来
    jiguiId:'',//告警机柜ID
    assetsNumber:''  // 告警设备ID
    // url: "/api/scene/40cc52234494058a4922d07c"
}

// 加载场景代码 
var app = new THING.App({ resourceLibraryUrl: "./",
    url: './scene/1/',
    ///api/scene/9d01df4b015b3e7fcd044711
    // url: '/api/scene/9d01df4b015b3e7fcd044711',
});






// 引入天空盒
/*$.get('/api/skybox/a927cfd59bf046a361a0bf6e', function (result) {
  
    app.skyBox = JSON.parse(result);
});
*/





//app.skyBox = {
//    bk: '/uploads/wechat/407382/file/SunDemo2/images/back.png',
//    dn: '/uploads/wechat/407382/file/SunDemo2/images/down.png',
//    fr: '/uploads/wechat/407382/file/SunDemo2/images/front1.png',
//    lf: '/uploads/wechat/407382/file/SunDemo2/images/left.png',
//    rt: '/uploads/wechat/407382/file/SunDemo2/images/right.png',
//    up: '/uploads/wechat/407382/file/SunDemo2/images/up.png'
//};










//  app.skyBox = {
//    bk: '/uploads/wechat/407382/file/SunDemo2/images/all.png', 
//    dn: '/uploads/wechat/407382/file/SunDemo2/images/all.png', 
//    fr: '/uploads/wechat/407382/file/SunDemo2/images/front1.png', 
//    lf:'/uploads/wechat/407382/file/SunDemo2/images/all.png',
//    rt:'/uploads/wechat/407382/file/SunDemo2/images/all.png', 
//    up: '/uploads/wechat/407382/file/SunDemo2/images/all.png'
//  };


THING.Utils.dynamicLoad([
    //  'https://www.thingjs.com/static/plugins/thing.effect.min/1.4.0/EffectThemeControl.min.js',
    // 'https://campus.thingjs.com/builder/api-campus/scene/template/file/10072/frame.js',
    './static/ScenePreview/infopanel3d/v0.2.0/infopanel3d.min.js',
    // '/uploads/wechat/407382/file/SunDemo2/js/backgroud.js',
    '/uploads/wechat/407382/file/SunDemo2/js/utils.js',

    '/uploads/wechat/407382/file/SunDemo2/js/postMessageUtils.js',
    '/uploads/wechat/407382/file/SunDemo2/js/api.js'


], function () {

    app.on("load", function (ev) {
 

        curCampus = ev.campus;

        app.level.change(ev.campus);

        app.lighting = {
            mainLight: {
                //  intensity: 1.5
            }
        };
        console.log(app.camera.position, '摄像机得位置')
        app.camera.xAngleLimitRange = [0, 90]

        app.focus()//使3d界面获得聚焦
    	
      
        $('#div3d').trigger('click')
           app.camera.zoom(10000,500)
       //  $('#div3d').trigger('MouseWheel')
       
        getData()

    })

})




//点击任何位置拾取坐标
app.on('click', function (ev) {
    console.log(ev.pickedPosition)
})
//点击任何位置拾取坐标
app.on('MouseWheel', function (ev) {
 console.log(1111)
   

    
   // console.log(ev.pickedPosition)
})
//初始化机房中设备数据
function initDatas(datas) {
    for (var i = 0; i < datas.length; i++) {
        
        if(datas[i].model != null){
            createCabinetModel(curCampus, datas[i])
        }
    }
}

// 创建机房中模型设备 通用
function createCabinetModel(parent, data) {

     let l =  data.l ==null ? 1:data.l
     let h = data.h == null ? 1:data.h
     let w = data.w == null ? 1:data.w
     let x = data.x == null ?0:data.x
     let y = data.y == null ?0:data.y
     let z = data.z == null ? 0:data.z == '' ? 0:data.z
     let model = data.model == null ?'20160714153938906053751': data.model


    var obj = app.create({
        type: data.type,
        id: data.id,
        name: data.type,

        url: "/api/models/" + model + "/0/gltf/", // 模型地址

        position: [x, z,y],
        userData: data,
        parent: parent,
        // visible: true,
        angle: data.toward,
        //inheritTheme: false,
        // scale:
        //   i.contractUcount == 800 ? [1.23, 0.972, 1.25] : [0.923, 0.972, 1.25],
        scale: [l, h, w],
        complete: function (ev1) {
           //   console.log("创建成功：：："+data.name,obj)
           
            //创建成功 
            //鼠标移入事件
            obj.on("mouseon", function (ev) {
                // this.style.outlineColor = "#20FCF8";
                this.style.highlight = "#20FCF8"
                createCanvasTitle(obj)
                createLocationPicture(obj)
                iframePostMessage({ funcName: 'jiguiMouseon', param: data })
            })
            obj.on("mouseoff", function (ev) {

                //this.style.outlineColor = null;
                this.style.highlight = null
                if (markerCanvasTitle !== '') {
                    markerCanvasTitle.destroy()
                }
                if (LocationPicture !== null) {
                    LocationPicture.destroy()
                }
                iframePostMessage({ funcName: 'jiguiMouseoff', param: data })
            })
            //鼠标点击事件
            obj.on("click", function (ev) {


                if (data.type === 'Cabinet') {
                    changeScene({
                        type: 'CabinetCampus',
                        name: "机柜场景",
                        url: "./scene/2/"
                    })
                   
                    equipmentArrays = data.deviceList
                    
                    iframePostMessage({ funcName: 'handelJigui', param: data })

                }
                if(data.type === 'Camera'){
                   

                }


            })
            //鼠标点击事件
            obj.on("dbclick", function (ev) {
                console.log('鼠标双击事件：：：')




            })

           // console.log(curRoomCampus, '场景信息')
            if (curRoomCampus.isAlaram) {
                if (data.id == curRoomCampus.jiguiId) {
                    this.style.highlight = "red"
                }

            }



            if (data.model == '20160509171503580858085') {//烟感
                obj.style.color = "#696969"

            }

        },
        
        
    });
}





/**
 * 创建机柜中设备 -通用
 */
function createEquipment(parent, data) {
   // var model = '20161024152407815927201'   //data.deviceModel == ''?'20161024153639323245104':data.deviceModel 
   
      
     let model = data.model == null  ?'20160714153938906053751':  data.model == ''?"20160714153938906053751":data.model
     
   
   
    var obj = app.create({
        type: 'Rack',
        id: data.assetsNumber,
        name: 'Rack',

        url: "/api/models/" +model + "/0/gltf/", // 模型地址

        position: [parent.x - 0.03, (data.ux - 1) * 0.045 + 0.01, 0.4],
        userData: data,
        parent: parent,
        // visible: true,
        // angle: data.direction,
        //inheritTheme: false,
        //scale: [1, ((data.uy - data.ux + 0.4) * 0.045) / data.mh, 1],
        scale: [1, ((data.uy - data.ux + 0.4) * 0.045) / 0.13, 1],
        //   i.contractUcount == 800 ? [1.23, 0.972, 1.25] : [0.923, 0.972, 1.25],
        // scale: [data.l, data.h, data.w],
        complete: function (ev1) {
           
            obj.on("mouseon", function (ev) {


                this.style.outlineColor = "green";

            })
            obj.on("mouseoff", function (ev) {

                this.style.outlineColor = null;
            })

            obj.on("click", function (ev) {
                selectEqpSuccess(obj)

                // this.style.outlineColor = 'yellow';



            })
            if (curRoomCampus.isAlaram) {
                if (data.assetsNumber == curRoomCampus.assetsNumber) { this.style.highlight = 'red'; }

            }





        },
    });
}








// 创建 图片标注   
function createPicture(parent, data) {

    app.create({
        type: 'Marker',
        name: "marker",
        url: '/uploads/wechat/407382/file/SunDemo2/images/iconset0480.png',
        size: 1,
        position: [data.x, data.z == undefined ? 0 : data.z, data.y],

        style: {
            alwaysOnTop: true
        }
    });
}


/**
 * 创建canvas文字
 */

function createCanvasTitle(parent) {





    markerCanvasTitle = app.create({
        type: "Marker",
        parent: parent,
        localPosition: [0, 1.1, 0],
        size: 1,
        canvas: createTextCanvas(parent.userData.name),
    }).on('click', function (ev) {
        // var txt = Math.floor(Math.random() * 100);
        ev.object.canvas = createTextCanvas(parent.userData.name, ev.object.canvas)
    });
}



/**
 * 创建canvas内容
 */
function createTextCanvas(text, canvas) {
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
    }
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#20FCF8";
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 50, 50);
    return canvas;
}


/**
 * 创建图片标注
 * 
 */
var LocationPicture = null
function createLocationPicture(parent, datas) {
    if (LocationPicture != null) {
        LocationPicture.destroy()

    }
    LocationPicture = app.create({
        type: "Marker",
        //  url: "https://www.thingjs.com/static/images/warning1.png",
        url: '/uploads/wechat/407382/file/SunDemo2/images/Group.png',
        parent: parent,
        localPosition: [0, -1.2, 0],
        //  size: 1
    }).on('click', function () {
        // marker1.url = "https://www.thingjs.com/static/images/warning.png"

    });


}

