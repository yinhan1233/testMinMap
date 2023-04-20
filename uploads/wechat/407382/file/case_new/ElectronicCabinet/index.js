/**
 * 说明：配电柜模型及按钮功能展示
 * 备注：鼠标左键单击配电柜模型，点击开关进行指示灯灯控制
 *
 */
/** 
 * 项目中通过对灯及开关进行id/name的命名实现对象的获取，
 * 同一开关组内的元素需按格式进行命名
 * id命名规则
开关组合cabA_01-------------旋钮控制上下两个灯
子节点id:
    旋钮：cabA_01switch
    白色亮灯：cabA_01whiteLighton
    白色暗灯:cabA_01whiteLightoff
    红色亮灯：cabA_01redLighton
    红色暗灯：cabA_01redLightoff

开关组合cabB_01-------------按钮控制红绿灯
子节点id：
    绿色按钮：cabB_01greenBtn
    绿色亮灯：cabB_01greenLighton
    绿色暗灯:cabB_01greenLightoff
    红色按钮：cabB_01redBtn
    红色亮灯：cabB_01redLighton
    红色暗灯：cabB_01redLightoff

开关组合cabC_01--------------旋钮控制1个灯
子节点id:
    旋钮：cabC_01switch
    红色亮灯：cabC_01redLighton
    红色暗灯：cabC_01redLightoff

name命名规则
红色按钮: redBtn
绿色按钮：greenBtn
旋钮控制1盏灯:switch_vs1
旋钮控制2盏灯:switch_vs2

 */

/**
 * 配电柜
 * 按钮资源文件路径
 */
const filepath = '/uploads/wechat/407382/file/case_new/ElectronicCabinet'
let sourceArray = [
    //公用js脚本
    filepath + '/common/common.js',
    //按钮开关组
    filepath + '/business/Button_control/js/Button_control.js',
    filepath + '/business/Button_control/index.js',
    //旋钮控制1盏灯
    filepath + '/business/Switch_control_vs1/js/Switch_vs1.js',
    filepath + '/business/Switch_control_vs1/index.js',
    //摄像头飞行及指示灯重置功能&功能演示
    filepath + '/business/Camerafly/js/Camerafly.js',
    filepath + '/business/Camerafly/index.js',
    //旋钮控制2盏灯
    filepath + '/business/Switch_control_vs2/index.js',
    filepath + '/business/Switch_control_vs2/js/Switch_vs2.js',

    //数据面板
    filepath + '/business/Panel/js/Panel.js',
    filepath + '/business/Panel/index.js',
    filepath + '/business/Panel/css/panel.css',
    //按钮教程
    '/uploads/wechat/407382/file/case_new/ElectronicCabinet/business/Tutorial/index.js',
    '/uploads/wechat/407382/file/case_new/ElectronicCabinet/business/Tutorial/js/Tutorial.js'
]
THING.Utils.dynamicLoad(sourceArray, function () {
    // equipmentList = app.query(/配电柜/);
    initbegin()
})


// 初始化开关配电柜按钮
function initbegin() {
    // tjsPanel = new TjsPanel();
    // tjsPanel.mounted();
    //按钮开关组
    tjsButton_control = new TjsButton_control();
    tjsButton_control.mounted();

    //旋钮1灯
    tjsSwitch_control_vs1 = new TjsSwitch_control_vs1();
    tjsSwitch_control_vs1.mounted();

    //旋钮2灯
    tjsSwitch_control_vs2 = new TjsSwitch_control_vs2();
    tjsSwitch_control_vs2.mounted();

    //摄像头飞行及状态重置
    tjsCamerafly = new TjsCamerafly();
    tjsCamerafly.mounted();

    tjsTutorial = new TjsTutorial();
    tjsTutorial.mounted();

    //禁止默认的双击进入层级/右键退出层级事件
    // app.pauseEvent(THING.EventType.DBLClick, '.Thing', THING.EventTag.LevelEnterOperation);
    // app.pauseEvent(THING.EventType.Click, '.Thing', THING.EventTag.LevelBackOperation);
    app.query(/灯/).pickable = false;
}

