/***********************************

#醒图

[rewrite_local]

^http[s]?:\/\/commerccd-api.faceu.mobi\/commerce\/v1\/subscription\/user_info.*$ url script-request-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/Xuid.js

^http[s]?:\/\/.+((retouchpics)|(faceu)|(ulikecam)).(com|cn|mobi)\/.+(user|\/v1\/homepage\/pro|ever_photo/space_info).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/Xtu.js

[mitm] 

hostname= *.ulikecam.*, *faceu*

***********************************/
