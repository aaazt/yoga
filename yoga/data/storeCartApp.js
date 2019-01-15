const pool=require("./pool");
module.exports= {
    /*向购物车加载图片列表*/
    add: (req, res)=> {
        var id = req.body.uid;
        pool.getConnection((err, conn)=> {
            conn.query("SELECT * FROM yg_cart WHERE uid=?", [id], (err, cartList)=> {
                if(cartList.length!==0){
                    var progress = 0; //已经完成的异步查询数量
                    for(let cart of cartList){
                        conn.query("SELECT * FROM yg_private WHERE pid IN (SELECT pid FROM yg_cart WHERE cid=?)",[cart.cid],(err,list)=>{
                            cart['productList'] = list;
                            progress++;
                            if(progress===cartList.length){
                                res.json(cartList);
                                conn.release();
                            }
                        })
                    }
                }else{
                    var result=false;
                    res.json(result);
                    conn.release();
                }

            });
        });
    },
    update: (req, res)=> {
        var uid = req.body.uid;
        var pid = req.body.pid;
        pool.getConnection((req, conn)=> {
            conn.query("SELECT * FROM yg_cart WHERE pid=? AND uid=?", [pid, uid], (err, result)=> {
                if (result.length === 0) {
                    var count = 1;
                    conn.query("INSERT INTO yg_cart VALUES(NULL,?,?,1)", [pid, uid]);
                } else {
                    conn.query("UPDATE yg_cart SET count=count+1 WHERE pid=? AND uid=?", [pid, uid]);
                }
                res.json(result);
                conn.release();
            });
        });
    },
    count:(req,res)=>{
        var uid = req.body.uid;
        var pid = req.body.pid;
        var count=req.body.count;
        pool.getConnection((req,conn)=>{
            conn.query("UPDATE yg_cart SET count=? WHERE pid=? AND uid=?", [count, pid, uid],(err,result)=>{
                res.json(result);
                conn.release();
            });
        });
    },
    delete:(req,res)=>{
        var uid = req.body.uid;
        var pid = req.body.pid;
        pool.getConnection((req,conn)=>{
            conn.query("DELETE FROM yg_cart WHERE pid=? AND uid=?", [pid, uid],(err,result)=>{
                res.json(result);
                conn.release();
            });

        });
    }
};
