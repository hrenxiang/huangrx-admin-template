<template>
  <div class="api-tester">
    <div style="margin-top: 15px">
      <el-input
        placeholder="请输入内容"
        type="text"
        v-model="url"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="requestType" placeholder="请选择">
            <el-option label="GET" value="get" />
            <el-option label="POST" value="post" />
            <el-option label="DELETE" value="delete" />
          </el-select>
        </template>
      </el-input>
    </div>

    <div class="request-inputs">
      <button @click="sendRequest">发送</button>
    </div>

    <div class="response-display">
      <div v-if="response" class="response-json">
        <pre>{{ response }}</pre>
      </div>
      <div v-if="error" class="error-message">
        <pre>{{ error }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { apiPostHttp } from "@/components/HrApiPost/request";
import { RequestMethods } from "@/utils/http/types";

const url = ref<string>("");
const requestType = ref<RequestMethods>("get");
const response = ref(null);
const error = ref(null);

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
</script>

<style lang="scss" scoped>
.api-tester {
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.request-inputs {
  display: flex;
  margin-bottom: 20px;
}

.request-inputs select,
.request-inputs input,
.request-inputs button {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.request-inputs button {
  color: white;
  cursor: pointer;
  background-color: #28a745;
  border-color: #28a745;
}

.request-inputs button:hover {
  background-color: #218838;
}

.response-display {
  position: relative;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
}

.response-json pre,
.error-message pre {
  padding: 10px;
  overflow-x: auto;
  white-space: pre-wrap;
  background-color: #fff;
  border: 1px solid #eee;
}

.response-json {
  background-color: #e2e2e2;
  border-left: 5px solid #4caf50; /* Success color */
}

.error-message {
  background-color: #e2e2e2;
  border-left: 5px solid #f44336; /* Error color */
}

.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
