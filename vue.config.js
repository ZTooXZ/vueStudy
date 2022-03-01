module.exports = {
  lintOnSave:false,//语法检查


  /* //开启代理服务器(方式一)
  devServer: {
    //访问路径
    proxy: 'http://localhost:5000'
  }, */

  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      //   /api=请求前缀
      '/atschool': {
        target: 'http://localhost:5000',
        //重写路径，为了让传输http://localhost:8080/atschool/students 路径修改为http://localhost:8080/students
        pathRewrite:{'^/atschool':''},
        // ws: true,  //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host字段，默认为true
      },
      /* //精简版
      '/foo': {
        target: '<other_url>'
      } */
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        
      },
    }
  }
}