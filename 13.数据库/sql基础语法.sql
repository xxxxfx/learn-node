-- 通过*查询到所有数据
-- select * from users
-- 从users表中把username和password查询出来alter
-- select username, password from users
-- 向表中插入新数据insert into tablename（列1，列2） values （v1， v2）alter
-- insert into users (username, password) values ('xixi', '9999')
-- select * from users
-- update表中的数据(单个值)
-- update users set password="222" where id=1
-- select * from users
-- 更新多个值
-- update users set password='444', status=1 where id=2

-- delete语句
-- delete from users where id=3

-- SQL的and 和 or
-- select * from users where status=0 and  id<4

-- select * from users where status=1 or username='zs'
-- order by语句 默认是升序排序 asc desc
-- select * from users order by status
-- select * from users order by status desc
-- 多重排序
-- select * from users order by status desc, username asc

-- count(*)函数，统计数量
-- select count(*) from users where status=0
-- as 关键字设置别名
select count(*) as total from users where status=0












