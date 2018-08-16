var express = require('express');
var router = express.Router();
const Mock = require('mockjs');

// 测试mock
router.get('/GetUserInfo', function(req, res, next) {
    res.json({
        code: 200,
        data: {
        	'token':'admin'
        }
    });
});

module.exports = router;
