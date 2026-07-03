---
title: next-best-practices
description: Next.js 最佳实践：文件约定、RSC 边界、数据模式和性能优化
---

# next-best-practices

Next.js 开发最佳实践指南。

## 触发条件

```
> 这个 Next.js 页面应该怎么组织？
> 解释 RSC 边界和数据获取模式
> 优化 Next.js 的图像和字体
```

## 核心主题

### 文件约定

```
app/
├── layout.tsx      # 布局
├── page.tsx        # 页面
├── loading.tsx     # 加载状态
├── error.tsx       # 错误边界
├── not-found.tsx   # 404 页面
└── api/            # API 路由
```

### RSC 边界

- 服务端组件（默认）vs 客户端组件（'use client'）
- 异步 API 在 RSC 中直接使用
- 交互逻辑在客户端组件中实现

### 数据模式

- 服务端获取 + 客户端缓存（SWR/React Query）
- 流式传输和 Suspense
- 增量静态再生成 (ISR)

### 性能优化

- 图像自动优化（next/image）
- 字体自动优化（next/font）
- bundle 分析和代码分割
