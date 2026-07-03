---
title: Time MCP
description: 时区转换工具，支持 IANA 时区名称的获取和转换
---

# Time MCP

## 概述

Time MCP 为 Codex 提供**时区转换**能力，使其能够：

- 获取任意时区的当前时间
- 在不同时区之间转换时间
- 支持所有 IANA 标准时区名称

## 提供的工具

| 工具名称 | 说明 |
|---------|------|
| `mcp__time_get_current_time` | 获取指定时区的当前时间 |
| `mcp__time_convert_time` | 在两个时区之间转换时间 |

## 使用示例

### 获取当前时间

```
现在北京时间是几点？
```

```json
{
  "timezone": "Asia/Shanghai"
}
```

返回：

```json
{
  "timezone": "Asia/Shanghai",
  "datetime": "2026-07-03T14:30:00+08:00",
  "date": "2026-07-03",
  "time": "14:30",
  "day_of_week": "Friday"
}
```

### 时区转换

```
把北京时间下午3点转换为纽约时间
```

```json
{
  "source_timezone": "Asia/Shanghai",
  "target_timezone": "America/New_York",
  "time": "15:00"
}
```

返回：

```json
{
  "source": {
    "timezone": "Asia/Shanghai",
    "time": "15:00"
  },
  "target": {
    "timezone": "America/New_York",
    "time": "03:00"
  }
}
```

## 支持的时区名称

使用 **IANA 时区数据库** 标准名称：

### 亚洲

| 时区名称 | 说明 |
|---------|------|
| `Asia/Shanghai` | 中国标准时间 (UTC+8) |
| `Asia/Hong_Kong` | 香港时间 (UTC+8) |
| `Asia/Taipei` | 台北时间 (UTC+8) |
| `Asia/Tokyo` | 日本时间 (UTC+9) |
| `Asia/Seoul` | 韩国时间 (UTC+9) |
| `Asia/Singapore` | 新加坡时间 (UTC+8) |
| `Asia/Dubai` | 迪拜时间 (UTC+4) |
| `Asia/Kolkata` | 印度时间 (UTC+5:30) |

### 美洲

| 时区名称 | 说明 |
|---------|------|
| `America/New_York` | 美国东部时间 (UTC-5/-4) |
| `America/Chicago` | 美国中部时间 (UTC-6/-5) |
| `America/Denver` | 美国山地时间 (UTC-7/-6) |
| `America/Los_Angeles` | 美国太平洋时间 (UTC-8/-7) |
| `America/Vancouver` | 温哥华时间 (UTC-8/-7) |
| `America/Toronto` | 多伦多时间 (UTC-5/-4) |
| `America/Sao_Paulo` | 圣保罗时间 (UTC-3) |

### 欧洲

| 时区名称 | 说明 |
|---------|------|
| `Europe/London` | 伦敦时间 (UTC+0/+1) |
| `Europe/Paris` | 巴黎时间 (UTC+1/+2) |
| `Europe/Berlin` | 柏林时间 (UTC+1/+2) |
| `Europe/Moscow` | 莫斯科时间 (UTC+3) |
| `Europe/Istanbul` | 伊斯坦布尔时间 (UTC+3) |

### 大洋洲

| 时区名称 | 说明 |
|---------|------|
| `Australia/Sydney` | 悉尼时间 (UTC+10/+11) |
| `Australia/Melbourne` | 墨尔本时间 (UTC+10/+11) |
| `Australia/Perth` | 珀斯时间 (UTC+8) |
| `Pacific/Auckland` | 奥克兰时间 (UTC+12/+13) |

### 通用

| 时区名称 | 说明 |
|---------|------|
| `UTC` | 协调世界时 |
| `Etc/UTC` | 同上（别名） |

## 本地时区配置

如果未指定源时区或目标时区，默认使用 `Asia/Shanghai`（中国标准时间）。

## 审批建议

Time MCP 工具为纯本地计算，无副作用，建议自动审批：

```toml
[approval]
auto_approve = [
  "mcp__time_get_current_time",
  "mcp__time_convert_time",
]
```

## 实用场景

1. **跨时区会议安排**："纽约上午9点是北京几点？"
2. **部署时间确认**："服务器在 UTC 凌晨3点维护，北京时间是几点？"
3. **国际截止日期**："美国东部时间周五下班前是北京几点？"
