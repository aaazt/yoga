const pool=require("./pool");

module.exports=(req,res)=>{
    var uname=req.body.uname;
    var tel=req.body.tel;
    var email=req.body.email;
    var address=req.body.address;
    var leave=req.body.leave;
    pool.getConnection((err,conn)=>{
        conn.query("INSERT INTO yg_consult values(null,?,?,?,?,?)",[uname,tel,email,address,leave],(err,result)=>{
            if(err){
                var data={"code":500,"msg":"服务器忙，请稍后重试 ！"}
            }else{
                var data={"code":200,"msg":"您已留言成功，请稍等！"}
            }
            res.json(data);
            conn.release();
        });
    });
}