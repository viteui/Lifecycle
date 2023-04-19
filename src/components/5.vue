<template>
  <div>
    <div>LockNativeBack</div>
    <input type="text" v-model="value" />
    {{ value }}
    <button @click="start">开启监听</button>
    <button @click="close">关闭监听</button>
    <div>是否开始监听 {{ listener }}</div>
    <div v-for=" item in 100">item---{{ item }}</div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>5 的弹窗 </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Lifecycle } from "../life";
import LockNativeBack from "lock-native-back";
export default {
  name: "PageTwo",

  data() {
    return {
      value: 1,
      dialogVisible: false,
      listener: false,
      lockNativeBack: null,
      show: false,
    };
  },

  mounted() {
    //   Lifecycle.register();
    //   Lifecycle.addEventListener("unload", () => {
    //     console.log("unload");
    //   });
  },

  methods: {
    start() {
      this.lockNativeBack = new LockNativeBack();
      this.lockNativeBack.lock();
      this.dialogVisible = true;
      // 用户触发游览器自带返回时
      this.lockNativeBack.onPopState = () => {
        this.dialogVisible = false; // 关闭弹窗
      };
    },

    close() {
      this.lockNativeBack.unLock();
    },
  },
};
</script>

<style lang="scss" scoped></style>
