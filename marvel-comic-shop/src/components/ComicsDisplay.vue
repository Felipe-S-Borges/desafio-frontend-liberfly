<template>
    <div class="container">
        <h2>Edições Disponíveis</h2>
        <div >
            <ComicsList :quotes="quotes" />
        </div>
        
        

    </div>
</template>



<script>
//import Comic from './Comic.vue'
import {onMounted, reactive, toRefs} from 'vue'
import api from '../services/api'
import ComicsList from './ComicsList.vue'


export default {
    name: 'ComicsDisplay',
    components:{
        //Comic,
        ComicsList
    },
    setup(){
        const data = reactive({
            quotes:{},
        })
        onMounted(async ()=>{
            const response = await api.getComics()
            console.log(response)
            data.quotes = response.data.data.results
        })

        return {... toRefs(data)}
    }
}
</script>


<style scoped>
.container{
    width: 80%;
}

h2{
    font-family: 'Asap Condensed';
    background-color: #f7db3b;
    padding: 0.5rem;
    margin: 2rem 0;
}

</style>