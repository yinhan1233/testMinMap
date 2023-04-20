/*
* 说明：本文件是“项目离线部署包”场景打包配置文件。
* 提示：项目离线部署包打包时将参考本文件配置进行。为确保打包完整，请将项目引入的“园区”场景URL、
*       模型URL，填写到下方的配置中。
*/
{
    // 当前项目使用的ThingJS包（thing.min.js）版本号
    "thingjs_version": "1.4.14",
    // 举例：项目中引用的第一个场景URL为 "/api/scene/d370cad09e74f42d932b083d"，
    //      第二个场景URL为 "/api/scene/b422fd26d4c7874df3992068"，
    //      为能正确打包上述两个场景，需配置如下：
    "scenes": [
        "/api/scene/a3928b810fe75af1293dc24e",
        "/api/scene/a011da3a34ed455d6825c039"
    ],
    // THING.Utils.dynamicLoad(['https://www.thingjs.com/guide/ScenePreview/v0.1.9/AppPreview.min.js'],
    //     function () {
    //         // 在load事件中的调用示例如下所示：
    //         app.on('load', function(){
    //             new AppPreview({app: app, type: 'scene'});
    //         });
    //     }
    // )
    // 举例：项目中动态引用了模型 "/api/models/8CF6171F7EE046968B16E10181E8D941/0/gltf/"，
    //      为能正确打包该引用模型，需配置如下：
    "models": [
        "/api/models/9b6148cde5254e8a8608f8a628612fa3/0/gltf/",
        "/api/models/20160506100850050553478/0/gltf/",
        "/api/models/CAD800E016E644BFBDBE0B28710BCA88/0/gltf/",
        "/api/models/20140813240003/0/gltf/",
        "/api/models/20160509171503580858085/0/gltf/",
        "/api/models/f7866a2940774f20938147142c0226a4/0/gltf/",
        "/api/models/245b08a53a614a0d96aeb0f74fbcf32c/0/gltf/",
        "/api/models/8c41cfe965524038ba48aeeec0ce979d/0/gltf/",
        "/api/models/E99150EF0AC24D4F92C17ED572CACC45/0/gltf/",
        "/api/models/E674B392FFA74A61BEE0E3EE26B1BD55/0/gltf/",
        "/api/models/D001C17E795F41CB9B86926D76DDA331/0/gltf/",
        "/api/models/20150312752987/0/gltf/",
        "/api/models/20150702292750/0/gltf/",
        "/api/models/fbaa7b897e6a4897aef4eda4abe09166/0/gltf/",
        "/api/models/7A731167F5B34008AA7F2935DF70FDBA/0/gltf/",
        "/api/models/20150507190453/0/gltf/",
        "/api/models/fc121bb37d374d70bd670199b98b71ba/0/gltf/",
        "/api/models/f45e77a1210d43a4b39a3665fd496478/0/gltf/",
        "/api/models/20160715114315578364662/0/gltf/",
        "/api/models/956517dbaf8d4004b95038da344c1051/0/gltf/",
        "/api/models/f9693639-7097-478d-be3f-de5060355e1f/0/gltf/",
        "/api/models/20150129708215/0/gltf/",
        "/api/models/fb40096ba5c24708a3780dfdc5deb542/0/gltf/",
        "https://model.3dmomoda.cn/models/37972dd2c96c4a37a3245a00bee3628b/0/gltf",
        "/api/models/189646B02C2C4CBFBDAF41F96B16A71E/0/gltf/",
        "/api/models/20160927150627601191778/0/gltf/",
        "/api/models/417312464AD74388915BB0286B1028B8/0/gltf/",
        "/api/models/20150612976134/0/gltf/",
        "/api/models/20160913162612944220623/0/gltf/",
        "/api/models/A7E8E7EFAFFE4C3980BAE486A55F3A65/0/gltf/",
        "/api/models/FAEB6AEBE9524BF0A178F72F872F303A/0/gltf/",
        "/api/models/3A45309974B54A3595496D006AD6F7E1/0/gltf/",
        "/api/models/20150612811543/0/gltf/",
        "/api/models/BF82A71AE89E4791B96E21F7AF8E41EF/0/gltf/",
        "/api/models/20150925175803722610657/0/gltf/",
        "/api/models/20160516164337423748930/0/gltf/",
        "/api/models/20160516165058142594227/0/gltf/",
        "/api/models/20151201115325417242844/0/gltf/",
        "/api/models/20160112233916016943367/0/gltf/",
        "/api/models/02FE0AB20DD045E9AE64C7B06B3B2171/0/gltf/",
        "/api/models/eab660532ff44a4a878064399152c6ff/0/gltf/",
        "/api/models/20160510091927002987675/0/gltf/",
        "/api/models/DD497D1FFBD74220880AE376B4E810E7/0/gltf/",
        "/api/models/92bd3751dfd641e78deb5c69cddf0b37/0/gltf/",
        "/api/models/70a168a8f9c14e71beba5dffff6e6cfe/0/gltf/",
        "/api/models/06103047f3a64f8f9720e8c972f5d121/0/gltf/",
        "/api/models/3520693daab445409c7c38b254fcc6ba/0/gltf/",
        "/api/models/ca6058412a7f46cb8ee5c724e3fbed2f/0/gltf/",
        "/api/models/5ffc3a18bc554ec8a623e652de4b19d9/0/gltf/",
        "/api/models/652dcd88d0924e8d94b5de65cd216f70/0/gltf/",
        "/api/models/4e6337a102fd4bb3bd0cfcb0ce2c50b2/0/gltf/",
        "/api/models/63ae1f332cec47bda22694a9218df0a5/0/gltf/",
        "/api/models/c773fe26046b4d478996f261b3eb284d/0/gltf/"
    ]
}