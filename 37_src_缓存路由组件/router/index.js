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
              // path: 'detail/:id/:title', //:id   :title  都是js中的占位符，此处作用为  使用占位符声明接收 params 参数
              path: 'detail', 
              component: Detail,

              //propes 的第一种写法，值为对象  该对象中的所有key-value值都会以propes的形势传给Detail组件
              // props:{a:1,b:'hello'}

              //propes 的第二种写法，值为布尔值  若布尔值为真，就会把该路由组件收到的所有params参数，以propes的形式传给Detail组件
              props:true,

              //propes 的第三种写法 回调函数
              props($route){
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              }
            }
          ]
        }
      ]
    },
    
    
  ]
})