<template>
    <div class="comicCover">
        <div class="comicImage">
            <img :src="`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`" class="img-responsive" alt="Comic cover">
        </div>
        <h6>{{comicData.title}}</h6>
        <div class="buttonContainer">
            <button class="mais">Mais</button>
            <button class="adicionar">Adicionar</button>
        </div>
        
        
    </div>
</template>



<script>
export default {
    name: 'Comic',
    props:{
        comicKey:{type:Number,required: true},
        comicData:{type:Object,required:true}
    }
    
}
</script>


<style scoped>
.comicCover{
    margin-bottom: 1.2rem;
}
.comicImage{
    width: 100%;
    height: 100%;
    margin-bottom: 0.275rem;
    
}
.comicImage > img{
    object-fit: cover;
}
.comicImage:hover{
    transform: translateY(-5px);
    transition: transform ease 800ms;
    outline: 1.5pt solid black;
    transition: outline ease 200ms;
    box-shadow: 5px 5px 10px;
}
.buttonContaine{
display: flex;
justify-content: space-between;
}
.buttonContainer button{
    font-family: 'Asap Condensed';
    padding: 0.2rem 0.5rem;
    border-radius: 3pt;
}
.mais{
    background-color:#c70732 ;
    color: black !;
    border: 1.5pt solid black ;
    min-width: 30%;
    margin-right: 1rem ;
    
}
    
.adicionar{
    background-color:#f7db3b ;
    color: black ;
    border: 1.5pt solid black ;
    width: max-content;
   
}
.btn:hover{
    background-color:#f7e894;
}

</style>