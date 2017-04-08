<template>
    <div class="v-category">
        <ul class="v-category-lists">
            <router-link
                    v-for="category in categorys"
                    :to="{name: 'list',params: {id: category.id}}"
                    tag="li"
                    class="v-category-list">
                <a class="v-category-item">
                    <i class="fa fa-camera v-category-icon"></i>
                    <span v-text="category.name" class="v-category-name"></span>
                </a>

            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'vCategory',
        data () {
            return {
                categorys: [{
                    id: 1000,
                    name: '全部文件',
                }, {
                    id: 1001,
                    name: '应用程序'
                }, {
                    id: 1002,
                    name: '照片'
                }, {
                    id: 1003,
                    name: '文档'
                }, {
                    id: 1004,
                    name: '种子'
                }, {
                    id: 1005,
                    name: '分类1'
                }, {
                    id: 1006,
                    name: '分类2'
                }, {
                    id: 1007,
                    name: '分类3'
                }, {
                    id: 1008,
                    name: '分类4'
                }, {
                    id: 1009,
                    name: '分类5'
                }, {
                    id: 1010,
                    name: '分类6'
                }, {
                    id: 1011,
                    name: '分类7'
                }, {
                    id: 1012,
                    name: '分类8'
                }, {
                    id: 1013,
                    name: '分类9'
                }, {
                    id: 1014,
                    name: '分类10'
                }, {
                    id: 1015,
                    name: '分类11'
                }, {
                    id: 1016,
                    name: '分类7'
                }, {
                    id: 1017,
                    name: '分类8'
                }, {
                    id: 1018,
                    name: '分类9'
                }, {
                    id: 1019,
                    name: '分类10'
                }, {
                    id: 1020,
                    name: '分类11'
                }]
            }
        },
        methods: {
            goToFile: function (id) {
                this.$router.push({
                    name: 'list',
                    params: {
                        id: id
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "v-category";
</style>