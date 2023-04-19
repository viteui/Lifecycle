<template>
    <div class="page" :class="{'page-back': isBack}">
      4
      <input type="text" v-model="value" />
      {{ value }}
      <button @click="start">开启监听</button>
      <button @click="close">关闭监听</button>
      <div> 是否开始监听  {{ listener }}</div>
      {{ JSON.stringify(detail) }}
      <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
  >
    <span>4 的弹窗 
   
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
    </div>
  </template>
  
  <script>
  import { Lifecycle } from "../life";
  export default {
    name: "PageTwo",
  
    data() {
      return {
        value: 1,
      dialogVisible:false,
      listener:false,
      detail:{},
      isBack: false,
      };
    },
  
    mounted() {
      Lifecycle.register();
      Lifecycle.addEventListener("unload", () => {
        
      });
    },
  
    methods: {
      start() {
        this.listener = true
        Lifecycle.addEventListener("beforeunload", (event) => {
          // this.dialogVisible = true;
          event.preventDefault();
          this.isBack = true;
          setTimeout(() => {
            history.pushState(null, null,"/6");
            this.isBack = false;
        }, 300);
        });
      },
     
      close(){
        this.listener = false
        Lifecycle.removeEventListener("beforeunload")
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
  