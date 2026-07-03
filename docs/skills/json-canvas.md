---
title: json-canvas
description: 创建和编辑 JSON Canvas 文件（.canvas 格式）
---

# json-canvas

创建和编辑 JSON Canvas 文件，用于可视化画布、思维导图和流程图。

## 触发条件

```
> 创建一个思维导图
> 制作项目架构图
> 编辑 .canvas 文件
> 在 Obsidian 中创建 Canvas
```

## Canvas 结构

```json
{
  "nodes": [
    { "id": "1", "type": "text", "x": 0, "y": 0, "text": "中心主题" }
  ],
  "edges": [
    { "id": "e1", "fromNode": "1", "toNode": "2" }
  ]
}
```

## 元素类型

- **text**：文本节点
- **file**：链接到文件
- **group**：分组容器
- **link**：外部链接

## 适用场景

- Obsidian Canvas 可视化
- 项目架构图
- 思维导图
- 流程图和工作流
