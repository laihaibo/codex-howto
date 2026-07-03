---
title: gh-fix-ci
description: 调试和修复 GitHub Actions CI 检查失败
---

# gh-fix-ci

调试和修复 GitHub Actions CI 检查失败的技能。

## 触发条件

```
> 修复 PR 中的 CI 检查失败
> 为什么 GitHub Actions 报错了？
> 查看失败的工作流日志
```

## 调试流程

1. **识别失败检查**：通过 GitHub App 获取失败的 check run
2. **分析日志**：提取错误信息和堆栈跟踪
3. **定位问题**：在代码中找到失败原因
4. **实现修复**：修改代码或配置
5. **验证通过**：确认 CI 重新运行成功

## 使用示例

```bash
> PR #456 的测试工作流失败了，查看日志并修复
> 这个构建报错是因为 TypeScript 类型错误，请修复
```

## 常见 CI 问题

- TypeScript/ESLint 编译错误
- 测试用例失败
- 构建脚本错误
- 依赖安装失败
- 环境变量配置错误
