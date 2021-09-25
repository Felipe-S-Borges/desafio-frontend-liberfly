<template>
    <div>
        <TopBar />
        <MiddleBar />
        <BottomBar />
    </div>
    
</template>


<script>
import TopBar from './TopBar.vue'
import MiddleBar from './MiddleBar.vue'
import BottomBar from './BottomBar.vue'

export default {
    name: "Header",
    components: {
        TopBar,
        MiddleBar,
        BottomBar
    }
}
</script>
