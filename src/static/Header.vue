<template>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link
    tag="a"
    to="/"
    class="navbar-brand">
        Product List
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <router-link
            to="/operation"
            class="nav-item"
            active-class="active"
            tag="li">
                <a class="nav-link">Product Operations</a>
            </router-link>
            <router-link
                to="/purchase"
                class="nav-item"
                active-class="active"
                tag="li">
            <a class="nav-link">Product Purchase</a>
            </router-link>
        </ul>
    </div>
</nav>

</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>