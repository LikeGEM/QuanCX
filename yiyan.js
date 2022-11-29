/***********************************

 # 一言解锁订阅

[rewrite_local]

^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/yiyan.js

[mitm] 

hostname=app.yiyan.art

***********************************/
var body = $response.body.replace(/viptype":"1"/g, 'viptype":"4"')
$done({ body });
