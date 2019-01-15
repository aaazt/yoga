const pool=require("./pool");

module.exports={
       login: (req,res)=>{
            var uname=req.body.uname;
            var upwd=req.body.upwd;
            pool.getConnection((err,conn)=>{
                conn.query("SELECT uid FROM yg_user WHERE uname=? AND upwd=?",[uname,upwd],(err,result)=>{
                    if(err){
                        var data={"code":500,"msg":"服务器忙，请稍后重试 ！"}
                    }else if(result.length===0){
                        var data={"code":400,"msg":"用户不存在 ！"}
                    }else{
                        var data={"code":200,"msg":"登陆成功 ！","uid":result[0].uid}
                    }
                    res.json(data);
                    conn.release();
                });
            });
        },
    userupdate:(req,res)=>{
        var username=req.body.username;
        var uid=req.body.uid;
        pool.getConnection((err,conn)=>{
            conn.query("UPDATE yg_user SET username=? WHERE uid=? ",[username,uid]);
        });
    },
    userSel:(req,res)=>{
        var uid=req.body.uid;
        pool.getConnection((err,conn)=>{
            conn.query("SELECT username FROM yg_user WHERE uid=?",[uid],(err,data)=>{
                res.json(data);
                conn.release();
            });
        });
    }
}
