const pool=require("./pool");
module.exports=(req,res)=>{
        var id=req.body.pid;
        console.log(id);
    pool.getConnection((err,conn)=>{
        conn.query("SELECT * FROM yg_private WHERE pid=? ",[id],(err,detailList)=>{
            res.json(detailList);
            conn.release();
        });
    });
};

