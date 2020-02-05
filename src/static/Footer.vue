<template>
    <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
        <span class="navbar-text mr-auto">
            <strong>© Copyright jjabbarli</strong> | 2020
        </span>
            <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
            <strong>Total : </strong>
            <span class="badge badge-danger">{{getTradeResult.purchase | currency}}</span>
        </span>
            <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
            <strong>Sell total : </strong>
            <span class="badge badge-success">{{getTradeResult.sell | currency}}</span>
        </span>
            <span class="navbar-text navbar-nav my-2 my-lg-0">
            <strong>Budget : </strong>
            <span class="badge badge-primary">{{getTradeResult.balance | currency}}</span>
        </span>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed:mapGetters(["getTradeResult"])
    }
</script>

<style scoped>

</style>