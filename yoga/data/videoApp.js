const pool=require("./pool");
module.exports ={
    list:(req, res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_video",(err,videoList)=>{
                res.json(videoList);
                conn.release();
            });
        });
    },
    commentInsert:(req,res)=>{
        var comm=req.body.comm;
        pool.getConnection((err,conn)=> {
            conn.query('INSERT INTO yg_comment VALUES(null,?)',[comm],(err,result)=>{
                if(err){
                    data={"msg":-1}
                }else{
                    data={"msg":1}
                }
                res.json(data);
               // console.log(data)
                conn.release();
            });
        })
    },
    commentSel:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_comment",(err,commList)=>{
                res.json(commList);
                conn.release();
            });
        })
    }
}