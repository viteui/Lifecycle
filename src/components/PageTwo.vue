<template>
  <div>
    PageTwo
    <input type="text" v-model="value" />
    {{ value }}
    <button @click="start">开启监听</button>
    <button @click="close">关闭监听</button>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
>
  <span>Page 2 弹窗</span>
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
      Lifecycle.addEventListener("beforeunload", (event) => {
        this.dialogVisible = true;
        event.preventDefault();
      });
    },
   
    close(){
      Lifecycle.removeEventListener("beforeunload")
    }
  },
};
</script>

<style lang="scss" scoped></style>
