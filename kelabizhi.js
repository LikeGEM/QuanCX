/***********************************

# 克拉壁纸

[rewrite_local]
^http[s]s:\/\/claritywallpaper\.com\/clarity\/api\/userInfo url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/kelabizhi.js

[mitm]

hostname= claritywallpaper.com

***********************************/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userinfo = '/userInfo';
const setfree = '/special/queryByCatalogAll';

if (url.indexOf(setfree) != -1) {
   for (var i = 0; i < obj.data.length; i++) {
       obj.data[i].isFree = true;
       obj.data[i].random = "Kqp5/Z35ga5WBeNcLue+dBwZW4ZWRoDFMAqqU48d06Y=";
   }
   body = JSON.stringify(obj);
}
if (url.indexOf(userinfo) != -1) {
   obj.data.level = 5;
   obj.data.expireTime = 4070965662;
   body = JSON.stringify(obj);
}
$done({body});
