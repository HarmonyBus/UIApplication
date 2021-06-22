import utils from '../../common/utils/utils.js';
export default {
    data: {
        progressNumber: 0,
    },
    updateProgress(){
        console.log("--->"+this.progressNumber);
        console.log("HarmonyOS - Update.");

        if(this.progressNumber > 99){
            this.progressNumber = 0
        } else {
            this.progressNumber = this.progressNumber + 10
        }
    },
    touchMove(e){
        if(e.direction == "right")
        {
            utils.backToHome();
        }
    },
}    