// 核心链式操作
// 第一个回调完成以后会将返回结果给到第二个回调函数
// 如果前一个回调函数是一个promise， 后一个回调函数会等到该promise运行状态发生改变，才会进行调用
getJSON("/visa.json").then(function(json) {
  return json.name;
}).then(function(name) {
  // proceed
});
// Promise.all([])\ Promise.race([]) \ Promise.resolve() \ Promise.reject()