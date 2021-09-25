<template>
    <div>
        <TopBar />
        <div class="middleBar"></div>
        <div class="bottomBar"></div>
    </div>
    
</template>


<script>
import TopBar from './TopBar.vue'

export default {
    name: "Header",
    components: {
        TopBar
    }
}
</script>
