<template>
	<el-card ref="panel" class="panel" :style="panelSytle">
		<div>
			<span class="mp-more isbtn">更多</span>
		</div>
		<div class="mp-main">
			<div class="mp-photo">
				<el-avatar class="h-avatar isbtn" icon="el-icon-user-solid"></el-avatar>
			</div>
			<div class="mp-rightbox">
				<div class="mp-userInfo">
					<div class="mp-name fl">扒拉扒拉</div>
					<div class="mp-member icon-memberv1 fl"></div>
				</div>
				<div class="mp-msg">扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉</div>
				<div class="mp-content">
					扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉
					扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉
					扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉扒拉
				</div>
				<div class="mp-photoList"></div>
			</div>
		</div>
		<div class="mp-bottomBtn">
			<!-- <span class="mp-like">赞</span>
      <span class="mp-comment">评论</span>
			<span class="mp-sharing">分享</span>-->
			<ul class="mp-btnlist">
				<li>
					<span class="mp-like mp-btn">赞</span>
				</li>
				<li>
					<span class="mp-comment mp-btn">评论</span>
				</li>
				<li>
					<span class="mp-sharing mp-btn">分享</span>
				</li>
			</ul>
		</div>
	</el-card>
</template> 

<script>
import '../../style/comm.css'
import '../../style/icon.css'
export default {
	name: 'listPanel',
	props: {
		list: Array,
		height: Number,
		onListClick: Function
	},
	data() {
		return {
			panelSytle: ''
		}
	},
	mounted() {
		this.panelSytle =
			typeof this.height === 'number'
				? 'height:' + this.height + 'px'
				: ''
	}
}
</script>
<style scoped>
.el-card__header {
	padding: 10px;
}
.el-card__body {
	padding: 10px;
}
.el-card {
	margin: 5px;
}
.el-image-title {
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 20px;
	background: rgba(0, 0, 0, 0.4);
	bottom: 0;
	color: #c4c4c4;
}
.mp-main {
	border-bottom: 1px solid #d9d9d9;
	padding-bottom: 20px;
}

.mp-more {
	float: right;
	cursor: pointer;
}

.mp-userInfo {
	overflow: hidden;
	zoom: 1;
}
.mp-name {
	font-size: 15px;
}

.mp-msg {
	font-size: 12px;
	color: #9a9a9a;
}

.mp-photo {
	float: left;
}

.mp-rightbox {
	margin-left: 50px;
}

.mp-bottomBtn {
	overflow: hidden;
	zoom: 1;
	/* margin: 10px 0px 10px 0px; */
}

.mp-bottomBtn > div {
	cursor: pointer;
}

.mp-btnlist {
	margin: 0px;
}

.mp-btn {
  display: block;
	float: left;
	width: 33%;
	height: 22px;
	text-align: center;
	line-height: 22px;
	margin: 7px 0px;
  cursor:pointer;
}

.mp-like {
	border-right: 1px solid #d9d9d9;
}
.mp-like:hover {
	background: #f6f6f6;
}

.mp-comment {
	border-right: 1px solid #d9d9d9;
}
.mp-comment:hover {
	background: #f6f6f6;
}

.mp-sharing {
}
.mp-sharing:hover {
	background: #f6f6f6;
}
</style>