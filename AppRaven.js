/***********************************

[rewrite_local]

#AppRaven
^https?:\/\/appraven\.net\/AppRaven\/(app|social|buy) url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/AppRaven.js

[mitm] 
hostname=appraven.net

***********************************/

var url = $request.url;
var obj = JSON.parse($response.body);
const tmp1 = '/AppRaven/app';
const tmp2 = '/AppRaven/social';
const tmp3 = '/AppRaven/buy';

if (url.indexOf(tmp1) != -1) {
	var body = $response.body.replace(/premium": false/g, 'premium": true');
}
if (url.indexOf(tmp2) != -1) {
	var body = $response.body.replace(/premium": false/g, 'premium": true');
}
if (url.indexOf(tmp3) != -1) {
	obj={"success":true,"message":"1896165181","isReceiptValid":true,"isSubscriptionActive":true};
	body = JSON.stringify(obj);
}
$done({body});
