/*
* 说明：本文件是“项目离线部署包”场景打包配置文件。
* 提示：项目离线部署包打包时将参考本文件配置进行。为确保打包完整，请将项目引入的“园区”场景URL、
*       模型URL，填写到下方的配置中。
*/
{
    // 当前项目使用的ThingJS包（thing.min.js）版本号
    "thingjs_version" : "1.3.7",
        // 举例：项目中引用的第一个场景URL为 "/api/scene/d370cad09e74f42d932b083d"，
        //      第二个场景URL为 "/api/scene/b422fd26d4c7874df3992068"，
        //      为能正确打包上述两个场景，需配置如下：
        "scenes": [
            "/api/scene/c6b351069fbd6f7d3c1d4e37",  //周桥机房场景
            "/api/scene/c65cecd2c4f8027eb35a07a2"    //机柜场景
        ],
            // 举例：项目中动态引用了模型 "/api/models/8CF6171F7EE046968B16E10181E8D941/0/gltf/"，
            //      为能正确打包该引用模型，需配置如下：
            "models": [
                "/api/models/20161024152407815927201/0/gltf/",
                "/api/models/20160225135852411976619/0/gltf/",
                "/api/models/d34f4ee2-6d3d-435a-9e93-73574a9fbc10/0/gltf/",
                "/api/models/A7E8E7EFAFFE4C3980BAE486A55F3A65/0/gltf/",
                "/api/models/20160718174742030112154/0/gltf/",
                "/api/models/046999E2BCCA4DF0995043B46EC40779/0/gltf/",

                "/api/models/8584728E8FB34AD1B30FF11EED948603/0/gltf/",
                "/api/models/d3eb67a4fd82423690356e39e8c27948/0/gltf/",//机柜模型
                "/api/models/9b6148cde5254e8a8608f8a628612fa3/0/gltf/", //白色机柜模型
                "/api/models/62A8A75C75044E6AB3D8463FA0CB67AF/0/gltf/",  //摄像头模型
                "/api/models/20161024153639323245104/0/gltf/",   //网络设备
                "/api/models/20161024152407815927201/0/gltf/",   //网络设备
                "/api/models/20160714153938906053751/0/gltf/",   //网络设备
                "/api/models/c61f6c6f7a6048999917999a2c2a2343/0/gltf/",   //空调
                "/api/models/20160509171503580858085/0/gltf/",   //烟感
                "/api/models/a380b1ada1014dfb9dadfcb13f8a3ef2/0/gltf/", //温湿度传感器
                "/api/models/20160516165058142594227/0/gltf/", //氢气传感器
                "/api/models/C202F901EF564A8F868FAE0E50F146CA/0/gltf/", //环控采集器
                "/api/models/e1e21facdcfa47b499526b36bb75a9c2/0/gltf/"//环境采集箱挂墙上
            ]
}
