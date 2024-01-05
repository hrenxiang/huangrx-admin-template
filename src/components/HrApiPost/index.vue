<template>
  <div class="api-post-container">
    <div class="api-post-one">
      <el-input
        placeholder="请输入内容"
        type="text"
        v-model="url"
        class="api-input-with-select"
      >
        <template #prepend>
          <el-select
            v-model="requestType"
            placeholder="请选择"
            class="api-post-one__select"
          >
            <el-option
              v-for="method in methods"
              :key="method.value"
              :label="method.label"
              :value="method.value"
            />
          </el-select>
        </template>
      </el-input>
      <el-button
        class="api-post-one__button"
        type="primary"
        @click="sendRequest"
        >发送
      </el-button>
    </div>

    <div class="api-post-two">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">Params</el-menu-item>
        <el-menu-item index="2">Body</el-menu-item>
        <el-menu-item index="3">Cookie</el-menu-item>
        <el-menu-item index="4">Header</el-menu-item>
        <el-menu-item index="5">Auth</el-menu-item>
      </el-menu>
    </div>

    <div class="api-post-three">
      <div v-if="activeIndex === '1'">
        <el-descriptions title="请求参数" />
        <el-table :data="paramsData" stripe style="width: 100%">
          <el-table-column v-for="col in ColumnList" :key="col.prop">
            <template #header>
              <p>{{ col.label }}</p>
            </template>

            <template #default="{ row }">
              <el-input type="text" v-model="row[col.prop]" />
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <el-button type="primary" @click="addParamsItem">添加</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div v-if="activeIndex === '2'">Body Panel</div>
      <div v-if="activeIndex === '3'" />
      <div v-if="activeIndex === '4'" />
      <div v-if="activeIndex === '5'">
        <el-descriptions>
          <el-descriptions-item label="类型">
            <el-select v-model="value" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>

    <div class="api-post-four">
      <el-descriptions title="响应示例" />
      <json-viewer :value="response" :expand-depth="1" copyable boxed sort />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { apiPostHttp } from "@/components/HrApiPost/request";
import { RequestMethods } from "@/utils/http/types";
import { ColumnList, requestMethods } from "@/components/HrApiPost/type";

// Part1 对应方法
const methods = ref();
// Part2 激活选项
const activeIndex = ref<string>("1");
// Part3 Params
const paramsData = ref<any>([
  {
    name: null,
    type: null,
    value: null,
    desc: null
  }
]);

onMounted(() => {
  // 这里放置组件挂载后需要执行的逻辑
  methods.value = requestMethods();
});

function addParamsItem() {
  paramsData.value.push({
    name: null,
    type: null,
    value: null,
    desc: null
  });
  console.log(paramsData.value);
}

const sendRequest = async () => {
  try {
    response.value = null;
    error.value = null;

    apiPostHttp.request(requestType.value, url.value).then(res => {
      if (res) {
        response.value = res;
      }
    });
  } catch (err) {
    error.value = err.message;
  }
};

const options = [
  {
    value: "Option2",
    label: "No Auth"
  },
  {
    value: "Option3",
    label: "Api Key"
  },
  {
    value: "Option4",
    label: "Bearer Token"
  },
  {
    value: "Option5",
    label: "Basic Auth"
  }
];
const value = ref(options[0].value);

const url = ref<string>("");
const requestType = ref<RequestMethods>("get");
const response = ref({});
const error = ref(null);

const handleSelect = key => {
  activeIndex.value = key;
};
</script>

<style lang="scss" scoped>
$api-one-min-height: 40px;

.api-post-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  min-height: calc(100vh - 175px);
  padding: 20px;
  font-family: PingFang-Regular, sans-serif;
  background-color: #fff;
  border-radius: 10px;
}

.api-post-one {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
}

.api-input-with-select {
  min-height: $api-one-min-height;
}

.api-post-one__select {
  min-height: $api-one-min-height;
  border-radius: 6px;
}

::v-deep(.api-post-one__select) .el-input--suffix {
  max-width: 108px;
  min-height: $api-one-min-height;
}

.api-post-one__button {
  max-width: 72px;
  min-height: $api-one-min-height;
  padding: 4px 15px;
  border-radius: 6px;
}

::v-deep(.api-post-two) .el-menu-item {
  max-height: $api-one-min-height;
  font-family: PingFang-Medium, sans-serif;
}

.api-post-three {
  min-height: 10vh;
}

.api-post-four__response {
  position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.api-post-four__json pre {
  padding: 10px;
  overflow-x: auto;
  font-family: PingFang-Regular, sans-serif;
  font-size: 14px;
  font-weight: 400;
  white-space: pre-wrap;
  border-left: 2px solid #44d944;
}

::v-deep(.api-post-four) .jv-code {
  min-height: 20vh !important;
}
</style>
