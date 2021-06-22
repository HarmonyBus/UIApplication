import storage from '@system.storage';
import utils from '../../common/utils/utils.js';
export default {
    data: {
        nameValue: '',
    },
    getStorage(){ //根据key获取某个键值对
        var that = this;
        storage.get({
            key: 'name_key',
            success: function(data) {
                console.log('call storage.get success: ' + data);
                that.nameValue = "call storage.get success: "+data;
            },
            fail: function(data, code) {
                console.log('call storage.get fail, code: ' + code + ', data: ' + data);
                that.nameValue = 'call storage.get fail, code: ' + code + ', data: ' + data;
            },
            complete: function() {
                console.log('call complete');
            },
        });
    },

    setStorage(){ //存储某一个键值对
        var that = this;
        storage.set({
            key: 'name_key',
            value: 'My Storage Value',
            success: function() {
                console.log('call storage.set success.');
                that.nameValue = "call storage.set success.";
            },
            fail: function(data, code) {
                console.log('call storage.set fail, code: ' + code + ', data: ' + data);
            },
        });
    },

    clearStorage(){ //清空所有键值对
        var that = this;
        storage.clear({
            success: function() {
                console.log('call storage.clear success.');
                that.nameValue = 'call storage.clear success.';
            },
            fail: function(data, code) {
                console.log('call storage.clear fail, code: ' + code + ', data: ' + data);
            },
        });
    },

    deleteStorage(){ // 删除某一个键值对
        var that = this;
        storage.delete({
            key: 'name_key',
            success: function() {
                console.log('call storage.delete success.');
                that.nameValue = 'call storage.delete success.';
            },
            fail: function(data, code) {
                console.log('call storage.delete fail, code: ' + code + ', data: ' + data);
            },
        });
    },

    touchMove(e){
        if(e.direction == "right")
        {
            utils.backToHome();
        }
    },

}