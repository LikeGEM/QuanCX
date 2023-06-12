# TikTok去水印

[rewrite_local]
https?:\/\/.*\.tiktokv\.com\/aweme\/v\d\/(feed|mix\/aweme|aweme\/post|(multi\/)?aweme\/detail|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list|aweme\/favorite) url script-response-body https://raw.githubusercontent.com/LikeGEM/QuanCX/main/TikToksy.js

[mitm]
hostname = *.tiktokv.com,*.byteoversea.com, *.tik-tokapi.com
