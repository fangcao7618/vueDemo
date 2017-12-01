<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello Vue!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss">
@use postcss-cssnext;
:root{
  --color-main:#ff0000;
  --thems:{
    color:#ffffff;
    transition:all .5s;
  }
}

.hello{
  display:flex;
  background-color:var(--color-main);
  @apply --thems;
}
</style>
