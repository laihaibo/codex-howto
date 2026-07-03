---
title: 术语表
description: Codex CLI 术语和缩写速查表，帮助理解文档中的专业词汇
---

# 术语表

本文档中使用以下术语和缩写：

## 核心概念

| 术语 | 全称 | 含义 |
|------|------|------|
| Codex | — | OpenAI 推出的命令行 AI 编程助手 |
| AGENTS.md | — | 项目级配置文件，为 Codex 提供持久化指令 |
| MCP | Model Context Protocol | AI 模型与外部工具之间的通信协议 |
| Skill | — | 模块化的领域知识工作流扩展 |
| Plugin | — | 包含多个技能、MCP 服务器和应用工具的扩展包 |

## 模型相关

| 术语 | 含义 |
|------|------|
| model | 使用的 AI 模型名称（如 `o4-mini`、`LongCat-2.0`） |
| model_provider | 模型提供商标识符（对应 `config.toml` 中的配置节） |
| reasoning_effort | AI 推理深度：`low`、`medium`、`high` |
| context_window | 模型单次交互能处理的最大 token 数 |

## 工作模式

| 术语 | 含义 |
|------|------|
| Plan Mode | 计划模式：先制定执行计划，用户确认后再执行 |
| Trusted | 信任模式：对特定项目目录自动批准文件/命令操作 |
| Untested/Needs Review | 未受信任/需审查：操作需逐次审批 |
| Sandbox | 沙箱：限制 Codex 文件/命令/网络访问的执行环境 |

## 技术术语

| 术语 | 含义 |
|------|------|
| stdio | 标准输入/输出：本地 MCP 服务器的通信方式 |
| HTTP MCP | 通过 HTTP 端点连接的远程 MCP 服务器 |
| approval_mode | 工具访问权限：`approve`（自动批准）、`deny`（自动拒绝）、未设置（每次询问） |
| sub-agent | 子代理：由 Codex 派生的任务专用代理 |
| AGENTS.md | 类似 `.editorconfig` 或 `.eslintrc` 的项目约定配置文件 |
| SARIF | Static Analysis Results Interchange Format（静态分析结果交换格式） |
| TOML | Tom's Obvious Minimal Language（配置文件格式） |

## 相关缩写

| 缩写 | 全称 |
|------|------|
| TDD | Test-Driven Development |
| CI/CD | Continuous Integration / Continuous Deployment |
| PR | Pull Request |
| PAT | Personal Access Token |
| RSC | React Server Components |
