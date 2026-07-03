---
title: GitHub 使用指南
description: GitHub PR/Issue 仓库管理指南，通过 GitHub App 与 命令协作
---

# GitHub

通过 GitHub App 和 CLI 工具进行仓库和 PR 管理。

## 触发条件

```
> 总结 PR #123
> 列出本周我创建的所有 Issues
> 获取这个仓库的最近提交
> 查看 CI 流水线状态
```

## 功能概览

| 功能 | 说明 |
|------|------|
| PR 管理 | 创建、查看、更新、合并 PR |
| Issue 管理 | 创建、更新、关闭、分类 Issue |
| 代码审查 | 添加评论、审批、请求修改 |
| 搜索 | 代码、Issue、PR、仓库搜索 |
| Check Runs | 查看和重试 CI 检查 |

## 工具

此技能通过 `mcp__github_*` 工具提供功能，包括：
- `pull_request_read` / `pull_request_write`
- `issue_read` / `issue_write`
- `search_code` / `search_issues` / `search_pull_requests`
- `create_pull_request` / `merge_pull_request`
- `list_commits` / `get_commit`

## 最佳实践

- 总结 PR 时包含变更概述和关键 diff
- 创建 Issue 时尽量包含重现步骤和期望行为
- 审查评论保持建设性和具体
