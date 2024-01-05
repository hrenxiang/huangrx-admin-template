export enum RequestMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  OPTIONS = "options",
  HEAD = "head",
  PATCH = "patch"
}

export function requestMethods() {
  const methods = Object.keys(RequestMethod).map(key => ({
    label: key,
    value: RequestMethod[key]
  }));
  // 过滤掉枚举中的数字值
  return methods.filter(method => typeof method.value !== "number");
}

export const ColumnList = [
  { prop: "name", label: "参数名" },
  { prop: "type", label: "类型" },
  { prop: "value", label: "示例值" },
  { prop: "desc", label: "说明" }
];
