<template>
    <div>
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
      detail:{}
      };
    },
  
    mounted() {
      Lifecycle.register();
      Lifecycle.addEventListener("unload", () => {
        console.log("unload");
      });
    },
  
    methods: {
      start() {
        const _this = this
        document.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) {
          var touch = e.touches[0];
          _this.detail = {
            x:touch.pageX,
            y:touch.pageY
          }
          console.log(_this.detail)
        }
      });
        this.listener = true
        Lifecycle.addEventListener("beforeunload", (event) => {
          this.dialogVisible = true;
          event.preventDefault();
        });
      },
     
      close(){
        this.listener = false
        Lifecycle.removeEventListener("beforeunload")
      }
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  