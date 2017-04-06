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
        methods: {
            getInfo:function () {
                this.info = this.$route.params.id;
                console.log('1', this.$route.params);
            }
        }
    }
</script>

<style lang="scss">
    @import "../style/v-list";
</style>