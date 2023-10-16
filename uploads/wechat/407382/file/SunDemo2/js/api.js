var RequestUrl='https://10.7.39.18:10177'
var token =''

// 获取机柜
function getData() {

  return new Promise((resolve, reject) => {
   
    $.ajax({
      type: "get",
      headers: {
        token: token,
      },
      url: RequestUrl + "/resource_room/room/findAll",
      data: {
        args: curRoomCampus.ids,
      },
      dataType: "json", // 返回的数据类型 json
      success: function (d) {
        jiguiJson = []
       if(d.code == 0){
        jiguiJson = d.data.cabinetList
        let   extra = d.data.extra
        initDatas(jiguiJson)
      
        initDatas(extra)
       }
      
      },
    });
  });
}