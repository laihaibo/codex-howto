---
title: MCP 概述
description: Model Context Protocol (MCP) 服务集成指南，了解 Codex 如何使用 MCP 服务器扩展能力
---

# MCP 系统概述

## 什么是 MCP？

**Model Context Protocol (MCP)** 是一种开放协议，允许 AI 助手（如 Codex）通过标准化接口连接外部工具和数据源。MCP 服务器可以为 AI 提供额外的能力，例如网络搜索、文件系统访问、数据库查询、API 调用等。

## 为什么 MCP 重要？

MCP 解决了 AI 助手的核心限制：

- **知识时效性**：通过联网搜索获取最新信息
- **外部交互**：操作文件、调用 API、访问数据库
- **持久记忆**：跨会话保存和检索知识
- **结构化思维**：通过专门工具进行复杂问题分解

## Codex 如何使用 MCP 服务器

Codex 通过配置文件中的 `[mcp_servers]` 段落注册 MCP 服务器。每个服务器是一个独立进程，Codex 通过 JSON-RPC 协议与其通信。当用户提出请求时，Codex 可以自动调用合适的 MCP 工具来完成任务。

## 配置格式

在 Codex 配置文件（`config.toml`）中添加 MCP 服务器：

```toml
[mcp_servers.server-name]
command = "npx"
args = ["-y", "mcp-server-package"]
env = { "API_KEY" = "your-key-here" }

[mcp_servers.another-server]
command = "uvx"
args = ["mcp-server-package", "--flag"]
env = {
  "ENV_VAR" = "value",
}
```

### 配置字段说明

| 字段 | 说明 |
|------|------|
| `command` | 启动服务器的命令（如 `npx`、`uvx`、`node`） |
| `args` | 传递给命令的参数数组 |
| `env` | 环境变量键值对（可选） |

## 审批模式

Codex 支持两种 MCP 工具调用审批模式：

### 自动审批（auto-approve）

工具调用自动执行，无需用户确认。适用于可信操作（如只读查询）。

```toml
[approval]
auto_approve = ["mcp__server__tool_name"]
```

### 手动审批（manual）

每次工具调用前需要用户确认。适用于敏感操作（如写入文件、发送请求）。

```toml
[approval]
require_approval = ["mcp__server__tool_name"]
```

### 安全建议

- 只读工具（搜索、查询）可设为自动审批
- 写入/修改工具（文件写入、API 调用）建议手动审批
- 涉及外部网络请求的工具应谨慎配置

## 已安装的 MCP 服务器

| 服务器名称 | 说明 | 关键工具 |
|-----------|------|---------|
| **MiniMax** | 网页搜索与图片理解 | `web_search`, `understand_image` |
| **Context7** | 编程库文档查询 | `resolve-library-id`, `query-docs` |
| **Sequential Thinking** | 结构化问题分解 | `sequentialthinking` |
| **Memory** | 持久知识图谱 | `create_entities`, `search_nodes`, `read_graph` |
| **Filesystem** | 本地文件系统访问 | `read_file`, `write_file`, `search_files` |
| **Time** | 时区转换 | `get_current_time`, `convert_time` |
| **Fetch** | 网页内容抓取 | `fetch` |
| **GitHub** | GitHub API 集成 | `mcp__github_*` 系列工具 |

> 点击上方各服务器名称查看详细文档。
