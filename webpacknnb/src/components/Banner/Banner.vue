<template>
  <div class="hello">
    {{msg}}
    <div class="haorooms">
      <span data-haorooms="haorooms鼠标效果tips-纯css">haorooms测试</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data() {
      return {
        msg: '使用 less 语法',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="" style="text/css">
  @base: #f938ab;
  .hello {
    display: flex;
    background-color: @base;
    color: #ffffff;
  }
  
  .haorooms {
    margin-top: 30px;
    >span {
      position: relative;
      display: inline-block;
      &:hover {
        cursor: pointer;
        &:before {
          content: attr(data-haorooms);
          background-color: #2085c5;
          border-radius: 3px;
          color: #fff;
          padding: 10px;
          position: absolute;
          left: 100%;
          top: -70%;
          margin-left: 8px;
          white-space: pre;
        }
        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-right: 8px solid #2085c5;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }
      }
    }
  }
</style>
