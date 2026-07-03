---
title: subagent-driven-development
description: 使用子代理执行含有独立任务的实施计划
---

# subagent-driven-development

通过子代理执行实施计划中的独立任务。

## 触发条件

```
> 用子代理执行这个计划
> $subagent-dev 并行实现这些功能模块
```

## 工作模式

将实施计划中的步骤分配给独立的子代理：

1. **计划分解**：识别可独立完成的步骤
2. **创建子代理**：为每个独立任务生成子代理
3. **监控进度**：收集各子代理的结果
4. **整合结果**：合并所有子代理的输出

## 与 dispatching-parallel-agents 配合

对于大型任务，先使用 dispatching-parallel-agents 安排，再使用 subagent-driven-development 执行。
