// const fs = require('fs');
// // 流的方式读取文件
// let fileReadSteam = fs.createReadStream('index.js');
// // 读取次数
// let count = 0;
// // 保存数据
// let str = '';
// //开始读取
// fileReadSteam.on('data', (chunk) => {
//   console.log(`${++count} 接收到： ${chunk.length}`);
//    str += chunk;
// })
// // 读取完成
// fileReadSteam.on('end', () => {
//   console.log('-----结束------');
//   console.log(count);
//   console.log(str);
// })
// fileReadSteam.on('error', (err) => {
//   console.log(err);
// })
/**
 * 写入流
 */
let fs = require('fs');
let data = 'console.log("一个大烧饼")';
let writeStream = fs.createWriteStream('index.js');
writeStream.write(data, 'utf-8');
writeStream.end();
writeStream.on('finish', () => {
  console.log('写入完成');
});