<template>
    <div class="sideBarContainer" :class="{'show': visibility === true,'hidden': visibility === false} ">
        <div class="sideBarHead">
            <button v-on:click="visibilityToggler">Voltar</button>
            <span>Minha sacola</span>
        </div>
        <div class="sideBarcontent">
         
        </div>
        <div class="sideBarFooter">
            <div class="descountBox">
                <input type="text" placeholder="Insira o cupom">
                <button class="btn">Aplicar</button>
            </div>
            <div class="calculos">
                <span>Total</span>
                <span><strong>R$255</strong></span>
            </div>
            <button class="finalizarcao">Finalizar compra</button>
        </div>
    </div>
</template>


<script>


export default {
    name: 'CheckoutSideBar',
    props:{
        isVisible:{type:Boolean}
    },
    data(){
        return{
            visibility: true
        }
    },
    methods:{
        visibilityToggler(){
            this.visibility? this.visibility = false : this.visibility = true
            this.$emit('visibilityToggler', this.visibility)
        }
    }
}

</script>


<style scoped>
.sideBarFooter{
    border-top:2pt solid black;
}
.hidden{
    visibility: hidden;
}
.show{
    visibility: visible;
}
.sideBarContainer{
    width: 30%;
    height: 100vh;
    background-color: #f7db3b;
    position: fixed;
    top: 0;
    right: 0;
}
.sideBarHead{
    padding: 0.5rem;
    border-bottom: 2pt solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.sideBarHead button{
    background-color: transparent;
    font-weight: bold;
}
.sideBarHead span{
    font-weight: bold;
    font-size: 1.2rem;
}
.sideBarcontent{
    height: 60vh;
}
.descountBox{
    display: flex;
    justify-content: space-between;
    border: 1.5pt solid black ;
    border-radius: 3pt;
    width: 80%;
    margin: auto;
    margin-top:1rem ;
    
}
.descountBox input{
    width: 100%;
}
.btn{
    font-family: 'Asap Condensed';
    background-color:#c70732;
    color: black;
    border-left: 1.5pt solid black;
}
.btn:hover{
    background-color:#f7e894;
}

.calculos{
    border-bottom: 1pt solid black;
    display: flex;
    justify-content: space-around;
    margin: 1rem auto;
    width: 80%;
}
.finalizarcao{
    font-family: 'Asap Condensed';
    background-color:#86f73b;
    border-radius: 3pt;
    width: 80%;
    margin: auto;
    margin-top: 1rem;
    display: block;
}

</style>