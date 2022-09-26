const express = require('express');
const accountRouter = express.Router();
const sqlQuery = require('../db/index');

accountRouter.get('/all', (req,res) => {
  let query = req.query;
  console.log(query);
  if(query.length !== 0) {
    const userId = query.id;
    const sql = `select * from account where userId = '${userId}';`;
    sqlQuery(sql,(data,err) => {
      if(data) {
        res.send({
          code: 1,
          msg: '查询成功',
          data: data
        })
      }else if(err) {
        res.send({
          code: 0,
          msg: '查询失败',
          data: err
        })
      }
    })
  }else{
    res.send({
      code: 0,
      msg: '未登录'
    })
  }
})

accountRouter.post('/add', (req,res) => {
  let body = req.body
  console.log(body)
  if(body.length !== 0) {
    let [userId, price, date, isIncome, useType, remark] = [body.userId, body.price, body.date, body.isIncome, body.useType, body.remark];
    const sql = `insert into account(userId,price,date,isIncome,useType,remark) values('${userId}','${price}','${date}','${isIncome}','${useType}','${remark}');`;
    sqlQuery(sql, (data,err) => {
      if(data) {
        res.send({
          code: 1,
          msg: '添加成功'
        })
      }else if(err) {
        res.send({
          code: 0,
          msg: '添加失败',
        })
        console.log(err);
      }
    })
  }
})

accountRouter.post('/update', (req,res) => {
  let body = req.body
  console.log(body)
  if(body.length !== 0) {
    let [id, price, date, isIncome, useType, remark] = [body.id, body.price, body.date, body.isIncome, body.useType, body.remark];
    const sql = `update account set price='${price}', date='${date}', isIncome='${isIncome}', useType='${useType}', remark='${remark}' where id='${id}'`;
    sqlQuery(sql, (data,err) => {
      if(data) {
        res.send({
          code: 1,
          msg: '修改成功'
        })
      }else if(err) {
        res.send({
          code: 0,
          msg: '修改失败',
        })
        console.log(err);
      }
    })
  }
})

accountRouter.get('/delete', (req,res) => {
  let query = req.query;
  let id = query.id;
  const sql = `delete from account where id='${id}'`;
  sqlQuery(sql, (data,err) => {
    if(data) {
      res.send({
        code: 1,
        msg: '删除成功'
      })
    }else if(err) {
      res.send({
        code: 0,
        msg: '删除失败',
      })
      console.log(err);
    }
  })
})

module.exports = accountRouter
