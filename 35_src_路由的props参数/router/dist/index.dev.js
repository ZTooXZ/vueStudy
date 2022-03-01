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
var _default = new _vueRouter["default"]({
  routes: [{
    name: 'aboutmsg',
    path: '/about',
    component: _About["default"]
  }, {
    path: '/home',
    component: _Home["default"],
    children: [{
      path: 'news',
      component: _News["default"]
    }, {
      path: 'message',
      component: _Message["default"],
      children: [_defineProperty({
        name: 'xiangqing',
        path: 'detail/:id/:title',
        //:id   :title  都是js中的占位符，此处作用为  使用占位符声明接收 params 参数
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
});

exports["default"] = _default;