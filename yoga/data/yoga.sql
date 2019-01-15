DROP DATABASE IF EXISTS yoga;
SET NAMES UTF8;
CREATE DATABASE yoga CHARSET=UTF8;
USE yoga;

#用户表===============
CREATE TABLE yg_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT '',
  username VARCHAR(32) NOT NULL DEFAULT '未填写',
  joindate  BIGINT NOT NULL DEFAULT 0
)ENGINE=MYISAM DEFAULT CHARSET=utf8;

INSERT INTO yg_user VALUES(null,'18300000000','111111','未填写',1521234567891);
INSERT INTO yg_user VALUES(null,'18311111111','123456','未填写',1531234567891);
INSERT INTO yg_user VALUES(null,'18322222222','123456','未填写',1411234567891);


#名师表=================
CREATE TABLE yg_master(
   mid   INT PRIMARY KEY AUTO_INCREMENT,
   mname VARCHAR(50) NOT NULL DEFAULT '',
   mmsg  VARCHAR(500) NOT NULL DEFAULT '',
   mpic  VARCHAR(100) NOT NULL DEFAULT '',
   murl  VARCHAR(100) NOT NULL DEFAULT ''
);

INSERT INTO yg_master VALUES(null,' 党雪萍（Michelle）','Michelle的课流畅，细腻，善于观察学员的体式，并及时的给...','master01.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 苍婧妍','2004年开始教授瑜伽至今，多次参加Ashtanga yoga，Vniyasa...','master02.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 大圣Ayur',' 教学严谨，秉承传统。教学中传递着瑜伽哲学与阿育吠陀养生...','master03.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 婉庭（Wendy）','婉庭至尊瑜伽馆创办人；婉庭皇冠艺术团创办人。教学风格：...','master04.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 胡琪','2008年在大学期间开始习练瑜伽并在业余期间进行教学，八年...','master05.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' Sohan（索汉）','Sohan倡导特色瑜伽，注重瑜伽教学的个性化、特色化，即以...','master06.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 大圣Ayur',' 教学严谨，秉承传统。教学中传递着瑜伽哲学与阿育吠陀养生...','master07.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 婉庭（Wendy）','婉庭至尊瑜伽馆创办人；婉庭皇冠艺术团创办人。教学风格：...','master08.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 胡琪','2008年在大学期间开始习练瑜伽并在业余期间进行教学，八年...','master09.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 苍婧妍','2004年开始教授瑜伽至今，多次参加Ashtanga yoga，Vniyasa...','master10.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 大圣Ayur',' 教学严谨，秉承传统。教学中传递着瑜伽哲学与阿育吠陀养生...','master11.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 婉庭（Wendy）','婉庭至尊瑜伽馆创办人；婉庭皇冠艺术团创办人。教学风格：...','master12.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 胡琪','2008年在大学期间开始习练瑜伽并在业余期间进行教学，八年...','master13.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' Sohan（索汉）','Sohan倡导特色瑜伽，注重瑜伽教学的个性化、特色化，即以...','master14.jpg','masterIntr.html');
INSERT INTO yg_master VALUES(null,' 大圣Ayur',' 教学严谨，秉承传统。教学中传递着瑜伽哲学与阿育吠陀养生...','master15.jpg','masterIntr.html');

