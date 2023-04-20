let query = getQueryString();
switch (query) {
  case "zp":
    THING.Utils.dynamicLoad(
      ["/uploads/wechat/407382/file/case_new/roomScenes/zhouPuTwin.js"],
      function () {},
      false,
      false
    );
    break;
  case "pj":
    THING.Utils.dynamicLoad(
      ["/uploads/wechat/407382/file/case_new/roomScenes/pujiangTwin.js"],
      function () {},
      false,
      false
    );
    break;
  default:
    THING.Utils.dynamicLoad(
      ["/uploads/wechat/407382/file/case_new/roomScenes/pujiangTwin.js"],
      function () {},
      false,
      false
    );
    break;
}

function getQueryString() {
  let hash = window.location.hash;
  let result = hash ? hash.split("&").at(1).split("=")[1] : "";
  return result;
}
// 打印方法重写
const log = THING.Utils.log.bind(document);
