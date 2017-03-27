<template>
    <div class="v-home">
        <div class="col-1">
            <img src="../../../assets/images/user.jpeg" class="v-home-user"></img>
            <ul class="v-home-menus">
                <li>
                    <router-link to="/file" class="v-home-menu">
                        <i class="fa fa-file v-home-menu-icon" aria-hidden="true"></i>
                        <span class="v-home-menu-text">文件</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/chat" class="v-home-menu">
                        <i class="fa fa-commenting v-home-menu-icon" aria-hidden="true"></i>
                        <span class="v-home-menu-text">消息</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
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
