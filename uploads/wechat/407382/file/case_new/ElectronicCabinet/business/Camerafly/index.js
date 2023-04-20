class TjsCamerafly {
    constructor() {
        this.init()
    }
    init() {
        this.cameraflyClass = new Camerafly();
        //this.mapDetailscameraflyClass.create()
    }
    /**
     * 挂载功能
     */
    mounted() {
        if (this.cameraflyClass != null) {
           //create()
           this.cameraflyClass.resetState();
        }
    }
    /**
     * 销毁功能
     */
    destroyed() {
        if (this.cameraflyClass != null) {
            // this.scenePopoverVerificationClass.poverificationDestoryed()
        }
    }
}