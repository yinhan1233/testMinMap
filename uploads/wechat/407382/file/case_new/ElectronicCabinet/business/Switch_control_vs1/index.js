class TjsSwitch_control_vs1 {
    constructor() {
        this.init()
    }
    init() {
        this.switch_control_vs1Class = new Switch_control_vs1();
        //this.mapDetailsPanelClass.create()
    }
    /**
     * 挂载功能
     */
    mounted() {
        if (this.switch_control_vs1Class != null) {
           //create()
           this.switch_control_vs1Class.resetState();
        }
    }
    /**
     * 销毁功能
     */
    destroyed() {
        if (this.switch_control_vs1Class != null) {
            // this.scenePopoverVerificationClass.poverificationDestoryed()
        }
    }
}