let fs = require('fs');
// fs.stat('index.js', (error, stats) => {
//   if(error) {
//     console.log(error);
//     return false;
//   } else {
//     console.log(stats);
//     console.log(`文件：${stats.isFile()}`);
//     console.log(`目录：${stats.isDirectory()}`);
//   }
//   return false;
// })
/**
 * 2. fs.mkdir
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
// fs.mkdir('css', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("创建目录成功！");
//     // Console:创建目录成功！
//   }
// })
/**
 * 3.fs.rmdir 删除
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
//  fs.rmdir('css', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("删除目录成功！");
//     // Console：创建目录成功！
//   }
// })
/**
 * 4.fs.writeFile
 * filename 文件名称
 * data 将要写入的内容，可以是字符串或者buffer数据
 * encoding，可选默认utf-8 ,当 data 是 buffer 时，该值应该为 ignored。
 * mode(Number) 文件读写权限，默认 438。
 * flag(String) 默认值 'w'
 * callback {Function} 回调， 传递一个异常参数 err
 * 值得注意的是，这样的写入，是清空原文件中的所有数据，然后添加 Hello jsliang 这句话。即：存在即覆盖，不存在即创建。
 */
//  fs.writeFile('index.js', '肖战是我老公', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log('写入成功！');
//   }
// })

/**
 * 5.fs.appendFile 追加文件
 */
// let fs = require('fs');
//  fs.appendFile('index.js', '博君一肖是真的', (err) => {
//    if(err) {
//      console.log(err);
//      return false;
//    } else {
//      console.log('是真的是真的追加成功了');
//    }
//  })
/**
 * 6.fs.readFile 读取文件
 * fs.readdir 读取目录
 */
// fs.readFile('index.js', (err, data) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log('读取文件成功');
//     console.log(data);
//   }
// });
/**
 * 
 */
// fs.readdir('node_modules', (err, data) => {
//   if(err) {
//     console.log(err);
//     return false
//   } else {
//     console.log('读取目录成功');
//     console.log(data);
//   }
// })
/**
 * fs.rename: 重命名
 * 还可以实现剪切的功能
 */
// fs.rename('index.js', 'wx.js', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log('重命名成功');
//   }
// })

fs.rename('wx.js', 'node_modules/wx.js', (err) => {
  if(err) {
    console.log(err);
    return false;
  } else {
    console.log('剪切成功');
  }
})