#视频表====================
CREATE TABLE yg_video(
   vid   INT PRIMARY KEY AUTO_INCREMENT,
   vmsg  VARCHAR(500) NOT NULL DEFAULT '',
   vpic  VARCHAR(100) NOT NULL DEFAULT '',
   vurl  VARCHAR(100) NOT NULL DEFAULT '',
   vcount INT NOT NULL DEFAULT 0
);
INSERT INTO yg_video VALUES(null,'姜太刚老师辅助工具瑜伽教程：肩颈的进阶练习','show01.jpg','videoIntr.html',5256);
INSERT INTO yg_video VALUES(null,'赵扬老师分享：02站立侧向体式的注意点','show02.jpg','videoIntr.html',3567);
INSERT INTO yg_video VALUES(null,'登峰理疗瑜伽：04瑜伽练习中关于开髋的问题','show03.jpg','videoIntr.html',1345);
INSERT INTO yg_video VALUES(null,'Andy运动伤害：01姿势评估（上）','show04.jpg','videoIntr.html',3456);
INSERT INTO yg_video VALUES(null,'李姝湘老师古典瑜伽：01古典瑜伽的简介与唱诵','show05.jpg','videoIntr.html',6433);
INSERT INTO yg_video VALUES(null,'宋光明老师瑜伽分享：病由心生与理疗术','show06.jpg','videoIntr.html',2311);
INSERT INTO yg_video VALUES(null,'王岩老师瑜伽分享：01肩颈瑜伽热身与放松术','show07.jpg','videoIntr.html',5343);
INSERT INTO yg_video VALUES(null,'‖王楚函V动yoga：缓解痛经','show08.jpg','videoIntr.html',2244);
INSERT INTO yg_video VALUES(null,'赵扬老师分享：03站立前后分腿体式的注意点','show09.jpg','videoIntr.html',1344);
INSERT INTO yg_video VALUES(null,'迷罗养生瑜伽：01春季该如何养肝','show10.jpg','videoIntr.html',5322);
INSERT INTO yg_video VALUES(null,'‖迷罗：二十四节气养生法“立春”','show11.jpg','videoIntr.html',1232);
INSERT INTO yg_video VALUES(null,'晓琪老师女士美颜瑜伽：美丽颈部','show12.jpg','videoIntr.html',2231);

#热门推荐表=============
CREATE TABLE yg_recommend(
   rid   INT PRIMARY KEY AUTO_INCREMENT,
   rname  VARCHAR(500) NOT NULL DEFAULT '',
   rpic  VARCHAR(100) NOT NULL DEFAULT '',
   rurl  VARCHAR(100) NOT NULL DEFAULT '',
   rcount INT NOT NULL DEFAULT 0
);
INSERT INTO yg_recommend VALUES(null,'[训练计划] 瑜伽有氧运动练习','recommend01.jpg','videoIntr.html',9866);
INSERT INTO yg_recommend VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','recommend02.jpg','videoIntr.html',8967);
INSERT INTO yg_recommend VALUES(null,'[魅力女性] 哈他丨60分钟课堂×10','recommend03.jpg','videoIntr.html',8563);
INSERT INTO yg_recommend VALUES(null,'[瑜伽初级] 阴瑜伽与心理学','recommend04.jpg','videoIntr.html',8223);
INSERT INTO yg_recommend VALUES(null,'[教练进阶] 瑜伽课程套餐包','recommend05.jpg','videoIntr.html',7237);
INSERT INTO yg_recommend VALUES(null,'[瑜伽入门] 瑜伽启蒙之路丨哈他私教','recommend06.jpg','videoIntr.html',7136);
INSERT INTO yg_recommend VALUES(null,'[全美联盟] 精准顺位流丨技巧提升','recommend07.jpg','videoIntr.html',6987);
INSERT INTO yg_recommend VALUES(null,'[训练计划]  舒缓压力丨灵活肩颈脊柱','recommend08.jpg','videoIntr.html',6578);
INSERT INTO yg_recommend VALUES(null,'[提升课程] 脊柱的5种运动面向：NEW LIFE','recommend09.jpg','videoIntr.html',6009);

