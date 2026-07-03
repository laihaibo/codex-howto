---
title: GitHub 插件
description: GitHub PR 管理、Issue 管理、CI/CD 调试和代码发布插件
---

# GitHub 插件

GitHub 插件提供与 GitHub 平台的深度集成，帮助管理 Pull Request、Issue、CI/CD 检查以及代码发布流程。

## 功能概述

- 🔀 PR 创建、审查和合并
- 📋 Issue 创建和管理
- 🔧 CI/CD 检查和日志调试
- 🚀 代码发布到 GitHub
- 💬 审查评论处理

## 包含的技能

### 技能列表

| 技能名称 | 描述 |
|---------|------|
| `github` | 通用 GitHub 帮助，PR/Issue 摘要，仓库上下文 |
| `gh-fix-ci` | 调试和修复失败的 GitHub Actions 检查 |
| `gh-address-comments` | 处理可操作的 PR 审查反馈 |
| `yeet` | 将本地更改发布到 GitHub（提交、推送、开 PR） |

---

## GitHub 通用 (`github`)

提供通用的 GitHub 帮助，包括 PR/Issue 摘要和仓库上下文。

### 触发时机

- 用户请求通用 GitHub 帮助
- 需要 PR 或 Issue 摘要
- 需要仓库上下文来选择更具体的工作流

### 示例提示词

```
总结一下这个 PR 的变更
```

```
查看这个仓库最近的 Issues
```

```
帮我看看这个 PR 的状态
```

---

## 修复 CI (`gh-fix-ci`)

调试和修复失败的 GitHub Actions 检查。

### 触发时机

- 用户要求调试或修复失败的 GitHub PR 检查
- 使用 GitHub 应用获取 PR 元数据和补丁上下文
- 使用 `gh` 检查 Actions 日志

### 工作流程

1. 获取 PR 元数据和检查状态
2. 查看失败的 Actions 日志
3. 分析失败原因
4. 实施修复

### 示例提示词

```
修复这个 PR 上失败的 CI 检查
```

```
为什么 GitHub Actions 构建失败了？
```

```
查看这个 PR 的 Actions 日志并修复问题
```

---

## 处理审查评论 (`gh-address-comments`)

处理可操作的 GitHub PR 审查反馈。

### 触发时机

- 用户想要查看未解决的审查线程
- 处理请求的更改
- 处理内联审查评论

### 工作流程

1. 获取未解决的审查线程
2. 分析每个评论的上下文
3. 实施选定的修复
4. 标记已解决的线程

### 示例提示词

```
处理这个 PR 上的审查评论
```

```
查看未解决的审查反馈并实施修复
```

```
解决这个 PR 上的所有审查评论
```

---

## 发布代码 (`yeet`)

将本地更改发布到 GitHub，包括确认范围、提交、推送和开 PR。

### 触发时机

- 用户要求将更改推送到 GitHub
- 创建新的 PR
- 提交并推送分支

### 工作流程

1. 确认变更范围
2. 有目的地提交
3. 推送分支
4. 通过 GitHub 应用打开草稿 PR

### 示例提示词

```
把这些更改发布到 GitHub
```

```
提交并推送我的更改，然后开一个 PR
```

```
Yeet 这些更改到 origin
```

---

## MCP 工具

GitHub 插件提供以下 MCP 工具：

### PR 管理

| 工具名称 | 功能 |
|---------|------|
| `mcp__github_create_pull_request` | 创建新的 Pull Request |
| `mcp__github_update_pull_request` | 更新现有 PR |
| `mcp__github_merge_pull_request` | 合并 PR |
| `mcp__github_pull_request_read` | 读取 PR 详情、差异、评论等 |
| `mcp__github_list_pull_requests` | 列出 PR |
| `mcp__github_request_copilot_review` | 请求 Copilot 代码审查 |
| `mcp__github_update_pull_request_branch` | 用基础分支最新更改更新 PR 分支 |

### Issue 管理

| 工具名称 | 功能 |
|---------|------|
| `mcp__github_issue_read` | 读取 Issue 详情和评论 |
| `mcp__github_issue_write` | 创建或更新 Issue |
| `mcp__github_list_issues` | 列出 Issue |
| `mcp__github_add_issue_comment` | 添加 Issue 评论 |

### 审查评论

| 工具名称 | 功能 |
|---------|------|
| `mcp__github_pull_request_review_write` | 创建/提交/删除 PR 审查 |
| `mcp__github_add_comment_to_pending_review` | 添加审查评论 |
| `mcp__github_add_reply_to_pull_request_comment` | 回复 PR 评论 |

### 仓库操作

| 工具名称 | 功能 |
|---------|------|
| `mcp__github_get_file_contents` | 获取文件内容 |
| `mcp__github_create_or_update_file` | 创建或更新文件 |
| `mcp__github_delete_file` | 删除文件 |
| `mcp__github_push_files` | 推送多个文件 |
| `mcp__github_create_branch` | 创建分支 |
| `mcp__github_list_branches` | 列出分支 |
| `mcp__github_list_commits` | 列出提交 |
| `mcp__github_get_commit` | 获取提交详情 |
| `mcp__github_run_secret_scanning` | 扫描文件中的密钥 |
| `mcp__github_search_code` | 搜索代码 |
| `mcp__github_search_commits` | 搜索提交 |
| `mcp__github_search_issues` | 搜索 Issue |
| `mcp__github_search_pull_requests` | 搜索 PR |
| `mcp__github_search_repositories` | 搜索仓库 |
| `mcp__github_search_users` | 搜索用户 |
