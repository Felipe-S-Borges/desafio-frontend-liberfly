<template>
    <div class="comicCover">
        <div class="comicImage">
            <img src="../assets/tete.jpg" class="img-responsive" alt="">
        </div>
        
        <div class="buttonContainer">
            <button class="mais">Mais</button>
            <button class="adicionar">Adicionar</button>
        </div>
        
    </div>
</template>



<script>
export default {
    name: 'Comic'
    
}
</script>


<style scoped>
.comicCover{
    margin-bottom: 1.2rem;
}
.comicImage{
    width: 100%;
    margin-bottom: 0.275rem;
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