class TjsSwitch_control_vs2 {
    constructor() {
        this.init()
    }
    init() {
        this.switch_control_vs2Class = new Switch_control_vs2();
        //this.mapDetailsPanelClass.create()
    }
    /**
     * 挂载功能
     */
    mounted() {
        if (this.switch_control_vs2Class != null) {
           //create()
           this.switch_control_vs2Class.resetState();
        }
    }
    /**
     * 销毁功能
     */
    destroyed() {
        if (this.switch_control_vs2Class != null) {
            // this.scenePopoverVerificationClass.poverificationDestoryed()
        }
    }
}