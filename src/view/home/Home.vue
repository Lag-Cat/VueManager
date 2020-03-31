<template>
	<el-container>
		<el-header></el-header>
		<el-container>
			<el-row>
				<el-col>
					<div>
						<el-row>
							<el-col :span="6">用 户：</el-col>
							<el-col :span="18">
								<el-input v-model="this.usercoode"></el-input>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<span>密 码：</span>
							</el-col>
							<el-col>
								<el-input v-model="this.password"></el-input>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-button @click="login()">登 录</el-button>
								<el-button>注 册</el-button>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
		</el-container>
	</el-container>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			usercoode: '',
			password: ''
		}
	},
	methods: {
		login() {
			this.$router.push('manager')
		}
	}
}
</script>