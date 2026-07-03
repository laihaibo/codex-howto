---
layout: doc
title: 什么是 Codex
description: Codex 是 OpenAI 推出的 AI 编程助手 CLI，帮助开发者更高效地编写、调试和维护代码
---

# 什么是 Codex

**Codex CLI** 是 OpenAI 推出的命令行 AI 编程助手。与传统 IDE 插件不同，Codex 运行在终端中，直接在你的项目文件上操作——它可以读取代码、编辑文件、运行命令、安装依赖，是一个真正的"结对编程伙伴"。

## 核心能力

| 能力 | 描述 |
|------|------|
| 代码生成 | 根据自然语言描述生成代码，支持 100+ 编程语言 |
| 代码解释 | 解释代码功能和逻辑，帮助理解陌生代码库 |
| 代码重构 | 优化现有代码结构、性能和可读性 |
| 问题诊断 | 帮助定位错误根因并给出修复方案 |
| 命令执行 | 在终端运行构建、测试、git 等命令 |
| 文件操作 | 创建、编辑、移动项目文件 |

## 快速开始

```bash
# 1. 安装
npm install -g @openai/codex

# 2. 登录
codex login

# 3. 开始使用
cd /your/project
codex "帮我重构 src/utils/parser.ts"
```

## 站点导览

### 🟢 入门（5-15 分钟）
1. [安装与设置](/guide/installation) — 安装和首次配置
2. [基本使用](/guide/basic-usage) — 交互模式、文件操作、快捷键
3. [工作模式](/guide/work-modes) — 标准、计划、沙箱模式

### 🟡 进阶（30 分钟）
4. [配置详解](/guide/configuration) — 模型、信任级别、MCP、插件
5. [常用命令](/guide/commands) — 完整 CLI 参考
6. [AGENTS.md 项目配置](/guide/agents-md-guide) — 项目级指令

### 🔴 精通（按需探索）
7. [技能系统](/guide/skills-system) — 扩展能力
8. [插件系统](/guide/plugins-system) — 打包分发
9. [MCP 服务](/guide/mcp-system) — 外部工具集成

### 💡 最佳实践
- [提示词技巧](/best-practices/prompting) — 编写高效提示词
- [任务规划](/best-practices/planning) — 复杂任务的分步规划
- [代码开发](/best-practices/coding) — TDD、审查、文档
- [安全实践](/best-practices/security) — 沙箱模型、运行时安全
- [多代理协作](/best-practices/multi-agent) — 并行任务调度

## 版本信息

- **当前版本**：v0.142.5
- **官方仓库**：[https://github.com/openai/codex](https://github.com/openai/codex)

::: tip 反馈与贡献
发现问题或有改进建议？欢迎在 [GitHub Issues](https://github.com/openai/codex/issues) 上反馈。
:::
