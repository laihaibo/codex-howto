---
title: Skills 概述
description: 了解 Codex 技能系统——如何工作、如何触发、技能类型及发现方式
---

# Skills 概述

Codex Skills 是一组存储在 `SKILL.md` 文件中的指令集，用于扩展和增强 Codex 的能力。每个 Skill 包含特定领域的知识、工作流程和工具集成，使 Codex 能够更专业地处理特定任务。

## Skills 如何工作

当用户提及某个 Skill 的名称，或请求的任务与某个 Skill 的触发描述相匹配时，Codex 会自动读取并执行该 Skill 的指令。Skill 的工作流程如下：

1. **触发检测** — Codex 扫描所有可用 Skill 的触发条件
2. **选择性加载** — 仅加载与当前任务匹配的 Skill
3. **渐进式披露** — 按需读取 Skill 内容、引用文件和相关资源
4. **上下文隔离** — 不会加载无关的 Skill 内容

## 触发条件

Skills 可以通过以下方式被激活：

- **名称提及** — 例如 `$imagegen`、`$skill-creator`
- **任务匹配** — 当请求内容符合 Skill 的描述时自动触发
- **多 Skill 场景** — 一次会话中可同时激活多个 Skill

## 技能类型

| 类型 | 位置 | 说明 |
|------|------|------|
| **System Skills** | `.codex/skills/.system/` | Codex 内置的核心技能 |
| **User Skills** | `$CODEX_HOME/skills/` | 用户创建或安装的自定义技能 |
| **Plugin Skills** | 插件包内 | 由插件提供的扩展技能 |

### System Skills（系统内置技能）

Codex 自带的核心技能，包括：

- `imagegen` — AI 图像生成
- `openai-docs` — OpenAI 官方文档查询
- `skill-creator` — 创建新技能
- `skill-installer` — 安装技能
- `plugin-creator` — 创建插件

### Plugin Skills（插件技能）

通过插件扩展的技能集合：

- **Build Web Apps** — 前端应用构建、React 最佳实践、shadcn 等
- **Codex Security** — 安全扫描、漏洞发现与修复
- **GitHub** — PR 管理、CI 修复、代码审查
- **Superpowers** — 开发流程、调试、代码审查工作流
- **HyperFrames** — 视频合成与动画制作

### User Skills（用户技能）

用户可以在 `$CODEX_HOME/skills/` 目录下创建自定义技能，例如：

- `canvas-design` — 视觉艺术与设计
- `code-reviewer` — 代码审查
- `frontend-design` — 前端设计指南
- `obsidian-cli` — Obsidian 笔记管理

## 如何发现可用技能

Codex 会在每个会话开头列出当前可用的所有技能。你可以：

1. **查看技能列表** — 每个回复开头都会展示可用 Skill 的名称和描述
2. **使用 `$find-skills` 技能** — 发现和安装新技能
3. **使用 `$skill-installer` 技能** — 从精选列表或 GitHub 仓库安装技能
4. **查看插件文档** — 每个插件都附带了对应的技能说明

## 高级用法

### 多 Skill 组合

在复杂任务中，Codex 可能需要同时激活多个技能：

```
创建一个 React 前端应用，并使用我的品牌 Logo 生成一些配图
```

这个请求可能同时触发：
- `frontend-app-builder` — 构建应用
- `imagegen` — 生成配图

### Skill 优先级

当多个 Skill 可能匹配时，Codex 会根据：
- 任务描述的精确匹配度
- 用户是否明确提及 Skill 名称
- Skill 描述的专一性

来决定加载顺序和优先级。

## 快速参考表

| Skill 名称 | 用途 | 触发方式 |
|------------|------|----------|
| `imagegen` | 生成/编辑位图图像 | "生成图片"、"创建插图" |
| `openai-docs` | 查询 OpenAI 文档 | "OpenAI API"、"模型选择" |
| `skill-creator` | 创建新技能 | "创建技能"、"编写 SKILL.md" |
| `skill-installer` | 安装技能 | "安装技能"、"查找技能" |
| `plugin-creator` | 创建插件 | "创建插件"、"plugin scaffold" |
| `security-scan` | 仓库安全扫描 | "安全扫描"、"代码安全审计" |

## 相关文档

- [插件概览](/plugins/) — 了解插件系统
- [MCP 服务](/mcp/) — 了解 MCP 服务集成
- [最佳实践](/best-practices/) — 提示词和协作技巧
