/***********************************

#Stay 去广告
            
[rewrite_local]

^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/Stay.js

[mitm]

hostname=api.shenyin.name

***********************************/

let ddgksf2013 = JSON.parse($response.body);
if (ddgksf2013.biz) {
    ddgksf2013.biz = Object.values(ddgksf2013.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(ddgksf2013) });
