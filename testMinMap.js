
// 加载场景代码 
var app = new THING.App({ resourceLibraryUrl: "./", 
   url: './scene/1/'
});
// 创建Thing
var obj = app.create({
    type: 'Thing',
    name: '北京CBD_北京SKP_G', 
    url:'/Resources/Model/admin/447aebc08c5e4bc1a2f0d84a0747b763',
    position: [0, 0, 0],
    angle: 0,
    complete: function () {
        console.log('thing created: ' + this.id);
    }
});












    


    

