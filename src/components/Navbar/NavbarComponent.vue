<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/game-info">Games</router-link> |
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'NavbarComponent'
    }
</script>


<style>
    @import './NavbarComponent.scss';
</style>