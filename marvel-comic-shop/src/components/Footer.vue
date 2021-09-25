<template>
    <div class="container">
        <div class="footer">
            <div class="logoFooter">
                <img src="../assets/logo-comics.svg" alt="">
            </div>
            <div class="content">
                <div class="categoria">
                    <h5>Categorias</h5>
                    <ol>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ol>
                </div>
                <div class="informacoes">
                    <h5>informações</h5>
                    <ol>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ol>
                </div>
                <div class="fac">
                    <h5>Fac</h5>
                    <ol>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer'
    
}
</script>

<style scoped>
.container{
    background-color: #c70732;
    color: white;
    padding: 1.5rem;
}
.footer{
    margin: auto;
    display: flex;
    width: 80%;
}
.content{
    display: flex;
    justify-content: space-between;
}
.content ol{
    list-style: none;
    padding: 0%;
    margin: 0;
    margin-right: 2rem;
    width: 100%;
}
.logoFooter > img{
    width: 30%;

}
</style>