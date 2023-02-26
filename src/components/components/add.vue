<!--  -->
<template>
  <div class="">
    <!-- <h3>最新count值为：{{ count }}</h3> -->
    <h3>{{shownum}}</h3>
    <button @click="add">{{ `+${step}` }}</button>
    <button @click="addAsync1">{{ `+Async${step}` }}</button>
  </div>
</template>

<script>
import { mapState,mapActions ,mapGetters} from "vuex";

export default {
  name: "",
  data() {
    return {
      step: 3,
    };
  },
  computed: {
    ...mapState(["count"]),
   ... mapGetters(['shownum'])
  },
  methods: {
    ...mapActions(['addAsync']),
    add() {
      this.$store.commit("add", this.step);
    },
    addAsync1() {
      // this.$store.dispatch("addAsync", this.step);
      this.addAsync(this.step)
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>