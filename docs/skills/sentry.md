---
title: sentry
description: Sentry 错误监控和事件查询
---

# sentry

Sentry 错误监控技能，用于检查 Sentry Issues 和 Events。

## 触发条件

```
> 最近有哪些 Sentry 错误？
> 查看 Sentry 上的 issues
> 查询最近的报错事件
> Sentry 的健康状态如何？
```

## 功能

- 检查 Sentry Issues 和 Events
- 总结最近的 production 错误
- Sentry 健康数据查询
- 基于 Sentry API 的只读查询

## 使用说明

需要 `SENTRY_AUTH_TOKEN` 环境变量进行认证。

```bash
# 查询最近错误
> 总结 Sentry 项目最近 24 小时的报错

# 详细信息
> 查看 issue ID-123 的事件详情
```
