<template>
	<div class="v-home">
		<div class="col-1">
			<img src="../../../assets/images/user.jpeg" class="v-home-user"></img>
			<ul class="v-home-menus">
				<li class="v-home-menu active">文件</li>
				<li class="v-home-menu">消息</li>
			</ul>
		</div>
		<div class="col-2"></div>
		<div class="col-3"></div>
	</div>
</template>

<script>
	export default {
		name: 'Vhome',
		data () {
			return {
				msg: 'hello'
			}
		}
	}
</script>

<style lang="scss">
	@import '../index.scss';
</style>
