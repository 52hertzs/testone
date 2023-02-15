<!--  -->
<template>
  <ChildComponent v-model="test"></ChildComponent>
</template>

<script>

// import ChildComponent from "@/components/components/candy.vue";
// import {defineAsyncComponent} from "vue";
// const ChildComponent=defineAsyncComponent(() => import('@/components/components/candy.vue'));
export default {
  name: "myrender",
  components: {
    ChildComponent:() => import('@/components/components/candy.vue')
  },
  data() {
    return {
      test: 1,
    };
  },
  watch: {
    test(n,o) {
        console.log(n)
    },
  },
  created() {},
  mounted() {},
};
</script>
