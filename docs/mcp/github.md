---
title: GitHub MCP
description: GitHub API 集成，提供仓库管理、PR、Issue、代码搜索等能力
---

# GitHub MCP

## 概述

> **类型**：HTTP 远程服务器（`https://api.githubcopilot.com/mcp/`），非本地 stdio 进程。

GitHub MCP 通过 `api.githubcopilot.com/mcp/` 为 Codex 提供 **GitHub API 集成**能力，使其能够：

- 管理仓库（创建、查看、分支）
- 操作 Pull Request（创建、审查、合并）
- 管理 Issue（创建、评论、分配）
- 搜索代码和仓库
- 查看提交历史和文件内容

## 提供的工具

GitHub MCP 通过 `mcp__github_*` 命名空间提供以下工具类别：

### 仓库操作

| 工具名称 | 说明 |
|---------|------|
| `mcp__github_create_repository` | 创建新仓库 |
| `mcp__github_fork_repository` | Fork 仓库 |
| `mcp__github_get_file_contents` | 获取文件/目录内容 |
| `mcp__github_list_branches` | 列出分支 |
| `mcp__github_list_commits` | 列出提交 |
| `mcp__github_list_tags` | 列出标签 |
| `mcp__github_list_releases` | 列出 Release |
| `mcp__github_get_latest_release` | 获取最新 Release |
| `mcp__github_search_repositories` | 搜索仓库 |

### Pull Request 操作

| 工具名称 | 说明 |
|---------|------|
| `mcp__github_create_pull_request` | 创建 PR |
| `mcp__github_list_pull_requests` | 列出 PR |
| `mcp__github_get_pull_request` | 获取 PR 详情 |
| `mcp__github_update_pull_request` | 更新 PR |
| `mcp__github_merge_pull_request` | 合并 PR |
| `mcp__github_request_copilot_review` | 请求 Copilot 审查 |

### Issue 操作

| 工具名称 | 说明 |
|---------|------|
| `mcp__github_list_issues` | 列出 Issue |
| `mcp__github_issue_read` | 读取 Issue |
| `mcp__github_issue_write` | 创建/更新 Issue |
| `mcp__github_add_issue_comment` | 添加 Issue 评论 |
| `mcp__github_sub_issue_write` | 管理子 Issue |
| `mcp__github_search_issues` | 搜索 Issue/PR |

### 搜索功能

| 工具名称 | 说明 |
|---------|------|
| `mcp__github_search_code` | 代码搜索 |
| `mcp__github_search_commits` | 提交搜索 |
| `mcp__github_search_issues` | Issue/PR 搜索 |
| `mcp__github_search_repositories` | 仓库搜索 |
| `mcp__github_search_users` | 用户搜索 |

## 认证配置

### 环境变量

| 变量名 | 说明 |
|--------|------|
| `GITHUB_PAT_TOKEN` | GitHub Personal Access Token |

### Token 权限要求

创建 GitHub PAT 时需勾选以下权限：

- **repo** — 完整仓库访问权限
- **read:org** — 读取组织信息
- **workflow** — GitHub Actions 权限（如需操作 CI）

### config.toml 配置

```toml
[mcp_servers.github]
url = "https://api.githubcopilot.com/mcp/"
startup_timeout_sec = 60
bearer_token_env_var = "GITHUB_PAT_TOKEN"
```

> 注意：作为 HTTP 远程服务器，GitHub MCP 不需要本地 `npx` 进程。如果你的环境中 `api.githubcopilot.com` 不可达（企业网络），可改用 `@modelcontextprotocol/server-github` 本地 stdio 服务器，但需手动同步 Oauth 认证。

## 使用示例

### 搜索代码

```
在 GitHub 上搜索使用 WithContext 的 Go 代码
```

```json
{
  "query": "WithContext language:go org:github"
}
```

### 创建 Issue

```
在 owner/repo 仓库创建一个 bug 报告：登录按钮无响应
```

```json
{
  "method": "create",
  "owner": "owner",
  "repo": "repo",
  "title": "登录按钮无响应",
  "body": "## 问题描述\n\n点击登录按钮后没有任何反应。\n\n## 复现步骤\n1. 打开登录页面\n2. 点击登录按钮\n3. 无响应",
  "labels": ["bug"]
}
```

