var express = require('express');
var router = express.Router();
const Mock = require('mockjs');

// 测试mock
router.post('/user/login', function(req, res, next) {
    res.json({
        code: 20000,
        data: {
        	'token':'admin'
        }
    });
});

module.exports = router;
