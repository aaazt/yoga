const pool=require("./pool");
module.exports =(req, res)=>{
    pool.getConnection((err,conn)=>{
        conn.query("SELECT * FROM yg_master ",(err,masterList)=>{
            res.json(masterList);
            conn.release();
        });
    });
};

