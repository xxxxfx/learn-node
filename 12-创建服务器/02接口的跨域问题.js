// 协议 域名 端口号
/**
 * 解决跨域问题的方案主要有两种：
 * 1.cors中间件
 * 2.jsonp（只支持get请求）
 * 浏览器的同源策略默认会阻止网页跨域获取资源，但是如果接口服务器配置了cors相关的http响应头，就可以解除浏览器端的跨域访问限制
 * cors在浏览器中有兼容性
 * cors响应头部： access-control-allow-origin
 * res.setHeader('Access--control-allow-origin'， origin)
 * Access-Control-Allow-Headers
 * Access-Control-Allow-Mehthods cors近支持 get post head请求
 * res.setHeader('Access-Control-Allow-Mehthods'， 'POST GET DELETE HEAD')
 * res.setHeader('Access-Control-Allow-Mehthods'， '*')
 * 
 */
/**
 * 分类： 根据请求头和请求方式分为两大类
 * 一简单请求
 * 1.简单请求：get post head 之一
 * 2.无自定义头部字段
 * 二预检请求
 * 通信之前浏览器会先发送option请求进行预检，再发送真正的恶请求
 * 1.get post head之外
 * 2.包含自定义头部字段
 * 3.向服务器发送了application/json格式的数据
 * 
 */