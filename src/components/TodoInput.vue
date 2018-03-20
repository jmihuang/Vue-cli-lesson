<template>
    <form @submit.prevent="add">
        <input v-model="text" type="text">
        <button>Submit</button>
    </form>
</template>
<script>
    export default{
        data(){
            return {
                text:''
            }
        },
        methods:{
            add(){
                this.$emit('submit',this.text);
                this.text='';
            }
        }

    }
</script>