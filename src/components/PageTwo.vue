<template>
  <div ref="page" id="page" class ='test'>
    PageTwo 2
    <input type="text" v-model="value" />
    {{ value }}
    <button @click="start">开启监听</button>
    <button @click="close">关闭监听</button>
    <div> 是否开始监听  {{ listener }}</div>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
>
  <span>Page 2 弹窗
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
    };
  },

  mounted() {
    
    Lifecycle.register(this.$refs.page);
    Lifecycle.addEventListener("unload", () => {
      console.log("unload");
    });
    
  },

  methods: {
    start() {
      this.listener = true;
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

<style scoped>
.test{
  width: 100vw;
  min-height: 100vh;
  background: red;
}
</style>

