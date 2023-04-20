
class Tutorial {
    constructor() {
        this.init();
    }
    // 初始化方法，只允许去初始化变量，不允许去调用业务逻辑代码。
    init() {
        //获取6个机柜
        this.equipmentList = Common.getApp().query(/配电柜/)

        //灯获取
        this.light_Off = Common.getApp().query(/暗/);
        this.light_On = Common.getApp().query(/亮/);

        this.flashtimer = null;
        //按钮名称
        this.buttonnameList=['重置',"1号配电柜展示","2号配电柜展示","3号配电柜展示","4号配电柜展示","5号配电柜展示","6号配电柜展示"]
    }
    //初始化指示灯状态
    resetState() {
        let _this = this;
        _this.light_On.pickable = false;
        _this.light_Off.pickable = false;
        //按钮事件绑定
    

        let btn01 = THING.widget.Button(_this.buttonnameList[1], function () {
            app.pauseEvent('click', '.Thing', 'tagfly');
            if( $('.widget-button').eq(1).val()!='退出教程'){
                 _this.pauseButton();
            $('.widget-button').eq(1).attr("disabled", false).css("cursor", "pointer");
            $('.widget-button').eq(1).val('退出教程');
            //使所有机柜柜身不可点击，等教程结束后恢复可点击
            _this.teach(Common.getApp().query('#A22-11')[0])
            }else{
                _this.reset();
            }
        })
        let btn02 = THING.widget.Button(_this.buttonnameList[2], function () {
            app.pauseEvent('click', '.Thing', 'tagfly');
           
             if( $('.widget-button').eq(2).val()!='退出教程'){
                 _this.pauseButton();
            $('.widget-button').eq(2).attr("disabled", false).css("cursor", "pointer");
            $('.widget-button').eq(2).val('退出教程');
            //使所有机柜柜身不可点击，等教程结束后恢复可点击
             _this.teach(Common.getApp().query('#A11-9')[0])
            }else{
                _this.reset();
            }

        })
        let btn03 = THING.widget.Button(_this.buttonnameList[3], function () {
            app.pauseEvent('click', '.Thing', 'tagfly');
            

             if( $('.widget-button').eq(3).val()!='退出教程'){
                 _this.pauseButton();
            $('.widget-button').eq(3).attr("disabled", false).css("cursor", "pointer");
            $('.widget-button').eq(3).val('退出教程');
            //使所有机柜柜身不可点击，等教程结束后恢复可点击
             _this.teach(Common.getApp().query('#A13-8')[0])
            }else{
                _this.reset();
            }
        })
        let btn04 = THING.widget.Button(_this.buttonnameList[4], function () {
            app.pauseEvent('click', '.Thing', 'tagfly');
            
             if( $('.widget-button').eq(4).val()!='退出教程'){
                 _this.pauseButton();
            $('.widget-button').eq(4).attr("disabled", false).css("cursor", "pointer");
            $('.widget-button').eq(4).val('退出教程');
            //使所有机柜柜身不可点击，等教程结束后恢复可点击
             _this.teach(Common.getApp().query('#A11-10')[0])
            }else{
                _this.reset();
            }
        })
        let btn05 = THING.widget.Button(_this.buttonnameList[5], function () {
            app.pauseEvent('click', '.Thing', 'tagfly');
            

              if( $('.widget-button').eq(5).val()!='退出教程'){
                 _this.pauseButton();
            $('.widget-button').eq(5).attr("disabled", false).css("cursor", "pointer");
            $('.widget-button').eq(5).val('退出教程');
            //使所有机柜柜身不可点击，等教程结束后恢复可点击
             _this.teach(Common.getApp().query('#UPSB1(E)')[0])
            }else{
                _this.reset();
            }
        })
        let btn06 = THING.widget.Button(_this.buttonnameList[6], function () {
            app.pauseEvent('click', '.Thing', 'tagfly');
              if( $('.widget-button').eq(6).val()!='退出教程'){
                 _this.pauseButton();
            $('.widget-button').eq(6).attr("disabled", false).css("cursor", "pointer");
            $('.widget-button').eq(6).val('退出教程');
            //使所有机柜柜身不可点击，等教程结束后恢复可点击
             _this.teach(Common.getApp().query('#UPS43-2(D)')[0])
            }else{
                _this.reset();
            }
        })
    }

