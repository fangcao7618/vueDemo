<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <a> written by {{ author }} </a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                author: "微信公众号 jinkey-love",
                articles: [],
            }
        }
    }
</script>

<style>
    
</style>