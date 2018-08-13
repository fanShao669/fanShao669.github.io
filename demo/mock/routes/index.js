var express = require('express');
var router = express.Router();
const Mock = require('mockjs');

// 测试mock
router.post('/yanji/login', function(req, res, next) {
    res.json({
        code: 200,
        msg: "获取成功",
        data: null
    });
});

module.exports = router;
