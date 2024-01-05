<script setup lang="ts">
import HrApiPost from "@/components/HrApiPost/index.vue";

defineOptions({
  name: "Api"
});
</script>

<template>
  <div class="dept-container">
    <hr-api-post />
  </div>
</template>

<style lang="scss" scoped>
.dept-container {
  font-size: large;
  font-weight: 600;
}
</style>
