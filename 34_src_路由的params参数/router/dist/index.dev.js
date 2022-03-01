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

//该文件专门用于创建整个应用的路由器
//引入组件
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
      children: [{
        name: 'xiangqing',
        path: 'detail/:id/:title',
        //:id   :title  都是js中的占位符，此处作用为  使用占位符声明接收 params 参数
        component: _Detail["default"]
      }]
    }]
  }]
});

exports["default"] = _default;