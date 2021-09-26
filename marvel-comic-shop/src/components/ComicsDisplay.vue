<template>
    <div class="container">
        <h2>Edições Disponíveis</h2>
        <div class="comicsGrid">
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            
        </div>
        
        

    </div>
</template>



<script>
import Comic from './Comic.vue'
import api from '../services/api'
export default {
    name: 'ComicsDisplay',
    components:{
        Comic
    },
    async setup(){
        const response =  await api.getCharacters()
        console.log(response.data.data.results)
    }
}
</script>


<style scoped>
.container{
    width: 80%;
}
.comicsGrid{
    display: grid;
    grid-template-columns: auto auto auto auto ;
    gap:1rem;
}

h2{
    font-family: 'Asap Condensed';
    background-color: #f7db3b;
    padding: 0.5rem;
    margin: 2rem 0;
}

</style>