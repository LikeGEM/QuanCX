[rewrite_local]

# ～ 阿里云盘（2022-10-16)
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/aliyunpan.js

[mitm]

hostname=api.aliyundrive.com

***********************************/

let ddgksf2013 = JSON.parse($response.body);
if (ddgksf2013.result) {
    ddgksf2013.result = Object.values(ddgksf2013.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(ddgksf2013) });
