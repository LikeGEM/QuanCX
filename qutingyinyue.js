/***********************************
            
[rewrite_local]

#趣听音乐 自动激活
^https?:\/\/api\.bspapp\.com\/client$ url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/qutingyinyue.js

[mitm]

hostname=api.bspapp.com

***********************************/

var body = $response.body.replace(/needVerify":true/g, 'needVerify":false').replace(/code":\d+/g, 'code":0');
$done({ body });
