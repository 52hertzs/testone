<template>
  <div>
    我们是TI{{ value }}冠军
    <el-button @click="playDota2(1)">加</el-button>
    <el-button @click="playDota2(-1)">减</el-button>
  </div>
</template>
    <script>
export default {
  name: "candy",
  props: {
    value: {
      type: Number,
      default: 8,
    },
  },
  model: {
    // 自定义v-model的格式
    prop: "value", // 代表 v-model 绑定的prop名
    event: "input", // 代码 v-model 通知父组件更新属性的事件名
  },
  methods: {
    playDota2(step) {
      const newYear = this.value + step;
      this.$emit("input", newYear);
    },
  },
};
</script>