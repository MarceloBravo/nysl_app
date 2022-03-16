<template>
  <router-view/>
  <NavbarComponent/>
</template>

<script>
  import NavbarComponent from './components/Navbar/NavbarComponent.vue';

  export default {
    name: 'App',
    components: {
      NavbarComponent
    }
  }
</script>

<style>
  @import './styles/App.scss';
</style>
