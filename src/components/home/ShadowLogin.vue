<template>
	<div class="sl-shadow" v-if="componentsShow">
		<transition name="slide-fade">
			<login class="sl-login" :showLogin="show" :onClosed="shadowLoginClose" ref="login"></login>
		</transition>
	</div>
</template>
<script>
import login from './Login'
export default {
	name: 'shadowLogin',
	components: {
		login
	},
	data() {
		return {
			show: false,
			componentsShow: false
		}
	},
	methods: {
        shadowLoginClose(){
            this.componentsShow = false;
        }
	},
	mounted() {
		this.$nextTick(() => {
			document.addEventListener('keyup', e => {
				if (this.componentsShow) {
					if (e.keyCode == '27') {
						this.shadowLoginClose();
					}
				}
			})
		})
	},
	watch: {
		componentsShow() {
            let _this = this;
			setTimeout(() => {
                _this.show = _this.componentsShow;
            }, 200);
        }
    },
}
</script>
<style scoped>
.sl-shadow {
	position: fixed;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index:100;
}
.sl-login {
	margin: 0 auto;
	position: relative;
	top: 20%;
	/* width:270px;
    height:320px; */
}
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateY(-10px);
	opacity: 0;
}
</style>