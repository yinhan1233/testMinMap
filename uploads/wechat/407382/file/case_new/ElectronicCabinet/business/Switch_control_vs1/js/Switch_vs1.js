
class Switch_control_vs1 {
    constructor() {
        this.init();
    }
    // 初始化方法，只允许去初始化变量，不允许去调用业务逻辑代码。
    init() {
    //旋钮开关获取
     this.switchList=Common.getApp( ).query('switch_vs1');
    }
    //初始化指示灯状态
  resetState(){
       let _this = this;
    for(let i=0;i<_this.switchList.length;i++){
        Common.getApp().query(`#cabC_${Common.transformNum(i+1)}redLightoff`).visible=false;
        Common.getApp().query(`#cabC_${Common.transformNum(i+1)}redLighton`).visible=true;
    }
     _this.bindEvents();
  }
  //按钮绑定事件
  bindEvents(){
       let _this = this;
     _this.switchList.forEach((obj,index)=>{
         obj.on('click',function(){
             _this.switchLight(obj)
         })
     })
}
//旋钮控制1盏灯亮暗
switchLight(obj){
    let _this = this;
    obj.on('click',function(){
        if(obj.angles[2]==0){
           obj.rotateTo({
                angles: [0, 0, 120],
                time: 1000,
                lerpType: THING.LerpType.Quadratic.In, // 速度插值
                complete:function(){
                    let cabId=obj.id.substring(0, nameList.prefixLength);
                    _this.close(Common.getApp( ).query('#'+cabId+'redLighton')[0])
                }
            }) 
        }else{
            obj.rotateTo({
                angles: [0, 0, 0],
                time: 1000,
                lerpType: THING.LerpType.Quadratic.In, // 速度插值
                complete:function(){
                     let cabId=obj.id.substring(0, nameList.prefixLength);
                    _this.open(Common.getApp( ).query('#'+cabId+'redLighton')[0])
                }
            })
        }
    })
}

//开灯，传入id以'Lighton'结尾的灯对象
 open(obj){
    let cabId=obj.id.substring(0, nameList.prefixLength);
    let btnType=obj.name=='绿灯亮'?'greenLight':'redLight';
    let another=cabId+btnType+'off';
    Common.getApp( ).query('#'+another).visible=false;
    obj.visible=true;
}
//关灯，传入id以'Lighton'结尾的灯对象
close(obj){
    let cabId=obj.id.substring(0, nameList.prefixLength);
    let btnType=obj.name=='绿灯亮'?'greenLight':'redLight';
    let another=cabId+btnType+'off';
    Common.getApp( ).query('#'+another).visible=true;
    obj.visible=false;
}
}