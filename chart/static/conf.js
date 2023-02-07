//是否启用登录
var isLoginEnable = false;
//是否单机版部署,后续部署不用登录的也分为两个版本，一个在线版，一个单机部署版本
var isLocalVersion = true;


// thingjs3D场景前缀
const THINGJS_SAMPLE_PREFIX = 'www.thingjs.com/guide/chartsample.html?m='

//存放所有组件的DOM节点
var componentInstanceHash = {}

//JavaScript代码提示配置
var dpdCompletionData = [{
    meta: "设置组件位置",
    caption: "this.setComponentPosition",
    value: "this.setComponentPosition(left,top)\n",
    score: 48
  },
  {
    meta: "刷新该图表",
    caption: "this.renderCharts",
    value: "this.renderCharts()\n",
    score: 47
  },
  {
    meta: "获取图表实例",
    caption: "this.getChartsInstance",
    value: "this.getChartsInstance()\n",
    score: 46
  },
  {
    meta: "按照别名获取发布数据",
    caption: "this.getPublishDataByAlias",
    value: "this.getPublishDataByAlias(alias)\n",
    score: 45
  },
  {
    meta: "按照别名获取组件数据",
    caption: "this.getSceneDataByAlias",
    value: "this.getSceneDataByAlias(alias)\n",
    score: 44
  },
  {
    meta: "按照DOM定义文件创建并挂载DOM",
    caption: "this.createDOMByDefinition",
    value: "this.createDOMByDefinition(parent, definition, cb)\n",
    score: 43
  },
  {
    meta: "给JSON对象增加缓冲动画",
    caption: "this.addAnimationAtObject",
    value: "this.addAnimationAtObject(startObj, endObj, times, easing, repeat, cb)\n",
    score: 43
  },
  {
    meta: "执行组件的回调队列",
    caption: "this.callCBPCStack",
    value: "this.callCBPCStack()\n",
    score: 43
  },
  {
    meta: "执行总回调队列",
    caption: "this.callCBPAStack",
    value: "this.callCBPAStack()\n",
    score: 42
  },
  {
    meta: "获取回调队列",
    caption: "this.getCallbackPool",
    value: "this.getCallbackPool()\n",
    score: 41
  },
  {
    meta: "清除组件的回调队列中的回调",
    caption: "this.clearFromStackHostPool",
    value: "this.clearFromStackHostPool(hostID)\n",
    score: 40
  },
  {
    meta: "将回调函数添加到GIV回调队列中",
    caption: "this.addCBToStackGIVPool",
    value: "this.addCBToStackGIVPool(callback,GIVStackName)\n",
    score: 39
  },
  {
    meta: "将回调函数添加到宿主组件回调队列中",
    caption: "this.addCBToStackHostPool",
    value: "this.addCBToStackHostPool(callback,hostID)\n",
    score: 38
  },
  {
    meta: "清除回调总队列中的自身回调",
    caption: "this.clearFromStackAllPool",
    value: "this.clearFromStackAllPool()\n",
    score: 37
  },
  {
    meta: "将组件的某回调函数添加到回调总队列",
    caption: "this.addCBToStackAllPool",
    value: "this.addCBToStackAllPool(callback)\n",
    score: 36
  },
  {
    meta: "执行栈里的所有动画",
    caption: "this.loopAnimation",
    value: "this.loopAnimation()\n",
    score: 35
  },
  {
    meta: "添加动画",
    caption: "this.addAnimation",
    value: "this.addAnimation(obj, start, end, times, easing, repeat, cb)\n",
    score: 34
  },
  {
    meta: "循环执行的两个动画",
    caption: "this.loopAnimation",
    value: "this.loopAnimation(obj, type, times, easing)\n",
    score: 33
  },
  {
    meta: "给元素应用转场动画",
    caption: "this.applyTransitionAnimation",
    value: "this.applyTransitionAnimation(obj, type, cb, times, opts)\n",
    score: 32
  },
  {
    meta: "将 object 类型的样式转换成 string 类型",
    caption: "this.getStyleStringByObject",
    value: "this.getStyleStringByObject(styleObj)\n",
    score: 31
  },
  {
    meta: "将html文本设置进DOM节点",
    caption: "this.setItemHTML",
    value: "this.setItemHTML(obj, html)\n",
    score: 30
  },
  {
    meta: "将一组DOM挂在到父亲节点上",
    caption: "this.mountToDomByArray",
    value: "this.mountToDomByArray(bizDom,parent)\n",
    score: 29
  },
  {
    meta: "将bizDom挂载到父亲上去",
    caption: "this.mountToDom",
    value: "this.mountToDom(bizDom,parent)\n",
    score: 28
  },
  {
    meta: "给对象设置文本",
    caption: "this.setItemValue",
    value: "this.setItemValue(obj, value)\n",
    score: 27
  },
  {
    meta: "给传递进来的div应用css样式数组循环设置数组中对应项的样式",
    caption: "this.setStyleByArray",
    value: "this.setStyleByArray(objArr,styleArr)\n",
    score: 26
  },
  {
    meta: "给传递进来的div应用css样式",
    caption: "this.setStyle",
    value: "this.setStyle(obj, style)\n",
    score: 25
  },
  {
    meta: "添加回调函数",
    caption: "this.addCallback",
    value: "this.addCallback(cb)\n",
    score: 24
  },
  {
    meta: "清空回调函数",
    caption: "this.clearCallback",
    value: "this.clearCallback()\n",
    score: 23
  },
  {
    meta: "清除定时器",
    caption: "this.clearTimes",
    value: "this.setComponentData(data)\n",
    score: 22
  },
  {
    meta: "设置定时器",
    caption: "this.setTimes",
    value: "this.setTimes(function, time)\n",
    score: 21
  },
  {
    meta: "传入数据",
    caption: "this.setComponentData",
    value: "this.setComponentData(data)\n",
    score: 20
  },
  {
    meta: "启动动画",
    caption: "this.startAnimate",
    value: "this.startAnimate()\n",
    score: 19
  },
  {
    meta: "暂停动画",
    caption: "this.pauseAnimateToIndex",
    value: "this.pauseAnimateToIndex(1)\n",
    score: 18
  },
  {
    meta: "根据传入的step执行动画",
    caption: "this.runAnimateByData",
    value: "this.runAnimateByData(1,canimatID)\n",
    score: 17
  },
  {
    meta: "获取组件options",
    caption: "this.getOptions",
    value: "this.getOptions()\n",
    score: 16
  },
  {
    meta: "获取组件驱动数据",
    caption: "this.getComponentData",
    value: "this.getComponentData()\n",
    score: 15
  },
  {
    meta: "获取场景所有组件数据",
    caption: "this.getSceneData",
    value: "this.getSceneData()\n",
    score: 14
  },
  {
    meta: "根据ID获取组件数据",
    caption: "this.getSceneDataById",
    value: "this.getSceneDataById(id)\n",
    score: 13
  },
  {
    meta: "获取组件发布的数据",
    caption: "this.getPublishData",
    value: "this.getPublishData()\n",
    score: 12
  },
  {
    meta: "根据ID获取发布数据",
    caption: "this.getPublishDataById",
    value: "this.getPublishDataById(id)\n",
    score: 11
  },
  {
    meta: "获取Echarts工具库",
    caption: "this.getEcharts",
    value: "this.getEcharts()\n",
    score: 10
  },
  {
    meta: "获取Highcharts工具库",
    caption: "this.getHightcharts",
    value: "this.getHightcharts()\n",
    score: 9
  },
  {
    meta: "获取JQuery工具库",
    caption: "this.getJquery",
    value: "this.getJquery()\n",
    score: 8
  },
  {
    meta: "获取组件的根DOM",
    caption: "this.getDom",
    value: "this.getDom()\n",
    score: 7
  },
  {
    meta: "清空组件根DOM",
    caption: "this.clearDom",
    value: "this.clearDom()\n",
    score: 6
  },
  {
    meta: "获取组件的默认配色",
    caption: "this.getDefaultColor",
    value: "this.getDefaultColor()\n",
    score: 5
  },
  {
    meta: "设置组件options",
    caption: "this.setOptions",
    value: "this.setOptions(option)\n",
    score: 4
  },
  {
    meta: "修改当前使用的配色",
    caption: "this.setDefaultColor",
    value: "this.setDefaultColor([])\n",
    score: 3
  },
  {
    meta: "设置组件大小",
    caption: "this.setComponentSize",
    value: "this.setComponentSize(width,height)\n",
    score: 2
  },
  {
    meta: "执行组件动画",
    caption: "this.doComponentAnimate",
    value: "this.doComponentAnimate(obj,ctime,animateType,callback,waitingTime)\n",
    score: 1
  },
]
