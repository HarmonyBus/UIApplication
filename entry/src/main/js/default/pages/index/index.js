import router from '@system.router'
import app from '@system.app'

export default {
    data: {
    },
    clickAction(){
        router.replace({
            uri: 'pages/detail/detail'
        });
    },
    openPage($page){
        console.log($page);
        router.replace({
            uri: 'pages/'+$page
        });
    },
    touchMove(e){
        if(e.direction == "right")
        {
            console.log("APP运行结束。");
            this.appExit();
        }
    },
    appExit(){  //结束应用程序
        app.terminate();
    }
}
