


// 接收iframe页面传送的数据
window.addEventListener('message', function (e) {
    console.log(e,'监听方法：：；；')
    var data = e.data;

    var funcName = data.funcName;   // 所要调用iframe页面里的函数名
    var param = data.param;


    window[funcName](param);
})


/**
 *切换场景
 * 场景url Id
 */
function changeScene(sceneObj) {
    if (sceneObj.type == 'RoomCampus') {
         for(var i =0;i<campusUrl.length;i++){
            if(sceneObj.id == campusUrl[i].id){
                sceneObj.url = campusUrl[i].url
            }
        }
        curRoomCampus = sceneObj
    }

    createCampus(sceneObj)

}


/**
 * 创建园区
 */
function createCampus(obj) {


    app.create({
        type: "Campus",
        url: obj.url,
        position: [0, 0, 0],
        visible: false, // 创建园区过程中隐藏园区
        complete: function (ev) {
            curCampus.destroy();  // 新园区创建完成后删除之前的
            curCampus = ev.object;  // 将新园区赋给全局变量
            curCampus.fadeIn();  // 创建完成后显示（渐现）
            app.level.change(curCampus);  // 开启层级切换
            //当前是房间场景
            if (obj.type == 'RoomCampus') {


                getData()

            }
            //当前是机柜场景
            if (obj.type == 'CabinetCampus') {

                var CabinetCampus = curCampus.query('CabinetCampus')[0]
                // CabinetCampus.style.emissive = '#ffffff';
                //   CabinetCampus.style.emissiveScrollImage   = '/uploads/wechat/407382/file/SunDemo2/images/jigui-贴图.png'
                //参数1 ：物体得上方5米创建一个聚光灯
                //参数2：初始target得位置
                // createSpotLight(THING.Math.addVector(CabinetCampus.position, [0, 5, 0]), CabinetCampus.position, CabinetCampus)
                //机柜右击事件
                CabinetCampus.on(THING.EventType.SingleClick, function (ev) {
                    //右键
                    if (ev.button === 2) {
                        console.log('右击事件：：：；')

                        // createSpotLight(THING.Math.addVector(CabinetCampus.position, [0, 0, 0]), CabinetCampus.position, CabinetCampus)

                        changeScene(curRoomCampus)

                        console.log(curRoomCampus,'eeeeeeeeeee')
                        iframePostMessage({ funcName: 'backRoom', param: curRoomCampus })
                    }

                });
                //销毁房间场景的温度传感器
                var Marker = app.query(".Marker");  // 获取园区中的建筑
                console.log(Marker,'eeeeeeeeeeeee')
                for (var i = 0; i < Marker.length; i++) {
                    Marker[i].destroy();
                }

                //创建机柜中的设备
                for (var i = 0; i < equipmentArrays.length; i++) {
                    createEquipment(curCampus, equipmentArrays[i])
                }
            }
        }
    });
}

/**
 * 查找机柜中得某个设备，并高亮
 */
function selectEqp(obj) {
    var eqps = curCampus.query('Rack')
    eqps.forEach((item, index) => {
        item.style.outlineColor = null;
    })
    var eqp = app.query('#' + obj.assetsNumber)[0];
    //  eqp.style.outlineColor = 'green';  // 设置勾边颜色


    selectEqpSuccess(eqp, 'green')

}
/**
 * selectEqp 效果
 * 
 */
function selectEqpSuccess(eqp, color) {
    var moveY = 0.4
    if (eqp.position[2] == 0.4) {
        moveY = 0.6
    } else {
        moveY = 0.4
    }

    eqp.moveTo({

        // offsetPosition:[0, 0, moveY],
        position: [eqp.position[0], eqp.position[1], moveY], // 移动到世界位置
        time: 1 * 1000,
        orientToPath: false,  //是否朝向目标方向
        lerpType: null, // 插值类型，默认为线性插值 
        complete: function (e) {
            let isHighlight = false
            if (moveY == 0.4) {
              //  eqp.style.highlight = null;
                isHighlight = false
            } else {
               // eqp.style.highlight = color;
                isHighlight = true
            }

            var json = {
                id: eqp._userData.id,
                assetsNumber: eqp._userData.assetsNumber,
                isHighlight: isHighlight

            }

            iframePostMessage({ funcName: 'handelEqp', param: json })

        }
    });

}


/** 
 * 图层显隐
 * 机柜、UPS、空调等
*/
function showHideEqp(data) {
 
    var objs = app.query(data.type)
    objs.forEach((item, index) => {
        item.visible = data.isShow;

    })

}

/**
 * 告警定位交互
 */
var curAlarmEqpId = ''
function alarmLocation(data) {

    let jiguidata = []



    for (var i = 0; i < jiguiJson.length; i++) {
        let item = jiguiJson[i]
        if (item.id == parseInt(data.ids)) {
            jiguidata = item
            break;
        }

    }

    if (jiguidata) {
        equipmentArrays = jiguidata.deviceList

    }
    curAlarmEqpId = data.assetsNumber

    changeScene(jiguiCampusUrl)


    setTimeout(() => {
       
        var eqp = app.query('#' + curAlarmEqpId)[0];

        eqp.style.highlight = 'red';
    }, 2000)





}

/**
 * 向iframe  父页面发送 消息通知
 */
function iframePostMessage(data) {
    var parent = window.parent
    parent.postMessage(data, '*')
}