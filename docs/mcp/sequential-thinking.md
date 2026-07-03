---
title: Sequential Thinking MCP
description: 结构化顺序思维工具，用于分解复杂问题、动态调整思路
---

# Sequential Thinking MCP

## 概述

Sequential Thinking MCP 为 Codex 提供**结构化问题解决**能力。它通过一系列有序的思考步骤来分解复杂问题，每个思考步骤可以：

- 建立在前一步的基础上
- 质疑或修正之前的思路
- 分支探索新的方向
- 根据需要增加思考深度

## 提供的工具

| 工具名称 | 说明 |
|---------|------|
| `mcp__sequential_thinking_sequentialthinking` | 执行一个思考步骤 |

### 工具参数

```json
{
  "thought": "当前思考内容",
  "nextThoughtNeeded": true,
  "thoughtNumber": 1,
  "totalThoughts": 5,
  "isRevision": false,
  "revisesThought": null,
  "branchFromThought": null,
  "branchId": null,
  "needsMoreThoughts": false
}
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `thought` | string | 当前步骤的思考内容 |
| `nextThoughtNeeded` | boolean | 是否需要下一步思考 |
| `thoughtNumber` | integer | 当前步骤编号 |
| `totalThoughts` | integer | 预估总步骤数（可调整） |
| `isRevision` | boolean | 是否修正之前的思考 |
| `revisesThought` | integer | 被修正的步骤编号 |
| `branchFromThought` | integer | 分支起始步骤编号 |
| `branchId` | string | 分支标识符 |
| `needsMoreThoughts` | boolean | 是否需要更多思考步骤 |

## 核心特性

### 1. 思考分支

当问题存在多种可能方向时，可以从某一步开始分支探索：

```
思考 1: 分析问题
思考 2: 方案 A 思路
思考 3: 方案 B 思路（从思考 1 分支）
  - branchFromThought: 1
  - branchId: "branch-b"
```

### 2. 思考修正

发现之前的思路有误时，可以进行修正：

```json
{
  "thought": "重新评估后发现方案 A 不可行，原因是...",
  "isRevision": true,
  "revisesThought": 2
}
```

### 3. 动态调整深度

根据问题复杂度灵活增加或减少思考步骤：

```json
{
  "thought": "这个问题比预期复杂，需要更多分析",
  "needsMoreThoughts": true,
  "totalThoughts": 8
}
```

## 使用场景

### Codex 自动使用

遇到以下类型问题时，Codex 会自动启用 Sequential Thinking：

- 多步骤推理问题
- 需要权衡多种方案的决策
- 复杂架构设计
- 涉及多个相互关联因素的分析

### 手动调用

```
请使用顺序思维来分析这个设计方案的优缺点
```

```
帮我逐步推理这个 bug 的可能原因
```

## 示例：复杂问题分解

**问题**："设计一个支持百万级用户的实时聊天系统"

```
思考 1: 分析核心需求 — 实时性、可扩展性、消息持久化
思考 2: 评估 WebSocket vs SSE vs 长轮询方案
思考 3: 设计消息分发架构（发布-订阅模式）
思考 4: 考虑水平扩展（Redis Cluster + 负载均衡）
思考 5: 消息存储策略（冷热数据分离）
思考 6: 安全考虑（认证、加密、限流）
思考 7: 综合评估并确认最终方案
```

## 审批建议

Sequential Thinking 为纯本地推理操作，无副作用，建议自动审批：

```toml
[approval]
auto_approve = [
  "mcp__sequential_thinking_sequentialthinking",
]
```

## 最佳实践

1. **允许深度思考**：复杂问题时增加 `totalThoughts` 上限
2. **鼓励分支探索**：不要只走一条路径
3. **及时修正**：发现问题立即修订而非继续错误方向
4. **有效终止**：当思考足够充分时设置 `nextThoughtNeeded: false`
