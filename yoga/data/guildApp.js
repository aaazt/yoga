const pool=require("./pool");
module.exports=(req,res)=>{
    pool.getConnection((err,conn)=>{
        conn.query("SELECT * FROM yg_guild",(err,guildList)=>{
            res.json(guildList);
            conn.release();
        });
    });
};

