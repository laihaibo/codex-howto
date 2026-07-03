---
title: Filesystem MCP
description: 本地文件系统访问，提供读写、搜索、目录操作等能力
---

# Filesystem MCP

## 概述

Filesystem MCP 为 Codex 提供**本地文件系统访问**能力，使其能够：

- 读取和写入文件
- 列出目录内容
- 搜索文件
- 创建和移动文件/目录
- 获取文件元数据
- 抓取网页内容
- 读取图片/音频文件

## 提供的工具

### 文件操作

| 工具名称 | 操作类型 | 说明 |
|---------|---------|------|
| `mcp__filesystem_read_text_file` | 读取 | 读取文本文件内容 |
| `mcp__filesystem_read_multiple_files` | 读取 | 同时读取多个文件 |
| `mcp__filesystem_read_media_file` | 读取 | 读取图片/音频（返回 base64） |
| `mcp__filesystem_write_file` | 写入 | 创建或覆盖文件 |
| `mcp__filesystem_move_file` | 写入 | 移动或重命名文件/目录 |
| `mcp__filesystem_get_file_info` | 读取 | 获取文件元数据 |

### 目录操作

| 工具名称 | 操作类型 | 说明 |
|---------|---------|------|
| `mcp__filesystem_list_directory` | 读取 | 列出目录内容 |
| `mcp__filesystem_list_directory_with_sizes` | 读取 | 列出目录（含文件大小） |
| `mcp__filesystem_directory_tree` | 读取 | 递归目录树结构 |
| `mcp__filesystem_create_directory` | 写入 | 创建目录 |

### 搜索与网络

| 工具名称 | 操作类型 | 说明 |
|---------|---------|------|
| `mcp__filesystem_search_files` | 读取 | 递归搜索文件（支持 glob） |
| `mcp__fetch_fetch` | 网络 | 抓取网页内容 |
| `mcp__filesystem_list_allowed_directories` | 读取 | 查看允许访问的目录 |

## 文件读取

### 读取整个文件

```
读取 /home/haha/codes/codex-howto/package.json
```

```json
{
  "path": "/home/haha/codes/codex-howto/package.json"
}
```

### 读取部分文件

```json
{
  "path": "/home/haha/codes/codex-howto/README.md",
  "head": 20
}
```

```json
{
  "path": "/home/haha/codes/codex-howto/logs.txt",
  "tail": 50
}
```

### 读取图片文件

```json
{
  "path": "/home/haha/codes/codex-howto/assets/screenshot.png"
}
```

返回 base64 编码数据和 MIME 类型。

## 文件写入

### 创建文件

```
在 /home/haha/codes/codex-howto/ 下创建 hello.js，内容为 console.log("Hello!");
```

```json
{
  "path": "/home/haha/codes/codex-howto/hello.js",
  "content": "console.log(\"Hello!\");"
}
```

### 覆盖写入

> ⚠️ 警告：`write_file` 会**完全覆盖**目标文件，不会自动备份。

```json
{
  "path": "config.json",
  "content": "{\"version\": \"2.0\"}"
}
```

## 搜索文件

### Glob 搜索

```
搜索所有 TypeScript 文件
```

```json
{
  "path": "/home/haha/codes/codex-howto",
  "pattern": "**/*.ts"
}
```

### 排除模式

```json
{
  "path": "/home/haha/codes/codex-howto",
  "pattern": "**/*.md",
  "excludePatterns": ["node_modules/**", ".git/**"]
}
```

## 目录操作

### 列出目录内容

```json
{
  "path": "/home/haha/codes/codex-howto"
}
```

### 递归目录树

```json
{
  "path": "/home/haha/codes/codex-howto",
  "excludePatterns": ["node_modules", ".git", "dist"]
}
```

## 网页抓取

Fetch 工具可以获取网页内容：

```
获取 https://example.com 的内容
```

```json
{
  "url": "https://example.com",
  "max_length": 5000
}
```

| 参数 | 说明 |
|------|------|
| `url` | 目标 URL |
| `max_length` | 最大返回字符数 |
| `raw` | `true` 返回原始 HTML，`false` 返回 Markdown |
| `start_index` | 从第 N 个字符开始返回 |

## 审批模式与写入安全

### 建议的审批配置

```toml
[approval]
# 只读操作自动审批
auto_approve = [
  "mcp__filesystem_read_text_file",
  "mcp__filesystem_read_multiple_files",
  "mcp__filesystem_read_media_file",
  "mcp__filesystem_list_directory",
  "mcp__filesystem_list_directory_with_sizes",
  "mcp__filesystem_directory_tree",
  "mcp__filesystem_search_files",
  "mcp__filesystem_get_file_info",
  "mcp__filesystem_list_allowed_directories",
]

# 写入操作需要审批
require_approval = [
  "mcp__filesystem_write_file",
  "mcp__filesystem_move_file",
  "mcp__filesystem_create_directory",
]

# 网络请求需要审批
require_approval = [
  "mcp__fetch_fetch",
]
```

### 首次写入请求批准

对于写入操作，首次调用时 Codex 会请求批准：

```
Do you want to allow this write operation? (yes/no)
```

可以携带 `prefix_rule` 允许同类操作：

```
prefix_rule: ["mcp__filesystem", "write_file"]
```

## 支持的文件类型

| 类型 | 扩展名 | 读取 | 写入 |
|------|--------|------|------|
| 文本文件 | `.txt`, `.md`, `.json`, `.js`, `.ts` 等 | ✅ | ✅ |
| 图片 | `.jpg`, `.png`, `.webp`, `.gif` | ✅ (base64) | ❌ |
| 音频 | `.mp3`, `.wav`, `.ogg` | ✅ (base64) | ❌ |
| 二进制 | `.exe`, `.dll`, `.so` | ❌ | ❌ |

## 故障排除

| 问题 | 解决方案 |
|------|---------|
| 访问被拒绝 | 检查路径是否允许，必要时申请 escalated |
| 文件不存在 | 确认路径拼写正确，区分大小写 |
| 网络抓取失败 | URL 可能需要 `require_escalated` 权限 |