#头条表=================
CREATE TABLE yg_headline(
   hid   INT PRIMARY KEY AUTO_INCREMENT,
   hname  VARCHAR(200) NOT NULL DEFAULT '',
   hmsg  VARCHAR(500) NOT NULL DEFAULT '',
   hpic  VARCHAR(100) NOT NULL DEFAULT '',
   hurl  VARCHAR(100) NOT NULL DEFAULT '',
   hcount INT NOT NULL DEFAULT 0
);
INSERT INTO yg_headline VALUES(null,'开始练瑜伽，第一个体式是什么？','从今天起，瑜伽网将带领每一位还未入瑜伽之门的初学者，从最基础的体式开始，慢慢成为一名真正意义上的瑜伽士。...','info01.jpg','headlineDetail.html',122);
INSERT INTO yg_headline VALUES(null,'3个助眠瑜伽体式，赶走失眠让你一觉睡到大天亮！','身体明明很累了，可躺在床上脑子却还不停地转，还想着白天的工作；在办公室坐了一天，腰酸背痛，在床上躺着怎么也不舒服……作为白领的你是不是也正遭受这样的失眠困扰？那么不妨来试...','info02.jpg','headlineDetail.html',49);
INSERT INTO yg_headline VALUES(null,'第三届北京H.O.P.E.中国瑜伽峰会再约钓鱼台','2017年第三届H.O.P.E.中国瑜伽峰会即将呈现。...','info03.jpg','headlineDetail.html',38);
INSERT INTO yg_headline VALUES(null,'瑜伽是享受的过程，别再追求高难度动作了','真正的瑜伽无关竞技，瑜伽体式不是相互攀比，而是唤醒身体上的觉知。...','info04.jpg','headlineDetail.html',102);
INSERT INTO yg_headline VALUES(null,'膝盖的寿命只有60年！学会了就能让它永葆青春！','膝盖是我们养生保健的基础，生命在于运动，有一个健康的膝盖，才能让生命动起来。...','info05.jpg','headlineDetail.html',86);
INSERT INTO yg_headline VALUES(null,'8个瑜伽体式搞定双腿、抚平小腹','体重偏大、偏重的梨型身材不仅有碍于外在观感和颜值，而且非常影响人的健康状况，三高的风险和心脑血管疾病的患病几率都会明显提高。今天为大家介绍8个减脂瑜伽体式，能搞定你的双腿...','info06.jpg','headlineDetail.html',35);
INSERT INTO yg_headline VALUES(null,'高难度臂架式瑜伽动作，一般人做不了！','瑜伽体式的奥秘体式，即瑜伽姿势，是体验的一个容器。体式并不是强化或拉伸特定肌肉群的练习，但它可能会有这种效果。...','info07.jpg','headlineDetail.html',24);
INSERT INTO yg_headline VALUES(null,'5个最好的养生瑜伽体式，减轻压力、缓解紧张情绪！','养生，是根据人的生命过程规律，主动进行物质与精神的身心养护活动，在如今雾霾横行，生活工作压力颇大的世界，人们的身体负荷巨大，养生对于人们来说至关重要。...','info08.jpg','headlineDetail.html',53);
INSERT INTO yg_headline VALUES(null,'瑜伽是享受的过程，别再追求高难度动作了','真正的瑜伽无关竞技，瑜伽体式不是相互攀比，而是唤醒身体上的觉知。...','info09.jpg','headlineDetail.html',102);
INSERT INTO yg_headline VALUES(null,'膝盖的寿命只有60年！学会了就能让它永葆青春！','膝盖是我们养生保健的基础，生命在于运动，有一个健康的膝盖，才能让生命动起来。...','info10.jpg','headlineDetail.html',86);
INSERT INTO yg_headline VALUES(null,'开始练瑜伽，第一个体式是什么？','从今天起，瑜伽网将带领每一位还未入瑜伽之门的初学者，从最基础的体式开始，慢慢成为一名真正意义上的瑜伽士。...','info11.jpg','headlineDetail.html',122);
INSERT INTO yg_headline VALUES(null,'3个助眠瑜伽体式，赶走失眠让你一觉睡到大天亮！','身体明明很累了，可躺在床上脑子却还不停地转，还想着白天的工作；在办公室坐了一天，腰酸背痛，在床上躺着怎么也不舒服……作为白领的你是不是也正遭受这样的失眠困扰？那么不妨来试...','info12.jpg','headlineDetail.html',49);


