/***********************************

#醒图

[rewrite_local]

^http[s]?:\/\/commerccd-api.faceu.mobi\/commerce\/v1\/subscription\/user_info.*$ url script-request-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/Xuid.js

[mitm] 

hostname= *.ulikecam.*, *faceu*

***********************************/
