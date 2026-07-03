---
title: defuddle
description: 从网页提取干净的 Markdown 内容，去除杂乱信息
---

# defuddle

使用 Defuddle CLI 从网页提取干净的 Markdown 内容。

## 触发条件

```
> 提取这个网页的内容：https://example.com/article
> 用这个 URL 获取文档内容
> 读取并分析这个链接
```

## 适用场景

- 在线文档和教程
- 博客文章
- 技术文档
- 标准网页内容

::: tip 注意
不用于 `.md` 结尾的 URL（已是 markdown），直接使用 Web Fetch。
:::

## 输出格式

干净的 Markdown 内容，去除导航、广告等无关元素。
