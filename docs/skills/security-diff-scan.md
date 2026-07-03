---
title: security-diff-scan
description: PR、提交和分支差异的安全扫描
---

# security-diff-scan

安全差异扫描技能，对 Git 变更集进行安全审查。

## 触发条件

```
> 审查这个 PR 的安全问题
> 对这次提交运行安全扫描
> 检查当前工作树的安全变更
> 审查 feature 分支的改动
```

## 扫描类型

- **Pull Request**：审查 PR 引入的安全问题
- **Commit**：单次提交的安全检查
- **Branch Diff**：分支间的差异安全分析
- **Working Tree Patch**：未提交改动的安全审查

## 使用方式

Codex 可以识别最近打开的代码变更，自动应用安全扫描上下文。

对于 PR 扫描：

```
> 审查 PR #123 的安全变更
```

对于当前工作树：

```
> 检查我未提交的改动是否有安全问题
```
