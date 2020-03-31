import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import Login from '@/page/home/Login'
import Manager from '@/page/home/Manager'
import Home from '@/page/home/Home'
import PersonalInfo from '@/page/manager/baseData/PersonalInfo'
import PrivateInfo from '@/page/manager/baseData/PrivateInfo'
import UpLoadPrefilePhoto from '@/page/manager/baseData/UpLoadPrefilePhoto'
import UserInfo from '@/page/manager/baseData/UserInfo'
import IndexTab from '@/page/manager/index/IndexTab'
import MyBlog from '@/page/manager/myBlog/MyBlog'
import BlogSetting from '@/page/manager/myBlog/BlogSetting'
import Gallary from '@/page/manager/myGallary/Gallary'
import GallarySetting from '@/page/manager/myGallary/GallarySetting'
import UploadPic from '@/page/manager/myGallary/UploadPic'
import RewardRecharge from '@/page/manager/myReward/RewardRecharge'
import RewardRecord from '@/page/manager/myReward/RewardRecord'
import RewardRule from '@/page/manager/myReward/RewardRule'
import GoodsDetail from '@/page/manager/RewardShop/GoodsDetail'
import GoodsList from '@/page/manager/RewardShop/GoodsList'
import ShopHome from '@/page/manager/RewardShop/ShopHome'

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Manager',
      name: 'Manager',
      component: Manager,
      children:[
        {
          path:"/Manager/personalInfo",
          name:"personalInfo",
          component:PersonalInfo
        },
        {
          path:"/Manager/privateInfo",
          name:"privateInfo",
          component:PrivateInfo
        },
        {
          path:"/Manager/upLoadPrefilePhoto",
          name:"upLoadPrefilePhoto",
          component:UpLoadPrefilePhoto
        },
        {
          path:"/Manager/indexTab",
          name:"indexTab",
          component:IndexTab
        },
        {
          path:"/Manager/userInfo",
          name:"userInfo",
          component:UserInfo
        },
        {
          path:"/Manager/blogSetting",
          name:"blogSetting",
          component:BlogSetting
        },
        {
          path:"/Manager/myBlog",
          name:"myBlog",
          component:MyBlog
        },
        {
          path:"/Manager/gallary",
          name:"gallary",
          component:Gallary
        },
        {
          path:"/Manager/gallarySetting",
          name:"gallarySetting",
          component:GallarySetting
        },
        {
          path:"/Manager/uploadPic",
          name:"uploadPic",
          component:UploadPic
        },
        {
          path:"/Manager/rewardRecharge",
          name:"rewardRecharge",
          component:RewardRecharge
        },
        {
          path:"/Manager/rewardRecord",
          name:"rewardRecord",
          component:RewardRecord
        },
        {
          path:"/Manager/rewardRule",
          name:"rewardRule",
          component:RewardRule
        },
        {
          path:"/Manager/goodsDetail",
          name:"goodsDetail",
          component:GoodsDetail
        },
        {
          path:"/Manager/goodsList",
          name:"goodsList",
          component:GoodsList
        },
        {
          path:"/Manager/shopHome",
          name:"shopHome",
          component:ShopHome
        }
      ]
    }
  ]
})


