---
title: Context7 MCP
description: Context7 MCP 服务器提供最新编程库文档和代码示例查询
---

# Context7 MCP

## 概述

Context7 MCP 服务器为 Codex 提供**最新、准确**的编程库和框架文档。与 AI 内置知识（可能过时）不同，Context7 从官方源实时获取文档内容，确保代码示例和 API 信息是最新的。

## 提供的工具

| 工具名称 | 说明 |
|---------|------|
| `mcp__context7_resolve_library_id` | 将包名解析为 Context7 库 ID |
| `mcp__context7_query_docs` | 查询指定库的文档和代码示例 |

## 工作原理

```
用户提问
    ↓
Codex 调用 resolve-library-id（将包名转为库 ID）
    ↓
Codex 调用 query-docs（获取最新文档）
    ↓
Codex 基于最新文档生成回答
```

## 使用示例

### 查询 Next.js 文档

```
如何使用 Next.js 的 getServerSideProps？
```

Codex 自动执行：

**第一步：解析库 ID**

```json
{
  "libraryName": "Next.js",
  "query": "getServerSideProps 使用方法"
}
```

返回：`/vercel/next.js` 或 `/vercel/next.js/v14.3.0-canary.87`

**第二步：查询文档**

```json
{
  "libraryId": "/vercel/next.js",
  "query": "如何使用 getServerSideProps 进行服务端渲染"
}
```

### 查询 React Hooks

```
React useEffect 的清理函数怎么写？
```

```json
{
  "libraryName": "React",
  "query": "useEffect cleanup function examples"
}
```

### 查询 Tailwind CSS

```
Tailwind CSS 中如何实现响应式布局？
```

```json
{
  "libraryName": "Tailwind CSS",
  "query": "responsive layout breakpoints"
}
```

## 适用场景

- 需要最新 API 文档时
- 不确定某个库的当前版本用法时
- 需要准确的代码示例时
- 学习新的编程库或框架时

## 审批建议

Context7 工具为只读操作，建议设为自动审批：

```toml
[approval]
auto_approve = [
  "mcp__context7_resolve_library_id",
  "mcp__context7_query_docs",
]
```

## 支持的库

Context7 支持绝大多数主流编程库和框架，包括但不限于：

- **前端**：React, Vue, Angular, Svelte, Next.js, Nuxt
- **后端**：Express, Fastify, Django, Flask, Spring Boot
- **数据库**：PostgreSQL, MongoDB, Redis, Supabase
- **工具链**：Vite, Webpack, TypeScript, Tailwind CSS
- **AI/ML**：OpenAI SDK, LangChain, Hugging Face

## 故障排除

| 问题 | 解决方案 |
|------|---------|
| 找不到库 | 尝试使用官方包名（如 `Next.js` 而非 `nextjs`） |
| 文档为空 | 该库可能尚未收录，尝试搜索替代关键词 |
| 返回旧版本 | 检查是否需要指定版本号 |
