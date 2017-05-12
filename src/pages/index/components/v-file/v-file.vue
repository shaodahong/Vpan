<template>
    <div class="v-file">
        <v-category></v-category>
        <router-view></router-view>
    </div>
</template>

<script>
    import vCategory from '../v-category/v-category.vue';
    export default {
        name: 'vFile',
        components: {
            vCategory
        }
    }
</script>

<style lang="scss">
    @import 'v-file';
</style>