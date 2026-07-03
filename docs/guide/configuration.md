---
title: 配置详解
description: Codex 配置文件的完整参考，包括模型提供商、项目信任、MCP 服务器和插件配置
---

# 配置详解

Codex 使用 `~/.codex/config.toml` 作为主配置文件，采用 TOML 格式。本章将深入介绍所有配置选项，并结合实际配置示例进行说明。

## 配置文件位置

```
~/.codex/config.toml          # 主配置文件
~/.codex/auth.json            # 认证凭据
~/.codex/model-catalogs/      # 模型目录
```

## 顶层配置项

### 模型相关

```toml
# 指定使用的模型名称
model = "LongCat-2.0"

# 模型提供商的标识符
model_provider = "longcat"

# 推理努力程度：low / medium / high
model_reasoning_effort = "high"

# 禁用响应存储（保护隐私）
disable_response_storage = true

# 是否支持推理摘要
model_supports_reasoning_summaries = true

# 推理摘要模式：auto / none / detailed
model_reasoning_summary = "none"

# 模型上下文窗口大小（token 数）
model_context_window = 1048576
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `model` | string | 模型名称，需与提供商目录中的模型匹配 |
| `model_provider` | string | 模型提供商标识符，对应 `[model_providers.*]` 节点 |
| `model_reasoning_effort` | string | 推理深度，`high` 适合复杂任务 |
| `disable_response_storage` | bool | 为 `true` 时不存储对话响应到服务器 |
| `model_context_window` | int | 模型最大上下文 token 数 |

### 功能开关

```toml
# 禁用网络搜索
web_search = "disabled"

# 模型目录 JSON 路径
model_catalog_json = "~/.codex/model-catalogs/model-catalogs.json"

[features]
# 启用目标管理功能
goals = true
```

## 模型提供商配置

模型提供商定义了 Codex 如何与不同的 AI 后端通信。每个提供商需要配置 API 端点、认证方式和通信协议。

### 配置结构

```toml
[model_providers.<provider_name>]
name = "显示名称"
base_url = "https://api.example.com/v1"
wire_api = "responses"          # 或 "chat_completions"
requires_openai_auth = true
```

### 实际示例

以下是一个 LongCat 提供商的配置示例：

```toml
[model_providers.longcat]
name = "longcat"
base_url = "https://api.longcat.chat/openai/v1"
wire_api = "responses"
requires_openai_auth = true
```

### 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `name` | string | 提供商显示名称 |
| `base_url` | string | API 基础 URL |
| `wire_api` | string | 通信协议：`responses` 或 `chat_completions` |
| `requires_openai_auth` | bool | 是否需要 OpenAI 兼容认证 |

## 项目与信任级别

Codex 通过项目路径来管理不同目录的信任级别，控制文件操作和命令执行的权限。

### 配置结构

```toml
[projects."/path/to/project"]
trust_level = "trusted"
```

### 信任级别说明

| 级别 | 文件读取 | 文件写入 | 命令执行 |
|------|---------|---------|---------|
| `trusted` | ✅ 允许 | ✅ 允许 | ✅ 自动执行 |
| `untrusted` | ✅ 允许 | ⚠️ 需审批 | ⚠️ 需审批 |

### 实际示例

```toml
[projects."/home/haha"]
trust_level = "trusted"

[projects."/home/haha/codes/codex-howto"]
trust_level = "trusted"
```

::: tip 建议
将常用项目目录设置为 `trusted` 可以提升工作效率，但请确保只信任自己维护的项目。
:::

## MCP 服务器配置

MCP（Model Context Protocol）服务器为 Codex 提供额外的工具能力，如网络搜索、文件操作、GitHub 集成等。

### stdio 类型服务器

通过本地命令启动的服务器：

```toml
[mcp_servers.MiniMax]
command = "uvx"
args = ["minimax-coding-plan-mcp", "-y"]
startup_timeout_sec = 60

[mcp_servers.MiniMax.env]
MINIMAX_API_HOST = "https://api.minimaxi.com"
MINIMAX_API_KEY = "sk-cp-xxx"
```

### HTTP 类型服务器

通过 HTTP 端点连接的远程服务器：

```toml
[mcp_servers.github]
url = "https://api.githubcopilot.com/mcp/"
startup_timeout_sec = 60
bearer_token_env_var = "GITHUB_PAT_TOKEN"
```

### 工具审批模式

可以为每个工具单独设置审批模式：

```toml
[mcp_servers.MiniMax.tools.web_search]
approval_mode = "approve"

[mcp_servers.filesystem.tools.edit_file]
approval_mode = "approve"

