<template>
    <div class="wrapper">
      <ul class="content"></ul>
      <button class="add" id="add" @click="add">添加子元素</button>
    </div>
  </template>
   
  <script>
  export default {
    name:'mytest',
    data() {
      return {};
    },
    methods: {
      add() {
        let ul = document.getElementsByClassName("content")[0];  
        let li = document.createElement("li");
        li.innerHTML = "我是添加的元素";
        ul.appendChild(li);     
      }
    },
    
    beforeCreate(){
        console.log('------------beforeCreate')   
    },
    created(){
        console.log('------------created')   
    },
    beforeMount(){
        console.log('------------beforeMount')   
    },
    mounted(){
        console.log('------------mounted')   
    },
    beforeUpdate(){
        console.log('------------beforeUpdate')
    },
    updated(){
        console.log('------------updated')
    },
    beforeDestroy(){
        console.log('------------beforeDestroy')
    },
    destroyed(){
        console.log('------------estroyed')
    },
    activated() {
      console.log('------------activated')  
    },
    deactivated() {
      console.log('------------deactivated')  
    },

  };
  </script>
  <style >
  </style>