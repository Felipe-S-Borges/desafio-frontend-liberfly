<template>
    <div class="comicsGrid">
        <div  v-for="(quote,key) in quotes" :key="key">
            <Comic :comicKey="key" :comicData="quote"/>
        </div>
    </div>      
</template>

<script>

import Comic from './Comic.vue'

export default {
    props: {quotes: {type:Object,required:true}},
    components:{
        Comic
    }
}
</script>

<style scoped>

.comicsGrid{
    display: grid;
    grid-template-columns: auto auto auto auto ;
    gap:1rem;
}

</style>