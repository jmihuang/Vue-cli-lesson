<script>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';
export default{
  data(){
    return {
      todos:[]
    }
  },
  components:{
    TodoInput,
    TodoItem,
  },
  methods:{
    addItem(value){
      this.todos.push(value);
    },
    remove(idx){
      this.todos.splice(idx,1);
    }
  }
}
  
</script>

<template>
<div>
{{todos}}
  <TodoInput @submit="addItem"/>
  <ul>
    <TodoItem 
      v-for="(item,idx) in todos" 
      :data="item"
      :key="idx"
      @click.native="remove(idx)"
    ></TodoItem >
  </ul>
</div>
</template>

<style>
</style>