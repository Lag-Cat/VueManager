import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userName: "",
        profilePhoto: "",
        userMenu: [
            {
                id: "10000",
                index: "",//对应页面路由
                title: "我的资料",//标题
                children: [
                    //子菜单
                    {
                        id: "10001",
                        index: "/Manager/userInfo",
                        title: "用户信息"
                    },
                    {
                        id: "10002",
                        index: "/Manager/upLoadPrefilePhoto",
                        title: "上传头像"
                    },
                    {
                        id: "10003",
                        index: "/Manager/personalInfo",
                        title: "个人信息"
                    },
                    {
                        id: "10004",
                        index: "/Manager/privateInfo",
                        title: "隐私信息"
                    }
                ]
            },
            {
                id: "11000",
                index: "",
                title: "我的积分",
                children: [
                    {
                        id: "11001",
                        index: "/Manager/rewardRecharge",
                        title: "积分充值"
                    },
                    {
                        id: "11002",
                        index: "/Manager/rewardRecord",
                        title: "积分获取记录"
                    },
                    {
                        id: "11003",
                        index: "/Manager/rewardRule",
                        title: "积分规则"
                    }
                ]
            },
            {
                id: "12000",
                index: "",
                title: "积分商城",
                children: [
                    {
                        id: "12001",
                        index: "/Manager/goodsDetail",
                        title: "商品明细"
                    },
                    {
                        id: "12002",
                        index: "/Manager/goodsList",
                        title: "商品列表"
                    },
                    {
                        id: "12003",
                        index: "/Manager/shopHome",
                        title: "商城首页"
                    }
                ]
            },
            {
                id: "13000",
                index: "",
                title: "我的空间",
                children: [
                    {
                        id: "13001",
                        index: "/Manager/myBlog",
                        title: "我的空间"
                    },
                    {
                        id: "13001",
                        index: "/Manager/blogSetting",
                        title: "空间设置"
                    }

                ]
            },
            {
                id: "14000",
                index: "",
                title: "我的相册",
                children: [
                    {
                        id: "14001",
                        index: "/Manager/gallary",
                        title: "我的相册"
                    },
                    {
                        id: "14002",
                        index: "/Manager/gallarySetting",
                        title: "相册设置"
                    },
                    {
                        id: "14003",
                        index: "/Manager/uploadPic",
                        title: "上传图片"
                    },
                ]
            },
        ],
        userToken:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    getters: {
        getUserTopNavList(state) {
            let tmp = []
            for (var i = 0; i < state.userMenu.length; i++) {
                tmp.push(state.userMenu[i]);
            }
            if(tmp.length==0){
                this.$message({
                    showClose: true,
                    message: '没有权限哦^_^',
                    type: 'error'
                  });

                  setTimeout(() => {
                     this.$router.push("/");
                  }, 2000);
            }
            return tmp;
        },
        getUserLeftNavListById: (state) => (id) => {
            return state.userMenu.find(item => item.id == id).children;
        }
    },
    mutations: {
        setUserName(state, name) {

            state.userName = name;
            console.log(this.state.userName);
        },
        test(arr){
            console.log("test");
        }
    },
    actions: {

    },
    modules: {

    }
});