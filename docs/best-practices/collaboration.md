---
title: 协作工作流
description: 团队协作中的 Codex 使用模式
---

# 协作工作流

## Git 工作流

### 分支策略

```
main (stable)
├── feature/user-auth      # 新功能分支
├── fix/login-error        # Bug 修复分支
├── docs/api-reference     # 文档分支
└── refactor/data-layer    # 重构分支
```

### 提交规范

```
feat: 添加用户注册功能
fix: 修复登录超时问题
docs: 更新 API 文档
refactor: 重构数据访问层
test: 添加用户认证测试
chore: 更新依赖版本
```

## PR 管理

### 创建 PR

```
> 基于当前分支创建 PR，标题遵循 Conventional Commits
> 用 pr-creator 遵循仓库模板创建 PR
```

### 审查循环

```
> 用 code-reviewer 审查这个 PR
> 运行 coderabbit 审查
> 检查 gh-fix-ci 修复 CI 失败
```

### 处理审查反馈

```
> 处理 PR 上的 review 意见
> 用 gh-address-comments 逐个回应修改
```

## 代码审查模式

### 自查清单

提交 PR 前：

- [ ] 代码是否有明显 bug
- [ ] 测试是否充分
- [ ] 是否有无用 console.log
- [ ] 是否遵循项目代码风格
- [ ] 文档是否同步更新

### Codex 辅助审查

```
> 审查这个 PR 的代码变更
> 特别关注 SQL 注入风险
> 这个实现是否有性能问题？
```

## 知识共享

### 文档维护

```
> 更新 README 记录新的 API 端点
> 为这个复杂函数添加注释
> 生成接口变更日志
```

### 团队入职

```
> 总结项目架构和技术栈
> 这个项目的主要模块是什么？
```
