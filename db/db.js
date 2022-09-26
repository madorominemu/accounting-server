const express = require('express')
const $mysql = require('mysql');
const sql = require('./mysql.js')
const $sql = $mysql.createConnection(sql.mysql)

$sql.connect();
module.exports = $sql;