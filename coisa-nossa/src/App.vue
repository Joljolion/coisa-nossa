<template>
    <div>
        <nav>
            <router-link  to="/">Inicio</router-link>
            <router-link to="/about">Sobre nós</router-link>
        </nav>
    </div>
<RouterView/>

</template>

<script>

export default {
    name: 'App',
}

</script>
<style>
 *{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1em;
        padding: 0px;
        margin: 0px;
    }

    nav{
        width: 100vw;
        background-color: cornflowerblue;
    }
</style>