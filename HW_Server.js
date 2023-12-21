// HW_Server.js
const express = require('express');
const path = require('path');
const HW_Server = express();
const port = 817;

// 設定靜態檔案路徑
HW_Server.use(express.static(path.join(__dirname, 'web-class')));

// 設定根路由，回傳您製作好的 HTML 檔案
HW_Server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web-class', 'HW03.html'));
});

//啟動 Express 伺服器
HW_Server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
