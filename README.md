# 範例
[todos](./todos) 
利用<todoinput/>,<todoitem/> componets組件匯入寫法

[Products](./products) 
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
