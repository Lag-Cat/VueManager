<template>
	<el-container class="h-container">
		<sdLogin ref="shadowLogin"></sdLogin>
		<el-header class="h-header" height="200px">
			<el-row>
				<el-col>
					<div class="h-header-context">
						<div class="h-spanL h-spanL-logo" @click="jumpToHome()">
							<img class="h-logo" src="../../assets/logo.png" />
							<span>蕉蕉小站</span>
						</div>
						<div class="h-spanR">
							<userInfo :onLogin="userLogin"></userInfo>
						</div>
					</div>
				</el-col>
				<el-col>
					<div class="h-banner h-clear"></div>
				</el-col>
			</el-row>
		</el-header>
		<el-main class="h-el-main">
			<el-row>
				<el-col>
					<div class="h-m-container">
						<div class="h-m-context">
							<el-menu mode="horizontal" class="fl" :default-active="defaultMenuItem" router>
								<el-menu-item index="/homeIndex">首页</el-menu-item>
								<el-menu-item index="/homeMonent">Banana World!</el-menu-item>
								<el-menu-item index="/homeGallary">相册</el-menu-item>
								<!-- <el-menu-item index="4">视频</el-menu-item> -->
							</el-menu>
							<div class="fr">
								<el-button icon="el-icon-s-data" class="h-m-more" @click="test123()" round>这里有好康的</el-button>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>

			<div class="h-context">
				<transition :name="menuItemChange">
					<keep-alive>
						<router-view class="h-menu-item"></router-view>
					</keep-alive>
				</transition>
			</div>
		</el-main>
		<el-footer height="30px">
			<div>banana的vue项目</div>
		</el-footer>
	</el-container>
	<!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
</template>
<script>
import sdLogin from '../../components/home/ShadowLogin'
import userInfo from '../../components/home/UserInfo'
import {
	treeTraversal,
	searchMenuTree,
	searchMenuTreePath
} from '../../js/treeNode.js'
import axios from '../../config/httpConfig?_=123456'
export default {
	name: 'Home',
	components: {
		sdLogin,
		userInfo
	},
	data() {
		return {
			testsrc: require('@/assets/img1.jpg'),
			userName: '',
			islogin: false,
			topCarouselList: [
				{
					title: '壁纸1哦',
					subtitle: '这是个壁纸1',
					img: require('@/assets/img1.jpg')
				},
				{
					title: '壁纸2哦',
					subtitle: '这是个壁纸2',
					img: require('@/assets/img2.jpg')
				},
				{
					title: '壁纸3哦',
					subtitle: '这是个壁纸3',
					img: require('@/assets/img3.jpg')
				},
				{
					title: '壁纸4哦',
					subtitle: '这是个壁纸4',
					img: require('@/assets/img4.jpg')
				}
			],
			announcementList: [
				{
					mark: '置顶',
					title: '4月新番上线!',
					content: '进入查看详细情况'
				},
				{
					mark: '维护',
					title: '2020年春节系统维护公告',
					content:
						'由于公司春节放假，服务器需要停机，从2020年1月19日到2020年2月1号在系统里将不能访问内部数据，QQ和电话客服都将暂停服务，不便之处，敬请原谅。',
					linkType: 'outside',
					url: 'https://www.baidu.com'
				},
				{
					mark: '重要',
					title: '向大佬学习!每天都要进步!',
					content: '学习笔记学习笔记...'
				},
				{
					mark: '冲鸭',
					title: '哦哦哦哦哦哦哦',
					content: '哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊'
				}
			],
			defaultMenuItem: '',
			menuItemChange: '',
			testdata123: [
				{
					path: '/',
					name: 'Home',
					children: [
						{
							path: '/homeIndex',
							name: 'homeIndex'
						},
						{
							path: '/homeMonent',
							name: 'homeMoment'
						},
						{
							path: '/homeGallary',
							name: 'homeGallary'
						}
					]
				},
				{
					path: '/Manager',
					name: 'Manager',
					children: [
						{
							path: '/Manager/privateInfo',
							name: 'privateInfo',
							children: [
								{
									path: '/Manager/personalInfo',
									name: 'personalInfo'
								}
							]
						},
						{
							path: '/Manager/upLoadPrefilePhoto',
							name: 'personalInfo'
						},
						{
							path: '/Manager/indexTab',
							name: 'indexTab'
						},
						{
							path: '/Manager/userInfo',
							name: 'userInfo'
						},
						{
							path: '/Manager/blogSetting',
							name: 'blogSetting'
						},
						{
							path: '/Manager/myBlog',
							name: 'myBlog'
						},
						{
							path: '/Manager/gallary',
							name: 'gallary'
						},
						{
							path: '/Manager/gallarySetting',
							name: 'gallarySetting'
						},
						{
							path: '/Manager/uploadPic',
							name: 'uploadPic'
						},
						{
							path: '/Manager/rewardRecharge',
							name: 'rewardRecharge'
						},
						{
							path: '/Manager/rewardRecord',
							name: 'rewardRecord'
						},
						{
							path: '/Manager/rewardRule',
							name: 'rewardRule'
						},
						{
							path: '/Manager/goodsDetail',
							name: 'goodsDetail'
						},
						{
							path: '/Manager/goodsList',
							name: 'goodsList'
						},
						{
							path: '/Manager/shopHome',
							name: 'shopHome'
						}
					]
				}
			]
		}
	},
	methods: {
		userLogin() {
			this.$refs.shadowLogin.componentsShow = true
		},
		jumpToHome() {
			this.$router.push('/')
		},
		jumpToHomeIndex() {
			this.$router.push('/homeIndex')
			return '/homeIndex'
		},
		async test123() {
			//let test=searchMenuTreeNode(this.testdata123,'personalInfo');
			console.log('456')
			let data = await axios.get('/api/Value/getValue', '')
			console.log(data)
			console.log('123')
		}
	},
	created() {
		console.log(this.$route.path)
		this.defaultMenuItem =
			this.$route.path != '/' ? this.$route.path : this.jumpToHomeIndex()
	},
	mounted() {},
	computed: {
		userNamex() {
			console.log('userNamex')
			return this.$store.state.userName
		}
	},
	watch: {
		userNamex(val) {
			if (val != '') {
				this.userName = val
				this.islogin = true
			}
		},
		$route(to, from) {
			//  console.log(to.meta.index,from.meta.index)
			if (to.meta.index > from.meta.index) {
				this.menuItemChange = 'slide-left'
			} else {
				this.menuItemChange = 'slide-right'
			}
		}
	}
}
</script>
<style scoped>
.h-container {
	height: 100%;
	margin: 0px;
	padding: 0px;
}
.h-header {
	height: 50px;
}
.el-header {
	padding: 0px;
}
.h-logo {
	max-height: 40px;
	max-width: 40px;
}
.h-header-context {
	width: 1110px;
	margin: 0 auto;
	height: 50px;
}
.h-el-main {
	background: rgba(219, 219, 219, 0.8);
	overflow: inherit;
}
.el-main {
	padding: 0px;
}
.h-context {
	width: 1110px;
	margin: 0 auto;
	/* height: 100%; */
}
/* .h-header{
    line-height:40px;
    vertical-align: middle;
} */
.h-spanL {
	line-height: 40px;
	/* vertical-align: middle; */
	float: left;
	width: 250px;
}
.h-spanL > img,
.h-spanL > span {
	line-height: 40px;
	vertical-align: middle;
	font-size: 25px;
	color: lightslategrey;
}
.h-spanL-logo {
	cursor: pointer;
	margin-left: 20px;
}
.h-spanR {
	/* line-height */
	float: right;
	width: 200px;
	overflow: hidden;
}

