<template>
    <div>
      <h2>課程名稱：{{name}}</h2>
      <div class="image" :style="{ backgroundImage:`url(${imgurl})` }"/>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        id:(this.$route.params.id-1),
        course:['Basic Course','Advanced Course','Extreme Course'],
        img:[
          {url:require('../assets/lesson1.jpg')},
          {url:require('../assets/lesson2.jpg')},
          {url:require('../assets/lesson3.jpg')}
        ]
      }
    },
     computed:{            
            name(){
                return this.course[this.id];
            },
            imgurl(){
              return this.img[this.id].url;
            }
        }
  }
</script>

<style scope>
  .image{
    width:100%;
    height:160px;
    background-size:cover;
  }
</style>