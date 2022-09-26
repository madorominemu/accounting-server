const express = require('express');
const userRouter = express.Router();
const sqlQuery = require('../db/index');

userRouter.post('/login', (req,res) => {
  let body = req.body
  console.log(body)
  if(body.length !== 0) {
    let [username, password] = [body.username, body.password];
    const sql = `select * from user where username='${username}' and '${password}'`;
    sqlQuery(sql, (data,err) => {
      if(data) {
        res.send({
          code: 1,
          data: data,
          msg: '登录成功'
        })
      }else if(err) {
        res.send({
          code: 0,
          msg: '登录失败',
        })
        console.log(err);
      }
    })
  }
})

module.exports = userRouter