    teach(obj) {
        let _this = this;
        //传入obj为机柜
        let cabName = _this.cabnameList(obj.name);
        // 获取机柜名称，转换为按钮类型前缀，视角飞行至指定位置
        app.camera.flyTo({
            'position': _this.positionList(obj.name).position,
            'target': _this.positionList(obj.name).target,
            'time': 1000,
            'complete': function () {

                // 获取判断是那种类型按钮，旋钮还是按钮
                if (cabName.substring(0, 4) == 'cabA') {

                    //是旋钮2灯
                    let switch01 = Common.getApp().query('#' + cabName + 'switch')[0];

                    //获取到了旋钮，生成箭头贴图
                    _this.createArrow(switch01, 1);
                    initThingJsTip('点击目标旋钮，可控制合闸指示灯关闭')
                    switch01.one('click', function () {
                        //销毁自己的箭头
                        _this.destroyarrow();
                        setTimeout(function () {
                            initThingJsTip('再次点击可开启指示灯')
                            _this.createArrow(switch01, 2);
                            switch01.one('click', function () {
                                _this.destroyarrow();
                                setTimeout(function(){
                                    initThingJsTip('教程结束！') 
                                    app.camera.flyTo({
                                        'position': [0.6480000000000001,2.5029999999999997,-0.03200000000000003],
                                        'target': [0.4370000000000003,1.61,-4.799],
                                        'time': 2000,
                                        'complete': function() { 
                                        _this.reset();
                                        }
                                    });
                                },2000)
                                
                            }, 'destroyarrow2')
                        }, 1000)
                    }, 'destroyarrow1')

                } else if (cabName.substring(0, 4) == 'cabB') {

                    //是按钮红绿灯
                    let greenbtn01 = Common.getApp().query('#' + cabName + 'greenBtn')[0];
                    let redbtn01 = Common.getApp().query('#' + cabName + 'redBtn')[0];
                         _this.createArrow(greenbtn01, 1);
                         initThingJsTip('点击绿色按钮，可控制红色合闸指示灯开启')
                         redbtn01.pickable=false;
                    greenbtn01.one('click', function () {
                        redbtn01.pickable=true;
                        greenbtn01.pickable=false;
                        //销毁自己的箭头
                        _this.destroyarrow();
                        setTimeout(function () {
                            initThingJsTip('点击红色按钮，可切换绿色分闸指示灯开启')
                            _this.createArrow(redbtn01, 1);
                            redbtn01.one('click', function () {
                                _this.destroyarrow();
                                setTimeout(function(){
                                    initThingJsTip('再次点击，可关闭指示灯')
                                     _this.createArrow(redbtn01, 1);
                                      redbtn01.one('click', function () {
                                          greenbtn01.pickable=true;
                                            _this.destroyarrow();
                                              setTimeout(function(){
                                    initThingJsTip('教程结束！') 
                                    app.camera.flyTo({
                                        'position': [0.6480000000000001,2.5029999999999997,-0.03200000000000003],
                                        'target': [0.4370000000000003,1.61,-4.799],
                                        'time': 2000,
                                        'complete': function() { 
                                        _this.reset();
                                        }
                                    });
                                },2000)
                                            
                                      })
                                },1000)
                            }, 'destroyarrow2')
                        }, 1000)
                    }, 'destroyarrow1')

                } else if (cabName.substring(0, 4) == 'cabC') {
                    //是旋钮1灯
                    let switch02 = Common.getApp().query('#' + cabName + 'switch')[0];

                    //获取到了旋钮，生成箭头贴图
                    _this.createArrow(switch02, 1);
                    initThingJsTip('点击目标旋钮，可控制指示灯关闭')
                    switch02.one('click', function () {
                        //销毁自己的箭头
                        _this.destroyarrow();
                        setTimeout(function () {
                            initThingJsTip('再次点击旋钮，可控制指示灯开启')
                            _this.createArrow(switch02, 2);
                            switch02.one('click', function () {
                                _this.destroyarrow();                              
                                 setTimeout(function(){
                                    initThingJsTip('教程结束！') 
                                    app.camera.flyTo({
                                        'position': [0.6480000000000001,2.5029999999999997,-0.03200000000000003],
                                        'target': [0.4370000000000003,1.61,-4.799],
                                        'time': 2000,
                                        'complete': function() { 
                                        _this.reset();
                                        }
                                    });
                                },2000)
                            }, 'destroyarrow2')
                        }, 1000)
                    }, 'destroyarrow1')
                }
                // 根据前缀拼接成第一组按钮id，query获取到按钮物体，

            }
        });

    }

    cabnameList(name) {
        let list = {
            '配电柜400V4开关': 'cabB_01',
            "配电柜400V5开关": 'cabB_05',
            "配电柜400V6开关": 'cabB_10',
            "配电柜400V9开关": 'cabC_01',
            "配电柜UPS9开关": 'cabA_08',
            "配电柜UPS7开关": 'cabA_01'
        }
        return (list[name])

    }