.h-spanR > .h-avatar,
.h-spanR > span {
	line-height: 40px;
	vertical-align: middle;
	font-size: 15px;
	color: dimgray;
}
.h-avatar {
	margin: 5px;
}
.h-m-container {
	background: #fff;
	height: 35px;
}
.h-m-context {
	width: 1110px;
	margin: 0 auto;
	height: inherit;
	vertical-align: middle;
	line-height: 35px;
}
.h-m-more {
	padding: 7px 23px;
}
.h-alink {
	cursor: pointer;
}
.h-alink:hover {
	color: dodgerblue;
}
.h-banner {
	height: 150px;
	background-image: url('../../assets/banner.png');
	background-repeat: no-repeat;
	/* background-attachment: fixed; */
	background-position: center center;
	background-size: cover;
}

.h-panel {
	background: rgba(255, 255, 255, 0.8);
	padding: 20px 50px 20px 50px;
	border-radius: 5px;
	box-shadow: 0px 0px 2px 2px rgb(71, 71, 71, 0.5);
	margin: 5px;
}

.h-c-row {
	margin: 5px 0px 5px 0px;
}

.h-clear {
	clear: both;
}

.fl {
	float: left;
}

.fr {
	float: right;
}

/* 重写导航栏高度 */
.el-menu--horizontal > .el-menu-item {
	height: 35px;
	line-height: 35px;
}

.el-carousel__indicators--horizontal {
	bottom: 10px;
}
.el-divider--horizontal {
	margin: 12px;
}
footer {
	width: 100%;
	text-align: center;
	font-size: 15px;
	background: #fff;
}
.el-divider--horizontal {
	width: auto;
}

.h-menu-item {
	/* position: absolute; */
	/* width:100%; */
	transition: all 0.4s;
}
.slide-left-enter,
.slide-right-leave-active {
	opacity: 0;
	-webkit-transform: translate(100%, 0);
	transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
	opacity: 0;
	-webkit-transform: translate(-100%, 0);
	transform: translate(-100%, 0);
}
</style>