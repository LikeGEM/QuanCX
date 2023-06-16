/*************************************
项目名称：JavDB-去广告
下载地址：https://javdb008.com
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************
[rewrite_local]
^https?:\/\/api\.((pxxgg|yijingluowangluo)\.xyz|ujvnmkx\.cn)\/api url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/JavDBAD.js
[mitm]
hostname = api.pxxgg.xyz, api.ujvnmkx.cn, api.yijingluowangluo.xyz
*************************************/


var 内容 = $response.内容;
var chxm1023 = JSON.parse(内容);

const ada = '/ads';
const adb = '/startup';

//横幅广告
if ($request.url。indexOf(ada) != -1){
  chxm1023.data。ads = {};
}

//公告，开屏
if ($request.url。indexOf(adb) != -1){
  chxm1023.data。splash_ad。启用 = false;
  chxm1023.data。splash_ad。overtime = 0;
  chxm1023.data。splash_ad。ad = {};
  chxm1023.data。feedback。placeholder = "";
  chxm1023.data。设置。UPDATE_DESCRIPTION = "";
  chxm1023.data。设置。NOTICE = "";
}

$done({内容 : JSON.stringify(chxm1023)});
