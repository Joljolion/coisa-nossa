<template>
  <HeaderComponent></HeaderComponent>
<div>
  <nav>
    <router-link to="/home">Início</router-link>
  </nav>
</div>
<RouterView/>
</template>

<script>
import HeaderComponent from './components/elements/HeaderComponent.vue';


export default {
    name: "App"
}

</script>
<style>

</style>