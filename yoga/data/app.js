const http=require("http");
const express=require("express");
const qs=require("querystring");

const master=require("./masterApp");
const video=require("./videoApp");
const recommend=require("./recommendApp");
const headline=require("./headlineApp");
const guild=require("./guildApp");
const private1=require("./privateApp");
const index=require("./indexApp");
const detail=require("./detailApp");

const consult=require("./consultApp");

const cart=require("./storeCartApp");

const register=require("./registerApp");
const user=require("./userApp");

var app=express();
http.createServer(app).listen(8080);

/*处理静态资源请求*/
app.use(express.static("../public"));


/*处理动态资源请求*/
//处理POST请求主体数据的中间件
app.use((req,res,next)=>{
    if(req.method==="POST"){
        req.on("data",(buf)=>{
            //把请求主体数据追加为req.body属性
            req.body=qs.parse(buf.toString());
            next(); //等待请求主体数据异步处理完成再调用后面的路由
        })
    }else { //除了POST请求之外的其它请求，如GET，直接放行
        next();
    }
});

app.get("/master",master);
app.get("/video/list",video.list);
app.get("/video/commentSel",video.commentSel);
app.get("/recommend",recommend);
app.get("/headline",headline);
app.get("/guild",guild);
app.get("/private",private1.add);
app.get("/private",private1.add);
//app.post("/private",private1.detail);

app.get("/index/ygClass",index.ygClass);
app.get("/index/yuLeJi",index.yuLeJi);
app.get("/index/tutor",index.ygTutor);
app.get("/index/eventNew",index.ygEventNew);
app.get("/index/eventOld",index.ygEventOld);


app.post("/register_reg",register.reg);
app.post("/register_add",register.add);
app.post("/user/login",user.login);
app.post("/user/update",user.userupdate);
app.post("/user/sel",user.userSel);
app.post("/detail",detail);
app.post("/storeCart/add",cart.add);
app.post("/storeCart/update",cart.update);
app.post("/storeCart/count",cart.count);
app.post("/storeCart/delete",cart.delete);
app.post("/video/commentInsert",video.commentInsert);



app.post("/consult",consult); //主页留言


