// 获取网络设备机柜 && 客户设备机柜
function getNewAllCabinet() {
  destroyAllModel();
//   let cabinetNames = [
//     {
//       name: "网络设备",
//       type: 0,
//       data: null,
//     },
//     {
//       name: "客户设备",
//       type: 1,
//       data: null,
//     },
//   ];
return new Promise((resolve, reject) => {
    destroyAllModel();
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url: RequestUrl + "/idc-situational-awareness/rmeEqp/conditionQuery",
      data: {
        floor:
          app.level.current.type == "Floor"
            ? app.level.current.name
            : app.level.current.type == "Room"
            ? app.level.current.floor.name
            : "",
        compartmentId: ROOM_ID,
        voipProtocol: 0,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });

//   new Promise((r, j) => {
//     $.ajax({
//       type: "get",
//       headers: {
//         token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
//       },
//       url: RequestUrl + "/idc-situational-awareness/rmeEqp/conditionQuery",
//       data: {
//         floor:
//           app.level.current.type == "Floor"
//             ? app.level.current.name
//             : app.level.current.type == "Room"
//             ? app.level.current.floor.name
//             : "",
//         compartmentId: ROOM_ID,
//         voipProtocol: 0,
//       },
//       dataType: "json", // 返回的数据类型 json
//       success: function (d) {
//         if (d.datas && d.datas.length) {
//           r(d.datas);
//         } else {
//           j(d.datas);
//         }
//       },
//     });
//   });
  //   cabinetNames.forEach((v) => {
  //     v.data = new Promise((r, j) => {
  //       $.ajax({
  //         type: "get",
  //         headers: {
  //           token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
  //         },
  //         url: RequestUrl + "/idc-situational-awareness/rmeEqp/conditionQuery",
  //         data: {
  //           floor:
  //             app.level.current.type == "Floor"
  //               ? app.level.current.name
  //               : app.level.current.type == "Room"
  //               ? app.level.current.floor.name
  //               : "",
  //           compartmentId: ROOM_ID,
  //           voipProtocol: v.type,
  //         },
  //         dataType: "json", // 返回的数据类型 json
  //         success: function (d) {
  //           if (d.datas && d.datas.length) {
  //             r(d.datas);
  //           } else {
  //             j(d.datas);
  //           }
  //         },
  //       });
  //     });
  //   });
  //   return Promise.all([cabinetNames[0].data, cabinetNames[1].data]);
}

// 获取机柜/空调数据
function getData(type) {
  return new Promise((resolve, reject) => {
    destroyAllModel();
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url: RequestUrl + "/idc-situational-awareness/newroom/compartmentRoom",
      data: {
        compartmentRoomId: ROOM_ID,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        var currentLevel = app.level.current;
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取楼层所有空调数量数据
function queryKongTiaoDataByFloor() {
  return new Promise((resolve, reject) => {
    let floorId =
      app.level.current.type == "Floor" ? app.level.current.name : "";
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl +
        "/idc-situational-awareness/newroom/queryKongTiaoDataByFloor",
      data: {
        floor: floorId,
        roomId: roomId,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取低压配电柜数据
function getPowerCabinet() {
  let curLevel = app.level.current.type;
  if (curLevel !== "Room") ROOM_ID = "";
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
        "content-type": "application/json",
      },
      url:
        RequestUrl +
        "/idc-situational-awareness/spcPowerromDevice/getByManyParams",
      data: JSON.stringify({
        roomId: roomId,
        floor: app.level.current.type == "Floor" ? app.level.current.name : "",
        compartmentId: ROOM_ID,
        no: "",
        deviceType: "",
        type: "",
      }),
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // 创建电力机柜模型
        // createAirModel(d);
        if (d.success) {
          resolve(d.datas);
        } else {
          reject(d.datas);
        }
      },
    });
  });
}

// 获取机柜详情
function getCabinetInfo(obj) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl +
        "/idc-situational-awareness/roomView/getSpcRackMeasurePointInfo",
      data: {
        rackId: obj.userData.rackId,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取告警信息
function getAlarmInfo(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
        "content-type": "application/json",
      },
      url: RequestUrl + "/idc-situational-awareness/alarm/queryAlarmList",
      data: JSON.stringify({
        alarmStatus: "1",
        alarmType: "",
        compartmentRoomId: "",
        createTimeEnd: "",
        createTimeStart: "",
        nativeSpecialty: "",
        neId: id,
        pageNum: 1,
        pageSize: 1000,
        roomId: "",
        subAlarmType: "",
      }),
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
// 获取故障信息
function getFaultInfo(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl +
        "/idc-situational-awareness/devicePopup/queryDeviceFaultInfo",
      data: {
        equipmentCode: id,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.code == 200) {
          resolve(d);
        } else {
          reject(d);
        }
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
// 获取变更信息
function getChangeInfo(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl +
        "/idc-situational-awareness/devicePopup/queryDeviceChangeInfo",
      data: {
        devMonitorId: id,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.code == 200) {
          resolve(d);
        } else {
          reject(d);
        }
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
// 获取维护信息
function getMaintainInfo(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      headers: {
        // 'content-type': 'application/json'
      },
      url:
        RequestUrl +
        "/idc-situational-awareness/devicePopup/queryDevMaintenanceRecord",
      data: {
        devMonitorId: id,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.code == 200) {
          resolve(d);
        } else {
          reject(d);
        }
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}

// 获取摄像头/烟感/led数据
function getCamerasData() {
  let floorId = app.level.current.type == "Floor" ? app.level.current.name : "";
  return new Promise((resolve, reject) => {
    destroyAllModel();
    var currentLevel = app.level.current;
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl +
        `/idc-situational-awareness/spcIotDevice/list?pageNo=1&pageSize=-1&floor=${floorId}&compartmentId=${ROOM_ID}&positId=${roomId}&areaId=&regionId=&type=&name=&brand=`,
      data: {},
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 灯管设备
function getLightList() {
  let floorId = app.level.current.type == "Floor" ? app.level.current.name : "";
  return new Promise((resolve, reject) => {
    destroyAllModel();
    var currentLevel = app.level.current;
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl +
        `/idc-situational-awareness/spcIotDevice/lightList?pageNo=1&pageSize=-1&floor=${floorId}&compartmentId=${ROOM_ID}&compartmentName=${compartmentName}&positId=${roomId}&areaId=&regionId=&type=灯管&name=&brand=`,
      data: {},
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取房间门数据
function getDoors() {
  let floorId = app.level.current.type == "Floor" ? app.level.current.name : "";
  return new Promise((resolve, reject) => {
    var currentLevel = app.level.current;
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url: RequestUrl + "/idc-situational-awareness/compartment/compartId",
      data: {
        positId: roomId,
        floor: floorId,
        compartId: floorId ? "" : ROOM_ID,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // createRoomDoorModel(d);
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取视频地址
function getvideoUrl(obj) {
  var datas = $.ajax({
    type: "post",
    headers: {
      "content-type": "application/json",
      token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
    },
    // url: RequestUrl + `/idc-situational-awareness/alarmReceive/getMvList`,
    url:
      RequestUrl + `/idc-situational-awareness-monitor/spcCamera/actualVideo3D`,
    data: JSON.stringify({
      cameraIndexCode: obj.userData.deviceId,
      streamType: 0,
    }),
    dataType: "json", // 返回的数据类型 json
    success: function (d) {
      obj.showVideoFrame(d.datas);
    },
  });
}

// 获取热力图/温湿度传感器/列头柜数据/监控平台配电柜
function getTemAndHumi() {
  let floorId = app.level.current.type == "Floor" ? app.level.current.name : "";
  return new Promise((resolve, reject) => {
    destroyAllModel();
    var currentLevel = app.level.current;
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl +
        `/idc-situational-awareness/roomView/getColdChannelMeatesurePointInfo`,
      data: {
        param: JSON.stringify({
          positId: roomId,
          floor: floorId,
          compartmentId: ROOM_ID,
        }),
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取热力图（新）
function getTemAndHumiNew() {
  let floorId = app.level.current.type == "Floor" ? app.level.current.name : "";
  return new Promise((resolve, reject) => {
    destroyAllModel();
    var currentLevel = app.level.current;
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url: RequestUrl + `/idc-situational-awareness/rack/rackAccess`,
      data: {
        // placeId: ROOM_ID,
        floor: floorId,
        placeId: ROOM_ID,
        radius: "",
        roomId,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // 获取热力图
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取冷通道数据
function getColdChannel() {
  return new Promise((resolve, reject) => {
    let floorId =
      app.level.current.type == "Floor" ? app.level.current.name : "";
    const currentLevel = app.level.current;
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl + "/idc-situational-awareness/roomView/getColdChannelInfo",
      data: {
        param: JSON.stringify({
          floor: floorId,
          compartmentId: ROOM_ID,
        }),
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // createCoolModel(d);
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取全楼层冷通道数据
function getColdChannelInfoByFloor() {
  return new Promise((resolve, reject) => {
    let floorId =
      app.level.current.type == "Floor" ? app.level.current.name : "";

    THING.Utils.log(
      app.level.current,
      "app.level.currentapp.level.currentapp.level.current"
    );
    const currentLevel = app.level.current;
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      url:
        RequestUrl +
        "/idc-situational-awareness/roomView/getColdChannelInfoByFloor",
      data: {
        param: JSON.stringify({
          floor: floorId,
          roomId: roomId,
        }),
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // createCoolModel(d);
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取人员数据
function getPerson(param) {
  var date = new Date(); // 获取时间
  var year = date.getFullYear(); // 获取年
  var month = date.getMonth() + 1; // 获取月
  var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); // 获取日
  // var curStartDate = param && param.curStartDate ? param.curStartDate : `${year}-${month}-${strDate} 00:00:00`   // 不传时间默认当前时间
  // var curEndDate = param && param.curEndDate ? param.curEndDate : `${year}-${month}-${strDate} 23:59:59`   // 不传时间默认当前时间
  // var curPersonName = param && param.name ? param.name : ''
  let datas = {
    roomId: roomId,
    computeroomId: app.level.current.type == "Floor" ? "" : ROOM_ID,
    currPage: "1",
    name: "",
    pageSize: 0,
    type: "",
    floor:
      app.level.current.type == "Floor"
        ? app.level.current.name
        : app.level.current.type == "Room"
        ? app.level.current.floor.id
        : "",
  };
  if (param && param.pageType == "personnelTrajectory") {
    // 人员轨迹屏
    datas.name = param.name;
    datas.pageSize = 500;
    datas.type = param.isPath ? 2 : 1; //"查询类型  为1 人员最新位置 为2 人员实时位置（人员轨迹）",
    datas.startDate = param.startDate;
    datas.endDate = param.endDate;
  } else {
    // 物理屏
    datas.date = `${year}-${month}-${strDate}`;
    datas.pageSize = 1000;
    datas.type = "1";
  }

  return new Promise((resolve, reject) => {
    $.ajax({
      // type: "get",
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
        "content-type": "application/json",
      },
      url:
        RequestUrl +
        `/idc-situational-awareness/threeDLargeScreen/queryPersonnelTrackInfo`,
      data: JSON.stringify(datas),
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // createPersonModel(d);
        if (d.success) {
          resolve(d, param);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 获取楼层全部机柜数据（预留）
function getAllCabinet(floor) {
  destroyAllModel();
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
      },
      // /idc-situational-awareness/room/queryJiGuiDataByFloor?roomId=040002010000000011852305&floor=2F
      url:
        RequestUrl +
        `/idc-situational-awareness/newroom/queryJiGuiDataByFloor?roomId=${roomId}&floor=${floor}`,
      // url: '/uploads/wechat/407382/file/case_new/response-20220822.json',
      data: {},
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // createPersonModel(d);
        if (d.success) {
          resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 查询房间相同的机柜数量 根据数量来设置冷通道顶模型的长度
function selectRackCount() {
  if (app.level.current.type !== "Room") return;
  return new Promise((resolve, reject) => {
    let floorId =
      app.level.current.type == "Floor" ? app.level.current.name : "";
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
        "content-type": "application/json",
      },
      url: RequestUrl + "/idc-situational-awareness/newroom/selectRackCount",
      data: {
        positId: roomId,
        floor: floorId,
        compartmentId: ROOM_ID,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // createCoolModel(d);
        if (d.success) {
          // resolve(d);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 查询电池室设备
function getBatteryDeviceData() {
  //   if (app.level.current.type !== "Room") return;
  destroyAllModel();
  return new Promise((resolve, reject) => {
    let params = {
      floor: app.level.current.type == "Floor" ? app.level.current.name : "",
      compartmentId: ROOM_ID,
      roomId: roomId,
    };
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
        "content-type": "application/json",
      },
      url:
        RequestUrl +
        `/idc-situational-awareness/spcBatteryDeviceService/getBatteryDevice`,
      data: JSON.stringify(params),
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // createCoolModel(d);
        if (d.data && d.data.length > 0) {
          resolve(d.data);
        } else {
          reject(d);
        }
      },
    });
  });
}

// pdu查询实时电量
function rackRealtime(rackId, eqpId) {
  //   if (app.level.current.type !== "Room") return;
  return new Promise((resolve, reject) => {
    let params = {
      idcId: roomId,
      rackId,
      eqpId,
      pageNum: 1,
      pageSize: 10,
    };
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
        "content-type": "application/json",
      },
      url: RequestUrl + `/idc-situational-awareness/rack/rackRealtime`,
      data: JSON.stringify(params),
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        // createCoolModel(d);
        if (d.datas && d.datas.length > 0) {
          resolve(d.datas);
        } else {
          reject(d);
        }
      },
    });
  });
}

// 查询机房柱子接口 (使用机柜模型)
function getPillarByFloorRoom() {
  //   if (app.level.current.type !== "Room") return;
  return new Promise((resolve, reject) => {
    let params = {
      positId: roomId,
      compartmentId: ROOM_ID,
      floor: app.level.current.type == "Floor" ? app.level.current.name : "",
    };
    $.ajax({
      type: "post",
      headers: {
        token: "13867_241f5400-7837-48a7-8cc0-3ba6c8b932d1",
        "content-type": "application/json",
      },
      url:
        RequestUrl +
        `/idc-situational-awareness/spcRoomPillar/getPillarByFloorRoom`,
      data: JSON.stringify(params),
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        if (d.body && d.body.length > 0) {
          resolve(d.body);
        } else {
          reject(d.body);
        }
      },
    });
  });
}
