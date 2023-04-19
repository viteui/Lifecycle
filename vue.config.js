const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'yjf.hellobike.com', // 允许访问的域名地址，即花生壳内网穿透的地址
      '.hellobike.com'   // .是二级域名的通配符   
    ],
  },
})
