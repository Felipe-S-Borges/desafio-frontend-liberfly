<template>
    <div class="bottomBar">
        <div class="streap"></div>
        <div class="menuBar">
            <a href="#"> Comics </a>
            <a href="#"> Shirts </a>
            <a href="#"> Best Sellers </a>
            <a href="#"> More </a>
        </div>
        <div class="streap"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.bottomBar{
    background-color: #c70732;
    display: grid;
    grid-template-columns: 25% 50% 25%;
}
.streap{
    background-color: #f7db3b;
    height: 100%;
}
.menuBar{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    
}
.menuBar > a{
    text-align: center;
    font-family: 'Asap Condensed';
    font-size: 1.1rem;
    color: white;
    margin-right: 1.5rem;
    text-decoration: none;
}
.menuBar > a:hover{
    color: #f7db3b;
}


</style>