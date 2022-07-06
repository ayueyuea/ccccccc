let fs = require('fs');
fs.stat('./filer', (err, stats) => {
    if (err) {
        fs.mkdir('./filer', (err) => {
            if (err) return console.log(err);
            console.log('文件夹创建成功');
        })
    }
    console.log(stats);
    console.log("文件：", stats.isFile());
    console.log("目录：", stats.isDirectory());
})