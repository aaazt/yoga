const pool=require("./pool");
module.exports=(req,res)=>{
  pool.getConnection((err,conn)=>{
      conn.query("SELECT * FROM yg_recommend",(err,recommendList)=>{
          res.json(recommendList);
          conn.release();
      });
  });
};


