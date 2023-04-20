/** 静态公共类 */
class Common{

    constructor() {

    }
    /**


     * 获取app对象
     */
    static getApp(){
        return THING.App.current;
    }
    /**
     * 获取地图对象
     */
    static getMap(){
        return CMAP.getCurrentMap();
    }
    /**
     * 获取项目根目录
     */
    static getRootFilePath() {
        return '/uploads/wechat/oLX7p064jwe0wbt6iU-_f2om-3Wg/file/ElectronicCabinet';

    }
    /**
     * 获取项目资源根目录
     */
    static getAssetsFilePath() {
        return '/uploads/wechat/oLX7p064jwe0wbt6iU-_f2om-3Wg/file/ElectronicCabinet/assets'
;
    }
    /**
     * 10以内数字变0x形式
     */
    static transformNum(i){
         let num=i<10?'0'+i:i
        return num;
    }
}