#会馆表=================
CREATE TABLE yg_guild(
   gid   INT PRIMARY KEY AUTO_INCREMENT,
   gname  VARCHAR(200) NOT NULL DEFAULT '',
   gmsg  VARCHAR(500) NOT NULL DEFAULT '',
   gpic  VARCHAR(100) NOT NULL DEFAULT '',
   gurl  VARCHAR(100) NOT NULL DEFAULT ''
);
INSERT INTO yg_guild VALUES(null,'梵月专业瑜伽教练培训机构','梵月的培训目标是：培养双素质的瑜伽人才，绝不为了利益复... ','shows01.jpg','#');
INSERT INTO yg_guild VALUES(null,'无界AN居','无界AN居 瑜伽人的居心地。身无界，心安居。Ta不仅仅是...','shows02.jpg','#');
INSERT INTO yg_guild VALUES(null,'雅心瑜伽私教室','雅心瑜伽私教室立志为您提供更为贴心的服务，（3-6人）尊...','shows03.jpg','#');
INSERT INTO yg_guild VALUES(null,'雅心瑜伽私教室','雅心瑜伽私教室立志为您提供更为贴心的服务，（3-6人）尊...','shows04.jpg','#');
INSERT INTO yg_guild VALUES(null,'静潺瑜伽生活会馆','在城市的一隅，有一个安静的角落，可以让您品茶、闻香、练...','shows05.jpg','#');
INSERT INTO yg_guild VALUES(null,'K&J LIFE 熔岩生活私教会所',' K&J Life瑜伽带来的远不仅是一种运动，我们关注的是人...','shows06.jpg','#');
INSERT INTO yg_guild VALUES(null,'梵月专业瑜伽教练培训机构','梵月的培训目标是：培养双素质的瑜伽人才，绝不为了利益复... ','shows07.jpg','#');
INSERT INTO yg_guild VALUES(null,'无界AN居','无界AN居 瑜伽人的居心地。身无界，心安居。Ta不仅仅是...','shows08.jpg','#');
INSERT INTO yg_guild VALUES(null,'雅心瑜伽私教室','雅心瑜伽私教室立志为您提供更为贴心的服务，（3-6人）尊...','shows09.jpg','#');
INSERT INTO yg_guild VALUES(null,'雅心瑜伽私教室','雅心瑜伽私教室立志为您提供更为贴心的服务，（3-6人）尊...','shows10.jpg','#');
INSERT INTO yg_guild VALUES(null,'静潺瑜伽生活会馆','在城市的一隅，有一个安静的角落，可以让您品茶、闻香、练...','shows11.jpg','#');
INSERT INTO yg_guild VALUES(null,'K&J LIFE 熔岩生活私教会所',' K&J Life瑜伽带来的远不仅是一种运动，我们关注的是人...','shows12.jpg','#');

#私课表==================
CREATE TABLE yg_private(
   pid   INT PRIMARY KEY AUTO_INCREMENT,
   pname  VARCHAR(200) NOT NULL DEFAULT '',
   ppic  VARCHAR(100) NOT NULL DEFAULT '',
   picbig VARCHAR(30) NOT NULL DEFAULT '',
   price VARCHAR(30) NOT NULL DEFAULT '',
   pclass  VARCHAR(50) NOT NULL DEFAULT '',
   grade INT NOT NULL DEFAULT 0,
   pcount INT NOT NULL DEFAULT 0,
   quiz INT NOT NULL DEFAULT 0,
   pinfo VARCHAR(1000) NOT NULL DEFAULT ''

);
INSERT INTO yg_private VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','class01.jpg','product01.jpg','298.00','20集*10分钟','5','25','153','');
INSERT INTO yg_private VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','class02.jpg','product02.jpg','298.00','10集*15分钟','5','25','153','杨莹入门课堂：01根基的练习/杨莹入门课堂：02人体关节活动练习（上半身）/杨莹入门课堂：03人体关节活动练习（下半身）/杨莹入门课堂：04核心腰腹练习/杨莹入门课堂：05太阳致敬式AB/杨莹入门课堂：06瑜伽练习常见体式详解（一）/杨莹入门课堂：07瑜伽练习常见体式详解（二）/杨莹入门课堂：08瑜伽练习常见体式详解（三）/杨莹入门课堂：09瑜伽练习常见体式详解（四）/杨莹入门课堂：10瑜伽练习常见体式详解（五）');
INSERT INTO yg_private VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','class03.jpg','product03.jpg','298.00','8集*15分钟','5','25','153','大圣老师阿斯汤加：01基本概念与基础呼吸/大圣老师阿斯汤加：02梵文计数与调息/有氧运动03：腿部增肌锻炼（上）/大圣老师阿斯汤加：03拜日A序列练习/大圣老师阿斯汤加：04拜日B序列练习/大圣老师阿斯汤加：05基础体位（上）/大圣老师阿斯汤加：06基础体位（下）/大圣老师阿斯汤加：07基础体位领课练习/大圣老师阿斯汤加：08简易的结束部分');
INSERT INTO yg_private VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','class04.jpg','product04.jpg','298.00','10集*15分钟','5','25','153','张一哈他瑜伽：01什么是瑜伽/张一哈他瑜伽：02根基的建立（第一讲）/张一哈他瑜伽：03根基的建立（第二讲）/张一哈他瑜伽：04根基的建立（第三讲）/张一哈他瑜伽：05根基的建立（第四讲）/张一哈他瑜伽：06零基础练习（第一讲）/张一哈他瑜伽：07零基础练习（第二讲）/张一哈他瑜伽：08零基础练习（第三讲）/张一哈他瑜伽：09零基础练习（第四讲）/张一哈他瑜伽：10向太阳致敬十二式');
INSERT INTO yg_private VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','class05.jpg','product05.jpg','298.00','20集*10分钟','5','25','153','有氧运动01：重塑完美腰身（上）/有有氧运动02：重塑完美腰身（下）/有氧运动03：腿部增肌锻炼（上）/有氧运动04：腿部增肌锻炼（下）/有氧运动05：腰腹核心练习/有氧运动06：完美腿部塑型（上）/有氧运动15：哑铃弯举紧实手臂肌肉/有氧运动15：哑铃弯举紧实手臂肌肉');
INSERT INTO yg_private VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','class06.jpg','product06.jpg','298.00','20集*10分钟','5','25','153','有氧运动01：重塑完美腰身（上）/有有氧运动02：重塑完美腰身（下）/有氧运动03：腿部增肌锻炼（上）/有氧运动04：腿部增肌锻炼（下）/有氧运动05：腰腹核心练习/有氧运动06：完美腿部塑型（上）/有氧运动15：哑铃弯举紧实手臂肌肉/有氧运动15：哑铃弯举紧实手臂肌肉');
INSERT INTO yg_private VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','class07.jpg','product07.jpg','298.00','20集*10分钟','5','25','153','有氧运动01：重塑完美腰身（上）/有有氧运动02：重塑完美腰身（下）/有氧运动03：腿部增肌锻炼（上）/有氧运动04：腿部增肌锻炼（下）/有氧运动05：腰腹核心练习/有氧运动06：完美腿部塑型（上）/有氧运动15：哑铃弯举紧实手臂肌肉/有氧运动15：哑铃弯举紧实手臂肌肉');
INSERT INTO yg_private VALUES(null,'[限时抢购] 瑜伽网丨超值VIP视频年卡','class08.jpg','product08.jpg','298.00','20集*10分钟','5','25','153','有氧运动01：重塑完美腰身（上）/有有氧运动02：重塑完美腰身（下）/有氧运动03：腿部增肌锻炼（上）/有氧运动04：腿部增肌锻炼（下）/有氧运动05：腰腹核心练习/有氧运动06：完美腿部塑型（上）/有氧运动15：哑铃弯举紧实手臂肌肉/有氧运动15：哑铃弯举紧实手臂肌肉');




