<!--  -->
<template>
  <div class="">
    <add></add>
    <substract></substract>
  </div>
</template>

<script>
import add from "@/components/components/add.vue";
import substract from "@/components/components/substract.vue";
export default {
  name: "",
  components: {
    add,
    substract,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated(){
    console.log('-----------activedtest01')
  },

};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>