const $sql = require("../db/db");
function sqlQuery(sql,callback){
  $sql.query(sql,(err,result)=>{
    if(err){
      return console.log(err)
    }
    callback(result)
  })
}
module.exports = sqlQuery