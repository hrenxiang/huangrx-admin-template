<script setup lang="ts">
import tree from "@/views/system/user/tree.vue";
import { ref } from "vue";

defineOptions({
  name: "User"
});

const treeRef = ref();

const treeData = ref([]);

treeData.value = [
  {
    id: 1,
    name: "一级 1",
    children: [
      {
        id: 4,
        name: "二级 1-1",
        children: [
          {
            id: 9,
            name: "三级 1-1-1"
          },
          {
            id: 10,
            name: "三级 1-1-2"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "一级 2",
    children: [
      {
        id: 5,
        name: "二级 2-1"
      },
      {
        id: 6,
        name: "二级 2-2"
      }
    ]
  },
  {
    id: 3,
    name: "一级 3",
    children: [
      {
        id: 7,
        name: "二级 3-1"
      },
      {
        id: 8,
        name: "二级 3-2"
      }
    ]
  }
];
</script>

<template>
  <div class="user-container">
    <tree ref="treeRef" class="min-w-[200px] mr-2" :treeData="treeData" />
  </div>
</template>

<style lang="scss" scoped>
.user-container {
  font-size: large;
  font-weight: 600;
}
</style>
