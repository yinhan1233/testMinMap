class TjsPanel {
    constructor() {
        this.init()
    }
    init() {
        this.panelClass = new Panel();
        //this.mapDetailsPanelClass.create()
    }
    /**
     * 挂载功能
     */
    mounted() {
        if (this.panelClass != null) {
           //create()
           this.panelClass.resetState();
        }
    }
    /**
     * 销毁功能
     */
    destroyed() {
        if (this.panelClass != null) {
            // this.scenePopoverVerificationClass.poverificationDestoryed()
        }
    }
}