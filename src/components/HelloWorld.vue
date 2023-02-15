<template>
  <div class="wrapper">
    <ul class="content"></ul>
    <button class="add" id="add" @click="add">添加子元素</button>
  </div>
</template>
 
<script>
export default {
  name:'HelloWorld',
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
  }
};
</script>
<style >
</style>