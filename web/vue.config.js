const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
      entry:'src/main.js',
      filename:'index.html'
    },
    fuck:{
      entry:'src/fuckmain.js',
      filename:'fuck.html'
    }
  }
})
