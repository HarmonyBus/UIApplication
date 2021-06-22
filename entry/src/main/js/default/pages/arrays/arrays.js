import app from '@system.app'
import utils from '../../common/utils/utils.js';

export default {
    data: {
        arrayData: [
            {id: 1, name: '鸿蒙巴士', site: 'www.harmonybus.net'},
            {id: 2, name: 'www.harmonybus.net', site: 'www.harmonybus.net'},
        ],
    },
    touchMove(e){  // 处理滑动事件。
        if(e.direction == "right")  // 向右滑动退出。
        {
            utils.backToHome();
        }
    },
}