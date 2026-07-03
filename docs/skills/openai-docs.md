---
title: openai-docs - OpenAI 文档查询
description: 查询 OpenAI 官方文档和 API 参考，帮助选择模型、了解产品功能和 API 使用方式
---

# openai-docs - OpenAI 文档查询

`openai-docs` 技能使 Codex 能够访问和检索 OpenAI 官方文档内容，为你提供最新的产品信息、API 参考和使用指南。

## 何时使用

以下场景适合触发 `openai-docs` 技能：

### 适用场景

| 场景 | 示例 |
|------|------|
| **产品构建指南** | "如何用 OpenAI API 构建一个聊天机器人？" |
| **模型选择** | "GPT-4o 和 GPT-4o-mini 有什么区别？我该选哪个？" |
| **API 帮助** | "Chat Completions API 的 streaming 参数怎么用？" |
| **模型升级** | "从 GPT-3.5 升级到 GPT-4 需要改什么？" |
| **提示词升级** | "新模型的最佳提示词写法有什么变化？" |
| **Codex 自身问题** | "Codex 支持哪些工作模式？" |

### 适用情况

- 用户询问如何用 OpenAI 产品或 API 构建应用
- 用户询问 Codex 本身的功能或选择方式
- 需要最新的官方文档并带引用出处
- 需要帮助选择适合特定场景的最新模型
- 需要模型升级和提示词升级指导

### 不适用情况

- 非 OpenAI 产品的技术问题 — 使用通用知识或其他技能
- 社区最佳实践或第三方评测 — 此类信息不在官方文档范围内
- 需要实时数据的查询 — 文档内容为静态知识

## 使用示例

### 产品与 API 查询

```
OpenAI 的 Assistants API 最新版有什么新功能？
Embeddings API 支持哪些模型和维度？
如何用 OpenAI API 实现函数调用（Function Calling）？
详细说明 Chat Completions API 的 message 格式
```

### 模型选型

```
我正在做一个客服机器人，该选 GPT-4o 还是 GPT-4o-mini？
o1 模型适合什么场景？和 GPT-4 有什么区别？
我的应用需要处理大量文本摘要，推荐哪个模型？
最新的 OpenAI 模型中，哪个性价比最高？
```

### Codex 相关问题

```
Codex 有哪些工作模式？
如何在 Codex 中使用自定义技能？
Codex 支持哪些编程语言？
```

### 升级指南

```
我们当前用的是 GPT-3.5-turbo，想升级到 GPT-4o 需要注意什么？
如何把基于旧版 API 的代码迁移到最新版？
新版 API 有什么破坏性变更？
```

## 查询方式

当触发 `openai-docs` 技能后，Codex 会使用 OpenAI Docs MCP 工具将你的问题发送到 Context7 API 进行检索，获取最新的官方文档内容。

### 检索原则

- **优先使用官方来源** — 所有信息均来自 OpenAI 官方域名
- **带回引用** — 提供文档来源链接
- **版本准确** — 基于最新版本的文档内容

## 官方域名

`openai-docs` 技能可以访问以下 OpenAI 官方域名：

| 域名 | 内容 |
|------|------|
| `platform.openai.com` | API 参考和文档 |
| `openai.com` | 产品信息和博客 |

## 相关技能

- [skill-creator](/skills/skill-creator/) — 如果想为 OpenAI 产品创建自定义技能
- [skill-installer](/skills/skill-installer/) — 安装更多技能扩展文档查询能力
