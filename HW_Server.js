// HW_Server.js
const express = require('express');
const fs = require("fs");
const path = require('path');
const app = express();
const port = 8800;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post("/submitFeedback", (req, res) => {
    const { subject, content } = req.body;
    const feedbackText = `主旨: ${subject}\n內容: ${content}\n\n`;
    fs.appendFile("errorFeedback.txt", feedbackText, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        } else {
            console.log("Feedback submitted successfully");
            res.send("Feedback submitted successfully");
        }
    });
});

var NeDB = require('nedb');
var db = new NeDB({ filename: 'HW_Server.db', autoload: true });

app.get('/getData', (req, res) => {
    // 從NeDB中讀取資料
    db.find({}, (err, data) => {
        if (err) {
            console.error('Error reading NeDB data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // 將資料傳送至客戶端
        res.json(data);
    });
});

db.insert({
    class: ('Capoo'),
    Face: (''),
    Price:('')
  }, function (err, doc) {
    console.log('inserted:', doc)
  })

// 設定根路由，回傳您製作好的 HTML 檔案
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HW03.html'));
});

//啟動 Express 伺服器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
