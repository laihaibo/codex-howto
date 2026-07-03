---
title: Fetch MCP
description: 网页内容抓取与提取工具，支持 HTML 和 Markdown 格式输出
---

# Fetch MCP

## 概述

Fetch MCP 为 Codex 提供**网页内容抓取**能力，可以：

- 获取任意 URL 的内容
- 自动提取主要内容为 Markdown 格式
- 获取原始 HTML
- 控制返回内容长度
- 与 Defuddle CLI 协作实现智能提取

## 提供的工具

| 工具名称 | 说明 |
|---------|------|
| `mcp__fetch_fetch` | 抓取 URL 内容 |

### 工具参数

```json
{
  "url": "https://example.com",
  "max_length": 10000,
  "raw": false,
  "start_index": 0
}
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `url` | string | ✅ | 目标 URL（支持 HTTP/HTTPS） |
| `max_length` | integer | ❌ | 最大返回字符数 |
| `raw` | boolean | ❌ | `true` 返回原始 HTML，`false` 提取 Markdown |
| `start_index` | integer | ❌ | 从第 N 个字符开始返回 |

## 使用示例

### 抓取网页为 Markdown

```
获取 https://docs.python.org/3/library/json.html 的内容
```

```json
{
  "url": "https://docs.python.org/3/library/json.html",
  "max_length": 5000
}
```

### 获取原始 HTML

```json
{
  "url": "https://example.com/api-docs",
  "raw": true,
  "max_length": 20000
}
```

### 分段获取长内容

```json
{
  "url": "https://example.com/long-article",
  "start_index": 0,
  "max_length": 10000
}
```

```json
{
  "url": "https://example.com/long-article",
  "start_index": 10000,
  "max_length": 10000
}
```

## 与 web_search 的区别

| 特性 | Fetch MCP | MiniMax web_search |
|------|-----------|-------------------|
| **输入** | 具体 URL | 搜索关键词 |
| **输出** | 页面完整内容 | 搜索结果摘要 |
| **用途** | 读取已知页面 | 发现未知信息 |
| **格式** | Markdown / HTML | 结构化搜索结果 |
| **使用场景** | 查看文档、读取文章 | 查找资料、获取新闻 |

## 实用场景

### 获取在线文档

```
读取 https://vitepress.dev/guide/what-is-vitepress 的内容
```

### 提取 API 参考

```
抓取 https://api.github.com 的 API 文档
```

### 阅读博客文章

```
获取这篇文章内容：https://example.com/blog/post-123
```

### 对比本地与线上版本

```
抓取线上文档，与本地 README 对比是否有差异
```

## 与 Defuddle 协作

对于非 `.md` 的网页，Codex 会使用 Defuddle CLI 进行智能提取：

```
Defuddle 会自动去除导航栏、侧边栏、广告等干扰内容，
只保留页面的核心正文，转换为干净的 Markdown 格式。
```

> 注意：如果 URL 以 `.md` 结尾，Codex 会直接使用 Fetch 而非 Defuddle。

## 网络权限说明

Fetch 工具需要网络访问权限，可能需要 `require_escalated` 审批：

- 首次调用网络请求时，Codex 会提示用户确认
- 可以设置网络访问规则以自动允许

## 审批建议

```toml
[approval]
# 网页抓取涉及外部网络，建议手动审批或按需放行
require_approval = [
  "mcp__fetch_fetch",
]
```

## 注意事项

1. **速率限制**：避免短时间内大量抓取同一域名
2. **内容长度**：使用 `max_length` 防止返回过多内容消耗 token
3. **robots.txt**：遵守目标网站的爬虫规则
4. **隐私**：不要抓取需要登录的页面内容
