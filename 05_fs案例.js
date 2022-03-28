/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

// 1. 判断服务器上面有没有 upload 目录，没有就创建这个目录
// 2. 找出 html 目录下面的所有的目录，然后打印出来

let fs = require('fs');
fs.stat('upload', (err, stat) => {
  if(err) {
    // 如果没有该文件
    fs.mkdir('upload', (error) => {
      if(error) {
        console.log(error);
        console.log('创建文件失败');
      } else {
        console.log('创建文件成功');
      }
    })
  } else {
    console.log('是否是目录:',stat.isDirectory())
    console.log("有 upload 目录，你可以做更多操作！");
  }
})
fs.readdir('node_modules', (err, files) => {
  if(err) {
    console.log(err);
  } else {
    console.log('node_modules中的file：', files);
    let fileArr = [];
    (function getfilePath(i) {
      // 结束
      console.log('目录' + i, files[i])
      if(i== files.length) {
        // 打印出目录
        console.log('目录');
        console.log(fileArr);
        return false;
      }
      fs.stat('node_modules/'+ files[i], (err, stats) => {
        if(err) {
          console.log('read flie err', err)
        } else {
          if(stats.isDirectory()) {
            fileArr.push(files[i])
          }
        }
        getfilePath(i+1);
      })
    })(0)
  }
})
