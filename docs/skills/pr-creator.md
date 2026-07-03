---
title: pr-creator
description: 创建 Pull Request，遵循仓库的模板和标准
---

# pr-creator

创建 Pull Request 的技能，确保符合仓库的模板和标准。

## 触发条件

```
> 创建一个 PR
> 基于这些变更创建 Pull Request
> 发布当前分支
```

## 工作流程

1. **检查变更**：审查当前分支的所有 commits
2. **读取模板**：查找并解析 PR 模板
3. **生成描述**：基于变更自动生成 PR 描述
4. **规范检查**：确保标题和内容遵循项目约定
5. **创建 PR**：通过 GitHub API 创建

## PR 模板支持

自动识别并使用仓库中的 PR 模板：
- `.github/pull_request_template.md`
- `.github/PULL_REQUEST_TEMPLATE/*.md`