[mcp_servers.filesystem.tools.write_file]
approval_mode = "approve"
```

| 审批模式 | 说明 |
|---------|------|
| `approve` | 自动批准执行 |
| `deny` | 自动拒绝执行 |
| 未设置 | 每次执行前询问用户 |

### 已安装的 MCP 服务器列表

| 服务器名称 | 类型 | 说明 |
|-----------|------|------|
| `MiniMax` | stdio | MiniMax 编码计划 MCP |
| `context7` | stdio | Context7 文档查询 |
| `sequential-thinking` | stdio | 顺序思考工具 |
| `memory` | stdio | 记忆图谱管理 |
| `filesystem` | stdio | 文件系统操作 |
| `time` | stdio | 时区转换 |
| `fetch` | stdio | 网页内容获取 |
| `github` | HTTP | GitHub API 集成 |

## 插件配置

插件系统允许通过启用/禁用来控制功能模块的加载。

### 配置结构

```toml
[plugins."plugin-name@openai-api-curated"]
enabled = true
```

### 已安装的插件

| 插件名称 | 说明 |
|---------|------|
| `codex-security@openai-api-curated` | 安全扫描工作流 |
| `build-web-apps@openai-api-curated` | Web 应用构建 |
| `build-web-data-visualization@openai-api-curated` | 数据可视化 |
| `remotion@openai-api-curated` | Remotion 视频创建 |
| `github@openai-api-curated` | GitHub 集成 |
| `coderabbit@openai-api-curated` | CodeRabbit 代码审查 |
| `hyperframes@openai-api-curated` | HyperFrames 视频合成 |
| `magicpath@openai-api-curated` | MagicPath UI 组件 |
| `superpowers@openai-api-curated` | 超级能力工具集 |
| `sentry@openai-api-curated` | Sentry 错误监控 |

### 实际配置示例

```toml
[plugins."codex-security@openai-api-curated"]
enabled = true

[plugins."build-web-apps@openai-api-curated"]
enabled = true

[plugins."github@openai-api-curated"]
enabled = true
```

## 环境变量

Codex 支持通过环境变量进行配置，适用于 CI/CD 场景或临时覆盖。

| 变量名 | 说明 |
|--------|------|
| `OPENAI_API_KEY` | OpenAI API 密钥 |
| `CODEX_MODEL` | 覆盖默认模型 |
| `CODEX_MODEL_PROVIDER` | 覆盖默认模型提供商 |
| `CODEX_DISABLE_RESPONSE_STORAGE` | 禁用响应存储 |
| `GITHUB_PAT_TOKEN` | GitHub Personal Access Token |

### 使用示例

```bash
# 临时使用不同模型
CODEX_MODEL="gpt-5" codex "重构这个模块"

# 在 CI 环境中禁用响应存储
export CODEX_DISABLE_RESPONSE_STORAGE=true
```

## 完整配置示例

以下是一个完整的 `config.toml` 配置示例：

```toml
# ~/.codex/config.toml

# === 模型配置 ===
model = "LongCat-2.0"
model_provider = "longcat"
model_reasoning_effort = "high"
disable_response_storage = true
model_supports_reasoning_summaries = true
model_reasoning_summary = "none"
model_context_window = 1048576

# === 功能配置 ===
web_search = "disabled"
model_catalog_json = "~/.codex/model-catalogs/model-catalogs.json"

[features]
goals = true

# === 模型提供商 ===
[model_providers.longcat]
name = "longcat"
base_url = "https://api.longcat.chat/openai/v1"
wire_api = "responses"
requires_openai_auth = true

# === 项目信任 ===
[projects."/home/haha"]
trust_level = "trusted"

[projects."/home/haha/codes/codex-howto"]
trust_level = "trusted"

# === MCP 服务器 ===
[mcp_servers.MiniMax]
command = "uvx"
args = ["minimax-coding-plan-mcp", "-y"]
startup_timeout_sec = 60

[mcp_servers.MiniMax.env]
MINIMAX_API_HOST = "https://api.minimaxi.com"
MINIMAX_API_KEY = "your-api-key"

[mcp_servers.MiniMax.tools.web_search]
approval_mode = "approve"

[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp@latest"]

[mcp_servers.sequential-thinking]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-sequential-thinking"]

[mcp_servers.memory]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-memory"]

[mcp_servers.filesystem]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem", "/home/haha"]

[mcp_servers.filesystem.tools.edit_file]
approval_mode = "approve"

[mcp_servers.filesystem.tools.write_file]
approval_mode = "approve"

[mcp_servers.time]
command = "uvx"
args = ["mcp-server-time", "--local-timezone=Asia/Shanghai"]

[mcp_servers.fetch]
command = "uvx"
args = ["mcp-server-fetch"]

[mcp_servers.github]
url = "https://api.githubcopilot.com/mcp/"
startup_timeout_sec = 60
bearer_token_env_var = "GITHUB_PAT_TOKEN"

# === 插件 ===
[plugins."codex-security@openai-api-curated"]
enabled = true

[plugins."build-web-apps@openai-api-curated"]
enabled = true

[plugins."github@openai-api-curated"]
enabled = true
```

## 下一步

- [命令参考](/guide/commands) - 了解所有 CLI 命令
- [MCP 系统](/guide/mcp-system) - 深入了解 MCP 集成
- [插件系统](/guide/plugins-system) - 学习插件管理
