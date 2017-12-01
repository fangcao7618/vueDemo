<template>
  <div class="hello">
    <span class="operate"><i class="icons icon-edit"></i>编辑</span>
    <span class="operate"><i class="icons icon-edit"></i>编辑</span>
    <img src="./ac_20.png">
    <img src="./ce02.jpg"> {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Button',
    data() {
      return {
        msg: '我是组件',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss">
  @use postcss-cssnext;
  :root {
    --color-main: #ff0000;
    --thems: {
      color: #ffffff;
      transition: all .5s;
    }
  }
  
  .hello {
    display: flex;
    background-color: var(--color-main);
    @apply --thems;
    & .operate {
      color: #ffffff;
    }
    @nest .operate & {
      color: blue;
    }
  }
</style>
