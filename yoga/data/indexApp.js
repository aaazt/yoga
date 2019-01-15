const pool=require("./pool");
module.exports={
    /*瑜课堂*/
    ygClass:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexClass",(err,classList)=>{
                res.json(classList);
                conn.release();
            });
        });
    },
    /*瑜乐记*/
    yuLeJi:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexYuLeJi",(err,yuLeJiList)=>{
                res.json(yuLeJiList);
                conn.release();
            });
        });
    },
    /*瑜伽仕*/
    ygTutor:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexTutor ",(err,tutorList)=>{
                res.json(tutorList);
                conn.release();
            });
        });
    },
    /*娱乐圈*/
    //最新大会
    ygEventNew:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexEvent",(err,eventList)=>{
                res.json(eventList);
                conn.release();
            })
        });
    },
    //往期大会
    ygEventOld:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM yg_indexEvent ",(err,eventList)=>{
                res.json(eventList);
                conn.release();
            })
        });
    }
};
