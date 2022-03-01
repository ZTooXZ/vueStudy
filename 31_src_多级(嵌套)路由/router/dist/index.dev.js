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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//该文件专门用于创建整个应用的路由器
//引入组件
//创建并暴露一个路由
var _default = new _vueRouter["default"]({
  routes: [{
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
      component: _Message["default"]
    }]
  }]
});

exports["default"] = _default;