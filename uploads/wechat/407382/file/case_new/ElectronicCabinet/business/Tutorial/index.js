class TjsTutorial {
    constructor() {
        this.init()
    }
    init() {
        this.tutorialClass = new Tutorial();
        //this.mapDetailstutorialClass.create()
    }
    /**
     * 挂载功能
     */
    mounted() {
        if (this.tutorialClass != null) {
           //create()
           this.tutorialClass.resetState();
        }
    }
    /**
     * 销毁功能
     */
    destroyed() {
        if (this.tutorialClass != null) {
            // this.scenePopoverVerificationClass.poverificationDestoryed()
        }
    }
}