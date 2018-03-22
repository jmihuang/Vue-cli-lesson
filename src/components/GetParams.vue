<template>
    <div>
        <h1>GetParams</h1>
        <h2>{{id}}</h2>
    </div>
</template>
<script>
    const products = {
        18:'shoes',
        26:'T-Shirts',
        37:'Pants'
    }
    export default{
        props:['id']
    }
</script>