<template>
    <div class="">
        <h2>
            {{msg}}
        </h2>
        <child></child>
    </div>

</template>

<script>
import child from './child.vue'
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{
        child
    }
}
</script>

<style>

</style>
