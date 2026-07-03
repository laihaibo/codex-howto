---
title: track-findings
description: 将验证后的安全发现追踪到 Linear、Jira、GitHub Issues
---

# track-findings

追踪验证后的安全发现到项目管理工具的技能。

## 触发条件

```
> 把这个漏洞追踪到 Jira
> 在 GitHub Issues 中创建安全工单
> 追踪所有高危发现到 Linear
```

## 支持平台

- **Linear**：创建安全工单并分配优先级
- **Jira**：同步到现有工作流
- **GitHub Issues**：直接在仓库 Issues 中追踪
- **GitHub Security Advisories**：起草安全公告

## 工作流

1. 选择要追踪的发现（单个或批量最多 25 个）
2. 检查重复项
3. 预览工单内容
4. 确认后创建
5. 返回追踪结果和链接

```bash
> 将发现 ID-001 到 ID-005 追踪到 GitHub Issues
> 批量追踪所有高危发现到 Jira 的 SEC 项目
```
