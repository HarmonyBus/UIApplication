import utils from '../../common/utils/utils.js';

export default {
    data: {
        images: [
            { src: '/common/images/mh001.jpg' },
            { src: '/common/images/mh002.jpg' },
            { src: '/common/images/mh003.jpg' },
            { src: '/common/images/mh004.jpg' },
            { src: '/common/images/mh005.jpg' },
            { src: '/common/images/mh006.jpg' },
        ],
        handleClick() {
            const animator = this.$refs.animator; // 获取 ref 属性为 animator 的 DOM 元素。
            const state = animator.getState();
            console.log(state);
            if (state === 'paused') {
                animator.resume();
            } else if (state === 'stopped') {
                animator.start();
            } else {
                animator.pause();
            }
        },
        backAction() {
            utils.backToHome();
        },
    }
}