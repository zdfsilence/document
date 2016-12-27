<style>
    .main{
        position: absolute;
        right: 0;
        min-height: 100%;
        left: 300px;
        width: auto;
    }
</style>
<template>
    <div class="main">

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
