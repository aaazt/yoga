const pool=require("./pool");

module.exports = {
    /*判断当前手机号是否已经注册*/
    reg:(req, res)=>{
        var uname=req.body.uname;
        pool.getConnection((err, conn)=>{
                conn.query('SELECT uid FROM yg_user WHERE uname=?',[uname],(err, result)=>{
                    if(err){
                        var data={"code":500,"msg":"服务器忙，请稍后重试"};
                    }else if(result.length===0){
                        var data={"code":200,"msg":"可以注册"};
                    }else{
                        var data={"code":400,"msg":"此手机号已注册"};
                    }
                    res.json(data);
                    conn.release();//释放连接回连接池
                })
            });
    },
    /*注册事件*/
    add: (req, res)=>{
        var uname=req.body.uname;
        var upwd=req.body.upwd;
        pool.getConnection((err, conn)=>{
                conn.query('INSERT INTO yg_user VALUES(null,?,?,now())',[uname,upwd],(err, result)=>{
                    if(result.affectedRows===1){
                        var data={"code":200,"msg":"注册成功"}
                    }else{
                        var data={"code":500,"msg":"服务器忙，请稍后重试"}
                    }
                    res.json(data);
                    conn.release();
                })
            });
    }
};

