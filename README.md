# 範例
[todos](./todos) 
利用<todoinput/>,<todoitem/> componets組件匯入寫法

[動態比對](./products/18) 
取得網址列的parms 撈出相對資料

> $route.params 
```
    url:'/products/18'

    path: '/products/:id',
    this.$route.params.id
```

> $route.query 
```
    url:'/products?id=18'
    path:'/products',
    this.$route.query.id
```

[路由route巢狀結構](./About) 
設定子層網址./About/Me,./About/You


[具名路由設定](./Info)
 
