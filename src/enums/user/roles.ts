export enum UserAccountStatusEnum {
  forbidden = 1, // 禁用状态/黑名单
  registered = 2, // 已注册状态
  unaudited = 3, // 未审核状态
  failed = 4, // 审核未通过状态
  default = 5, // 正常状态
}
