# hello

> hello-ithome

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## meta 設定
全域: 整個網站，寫在全域設定檔 nuxt.config.js
單頁: 套用單頁，寫在頁面元件 pages/*.vue 的 head 設定
## loading

KEY	型別	預設值	描述
color	String	'black'	正常進度條顏色
failedColor	String	'red'	錯誤時的進度條顏色
height	String	'2px'	進度條粗細
throttle	Number	200	呈現效果前的緩衝時間，單位毫秒(ms)
duration	Number	5000	呈現效果的最長時間，單位毫秒(ms)
rtl	Boolean	false	進度條方向，false 從左到右，true 反之
