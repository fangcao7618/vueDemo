<template>
  <div class="hello">
    <button class="buttons" type="submit">aa</button>
    {{msg}}
    <span class="operate"><i class="icons icon-edit"></i>编辑1</span>
    <span class="operate"><i class="icons icon-edit"></i>编辑</span>
    <img src="./ac_20.png">
    <img src="./ce02.jpg"> 
  </div>
</template>

<script>
  export default {
    name: 'Button',
    data() {
      return {
        msg: 'postcss',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped="" style="text/css">
  @use postcss-cssnext;
  :root {
    --color-main: green;
    --thems: {
      color: #ffffff;
      transition: all .5s;
    }
  }
  
  .hello {
    display: flex;
    flex-grow:1;
    background-color: var(--color-main);
    @apply --thems;
    & .buttons{
      width:30px;
      height: 20px;
    }
    & .operate {
      color: #ffffff;
      & .icons{
        font-size:20px;
        & .icon-edit{
          &::before{
            color:#ffffff;
          }
        }
      }
    }
    @nest .operate & {
      color: blue;
    }
  }
</style>
