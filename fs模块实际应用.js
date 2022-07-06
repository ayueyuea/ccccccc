let fs = require('fs')
let path = require('path')

let url = path.join(__dirname, 'text.html')
// console.log(url); // E:\学习demo\NodeJs学习\任务报告书.txt
// console.log('文件名          -->', path.basename(url));                      // 文件名          --> 任务报告书.txt
// console.log('文件名(不带后缀)-->', path.basename(url, path.extname(url)));   // 文件名(不带后缀)--> 任务报告书
// console.log('文件后缀        -->', path.extname(url));                       // 文件后缀        --> .txt
// console.log('文件路径        -->', path.dirname(url));                       // 文件路径        --> E:\学习demo\NodeJs学习 

new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', (err, data) => {
        if (err) reject(err);
        resolve(data.toString())
    })
}).then((data) => {
    let cssReg = /<style>(?<css>[\s\S]*)<\/style>/,
        jsReg = /<script>(?<js>[\s\S]*)<\/script>/,
        newCss = cssReg.exec(data).groups.css,
        newJs = jsReg.exec(data).groups.js,
        // 下面两种方式都可以
        // htmlReg = /([\s\S]*)(<script>[\s\S]*<\/script>)[\s\S]*(<style>[\s\S]*<\/style>)/,
        // newHtml = data.replace(htmlReg,'$1<script src="./index.js"></script>\t<link rel="stylesheet" href="./index.css">')
        newHtml = data.replace(jsReg, '<script src="./index.js"></script>')
            .replace(cssReg, '<link rel="stylesheet" href="./index.css">'),

        fileArr = [
            { name: 'index.js', content: newJs },
            { name: 'index.css', content: newCss },
            { name: 'index.html', content: newHtml }
        ]
    fileArr.forEach(item => {
        fs.writeFile(path.join(__dirname, 'file', item.name), item.content, (err) => {
            if (err) throw err;
            console.log(`${item.name}写入成功`)
        })
    })
}).catch((err) => {
    console.log(err);
})


fs.stat("abc",function(err,stats){    //
    if(err){
        console.log("出错了",err);
    } else {
        console.log(stats);
        console.log("文件：", stats.isFile());
        console.log("目录：", stats.isDirectory());
    }
});