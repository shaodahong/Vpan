<template>
    <div class="v-category">
        <ul class="v-category-lists">
            <li v-for="category in categorys" class="v-category-list" @click="goToFile()">
                <i class="fa fa-camera v-category-icon"></i>
                <a href="javascript:;" v-text="category.name" class="v-category-name"></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'vCategory',
        data () {
            return {
                categorys: [{
                    name: '全部文件',
                },{
                    name: '应用程序'
                },{
                    name: '照片'
                },{
                    name: '文档'
                },{
                    name: '种子'
                },{
                    name: '分类1'
                },{
                    name: '分类2'
                },{
                    name: '分类3'
                }]
            }
        },
        methods: {
            goToFile: function () {
                
            }
        }
    }
</script>

<style lang="scss">
    @import "../style/v-category";
</style>