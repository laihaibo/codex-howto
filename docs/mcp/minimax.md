---
title: MiniMax MCP
description: MiniMax MCP 服务器提供网页搜索、图片理解和编程计划工具
---

# MiniMax MCP

## 概述

MiniMax MCP 服务器为 Codex 提供以下核心能力：

- **网页搜索**：实时搜索互联网获取最新信息
- **图片理解**：分析图片内容并提取信息
- **编程计划**：辅助代码规划和项目管理

## 提供的工具

| 工具名称 | 说明 |
|---------|------|
| `mcp__MiniMax_web_search` | 网页搜索，类似 Google 搜索 |
| `mcp__MiniMax_understand_image` | 图片内容分析与理解 |

## 配置要求

### 环境变量

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `MINIMAX_API_KEY` | MiniMax API 密钥 | `sk-cp-xxxxxxxxxxxxxxxx` |
| `MINIMAX_API_HOST` | API 服务地址 | `https://api.minimaxi.com` |

### config.toml 配置

```toml
[mcp_servers.MiniMax]
command = "uvx"
args = ["minimax-coding-plan-mcp", "-y"]
env = {
  "MINIMAX_API_KEY" = "sk-cp-xxxxxxxxxxxxxxxx",
  "MINIMAX_API_HOST" = "https://api.minimaxi.com",
}
```

## 使用示例

### 网页搜索

在 Codex 中直接提问即可触发搜索：

```
帮我搜索 2026 年最新的 iPhone 发布时间
```

Codex 会自动调用 `mcp__MiniMax_web_search` 工具：

```json
{
  "query": "2026年最新iPhone发布时间"
}
```

### 图片分析

向 Codex 提供图片路径或 URL，即可分析图片内容：

```
请分析这张图片的内容：/Users/me/screenshot.png
```

```json
{
  "image_source": "/Users/me/screenshot.png",
  "prompt": "请详细描述这张图片的内容"
}
```

### 支持的图片格式

- JPEG
- PNG
- WebP

> 注意：不支持 GIF、PDF、SVG 等格式。

## 审批建议

| 工具 | 建议模式 | 原因 |
|------|---------|------|
| `web_search` | 自动审批 | 只读操作，无副作用 |
| `understand_image` | 自动审批 | 只读操作，本地分析 |

```toml
[approval]
auto_approve = [
  "mcp__MiniMax_web_search",
  "mcp__MiniMax_understand_image",
]
```

## 故障排除

| 问题 | 解决方案 |
|------|---------|
| API Key 无效 | 检查 `MINIMAX_API_KEY` 是否正确 |
| 网络连接失败 | 确认 `MINIMAX_API_HOST` 地址可访问 |
| 搜索无结果 | 尝试使用英文关键词或简化查询 |
