---
title: Codex 插件系统
description: Codex 插件系统概述，了解如何安装、启用和管理插件
---

# Codex 插件系统

Codex 插件系统允许你通过安装插件来扩展 Codex 的能力。每个插件提供一组**技能（Skills）**、**MCP 工具（MCP Tools）** 和/或**应用（Apps）**，帮助你在特定领域更高效地工作。

## 什么是插件？

插件是本地捆绑的软件包，包含以下一种或多种能力：

- **技能（Skills）**：一组本地指令，告诉 Codex 如何处理特定类型的任务（如代码审查、安全扫描、前端构建等）
- **MCP 工具（MCP Tools）**：通过 MCP（Model Context Protocol）协议提供的外部工具集成
- **应用（Apps）**：原生 UI 应用，如 Codex Security 工作区

## 安装插件

插件通过 Codex CLI 安装：

```bash
codex plugin install <插件名称>
```

## 启用/禁用插件

安装后，插件会自动启用。你可以通过 Codex 配置管理插件的启用状态。

## 当前已安装的插件

以下是当前已安装的所有插件列表：

| 插件名称 | 描述 | 技能数量 |
|---------|------|---------|
| [codex-security](./codex-security.md) | 代码安全扫描与漏洞修复 | 10 |
| [build-web-apps](./build-web-apps.md) | 前端应用构建与最佳实践 | 6 |
| [build-web-data-visualization](./build-web-data-visualization.md) | 数据可视化与图表设计 | 1 |
| [remotion](./remotion.md) | React 视频创建 | 1 |
| [github](./github.md) | GitHub PR/Issue 管理 | 4 |
| [coderabbit](./coderabbit.md) | AI 代码审查 | 1 |
| [hyperframes](./hyperframes.md) | HTML 视频合成与动画 | 5 |
| [magicpath](./magicpath.md) | UI 组件搜索与主题设计 | 1 |
| [superpowers](./superpowers.md) | 超级开发工作流 | 13 |
| [sentry](./sentry.md) | 错误监控与事件查询 | 1 |

## 使用插件

### 触发技能

当你提到技能名称（如 `$security-scan`）或任务描述匹配技能的触发规则时，Codex 会自动调用对应的技能。多个技能可以同时触发。

### 使用 MCP 工具

如果插件提供了 MCP 工具，Codex 会在需要时自动调用这些工具（例如搜索网络、读取文档等）。

### 使用应用

某些插件（如 Codex Security）提供原生应用，Codex 可以在需要时打开对应的 UI 工作区。

## 插件详情

点击上方表格中的链接，查看每个插件的详细文档，包括：

- 插件功能概述
- 包含的所有技能列表
- 每个技能的触发时机
- 示例提示词
- MCP 工具说明
