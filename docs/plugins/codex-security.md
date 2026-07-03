---
title: Codex Security 插件
description: 代码安全扫描、漏洞发现、验证、攻击路径分析和修复插件
---

# Codex Security 插件

Codex Security 插件提供全面的代码安全扫描能力，帮助发现、验证和修复代码中的安全漏洞。它包含从基础扫描到深度安全分析的全套工具。

## 功能概述

- 🔍 自动发现安全漏洞候选
- ✅ 智能验证漏洞有效性
- 🗺️ 攻击路径分析追踪
- 🧠 威胁建模
- 🔧 自动修复与验证
- 📊 结果追踪与报告

## 包含的技能

### 技能列表

| 技能名称 | 描述 |
|---------|------|
| `security-scan` | 仓库范围或指定路径的安全扫描 |
| `deep-security-scan` | 深度、详尽的多遍安全扫描 |
| `security-diff-scan` | PR、提交、分支差异的安全审查 |
| `finding-discovery` | 发现候选安全漏洞 |
| `validation` | 确定候选漏洞是否有效 |
| `attack-path分析` | 追踪漏洞从源到汇的路径并校准严重性 |
| `threat-model` | 创建和更新仓库威胁模型 |
| `fix-finding` | 修复和验证已确认的安全漏洞 |
| `triage-finding` | 导入现有安全风险进行静态仓库影响分析 |
| `track-findings` | 在 Linear、Jira 或 GitHub Issues 中追踪安全发现 |

---

## 触发安全扫描

### 仓库范围扫描

对指定目录执行全面的安全扫描：

- 对整个仓库进行安全扫描（标准模式）
- 对特定目录路径进行扫描

**触发指令示例：**
- `$security-scan`
- `$security-scan src/`
- 用户描述：`扫描这个仓库的安全漏洞`

### 深度安全扫描

对仓库进行多次独立发现扫描，使用不同的威胁模型提高覆盖率：

- 多次独立发现遍历
- 工作人员特定的威胁模型
- 语义合并候选
- 规范化验证
- 攻击路径分析
- 生成报告

**触发指令示例：**
- `$deep-security-scan`
- 用户描述：`对这个仓库进行深度、详尽的安全扫描`

### 差异安全扫描

审查 Git 变更集（PR、提交、分支差异、工作树补丁）的安全问题：

- PR 安全审查
- 提交差异扫描
- 分支差异扫描
- 工作树补丁扫描

**支持的模式：**

| 模式 | 说明 | 参数 |
|------|------|------|
| `diff` | 审查差异变更 | `baseRevision` ~ `headRevision` |
| `standard` | 当前状态标准扫描 | 无额外参数 |
| `deep` | 深度扫描 | 自动多次遍历 |

---

## 扫描工作流程

Codex Security 扫描遵循以下阶段：

1. **预检（Preflight）**：检查环境能力是否满足扫描要求
2. **威胁建模（Threat Model）**：构建仓库的安全威胁模型
3. **发现（Discovery）**：自动发现候选安全漏洞
4. **验证（Validation）**：验证候选漏洞的真实性
5. **攻击路径分析（Attack Path）**：追踪漏洞的完整路径
6. **报告（Reporting）**：生成最终扫描报告

### 扫描结果说明

扫描完成后，每个发现包含以下信息：

- **标题和描述**：漏洞概述
- **严重性等级**：高/中/低
- **置信度**：确认的概率
- **影响范围**：受影响的位置
- **证据**：支持结论的证据链
- **修复建议**：推荐的修复步骤

---

## 修复漏洞

当发现被确认后，可以请求 Codex 自动修复：

**触发指令示例：**
- `$fix-finding`
- 用户描述：`修复这个 SQL 注入漏洞`

修复过程包括：
1. 生成修复代码
2. 应用修复
3. 验证修复有效性
4. 确认修复完成

---

## 追踪发现

将确认的安全漏洞追踪到 Linear、Jira 或 GitHub Issues。支持以下功能：

- 重复检查
- 预览创建内容
- 审批门控写入
- 读取确认

**触发指令示例：**
- `$track-findings`
- 用户描述：`将这个发现创建为 GitHub Issue`

---

## MCP 工具

Codex Security 插件提供以下 MCP 工具：

| 工具名称 | 功能 |
|---------|------|
| `mcp__codex_security_open_codex_security_workspace` | 创建/打开安全扫描工作区 |
| `mcp__codex_security_await_codex_security_scan_start` | 等待用户启动扫描 |
| `mcp__codex_security_get_codex_security_scan_context` | 获取扫描上下文和选中的发现 |
| `mcp__codex_security_update_codex_security_scan_progress` | 更新扫描进度 |
| `mcp__codex_security_complete_codex_security_scan` | 完成扫描并索引结果 |
| `mcp__codex_security_set_codex_security_finding_remediation` | 持久化修复状态 |
| `mcp__codex_security_open_codex_security_triage_results` | 渲染分类结果 |
| `mcp__codex_security_set_codex_security_resolved_diff` | 记录用户自由变更的 Git 版本 |

---

## 示例提示词

```
这个仓库有哪些安全漏洞？
```

```
检查最近的 PR 是否有安全问题
```

```
对 src/auth/ 进行深度安全扫描
```

```
验证这个 XSS 候选是否有效
```

```
追踪这个 SQL 注入漏洞的攻击路径
```

```
修复这个已确认的安全漏洞
```

```
将这个发现导出到 Jira
```
