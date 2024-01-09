// // 加载场景代码 
// var app = new THING.App({ resourceLibraryUrl: "./", 
//    url: "/api/scene/production_68200"
//    // /api/scene/production_68200
// });
// // 创建Thing
// var obj = app.create({
//    type: 'Thing',
//    name: '工人_红_01',
//    url: '/MMDScene/admin/136281660185977942/CustomModel/2eaa70c6d1d544b488d5a026d0754a92/UnityToGLTF.gltf', 
//    position: [0, 0, 0],
//    angle: 0,
//    complete: function () {
//        console.log('thing created: ' + this.id);
//    }
// });

// app.on('load',function(){
//    console.log('测试加载html')
//    addIframe();
// })


// // function addIframe(){
// //    let iframeHtml = `<iframe id="chart-content" allowtransparency="true" class="iframeContent" src="./uploads/wechat/138942/第一屏/数据实时监测/dist/index.html" style="position: absolute;width: 100%; height: 100%; background-color:transparent;z-index: 1;pointer-events: none; user-select: none; border: 0;"></iframe>`;
// //    $('#div2d').append($(iframeHtml))
// // }
// function addIframe(){
//    let iframe = document.createElement('iframe');
//    iframe.id = 'chart-content';
//    iframe.src = './uploads/wechat/138942/第一屏/数据实时监测/dist/index.html';
//    document.body.appendChild(iframe)
// }
// 离线开发引入园区场景
var app = new THING.App({
   url: '/api/scene/1389421662535085461'  // 场景地址
});