    positionList(name) {
        let list2 = {
            '配电柜400V4开关': {
                position: [-3.535860332627571, 1.8670035866250865, -3.8263542589101736],
                target: [-3.5162716694087126, 0.257723494494275, -13.189037307553098]
            },
            "配电柜400V5开关": {
                position: [-1.8803767058490644, 1.8176537464005054, -3.760688942837638],
                target: [-1.8520675874539685, 1.6583690128057178, -4.842440454932921]
            },
            "配电柜400V6开关": {
                position: [-0.34563261423950953, 1.8484006261166899, -3.726123188490611],
                target: [-0.5624520588421078, 0.21376100388647962, -13.589233379189972]
            },
            "配电柜400V9开关": {
                position: [1.2119755287318592, 1.9316308102881212, -3.7741578428865967],
                target: [1.188120582730736, 1.7517842103161034, -4.859318638467035]
            },
            "配电柜UPS7开关": {
                position: [2.9404273489125403, 1.9062257911242009, -3.807943728505048],
                target: [2.9168674986831795, 1.7286039696620668, -4.879680626062664]
            },
            "配电柜UPS9开关": {
                position: [4.547295053436918, 1.8720411897726037, -3.837601782987825],
                target: [4.524650931625582, 1.701323204624835, -4.8676822216042135]
            }
        }

        return (list2[name])
    }
//创建箭头
    createArrow(obj, num) {
        let _this = this;
        if (num == 2) {
            let marker03 = app.create({
                type: 'Marker',
                id: 'arrow' + obj.id + num,
                url: '/uploads/wechat/oLX7p064jwe0wbt6iU-_f2om-3Wg/file/ElectronicCabinet/assets/business/Tutorial/images/hand-pointer2.png',// 图片地址
                parent: obj, // 设置父物体
                localPosition: [-0.05,-0.05, 0], // 父物体坐标系下的相对位置
                ignoreParentBoundingBox: true, // 是否忽略父物体包围盒，如果忽略的话则直接使用指定的相对位置进行设置
                size: 0.07, // 图标长宽比例大小
                keepSize: false, // 设置图标始终保持像素大小
                complete: function () {
                    _this.arrowDrop2(app.query('arrow' + obj.id + num)[0])
                    //让箭头跃动
                }
            });
        } else {
            let marker03 = app.create({
                type: 'Marker',
                id: 'arrow' + obj.id + num,
                url:'/uploads/wechat/oLX7p064jwe0wbt6iU-_f2om-3Wg/file/ElectronicCabinet/assets/business/Tutorial/images/hand-pointer2.png',
                parent: obj, // 设置父物体
                localPosition: [0.05, -0.05, 0], // 父物体坐标系下的相对位置
                ignoreParentBoundingBox: true, // 是否忽略父物体包围盒，如果忽略的话则直接使用指定的相对位置进行设置
                size: 0.07, // 图标长宽比例大小
                keepSize: false, // 设置图标始终保持像素大小
                complete: function () {
                    _this.arrowDrop1(app.query('arrow' + obj.id + num)[0])
                    //让箭头跃动
                }
            });
        }
    }
//箭头跃动旋钮0度
    arrowDrop1(obj) {
        let i = 1;
        let _this = this;
        let a = obj.localPosition[0]
        let b = obj.localPosition[1]
        let c = obj.localPosition[2]
        _this.flashtimer = setInterval(function () {
            obj.localPosition = [a + 0.05 * i, b - 0.05 * i, 0.01]
            if (i == 1) {
                i = 0;
            } else {
                i = 1;
            }
        }, 500)
    }
    //箭头跃动旋钮90度
     arrowDrop2(obj) {
        let i = 1;
        let _this = this;
        let a = obj.localPosition[0]
        let b = obj.localPosition[1]
        let c = obj.localPosition[2]
        _this.flashtimer = setInterval(function () {
            obj.localPosition = [a - 0.05 * i, b - 0.05 * i, 0]
            if (i == 1) {
                i = 0;
            } else {
                i = 1;
            }
        }, 500)
    }
//销毁箭头
    destroyarrow() {
        let _this = this;
        setInterval(this.flashtimer)
        this.flashtimer = null;
        app.query('.Marker').destroyAll();
    }
    //禁用按钮
    pauseButton(){
        let _this=this;
        $('.widget-button').attr("disabled", true);
        $("input.widget-button").css("cursor", "not-allowed");
        _this.equipmentList.pickable=false;
    }
    //重置
    reset(){
        let _this=this;
        // 开关恢复可点击，机柜恢复可点击，定时器清除，marker清除
         $('.widget-button').attr("disabled", false);
         $("input.widget-button").css("cursor", "pointer");
         _this.equipmentList.pickable=true;
          _this.destroyarrow()
         initThingJsTip('退出教程！')  
         for(let i=1;i<$('.widget-button').length;i++){
                     $('.widget-button').eq(i).val(_this.buttonnameList[i]);
                 }     
        // 摄像机飞行到某位置
        app.camera.flyTo({
            'position': [0.6480000000000001,2.5029999999999997,-0.03200000000000003],
            'target': [0.43699999999999983,1.61,-4.7989999999999995],
            'time': 500,
            'complete': function() {
                //  $('.widget-button').forEach((obj,index)=>{
                //       obj.val(_this.buttonnameList[index+1]);
                //  })
                 
                 $('redBtn').pickable=true;
                 $('greenBtn').pickable=false;
                  initThingJsTip('·鼠标左键单击配电柜模型可拉近视角对开关进行操作，点击配电柜按钮/旋钮可控制指示灯亮暗。<br /><br />·右键点击配电柜模型可恢复视角位置，点击[重置]按钮可恢复初始默认状态。<br /></br>·点击配电柜功能展示可演示控制按钮/旋钮开关操作。')
            }
        });
    }
}


