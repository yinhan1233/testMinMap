/*
* 说明：本文件是“项目离线部署包”场景打包配置文件。
* 提示：项目离线部署包打包时将参考本文件配置进行。为确保打包完整，请将项目引入的“园区”场景URL、
*       模型URL，填写到下方的配置中。
*/
{
    // 当前项目使用的ThingJS包（thing.min.js）版本号
    "thingjs_version" : "1.4.2",
    // 举例：项目中引用的第一个场景URL为 "/api/scene/d370cad09e74f42d932b083d"，
    //      第二个场景URL为 "/api/scene/b422fd26d4c7874df3992068"，
    //      为能正确打包上述两个场景或单资源园区，需配置如下：
    // "scenes": [
    //     "/api/scene/d370cad09e74f42d932b083d",
    //     "/api/scene/b422fd26d4c7874df3992068"
    //  ],
    // 举例：项目中动态引用了模型 "/api/models/8CF6171F7EE046968B16E10181E8D941/0/gltf/"，
    //      为能正确打包该引用模型，需配置如下：
    // "models": [
    //     "/api/models/8CF6171F7EE046968B16E10181E8D941/0/gltf/"
    //  ],
    // 举例：项目中引用了单资源模型 "/Resources/Model/admin/447aebc08c5e4bc1a2f0d84a0747b763"，
    //      为能正确打包该引用模型，需配置如下：
     "glt": [
        "/Resources/Model/admin/447aebc08c5e4bc1a2f0d84a0747b763"
      ]
    // 举例：项目中引用了单资源QChart "/api/chart/638ede8aee63ce091cc770ca"，
    //      为能正确打包该引用模型，需配置如下：
    // "qct": [
    //     "/api/chart/638ede8aee63ce091cc770ca"
    //  ],
    // 举例：项目中引用了单资源森大屏 "/Resources/BigScreen/admin/178eb10990544ac6abe00388209c143e"，
    //      为能正确打包该引用模型，需配置如下：
    // "dsh": [
    //     "/Resources/BigScreen/admin/178eb10990544ac6abe00388209c143e"
    //  ],
    // 举例：项目中引用了单资源森图表 "/Resources/senChart/admin/f5e187be77074a22833becd4e3492d8a"，
    //      为能正确打包该引用模型，需配置如下：
    // "cht": [
    //     "/Resources/senChart/admin/f5e187be77074a22833becd4e3492d8a"
    //  ],
    // 举例：项目中引用了单资源城市 "/Resources/CityMap/admin/43933"，
    //      为能正确打包该引用模型，需配置如下：
    // "map": [
    //     "/Resources/CityMap/admin/43933"
    //  ]
}
