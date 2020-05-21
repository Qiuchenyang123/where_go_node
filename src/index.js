const express = require('express');
const path = require('path');

const App = new express();
App.listen('23333');
// 设置静态目录
App.use(express.static(path.join(__dirname, './asset')));
// 格式化获得的传入参数
App.use(express.json());
App.use(express.urlencoded({extended: true}));

// 路由
App.use('/cityList', require("./router/cityListRouter"));
App.use('/ticket', require("./router/ticketRouter"));
