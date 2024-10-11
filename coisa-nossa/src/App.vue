<template>
      <nav>
    <menu>
        <router-link  to="/">Inicio</router-link>
        <router-link to="/about">Sobre nós</router-link>
    </menu>
    <RouterView/>
  </nav>
</template>

<script>



export default {
    name: "HomePage"
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