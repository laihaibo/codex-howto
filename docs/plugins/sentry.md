---
title: Sentry 插件
description: 错误监控、Issue 检查和事件查询插件
---

# Sentry 插件

Sentry 插件提供与 Sentry 错误监控平台的集成，帮助检查 Issue、事件和查询生产环境错误数据。

## 功能概述

- 🐛 检查 Sentry Issue 和事件
- 📊 汇总最近的错误
- 🔍 查询生产环境错误数据
- 📈 获取 Sentry 健康指标

## 包含的技能

### 技能列表

| 技能名称 | 描述 |
|---------|------|
| `sentry` | 使用 Sentry API 检查 Issue、事件和获取健康数据 |

---

## Sentry 技能 (`sentry`)

使用 Sentry API 进行只读查询，需要 `SENTRY_AUTH_TOKEN` 环境变量。

### 触发时机

- 用户要求检查 Sentry Issue 或事件
- 汇总最近的错误
- 获取 Sentry 健康数据
- 查询生产环境错误

### 功能说明

| 功能 | 描述 |
|------|------|
| Issue 检查 | 查看特定 Issue 的详情、堆栈跟踪和发生频率 |
| 事件查询 | 搜索和过滤特定时间范围内的事件 |
| 错误汇总 | 汇总最近的错误趋势和分布 |
| 健康指标 | 获取项目的整体错误率和健康状态 |

### 示例提示词

```
检查 Sentry 上最近的错误
```

```
查看 Issue #12345 的详情
```

```
汇总过去 24 小时的生产错误
```

```
查询这个项目的 Sentry 健康数据
```

```
最近有哪些新的 Sentry Issue？
```

---

## 配置要求

使用此插件需要设置 `SENTRY_AUTH_TOKEN` 环境变量。该 Token 需要具有读取 Issue 和事件数据的权限。

### 获取 Token

1. 登录 Sentry 账户
2. 进入 Settings → Account → API → Auth Tokens
3. 创建具有 `event:read` 和 `project:read` 权限的 Token

---

## 最佳实践

- 定期检查 Sentry 以了解生产环境健康状况
- 在发布新功能后关注错误率变化
- 使用 Sentry 数据优先处理影响用户最多的错误
- 将 Sentry Issue 与代码变更关联以快速定位根因