#首页瑜课堂表===============
CREATE TABLE yg_indexClass(
   cid   INT PRIMARY KEY AUTO_INCREMENT,
   cmsg  VARCHAR(200) NOT NULL DEFAULT '',
   cpic  VARCHAR(100) NOT NULL DEFAULT '',
   curl  VARCHAR(100) NOT NULL DEFAULT '',
   ccount  INT NOT NULL DEFAULT 0
);
INSERT INTO yg_indexClass VALUES(null,'大圣老师阿斯汤加：01基本概念与基础呼吸','yg_class02.jpg','videoIntr.html',10);
INSERT INTO yg_indexClass VALUES(null,'赵扬NEW LIFE：01.身心整疗总论','yg_class03.jpg','videoIntr.html',10);
INSERT INTO yg_indexClass VALUES(null,'01巧思拜日式热身练习','yg_class04.jpg','videoIntr.html',9);
INSERT INTO yg_indexClass VALUES(null,'郭晓丽流瑜伽：01太阳式A序列讲解','yg_class05.jpg','videoIntr.html',12);
INSERT INTO yg_indexClass VALUES(null,'Sisy普拉提：01小器械介绍及平衡训练','yg_class06.jpg','videoIntr.html',35);
INSERT INTO yg_indexClass VALUES(null,'01婉庭 头颈肩胸腰练习第一段','yg_class07.jpg','videoIntr.html',18);

#首页瑜乐记表=================
CREATE TABLE yg_indexYuLeJi(
   yid   INT PRIMARY KEY AUTO_INCREMENT,
   ytitle VARCHAR(100) NOT NULL DEFAULT '',
   ymsg  VARCHAR(200) NOT NULL DEFAULT '',
   ypic  VARCHAR(100) NOT NULL DEFAULT '',
   yurl  VARCHAR(100) NOT NULL DEFAULT '',
   ycount  INT NOT NULL DEFAULT 0
);
INSERT INTO yg_indexYuLeJi VALUES(null,'[行业动态]','你的瑜伽馆为什么经营不善','ylj02.png','storeCart.html',9);
INSERT INTO yg_indexYuLeJi VALUES(null,'[瑜伽心语]','坚持练瑜伽的九大好处，让你越练越痴迷！','ylj03.png','storeCart.html',10);
INSERT INTO yg_indexYuLeJi VALUES(null,'[瑜伽心语]','凭什么练瑜伽的人就比别人年轻','ylj04.png','storeCart.html',6);
INSERT INTO yg_indexYuLeJi VALUES(null,'[瑜伽心语]','你练瑜伽的吧？气质真好！','ylj05.png','storeCart.html',8);

