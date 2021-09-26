<template>
    <div class="comicCover">
        <div class="comicImage">
            <img :src="`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`" class="img-responsive" alt="Comic cover">
        </div>
        <h6>{{comicData.title}}</h6>
        <div class="buttonContainer">
            <button class="mais" v-on:click="modalToggler">Mais</button>
            <button class="adicionar" v-on:click="addCart([comicKey,comicData])">Adicionar</button>
        </div>

        <div class="modal" :class="{'active': visibility === true}" id="modal-id">
            <a href="#close" class="modal-overlay" aria-label="Close"></a>
            <div class="modal-container">
                <div class="modal-header">
                    <a href="#close" v-on:click="modalToggler" class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5">{{comicData.title}}</div>
                </div>
                <div class="modal-body">
                    <img :src="`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`" class="img-responsive" alt="Comic cover">
                    <div class="content">
                       <p>{{comicData.description}}</p>
                    </div>
                </div>
                <div class="modal-footer">
                ...
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Comic',
    data(){
        return{
            visibility: false,
            cartList:[]
        }
    }
    ,
    props:{
        comicKey:{type:Number,required: true},
        comicData:{type:Object,required:true}
    },
    methods:{
        modalToggler(){
            this.visibility? this.visibility = false: this.visibility =true
        },
        addCart(props){
            this.cartList.push(props)
            console.log(this.cartList)
        }
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
#modal-id{
    background-color:#f7e8948a;
}
.modal-container{
    border: 2pt solid black;
    border-radius: 5px;
}
.modal-body{
display: flex;
}
.modal-body img{
    width: 50%;
    object-fit: contain;
}
</style>