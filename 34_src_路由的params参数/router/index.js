//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由
export default new VueRouter({
  routes:[
    {
      name:'aboutmsg',
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children:[
            {
              name:'xiangqing',
              path: 'detail/:id/:title', //:id   :title  都是js中的占位符，此处作用为  使用占位符声明接收 params 参数
              component: Detail,
            }
          ]
        }
      ]
    },
    
    
  ]
})