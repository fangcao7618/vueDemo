<template>
    <div id="app">
        <img src="./assets/logo.png" />
        <h1>{{msg}}</h1>
        <firstcomponent></firstcomponent>
        <ul>
            <li>
                <router-link to="/first">点我跳转到第一页ssssss</router-link>
            </li>
            <li>
                <router-link to="/second">点我跳转到第二页</router-link>
            </li>
        </ul>
        <ul>
            <li v-for="art in articles" :key="art.id" class="text item">
                {{art.title}}
            </li>
        </ul>
        <ul>
            <li v-for="art in 10" class="text item">
                {{art}}
            </li>
        </ul>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import firstcomponent from './component/firstcomponent.vue'
    import secondcomponent from './component/secondcomponent.vue'
    export default {
        data() {
            return {
                msg: 'Hello Vue!',
                articles: []
            }
        },
        methods: {
            getAllProducts: function() {
                this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                    headers: {
                        // 'Access-Control-Allow-Origin': '*',
                        // 'aaaaaa': 'aaa'
                    },
                    emulateJSON: true
                }).then(function(response) {
                    //this.articles = response.data.subjects;
                    // console.log(this.articles);
                    $.each(response.data.subjects, function(key, value) {
                        var product = value;
                        this.articles.push(product);
                    }.bind(this));
                    
                }, function(response) {
                    // 这里是处理错误的回调
                    // console.log(response);
                });
            }
        },
        mounted() {
            this.getAllProducts();
        },
    
        components: {
            firstcomponent,
            secondcomponent
        }
    }
</script>

<style lang="scss">
    @import '/assets/layout/_common';
    @import '/assets/layout/_mixins';
    #app {
        text-align: center;
    }
    
    h1 {
        font-size: rem(30);
        color: #42b983;
    }
</style>