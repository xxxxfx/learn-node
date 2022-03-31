/**
 * 浏览器通过<script></script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数调用，这种请求数据的方式叫做Jsonp
 * 1.jsonp不是真正的ajax请求，因为它没有使用xmlhttpRequest
 * 2.jsonp仅支持get请求，不支持post，put、delete等请求
 */
/**
 * 如果项目中已经配置了cors跨域资源共享，为了防止冲突，必须配置cors中间件之前声明jsonp接口，否则jsonp接口会被处理成开启cors接口
 * 
 * 实现jsonp接口的步骤：
 * 1.获取客户端发送过来的回调函数的名字
 * 2.得到要通过jsonp形式发送给客户端的数据
 * 3.根据前两部得到的数据，凭借出一个函数调用的字符串
 * 4.把上一部平截得到的字符串，响应给客户端的《script》标签进行解析执行
 * 
 * app.get('/api/jsonp', (req,res) => {
 * 1.
 * const funcName = req.query.callback;
 * 2.
 * const data = { name: 'zs', age: 22 }
 * 3.拼接
 * const scriptStr = `${funcName}(${JSON.stringify(data)})`
 * 4.res.send(scriptStr)
 * })
 * 
 */