---
title: MCP 系统
description: Model Context Protocol (MCP) 集成指南，包括服务器配置、工具审批和已安装服务器列表
---

# MCP 系统

MCP（Model Context Protocol）是 Codex 的工具扩展协议，允许 AI 模型通过标准化接口与外部工具和服务交互。

## 什么是 MCP

MCP 是一种开放协议，定义了 AI 模型与外部工具之间的通信标准。通过 MCP，Codex 可以：

- 搜索互联网信息
- 操作文件系统
- 查询文档数据库
- 管理 GitHub 仓库
- 执行自定义工具

::: tip 核心概念
MCP 类似于 AI 应用的"USB 接口"——它提供了一种标准化的方式让 AI 模型连接和使用各种外部工具。
:::

## MCP 服务器类型

### stdio 类型

通过本地命令启动，使用标准输入/输出通信：

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp@latest"]
```

适用场景：
- 本地文件操作
- 本地工具集成
- 需要访问本地资源的工具

### HTTP 类型

通过 HTTP 端点连接远程服务器：

```toml
[mcp_servers.github]
url = "https://api.githubcopilot.com/mcp/"
startup_timeout_sec = 60
bearer_token_env_var = "GITHUB_PAT_TOKEN"
```

适用场景：
- 远程 API 服务
- 云端工具集成
- 需要网络访问的工具

## 配置结构

### 基本配置

```toml
[mcp_servers.<server_name>]
# stdio 类型
command = "可执行文件"
args = ["参数1", "参数2"]
startup_timeout_sec = 60

# 或 HTTP 类型
url = "https://api.example.com/mcp/"
bearer_token_env_var = "ENV_VAR_NAME"
```

### 环境变量

```toml
[mcp_servers.<server_name>.env]
API_KEY = "your-api-key"
API_HOST = "https://api.example.com"
```

### 工具审批

```toml
[mcp_servers.<server_name>.tools.<tool_name>]
approval_mode = "approve"   # 自动批准
# approval_mode = "deny"   # 自动拒绝
# 不设置 = 每次询问
```

## 已安装的 MCP 服务器

### 完整列表

| 服务器名称 | 类型 | 命令/URL | 说明 |
|-----------|------|---------|------|
| `MiniMax` | stdio | `uvx minimax-coding-plan-mcp` | MiniMax 编码计划 |
| `context7` | stdio | `npx @upstash/context7-mcp` | Context7 文档查询 |
| `sequential-thinking` | stdio | `npx @modelcontextprotocol/server-sequential-thinking` | 顺序思考工具 |
| `memory` | stdio | `npx @modelcontextprotocol/server-memory` | 记忆图谱管理 |
| `filesystem` | stdio | `npx @modelcontextprotocol/server-filesystem` | 文件系统操作 |
| `time` | stdio | `uvx mcp-server-time` | 时区转换 |
| `fetch` | stdio | `uvx mcp-server-fetch` | 网页内容获取 |
| `github` | HTTP | `https://api.githubcopilot.com/mcp/` | GitHub API 集成 |

### 各服务器工具详情

#### MiniMax

| 工具 | 审批模式 | 说明 |
|------|---------|------|
| `web_search` | approve | 网络搜索 |
| `understand_image` | 默认 | 图像理解 |
| `web_search` (MiniMax) | 默认 | MiniMax 搜索 |

#### filesystem

| 工具 | 审批模式 | 说明 |
|------|---------|------|
| `read_text_file` | 默认 | 读取文件 |
| `write_file` | approve | 写入文件 |
| `edit_file` | approve | 编辑文件 |
| `create_directory` | approve | 创建目录 |
| `list_directory` | 默认 | 列出目录 |
| `search_files` | 默认 | 搜索文件 |
| `get_file_info` | 默认 | 获取文件信息 |
| `move_file` | 默认 | 移动文件 |
| `read_multiple_files` | 默认 | 读取多个文件 |
| `read_media_file` | 默认 | 读取媒体文件 |
| `list_allowed_directories` | 默认 | 列出允许的目录 |
| `list_directory_with_sizes` | 默认 | 列出目录及大小 |
| `directory_tree` | 默认 | 目录树视图 |

