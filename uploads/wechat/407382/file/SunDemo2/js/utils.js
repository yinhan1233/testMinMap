// 参数
var dataObj = {
    'type': 'SpotLight',
    'lightAngle': 30,
    'intensity': 1,
    'penumbra': 0.5,
    'castShadow': true,
    'position': null,
    'height': 0,
    'color': 0xFFFFFF,
    'distance': null,
    'target': null,
    'helper': true,
    'follow': false,
};
// 当前灯光
let curLight;
let curLightPosition;
// 创建聚光灯方法
function createSpotLight(position, target,lookAtThing) {
    dataObj['lightAngle'] = 45;
    dataObj['intensity'] = 1;
    dataObj['penumbra'] = 0.5;
    dataObj['castShadow'] = false;
    dataObj['position'] = position;
    dataObj['distance'] = 100;
    dataObj['color'] = 0xFFFFFF;
    dataObj['helper'] = false;
    dataObj['follow'] = true;
    //创建聚光灯
    var spotLight = app.create(dataObj);
    curLight = spotLight;
    curLightPosition = spotLight.position;
  //  createSpotLightControlPanel(spotLight);
    curLight.lookAt(lookAtThing);
}