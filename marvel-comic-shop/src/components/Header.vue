<template>
    <div>
        <TopBar />
        <MiddleBar />
        <div class="bottomBar"></div>
    </div>
    
</template>


<script>
import TopBar from './TopBar.vue'
import MiddleBar from './MiddleBar.vue'

export default {
    name: "Header",
    components: {
        TopBar,
        MiddleBar
    }
}
</script>
