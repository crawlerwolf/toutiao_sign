const express = require('express');
const app = express();
const sign = require('./toutiao/signature.js');
var bodyParser = require('body-parser');
app.use(bodyParser());

app.post('/sign',
    function (req, res) {
        let result = req.body;
        console.log(result);
        let url = result.url;
        result = sign.signs(url);
        res.send(result)
    }
    );

app.listen(3000, () => {
    console.log('开启服务，端口3000')
    });
