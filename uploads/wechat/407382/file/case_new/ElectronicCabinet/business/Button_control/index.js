class TjsButton_control {
    constructor() {
        this.init()
    }
    init() {
        this.button_controlClass = new Button_control();
        //this.mapDetailsPanelClass.create()
    }
    /**
     * 挂载功能
     */
    mounted() {
        if (this.button_controlClass != null) {
           //create()
           this.button_controlClass.resetState();
        }
    }
    /**
     * 销毁功能
     */
    destroyed() {
        if (this.button_controlClass != null) {
            // this.scenePopoverVerificationClass.poverificationDestoryed()
        }
    }
}