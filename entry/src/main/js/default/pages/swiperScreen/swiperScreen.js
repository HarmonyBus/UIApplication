import utils from '../../common/utils/utils.js';
export default {
    data: {
        imagesList: [
            {
                id: 1,
                src: '/common/images/cheng.png'
            },
            {
                id: 2,
                src: '/common/images/xu.png'
            },
            {
                id: 3,
                src: '/common/images/ka.png'
            },
        ],
    },
    touchMove(e){
        if(e.direction == "right")
        {
            utils.backToHome();
        }
    },
}