---
title: Memory MCP
description: 持久知识图谱，跨会话存储实体、关系和观察结果
---

# Memory MCP

## 概述

Memory MCP 为 Codex提供**跨会话持久化记忆**能力。通过知识图谱（Knowledge Graph）结构，Codex 可以在不同对话之间记住重要信息，包括：

- **实体（Entities）**：人、地点、项目、概念等
- **关系（Relations）**：实体之间的关联
- **观察（Observations）**：关于实体的事实和属性

所有记忆存储在本地 JSON 文件中，完全由用户控制。

## 提供的工具

| 工具名称 | 操作 | 说明 |
|---------|------|------|
| `mcp__memory_create_entities` | 创建 | 批量创建新实体 |
| `mcp__memory_create_relations` | 创建 | 创建实体间关系 |
| `mcp__memory_add_observations` | 添加 | 为实体添加观察 |
| `mcp__memory_read_graph` | 读取 | 读取整个知识图谱 |
| `mcp__memory_search_nodes` | 搜索 | 按关键词搜索实体 |
| `mcp__memory_open_nodes` | 打开 | 获取指定名称的实体详情 |
| `mcp__memory_delete_entities` | 删除 | 删除实体及其关系 |
| `mcp__memory_delete_observations` | 删除 | 删除特定观察 |
| `mcp__memory_delete_relations` | 删除 | 删除实体间关系 |

## 数据结构

### 实体（Entity）

```json
{
  "name": "codex-howto",
  "entityType": "project",
  "observations": [
    "一个 VitePress 文档站点",
    "主题是关于 MCP 服务集成",
    "使用中文编写"
  ]
}
```

### 关系（Relation）

```json
{
  "from": "codex-howto",
  "relationType": "uses",
  "to": "MiniMax MCP"
}
```

### 实体类型建议

| 类型 | 说明 | 示例 |
|------|------|------|
| `person` | 人员 | 张三、产品经理 |
| `project` | 项目 | codex-howto、官网重构 |
| `technology` | 技术/工具 | React、Docker |
| `concept` | 概念/方案 | 微服务架构 |
| `organization` | 组织/团队 | 前端组、Acme Corp |

## 使用示例

### 记住项目信息

```
记住：我们的项目代号是 Phoenix，使用 Next.js 14 和 PostgreSQL
```

Codex 调用：

```json
{
  "entities": [
    {
      "name": "Phoenix",
      "entityType": "project",
      "observations": ["项目代号", "使用 Next.js 14", "使用 PostgreSQL"]
    }
  ]
}
```

### 建立实体关系

```
Phoenix 项目由张三负责，部署在 AWS 上
```

```json
{
  "relations": [
    { "from": "Phoenix", "relationType": "owned_by", "to": "张三" },
    { "from": "Phoenix", "relationType": "deployed_on", "to": "AWS" }
  ]
}
```

### 搜索记忆

```
我们之前讨论过哪个项目用的 PostgreSQL？
```

```json
{
  "query": "PostgreSQL"
}
```

### 添加新观察

```
Phoenix 的性能测试已经通过了
```

```json
{
  "observations": [
    {
      "entityName": "Phoenix",
      "contents": ["性能测试已通过"]
    }
  ]
}
```

## 跨会话持久化

Memory 数据以 JSON 文件形式存储在本地，格式如下：

```json
{
  "entities": [
    {
      "name": "Phoenix",
      "entityType": "project",
      "observations": ["使用 Next.js 14", "性能测试已通过"]
    }
  ],
  "relations": [
    { "from": "Phoenix", "relationType": "owned_by", "to": "张三" }
  ]
}
```

这意味着：

- ✅ 关闭 Codex 后记忆不丢失
- ✅ 下次启动 Codex 自动加载
- ✅ 可手动编辑 JSON 文件（注意备份）

## 审批建议

| 操作 | 建议模式 | 原因 |
|------|---------|------|
| `read_graph`, `search_nodes`, `open_nodes` | 自动审批 | 只读操作 |
| `add_observations`, `create_entities`, `create_relations` | 自动审批 | 本地写入，无风险 |
| `delete_entities`, `delete_observations`, `delete_relations` | 手动审批 | 删除操作不可逆 |

```toml
[approval]
auto_approve = [
  "mcp__memory_read_graph",
  "mcp__memory_search_nodes",
  "mcp__memory_open_nodes",
  "mcp__memory_add_observations",
  "mcp__memory_create_entities",
  "mcp__memory_create_relations",
]
require_approval = [
  "mcp__memory_delete_entities",
  "mcp__memory_delete_observations",
  "mcp__memory_delete_relations",
]
```

## 最佳实践

1. **命名规范**：使用一致的实体命名（如项目用英文代号）
2. **关系主动语态**：使用 `owns` 而非 `is_owned_by`
3. **定期清理**：删除过时实体和观察
4. **适度拆分**：复杂信息拆分为多个观察而非一个长字符串
