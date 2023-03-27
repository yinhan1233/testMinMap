/**
 * 说明：视频融合示例
 * 操作：场景加载万层后会切换到指定楼层，点击不同按钮，可查看不同区域的视频监控投影
 */

// 引入jquery.easyui插件
THING.Utils.dynamicLoad(['/guide/lib/jquery.easyui.min.js', '/guide/lib/default/easyui.css'], function () {
    var panel =
        `<div class="easyui-panel" style="display:none;padding:5px; width: 220px;height: auto;margin-top: 10px;margin-left: 10px; position: absolute; top: 0px; right: 0; z-index: 1;background-color: white">
            <ul id="objectTree" class="easyui-tree"></ul>
        </div>`
    $('#div2d').append($(panel));
})
// 加载视频融合所需要的js库
THING.Utils.dynamicLoad(['https://uinnova-pano.oss-cn-beijing.aliyuncs.com/projector/js/thing.projector.min.js'], function() {
    // 用于记录 自动巡视 的视点
    var views = [
        { 'name': 'cam1', 'stoptime': 10 * 1000 }
    ];
    // 自动巡视 当前视点下标
    var viewStep = 0;
    // 自动巡视 计时器
    var timer;
    // 加载场景代码 
    var app = new THING.App({ resourceLibraryUrl: "./",
        type: 'Office',
        skyBox: 'CloudySky',
        url: './scene/1/',
        // url: '/api/scene/6bc9b5228dd1f6965a83ae0d',  // 场景地址
        complete: () => {
            createUI();
            createProjector();
            initColor();
            initVedioClick();
            app.level.change(app.query('Campus')[0]);
            var building = app.query('shiyi_b')[0];
            app.camera.flyTo(building);
        }
    });

    /**
     * 摄像头点击播放视频
     */
    function initVedioClick() {
        var videoOut = app.query('video_out')[0];
        videoOut.on('click',function(ev){
            // 将视频页面作2D界面元素 通过快捷界面库 panel 的iframe组件进行添加
            var panel = new THING.widget.Panel({
                titleText: "视频",
                dragable: true,
                hasTitle: true,
                width: "500px",
                closeIcon: true
            });
            var iframe = panel.addIframe({ url: "https://cdn.test.trydotec.com/gis-service/street1.mp4" }, 'url').caption("").setHeight('279px');
            panel.position = [80, 150];
            // 关闭 panel 时，移除嵌入视频的 iframe 页面
            panel.on("close", function() {
                // panel.remove(iframe);
                panel.destroy();
                panel = null;
            });
        });

        var video1 = app.query('dahua1')[0];
        video1.on('click',function(ev){
            // 将视频页面作2D界面元素 通过快捷界面库 panel 的iframe组件进行添加
            var panel = new THING.widget.Panel({
                titleText: "视频",
                dragable: true,
                hasTitle: true,
                width: "500px",
                closeIcon: true
            });
            var iframe = panel.addIframe({ url: "https://cdn.test.trydotec.com/gis-service/street1.mp4" }, 'url').caption("").setHeight('279px');
            panel.position = [80, 150];
            // 关闭 panel 时，移除嵌入视频的 iframe 页面
            panel.on("close", function() {
                // panel.remove(iframe);
                panel.destroy();
                panel = null;
            });
        });

        var video2 = app.query('dahua2')[0];
        video2.on('click',function(ev){
            // 将视频页面作2D界面元素 通过快捷界面库 panel 的iframe组件进行添加
            var panel = new THING.widget.Panel({
                titleText: "视频",
                dragable: true,
                hasTitle: true,
                width: "500px",
                closeIcon: true
            });
            var iframe = panel.addIframe({ url: "https://cdn.test.trydotec.com/gis-service/street3.mp4" }, 'url').caption("").setHeight('279px');
            panel.position = [80, 150];
            // 关闭 panel 时，移除嵌入视频的 iframe 页面
            panel.on("close", function() {
                // panel.remove(iframe);
                panel.destroy();
                panel = null;
            });
        });

        var video3 = app.query('dahua3')[0];
        video3.on('click',function(ev){
            // 将视频页面作2D界面元素 通过快捷界面库 panel 的iframe组件进行添加
            var panel = new THING.widget.Panel({
                titleText: "视频",
                dragable: true,
                hasTitle: true,
                width: "500px",
                closeIcon: true
            });
            var iframe = panel.addIframe({ url: "https://cdn.test.trydotec.com/gis-service/street2.mp4" }, 'url').caption("").setHeight('279px');
            panel.position = [80, 150];
            // 关闭 panel 时，移除嵌入视频的 iframe 页面
            panel.on("close", function() {
                // panel.remove(iframe);
                panel.destroy();
                panel = null;
            });
        });

        var video4 = app.query('dahua4')[0];
        video4.on('click',function(ev){
            // 将视频页面作2D界面元素 通过快捷界面库 panel 的iframe组件进行添加
            var panel = new THING.widget.Panel({
                titleText: "视频",
                dragable: true,
                hasTitle: true,
                width: "500px",
                closeIcon: true
            });
            var iframe = panel.addIframe({ url: "https://cdn.test.trydotec.com/gis-service/elevator.mp4" }, 'url').caption("").setHeight('279px');
            panel.position = [80, 150];
            // 关闭 panel 时，移除嵌入视频的 iframe 页面
            panel.on("close", function() {
                // panel.remove(iframe);
                panel.destroy();
                panel = null;
            });
        });
    }



    /**
     * 设置物体颜色
     */
    function initColor() {
        var video1 = app.query('dahua1')[0];
        var video2 = app.query('dahua2')[0];
        var video3 = app.query('dahua3')[0];
        var video4 = app.query('dahua4')[0];
        var videoOut = app.query('video_out')[0];

        videoOut.style.color = '#ff0000';
	    videoOut.style.outlineColor = '#0000ff';  // 设置勾边颜色

        video1.style.color = '#ff0000';
	    video1.style.outlineColor = '#0000ff';  // 设置勾边颜色

        video2.style.color = '#ff0000';
	    video2.style.outlineColor = '#0000ff';  // 设置勾边颜色

        video3.style.color = '#ff0000';
	    video3.style.outlineColor = '#0000ff';  // 设置勾边颜色

        video4.style.color = '#ff0000';
	    video4.style.outlineColor = '#0000ff';  // 设置勾边颜色
    }

    /**
     * 创建界面
     */
    function createUI() {
        THING.widget.Button("展示结构树", showTree);
        // THING.widget.Button("观察内部", function() {
        //     var floor = app.query('shiyi_b')[0];
        //     app.camera.flyTo(floor);
        // });
        THING.widget.Button("定位到A座", function() {
            // 回到外面的世界
            app.level.change(app.query('Campus')[0]);
            var building = app.query('shiyi_a')[0];
            app.camera.flyTo(building);
        });
        THING.widget.Button("定位到B座", function() {
            // 回到外面的世界
            app.level.change(app.query('Campus')[0]);
            var building = app.query('shiyi_b')[0];
            app.camera.flyTo(building);
        });
        THING.widget.Button("定位到B座旋转", function() {
            // 回到外面的世界
            app.level.change(app.query('Campus')[0]);
            var building = app.query('shiyi_b')[0];
            app.camera.flyTo({
                object: building,
                xAngle: 70,
                yAngle: 160,
                // radius: 0.5
            });
            // app.camera.move(0, 2100);
        });
        THING.widget.Button("定位到准度视角", positionToTrydo);
    }
    function showTree() {
        $('#objectTree').parent().show();
        $('#objectTree').tree({
            data: getRootData(app.root),
            checkbox: true,
            cascadeCheck: false,
            onCheck: function (node, checked) {
                if (app.query('#' + node.id)[0]) {
                    app.query('#' + node.id).visible = checked;
                    if ((app.query('#' + node.id)[0].type) == "Campus") {
                        changeBuilding(app.query('#' + node.id)[0].buildings);
                    }
                    if ((app.query('#' + node.id)[0].type) == "Building") {
                        if (app.query('#' + node.id)[0].facades[0]) {
                            app.query('#' + node.id)[0].floors.visible = false;
                        }
                    }
                } else {
                    app.root.visible = checked;
                }
            },
            onClick: function (node, checked) {
                var id = node.id;
                var obj = app.query('#' + id)[0];
                if (obj) {
                    app.level.change(obj);
                }
            }
        });
    }
    /**
     * 定位到准度视角
     */
    function positionToTrydo() {
        // 回到外面的世界
        app.level.change(app.query('Campus')[0]);
        app.camera.flyTo({
            position: [70, 90, -38],
            target: [50, 0, -5],
            time: 1500
        });
    }

    // 视频融合代码
    /**
     * 动态创建video标签，如果是要视频直播流，可自行解决，获取到video标签后传递给ThingJS
     */
    function getVideoElement(url) {
        var video = document.createElement("video");
        video.src = url;
        video.autoplay = true;
        video.muted = true;
        video.loop = "loop";
        video.preload = "auto";
        video.crossOrigin = 'anonymous';
        video.addEventListener("canplay", function() {
            video.play();
        });
        return video;
    }

    /**
     * 创建视频投影
     */
    function createProjector() {
        var floor = app.query('floor')[0];
        var road1 = app.query('road1')[0];
        var road2 = app.query('road2')[0];
        var projector01 = app.create({
            name: "cam1",
            type: 'Projector',
            position: [50, 69, -40],
            angles: [-72, 190, -17, "YXZ"],
            parent: floor
        });
        projector01.setReceiveObjects([floor,road1,road2]);
        projector01.far = 500;
        projector01.fov = 30;
        // var video1 = getVideoElementFlv("https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv");
        var video1 =  getVideoElement("https://cdn.test.trydotec.com/gis-service/elevator.mp4");
        //设置video标签
        projector01.setVideoElement(video1);


        var step18 = app.query('18层')[0];
        // var floor = app.level.current; // 当前楼层
        var wall = step18.wall; // 楼层中的墙
        var plan = step18.plan; // 地板
        var roof = step18.roof; // 楼层屋顶
        var elePlan = app.query('ele_plan')[0];

        var projectorElevator = app.create({
            name: "camElevator",
            type: 'Projector',
            position: [103, 11.8, -65],
            angles: [0, 180, 0, "YXZ"]
        });
        projectorElevator.setReceiveObjects([wall,roof,elePlan.plan]);
        projectorElevator.far = 15;
        projectorElevator.fov = 60;
        var videoElevator = getVideoElement("https://cdn.test.trydotec.com/gis-service/elevator.mp4");
        //设置video标签
        projectorElevator.setVideoElement(videoElevator);

        var projectorStreet1 = app.create({
            name: "camStreet1",
            type: 'Projector',
            position: [90.5, 12.6, -55],
            angles: [-5, -2, 0, "YXZ"],
        });
        projectorStreet1.setReceiveObjects([wall,plan,roof]);
        projectorStreet1.far = 15;
        projectorStreet1.fov = 50;
        var videoStreet1 = getVideoElement("https://cdn.test.trydotec.com/gis-service/street1.mp4");
        //设置video标签
        projectorStreet1.setVideoElement(videoStreet1);

        var projectorStreet2 = app.create({
            name: "camStreet2",
            type: 'Projector',
            position: [90.5, 12.6, -65],
            angles: [-1, -86, 0, "YXZ"],
        });
        projectorStreet2.setReceiveObjects([wall,plan,roof]);
        projectorStreet2.far = 30;
        projectorStreet2.fov = 35;
        var videoStreet2 = getVideoElement("https://cdn.test.trydotec.com/gis-service/street2.mp4");
        //设置video标签
        projectorStreet2.setVideoElement(videoStreet2);

        var projectorStreet3 = app.create({
            name: "camStreet3",
            type: 'Projector',
            position: [90.5, 12.6, -54.8],
            angles: [0, -90, 0, "YXZ"],
        });
        projectorStreet3.setReceiveObjects([wall,plan,roof]);
        projectorStreet3.far = 30;
        projectorStreet3.fov = 30;
        var videoStreet3 = getVideoElement("https://cdn.test.trydotec.com/gis-service/street3.mp4");
        //设置video标签
        projectorStreet3.setVideoElement(videoStreet3);
    }


    // 树形结构方法
    /**
     * 根节点信息
     * @param {Object} root - root类
     */
    function getRootData(root) {
        var data = [];
        data.push(getSceneRoot(root));
        return data;
    }

    /**
     * 根节点信息
     * @param {Object} root - root类
     */
    function getSceneRoot(root) {
        var data = {
            id: root.id,
            checked: true,
            state: 'open',
            text: 'root',
        };
        data["children"] = [];
        root.campuses.forEach(function (campus) {
            data["children"].push(getCampusData(campus));
        });
        return data;
    }
    /**
     * 收集建筑信息
     * @param {Object} building - 建筑对象
     */
    function getBuildingData(building) {
        var data = {
            id: building.id,
            checked: true,
            state: 'open',
            text: building.type + ' (' + building.id + ')'
        };
        data["children"] = [];
        building.floors.forEach(function (floor) {
            data["children"].push(getFloorData(floor));
        });
        return data;
    }
    /**
     * 收集楼层信息
     * @param {Object} floor - 楼层对象
     */
    function getFloorData(floor) {
        var data = {
            id: floor.id,
            checked: true,
            state: 'open',
            text: floor.type + ' (level:' + floor.levelNumber + ')'
        };
        data["children"] = [];
        floor.things.forEach(function (thing) {
            data["children"].push(getThingData(thing));
        });
        return data;
    }
    /**
     * 根节点信息由建筑和室外物体组成
     * @param {Object} campus - 园区类
     */
    function getCampusData(campus) {
        var data = {
            id: campus.id,
            checked: true,
            state: 'open',
            text: campus.type + ' (' + campus.id + ')'
        };
        data["children"] = [];
        campus.buildings.forEach(function (building) {
            data["children"].push(getBuildingData(building));
        });
        campus.things.forEach(function (thing) {
            data["children"].push(getThingData(thing));
        });
        return data;
    }
    /**
     * 建筑对象
     * @param {Object} thing - 物对象
     */
    function getThingData(thing) {
        return {
            id: thing.id,
            checked: true,
            text: thing.type + ' (' + thing.name + ')'
        };
    }

    function getVideoElementFlv(url) {
        var video = document.createElement("video");
        video.autoplay = true;
        video.muted = true;
        video.loop = "loop";
        video.preload = "auto";
        video.crossOrigin = 'anonymous';
        video.type="rtmp/flv";


        var flvPlayer;
        if (flvjs.isSupported()) {
                var player = video;
                
                flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: url,
                    isLive: true,
                    hasVideo: true,
                });
            flvPlayer.attachMediaElement(player);
            flvPlayer.load(); //加载
            flvPlayer.play();
        }
        return video;
    }

});


// 引入一键图表脚本
// THING.Utils.dynamicLoad(['./static/ScenePreview/chart/PreviewChartControl.js'], function () {
//     // 创建图表
//     new PreviewChartControl({
//         url: '/api/chart/6349196f05108257a50cd97f',
//         tag: '1',
//         isLoad: true,  // 加载页，默认为true
//         isApplyBackground: false,  // 是否应用图表背景，启用该参数会替换app.background的值，默认false
//         autoResize: {  // 图表自适应
//            enable: false,  // 自适应图表分辨率，默认为false
//            orgin: 'center center'  // 自适应的基准点，第一个参数取值为:left、center、right，第二个参数取值为:top、center、bottom，默认值为“center center”
//         },
//         complete: function(){
           
//         }
//     });
// })
