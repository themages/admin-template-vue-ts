// https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
module.exports = {
  // 继承的规则
  extends: ["@commitlint/config-conventional"],
  // 定义规则类型
  rules: {
    // Type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能 feature
        "fix", // 修复 bug
        "docs", // 文档注释
        "style", // 代码格式(不影响代码运行的变动)
        "refactor", // 重构(既不增加新功能，也不是修复bug)
        "perf", // 性能优化
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // 回退
        "build", // 影响项目构建打包或依赖项修改
        "ci", // 持续集成相关文件修改
        "release", // 发布新版本
        "workflow", // 工作流相关文件修改
      ],
    ],
    // Subject 大小写不做校验
    "subject-case": [0],
  }
}
