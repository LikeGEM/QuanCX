/***********************************

# 电视家

[rewrite_local]

^https?:\/\/123\.56\.125\.184\/api\/v\d\/user\/info url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/dianshijia.js

[mitm] 

hostname=123.56.125.184

***********************************/


var ddgksf2013=JSON.parse($response.body);ddgksf2013.data.equityTime=4e12,ddgksf2013.data.adEquityTime=4e12,ddgksf2013.data.exclusiveTime=4e12,$done({body:JSON.stringify(ddgksf2013)});
