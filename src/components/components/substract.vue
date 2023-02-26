<!--  -->
<template>
  <div class="">
    <h3>{{$store.getters.shownum}}</h3>
    <button @click="sub">{{ `-${step}` }}</button>
    <button @click="subAsync">{{ `methods异步操作-${step}` }}</button>
  </div>
</template>
    
    <script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      step: 3,
    };
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["subN"]),
    sub() {
      this.subN(this.step);
    },
    subAsync(){
      setTimeout(()=>{
        this.subN(4)
      },3000)
    }
  },
  created() {},
  mounted() {},
};
</script>
    <style scoped>
/* @import url(); 引入css类 */
</style>