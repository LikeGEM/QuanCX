scriptings:
  - http_response:
      name: JavDB.js
      script_url: >-
        https://raw.githubusercontent.com/chxm1023/Advertising/main/JavDB.js
      match: >-
        ^https?:\/\/api\.((pxxgg|yijingluowangluo)\.xyz|ujvnmkx\.cn)\/api
      body_required: true
      timeout: 60
mitm:
  hostnames:
    - 'api.pxxgg.xyz'
    - 'api.ujvnmkx.cn'
    - 'api.yijingluowangluo.xyz'
