
class Switch_control_vs2 {
    constructor() {
        this.init();
    }
    // 初始化方法，只允许去初始化变量，不允许去调用业务逻辑代码。
    init() {
    //控制开关获取
     this.switchList=Common.getApp( ).query('switch_vs2');

    //灯获取
    this.light_Off=Common.getApp( ).query(/暗/);
    this.light_On=Common.getApp( ).query(/亮/);
  
    }
    //初始化指示灯状态
  resetState(){
       let _this = this;
    _this.light_On.pickable=false;
    _this.light_Off.pickable=false;
    for(let i=0;i<_this.switchList.length;i++){
        Common.getApp().query(`#cabA_${Common.transformNum(i+1)}redLightoff`).visible=false;
        Common.getApp().query(`#cabA_${Common.transformNum(i+1)}redLighton`).visible=true;
         Common.getApp().query(`#cabA_${Common.transformNum(i+1)}whiteLightoff`).visible=false;
        Common.getApp().query(`#cabA_${Common.transformNum(i+1)}whiteLighton`).visible=true;
    }
     _this.bindEvents();
  }
  //按钮绑定事件
  bindEvents(){
       let _this = this;
     _this.switchList.forEach((obj,index)=>{
         obj.on('click',function(){
             _this.switchToggle(obj)
         })
     })
}
//旋钮控制指示灯
switchToggle(obj){
    let _this = this;
    obj.on('click',function(){
        if(obj.angles[2]==0){
           obj.rotateTo({
                angles: [0, 0, 90],
                time: 1000,
                lerpType: THING.LerpType.Quadratic.In, // 速度插值
                complete:function(){
                    let cabId=obj.id.substring(0, nameList.prefixLength);
                    _this.close(Common.getApp( ).query('#'+cabId+'redLighton')[0]);
                }
            }) 
        }else{
            obj.rotateTo({
                angles: [0, 0, 0],
                time: 1000,
                lerpType: THING.LerpType.Quadratic.In, // 速度插值
                complete:function(){
                     let cabId=obj.id.substring(0, nameList.prefixLength);
                       _this.open(Common.getApp( ).query('#'+cabId+'redLighton')[0]);
                }
            })
        }
         
    })
}
//开灯，传入id以'Lighton'结尾的灯对象
 open(obj){
     let cabId=obj.id.substring(0, nameList.prefixLength);
     let btnType=obj.name=='白灯亮'?'whiteLight':'redLight'
    let another=cabId+btnType+'off'
    Common.getApp( ).query('#'+another).visible=false;
    obj.visible=true;
}
//关灯，传入id以'Lighton'结尾的灯对象
close(obj){
    let cabId=obj.id.substring(0, nameList.prefixLength);
     let btnType=obj.name=='白灯亮'?'whiteLight':'redLight'
    let another=cabId+btnType+'off'
    Common.getApp( ).query('#'+another).visible=true;
    obj.visible=false;
}
}