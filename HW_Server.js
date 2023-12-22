// HW_Server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// 設定根路由，回傳您製作好的 HTML 檔案
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HW03.html'));
});

//啟動 Express 伺服器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
