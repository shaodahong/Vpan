<template>
    <div class="v-list">
        {{info}}
    </div>
</template>

<script>
    export default {
        name: 'vList',
        data() {
            return {
                info: undefined,
            }
        },
        created: function () {
            this.getInfo()
        },
        beforeRouteUpdate: function (to, from, next) {
            next();
            this.getInfo()
        },
        methods: {
            getInfo:function () {
                this.info = this.$route.params.id;
            }
        }
    }
</script>

<style lang="scss">
    @import "v-list";
</style>