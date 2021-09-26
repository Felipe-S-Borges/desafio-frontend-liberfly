<template>
    <div class="middleBar">
        <div class="container">
            <img src='../assets/logo-solo.svg' alt="Logo Marvel" />
            <div>
                <div class="searchBox">
                    <input type="text" placeholder="Vosso desejo será uma ordem">
                    <button class="btn">Encontre</button>
                </div>
            </div>
            <div class="cart">
                <span href="#"><img src='../assets/profile-icon.svg' alt="Profile" /></span>
                <span v-on:click="checkout"><img src='../assets/bag-icon.svg' alt="Checkout" /></span>
               
            </div>
        </div>
        
    </div>
</template>

<script>




export default {
    name: 'MiddleBar',
     data(){
        return{
            visibilityCheckout: false
        }
    },
    methods:{
        checkout(){
            this.visibilityCheckout? this.visibilityCheckout = false : this.visibilityCheckout = true
            console.log(this.visibilityCheckout)
        }

    }
   
}
</script>


<style scoped>
.hidden{
    visibility: hidden;
}
.show{
    visibility: visible;
}
.middleBar{
    background-color: #c70732;
}
.container{
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    display: flex;
    align-items: center;
    justify-content: center;
}
.container > img{
    width:20%;
}


.searchBox {
    display: flex;
    border: 1.5pt solid black ;
    border-radius: 3pt;
}
.searchBox > input{
    width: 35vw

}
.cart{
    text-align: right;
}

.cart > spaspan:first-child{
    margin-right: 1rem;
}

.cart > span{
    cursor: pointer;
}
.cart > span:hover{
    filter: hue-rotate(255deg);
}
.cart > span > img{
    width:20%;
}

.btn{
    font-family: 'Asap Condensed';
    background-color:#f7db3b;
    color: black;
    border-left: 1.5pt solid black;
}
.btn:hover{
    background-color:#f7e894;
}
</style>