#### memory

| 工具 | 说明 |
|------|------|
| `create_entities` | 创建知识图谱实体 |
| `delete_entities` | 删除实体 |
| `create_relations` | 创建实体关系 |
| `delete_relations` | 删除关系 |
| `add_observations` | 添加观察 |
| `delete_observations` | 删除观察 |
| `read_graph` | 读取完整图谱 |
| `search_nodes` | 搜索节点 |
| `open_nodes` | 打开特定节点 |

#### github

| 工具 | 说明 |
|------|------|
| `create_pull_request` | 创建 PR |
| `get_file_contents` | 获取文件内容 |
| `list_commits` | 列出提交 |
| `search_code` | 搜索代码 |
| `merge_pull_request` | 合并 PR |
| `create_branch` | 创建分支 |
| 以及更多... | |

#### context7

| 工具 | 说明 |
|------|------|
| `resolve-library-id` | 解析库 ID |
| `query-docs` | 查询文档 |

#### time

| 工具 | 说明 |
|------|------|
| `get_current_time` | 获取当前时间 |
| `convert_time` | 时区转换 |

#### fetch

| 工具 | 说明 |
|------|------|
| `fetch` | 获取网页内容 |

#### sequential-thinking

| 工具 | 说明 |
|------|------|
| `sequentialthinking` | 顺序思考分析 |

## 工具审批模式

### 审批级别

| 模式 | 说明 | 适用场景 |
|------|------|---------|
| `approve` | 自动批准，无需确认 | 低风险操作（读取、搜索） |
| `deny` | 自动拒绝执行 | 危险操作（删除、修改生产数据） |
| 未设置 | 每次执行前询问用户 | 中等风险操作 |

### 配置示例

```toml
# 自动批准网络搜索
[mcp_servers.MiniMax.tools.web_search]
approval_mode = "approve"

# 自动批准文件写入
[mcp_servers.filesystem.tools.write_file]
approval_mode = "approve"

[mcp_servers.filesystem.tools.edit_file]
approval_mode = "approve"

[mcp_servers.filesystem.tools.create_directory]
approval_mode = "approve"
```

### 审批建议

| 操作类型 | 建议模式 | 原因 |
|---------|---------|------|
| 文件读取 | approve | 无副作用 |
| 文件写入 | approve/deny | 根据项目信任级别 |
| 文件删除 | 不设置（询问） | 不可逆操作 |
| 网络搜索 | approve | 无副作用 |
| API 调用 | 不设置（询问） | 可能有副作用 |
| 命令执行 | 不设置（询问） | 风险较高 |

## 添加新的 MCP 服务器

### 通过配置文件

在 `~/.codex/config.toml` 中添加：

```toml
[mcp_servers.my-custom-server]
command = "npx"
args = ["-y", "my-mcp-server"]
startup_timeout_sec = 30

[mcp_servers.my-custom-server.env]
MY_API_KEY = "your-key"
```

### 通过 CLI

```bash
codex mcp add my-custom-server --command npx --args "-y" "my-mcp-server"
```

### 验证配置

```bash
# 列出所有 MCP 服务器
codex mcp list

# 测试连接
codex mcp test <server-name>
```

## 故障排除

### 服务器无法启动

1. 检查命令是否正确安装：
   ```bash
   which npx
   which uvx
   ```

2. 检查超时设置：
   ```toml
   startup_timeout_sec = 120  # 增加超时时间
   ```

3. 检查环境变量：
   ```bash
   echo $GITHUB_PAT_TOKEN
   ```

### 工具不可用

1. 确认服务器已启动
2. 检查工具名称拼写
3. 查看日志：`~/.codex/logs_2.sqlite`

### 权限被拒绝

1. 检查工具审批模式配置
2. 确认项目信任级别
3. 检查文件系统权限

## 下一步

- [配置详解](/guide/configuration) - 深入了解配置选项
- [工作模式](/guide/work-modes) - 了解权限和沙箱
- [插件系统](/guide/plugins-system) - 学习插件扩展
