<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      msg: 'Hello Vue!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
$color-main:#ff0000;
$color:#ffffff;


.hello{
  display:flex;
  background-color:$color-main;
  color:$color;
}
</style>
