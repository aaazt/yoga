const pool=require("./pool");
module.exports =(req, res)=>{
    pool.getConnection((err,conn)=>{
        conn.query("SELECT * FROM yg_headline",(err,headlineList)=>{
            res.json(headlineList);
            conn.release();
        });
    });
};



