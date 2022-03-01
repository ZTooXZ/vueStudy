"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _About = _interopRequireDefault(require("../pages/About"));

var _Home = _interopRequireDefault(require("../pages/Home"));

var _News = _interopRequireDefault(require("../pages/News"));

var _Message = _interopRequireDefault(require("../pages/Message"));

var _Detail = _interopRequireDefault(require("../pages/Detail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//创建并暴露一个路由
var router = new _vueRouter["default"]({
  routes: [{
    name: 'aboutmsg',
    path: '/about',
    component: _About["default"],
    meta: {
      isAuth: false,
      title: '关于'
    }
  }, {
    name: 'homemsg',
    path: '/home',
    component: _Home["default"],
    meta: {
      isAuth: false,
      title: '首页'
    },
    children: [{
      name: 'newmsg',
      path: 'news',
      component: _News["default"],
      meta: {
        isAuth: true,
        title: '新闻'
      }
    }, {
      name: 'xiaoxi',
      path: 'message',
      component: _Message["default"],
      meta: {
        isAuth: true,
        title: '消息'
      },
      children: [_defineProperty({
        name: 'xiangqing',
        // path: 'detail/:id/:title', //:id   :title  都是js中的占位符，此处作用为  使用占位符声明接收 params 参数
        path: 'detail',
        component: _Detail["default"],
        //propes 的第一种写法，值为对象  该对象中的所有key-value值都会以propes的形势传给Detail组件
        // props:{a:1,b:'hello'}
        //propes 的第二种写法，值为布尔值  若布尔值为真，就会把该路由组件收到的所有params参数，以propes的形式传给Detail组件
        props: true
      }, "props", function props($route) {
        return {
          id: $route.query.id,
          title: $route.query.title
        };
      })]
    }]
  }]
}); // 全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用

router.beforeEach(function (to, from, next) {
  console.log('@');

  if (to.meta.isAuth) {
    if (localStorage.getItem('school') === 'yt') {
      next();
    } else {
      alert('当前用户无权限');
    }
  } else {
    next();
  }
}); // 全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用

router.afterEach(function (to, from) {
  console.log('后置路由启动');
  document.title = to.meta.title || '简易系统';
});
var _default = router;
exports["default"] = _default;