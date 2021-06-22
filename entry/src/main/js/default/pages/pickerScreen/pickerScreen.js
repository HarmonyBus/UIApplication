import utils from '../../common/utils/utils.js';
export default {
    data: {
        country: [
                "China",
                "Pakistan",
                "Saudi Arabia",
                "UAE",
                "America",
                "Canada"
        ],
    },
    touchMove(e){
        if(e.direction == "right")
        {
            utils.backToHome();
        }
    },
}