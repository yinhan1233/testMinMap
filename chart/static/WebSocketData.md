# Websocket操作说明

## 1 WebSocket连接说明

1.进入websocket数据对接界面

<img src="./chart/static/img/websocket/wsDataHtml.png" alt="websocket数据对接界面" title="websocket数据对接界面">

2.创建新的websocket连接


``` bash
## 填写websocket参数介绍

1.数据对接类型（websocket）（必选）

2.websocket数据协议（必选）

3.websocket实例名称（必填）

4.websocket连接IP/主机名（必填）

5.websocket端口号（端口范围:1~65535）（必填）
```
<img src="./chart/static/img/websocket/paramIntrodution.png" alt="websocket数据对接界面" title="websocket参数介绍">

3.测试新建的websocket连接

<img src="./chart/static/img/websocket/testConnection.png" alt="websocket测试连接" title="websocket测试连接">

4.测试成功后保存添加至websocket连接库

<img src="./chart/static/img/websocket/addWS.png" alt="websocket选择连接名" title="websocket选择连接名">

5.点击验证数据源连接websocket

<img src="./chart/static/img/websocket/connectWS.png" alt="websocket连接" title="websocket连接">

6.点击保存，websocket连接结束

---------------- 以上为websocket连接操作说明

## 2 WebSocket 数据格式说明

``` bash
websocket连接格式形式:
{
    key: value
}

key的值为该组件的组件别名
value的值为静态json的数据格式

例如文本websocket数据格式:
{
    "text01":[
        {
            "value": "单行文本"
        }
    ]
}

例如图表websocket数据格式：
{
    "echarts01":[
        {
            "value": 3035,
            "name": "直接访问2"
        },
        {
            "value": 310,
            "name": "邮件营销"
        },
        {
            "value": 234,
            "name": "联盟广告"
        },
        {
            "value": 135,
            "name": "视频广告"
        },
        {
            "value": 1548,
            "name": "搜索引擎"
        }
    ]
}

例如列表websocket数据格式
{
    "list_01":[
        {
            "orgnization": "辽宁分行",
            "corpbalance": 1000002,
            "corpbalanceup": 500002,
            "personalbalance": 22002,
            "personalbalanceup": -502000
        },
        {
            "orgnization": "长春分行",
            "corpbalance": 1000025,
            "corpbalanceup": -550050,
            "personalbalance": 42000,
            "personalbalanceup": -202000
        },
        {
            "orgnization": "福建分行",
            "corpbalance": 5694,
            "corpbalanceup": 8520,
            "personalbalance": 40000,
            "personalbalanceup": 14
        },
        {
            "orgnization": "广州分行",
            "corpbalance": 1000000,
            "corpbalanceup": 22,
            "personalbalance": 300000,
            "personalbalanceup": 5260
        }
    ]
}
```
>  *** 注意： WebSocket推送的数据会覆盖原有的静态JSON数据