### 创建 Pull Request

```
将 feature-branch 合并到 main，标题为"添加用户认证功能"
```

```json
{
  "owner": "owner",
  "repo": "repo",
  "title": "添加用户认证功能",
  "head": "feature-branch",
  "base": "main",
  "body": "## 变更内容\n- 添加 JWT 认证\n- 添加登录/注册 API\n- 添加中间件",
  "draft": false
}
```

### 列出未合并 PR

```
列出 owner/repo 中所有打开的 PR
```

```json
{
  "owner": "owner",
  "repo": "repo",
  "state": "open",
  "sort": "created",
  "direction": "desc"
}
```

### 获取文件内容

```
获取 owner/repo 仓库 main 分支的 README.md 内容
```

```json
{
  "owner": "owner",
  "repo": "repo",
  "path": "README.md",
  "ref": "refs/heads/main"
}
```

## 审批建议

| 操作类型 | 建议模式 | 原因 |
|---------|---------|------|
| `search_*`, `list_*`, `get_*` | 自动审批 | 只读操作 |
| `create_*` | 手动审批 | 创建新资源 |
| `update_*`, `merge_*` | 手动审批 | 修改已有资源 |
| `add_comment`, `add_review` | 手动审批 | 发送消息 |
| `run_secret_scanning` | 手动审批 | 安全扫描 |

```toml
# 为 GitHub MCP 的只读工具启用自动审批
[mcp_servers.github.tools.get_file_contents]
approval_mode = "approve"

[mcp_servers.github.tools.list_branches]
approval_mode = "approve"

[mcp_servers.github.tools.list_commits]
approval_mode = "approve"

[mcp_servers.github.tools.list_issues]
approval_mode = "approve"

[mcp_servers.github.tools.list_pull_requests]
approval_mode = "approve"

[mcp_servers.github.tools.list_releases]
approval_mode = "approve"

[mcp_servers.github.tools.list_tags]
approval_mode = "approve"

[mcp_servers.github.tools.get_commit]
approval_mode = "approve"

[mcp_servers.github.tools.get_label]
approval_mode = "approve"

[mcp_servers.github.tools.get_latest_release]
approval_mode = "approve"

[mcp_servers.github.tools.get_me]
approval_mode = "approve"

[mcp_servers.github.tools.get_release_by_tag]
approval_mode = "approve"

[mcp_servers.github.tools.get_tag]
approval_mode = "approve"

[mcp_servers.github.tools.get_team_members]
approval_mode = "approve"

[mcp_servers.github.tools.get_teams]
approval_mode = "approve"

[mcp_servers.github.tools.issue_read]
approval_mode = "approve"

[mcp_servers.github.tools.list_issue_fields]
approval_mode = "approve"

[mcp_servers.github.tools.list_issue_types]
approval_mode = "approve"

[mcp_servers.github.tools.list_repository_collaborators]
approval_mode = "approve"

[mcp_servers.github.tools.pull_request_read]
approval_mode = "approve"

[mcp_servers.github.tools.search_code]
approval_mode = "approve"

[mcp_servers.github.tools.search_commits]
approval_mode = "approve"

[mcp_servers.github.tools.search_issues]
approval_mode = "approve"

[mcp_servers.github.tools.search_pull_requests]
approval_mode = "approve"

[mcp_servers.github.tools.search_repositories]
approval_mode = "approve"

[mcp_servers.github.tools.search_users]
approval_mode = "approve"
```

## 安全考虑

1. **PAT Token 保护**：不要将 Token 提交到代码仓库
2. **最小权限原则**：只授予必要的权限范围
3. **仓库范围**：PAT 可限定为特定仓库
4. **操作审计**：定期检查 GitHub 访问日志

## 故障排除

| 问题 | 解决方案 |
|------|---------|
| 401 认证失败 | 检查 `GITHUB_PAT_TOKEN` 是否过期或权限不足 |
| 403 速率限制 | GitHub API 有速率限制，等待重置或使用认证请求 |
| 404 资源不存在 | 确认仓库名、分支名、文件路径是否正确 |
