const pool=require("./pool");
module.exports={
    /*向页面加载图片列表*/
    add:(req,res)=>{
    pool.getConnection((err,conn)=>{
        conn.query("SELECT * FROM yg_private",(err,privateList)=>{
            res.json(privateList);
            conn.release();
        });
    });
}
};
