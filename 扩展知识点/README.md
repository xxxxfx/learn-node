# cookie的一些作用
* cookie是来弥补http无状态的问题的，第一次验证通过后，服务端通过set-cookies让客户端将自己的cookie储存起来，下一次发送请求时，直接带上cookie，若发送的cookie和服务端保存的cookie一致则建立信任链接
* cookie的储存空间只有4kb，并且需求在服务器端的session中进行储，对服务器造成一定的压力
# session和cookie
* session是存在服务端保存的一种数据结构
* session的运行依赖seesionId，而sessionId是存在在cookie中的

# token
* 服务端可以对token进行校验完成权限校验
* token需要客户端自行存储

# authorization字段

# localstorage和sessionStorage
* 同源策略限制
* 存储大小5m左右
* 仅在客户端储存不与服务器端通信
## 区别
* 1.生命周期-localstorage是永久性的 sessionstorage和标签页的有效期是一致的
* 2.作用域-localstorage同一浏览器同源文档之间共享 sessionstorage同一浏览器同一窗口的同源文档之间数据共享
