import utils from '../../common/utils/utils.js';
export default {
    touchMove(e){
        if(e.direction == "right")
        {
            utils.backToHome();
        }
    },
}