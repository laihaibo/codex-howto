---
title: security-scan
description: 仓库范围或路径范围的安全扫描
---

# security-scan

仓库范围或指定路径的安全扫描技能。

## 触发条件

```
> 扫描这个仓库的安全问题
> 对 src/ 目录运行安全扫描
> 检查这个项目的安全状态
```

## 扫描内容

- 安全漏洞（注入、XSS 等）
- 配置错误
- 硬编码_SECRET
- 依赖项漏洞

## 使用方式

1. 进入需要扫描的项目目录
2. 在对话中输入扫描指令
3. 等待扫描结果
4. 逐个审查发现项

## 与插件的配合

Codex Security 插件提供完整的扫描-修复-追踪工作流：

```
threat-model → security-scan → finding-discovery → validation → fix-finding → track-findings
```