#首页瑜伽仕表=================
CREATE TABLE yg_indexTutor(
   tid   INT PRIMARY KEY AUTO_INCREMENT,
   tpic  VARCHAR(100) NOT NULL DEFAULT '',
   turl  VARCHAR(100) NOT NULL DEFAULT ''
);
INSERT INTO yg_indexTutor VALUES(null,'yjs1.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs2.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs3.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs4.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs5.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs6.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs7.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs8.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs9.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs10.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs11.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs12.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs13.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs14.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs15.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs16.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs17.jpg','masterIntr.html');
INSERT INTO yg_indexTutor VALUES(null,'yjs18.jpg','masterIntr.html');

#首页瑜伽圈表=================
CREATE TABLE yg_indexEvent(
   eid   INT PRIMARY KEY AUTO_INCREMENT,
   eurl  VARCHAR(100) NOT NULL DEFAULT '',
   etitle  VARCHAR(100) NOT NULL DEFAULT '',
   edata  BIGINT NOT NULL DEFAULT 0
);
INSERT INTO yg_indexEvent VALUES(null,'#','武义国际养生瑜伽大会即将绽放温泉名城...',1421234567891);
INSERT INTO yg_indexEvent VALUES(null,'#','YONION瑜伽艺术生活节，我们约定在厦门...',1411234567891);
INSERT INTO yg_indexEvent VALUES(null,'#','中国首届乡村瑜伽大会与您相约浙江余姚，不见不散！...',1411234567891);
INSERT INTO yg_indexEvent VALUES(null,'#','山西首届瑜伽达人赛海选进行中...',1411234567891);
INSERT INTO yg_indexEvent VALUES(null,'#','亚洲（香港）瑜伽大会十周年庆典即将开启...',1411234567891);
INSERT INTO yg_indexEvent VALUES(null,'#','第三届北京H.O.P.E.中国瑜伽峰会再约钓鱼台...',1411234567891);
INSERT INTO yg_indexEvent VALUES(null,'#','2016年黑龙江健身瑜伽公开赛落幕，486名爱好者参赛...',1411234567891);
INSERT INTO yg_indexEvent VALUES(null,'#','与6000万伽人，一起向抑郁SAY NO！“瑜伽的力量”公益...',1411234567891);
INSERT INTO yg_indexEvent VALUES(null,'#','南昌首届戏剧舞蹈瑜伽文化艺术节上演视觉盛宴...',1411234567891);


#购物车表==========用户id 商品id=======
CREATE TABLE yg_cart(
   cid  INT PRIMARY KEY AUTO_INCREMENT,
   pid INT,
   uid INT,
   count INT
);
INSERT INTO yg_cart VALUES(null,1,1,2);


#用户留言表=================
CREATE TABLE yg_consult(
    cid  INT PRIMARY KEY AUTO_INCREMENT,
    uname  VARCHAR(30) NOT NULL DEFAULT '',
    tel INT NOT NULL DEFAULT 0,
    email VARCHAR(50) NOT NULL DEFAULT '',
    address  VARCHAR(300) NOT NULL DEFAULT '',
    msg VARCHAR(300) NOT NULL DEFAULT ''
  );
INSERT INTO yg_consult VALUES(null,'晶晶',18300000000,'18300000000@163.com','北京海淀','我想咨询一下初学者从哪开始');


#视频详情页用户评论表=================
CREATE TABLE yg_comment(
    cid  INT PRIMARY KEY AUTO_INCREMENT,
    comm VARCHAR(350) NOT NULL DEFAULT ''
  );
INSERT INTO yg_comment VALUES(null,'这个视频不错，给5分。。。。老师的动作很规范，很专业');
INSERT INTO yg_comment VALUES(null,'不错，已练起。。。。。推荐MM看看');
INSERT INTO yg_comment VALUES(null,'如果讲的再细一点就更好了');