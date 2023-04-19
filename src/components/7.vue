<template>
    <div >
      <button @click="add">+1</button>
      <button @click="empty">empty</button>
      <Test :detail-info="detailInfo"></Test>
    </div>
  </template>
  
  <script>
import Test from './props/Test.vue'
  export default {
    name: "PageTwo",
    components:{
      Test
    },
    data() {
      return {
        detailInfo: undefined,
        num:1
      };
    },
  
    mounted() {

    },
  
    methods: {
      add(){
        this.detailInfo = JSON.parse(JSON.stringify({
          num:this.num++
        }))
      },
      empty(){
        this.detailInfo = null
      }
    },
  };
  </script>
  
  <style  scoped>
.page {
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
}

.page-back {
  transform: translate3d(-100%, 0, 0);
}
</style>
  