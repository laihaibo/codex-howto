---
title: Codex Security 安全技能概览
description: 统一的 Codex Security 插件技能工作流——从扫描到发现、验证、分析、修复和跟踪
---

# Codex Security 安全技能概览

Codex Security 插件提供了一整套安全扫描和漏洞管理技能，覆盖了从代码审计到漏洞修复的完整生命周期。这些技能相互协作，形成系统化的安全工作流。

## 完整工作流

```
威胁建模 (threat-model)
    ↓
代码扫描 (security-scan / deep-security-scan / security-diff-scan)
    ↓
发现候选漏洞 (finding-discovery)
    ↓
验证漏洞有效性 (validation)
    ↓
分析攻击路径 (attack-path-analysis)
    ↓
分级与分类 (triage-finding)
    ↓
修复漏洞 (fix-finding)
    ↓
跟踪与报告 (track-findings)
```

> **核心理念**：`threat-model` 贯穿整个工作流，随着扫描和发现的深入持续更新威胁模型。

## 技能总览

| 技能 | 阶段 | 用途 |
|------|------|------|
| `threat-model` | 全流程 | 创建、更新、维护仓库威胁模型 |
| `security-scan` | 扫描 | 仓库范围或指定路径的安全扫描 |
| `deep-security-scan` | 扫描 | 深度、多遍、穷举式仓库扫描 |
| `security-diff-scan` | 扫描 | PR/提交/分支差异的安全审查 |
| `finding-discovery` | 发现 | 发现候选安全漏洞 |
| `validation` | 验证 | 判断候选漏洞是否真实有效 |
| `attack-path-analysis` | 分析 | 从源到汇追踪漏洞并校准严重性 |
| `triage-finding` | 分级 | 对已确认漏洞进行分类和优先级排序 |
| `fix-finding` | 修复 | 修复并验证安全漏洞 |
| `track-findings` | 跟踪 | 将漏洞同步到 Linear/Jira/GitHub Issues |

## 详细工作流

### 第一阶段：威胁建模

**技能**：`threat-model`

在任何安全扫描开始之前，先建立仓库的威胁模型。威胁模型定义了：

- 仓库的攻击面（API 端点、数据库访问、文件操作等）
- 信任边界（用户输入、外部服务、内部模块等）
- 已知的安全假设和约束

威胁模型在扫描过程中会被**持续更新**——随着发现的深入，模型会变得更加精确。

```
适用场景：
- 首次对仓库进行安全评估
- 仓库架构发生重大变更后
- 扫描过程中发现需要更新模型的线索

触发方式：
- "为这个仓库创建威胁模型"
- "更新安全威胁模型"
- "$threat-model"
```

### 第二阶段：代码扫描

Codex Security 提供三种扫描模式，适用于不同场景：

#### security-scan — 标准扫描

对整个仓库或指定路径进行安全审计。适合日常安全检查。

```
触发方式：
- "对当前仓库进行安全扫描"
- "扫描 src/ 目录的安全问题"
- "帮我审计一下这个项目的安全状况"
- "$security-scan"
```

#### deep-security-scan — 深度扫描

进行多遍、穷举式的重复独立扫描。每遍使用不同的威胁模型视角，最后语义合并所有结果，运行综合验证和攻击路径分析。

```
适用场景：
- 需要最高级别的安全保障
- 对关键代码库进行全面审计
- 标准扫描可能遗漏深层漏洞时
- 发布前的最终安全审查

特点：
- 多次独立发现过程
- 每遍使用不同的威胁模型
- 语义合并去重
- 综合验证和攻击路径分析

触发方式：
- "对这个仓库进行深度安全审计"
- "彻底扫描所有安全漏洞"
- "$deep-security-scan"
```

#### security-diff-scan — 差异扫描

针对 Git 变更集进行安全审查，包括 PR、提交、分支差异、工作树补丁等。

```
适用场景：
- 提交代码前自查
- PR 安全审查
- 评估变更引入的安全风险

触发方式：
- "审查这个 PR 的安全性"
- "检查最近几次提交有没有安全问题"
- "这个分支的代码变更有没有引入漏洞？"
- "$security-diff-scan"
```

### 第三阶段：发现候选漏洞

**技能**：`finding-discovery`

扫描完成后，系统会生成一组**候选安全发现**。这些是疑似漏洞，需要进一步验证。

```
能力：
- 识别潜在的安全弱点
- 标记可能的注入点、权限问题、数据泄露等
- 生成发现候选项

触发方式：
- "发现这个仓库中的安全漏洞"
- "扫描潜在的安全问题"
- "$finding-discovery"
```

### 第四阶段：验证

**技能**：`validation`

对每个候选发现进行技术验证，判断其是否构成真正的安全漏洞。

```
验证内容：
- 数据流是否真实可达
- 是否存在有效的安全防护
- 漏洞的触发条件是否可行
- 误报排查

触发方式：
- "验证这个候选漏洞是否有效"
- "确认这个安全问题是否真实"
- "$validation"
```

### 第五阶段：攻击路径分析

**技能**：`attack-path-analysis`

对验证有效的漏洞，追溯从**输入源（source）** 到 **危险操作（sink）** 的完整路径。

```
分析维度：
- 路径可达性
- 利用难度
- 影响范围
- 严重性校准

触发方式：
- "分析这个漏洞的攻击路径"
- "追踪从输入到危险操作的完整链路"
- "$attack-path-analysis"
```

### 第六阶段：分级与分类

**技能**：`triage-finding`

对已确认的安全发现进行静态影响分类。适用于导入外部安全发现和对 backlog 中的漏洞进行评估。

```
数据来源：
- SARIF 格式输出
- CVE 公告
- 安全公告
- 扫描器工单
- Bug Bounty 报告
- Codex Security 内部发现

触发方式：
- "检查这个 CVE 对当前仓库的影响"
- "分析这个 SARIF 报告中的发现"
- "导入这些扫描结果并进行分类"
- "$triage-finding"
```

### 第七阶段：修复漏洞

**技能**：`fix-finding`

对已确认或高可信度的漏洞进行修复和验证。

```
修复流程：
1. 生成修复方案
2. 应用代码变更
3. 验证修复效果
4. 确保不引入回归

触发方式：
- "修复这个安全漏洞"
- "修补这个注入问题"
- "解决这个权限漏洞"
- "$fix-finding"
```

### 第八阶段：跟踪与报告

**技能**：`track-findings`

将发现的漏洞同步到项目管理系统进行跟踪和管理。

```
支持的目标系统：
- Linear
- Jira
- GitHub Issues
- GitHub Security Advisories（草稿）

能力：
- 重复检查，避免重复录入
- 精确预览，确认后再写入
- 批量处理（最多 25 个发现）

触发方式：
- "把这些漏洞同步到 Linear"
- "创建 Jira 工单跟踪这些问题"
- "生成 GitHub Issue 记录这些发现"
- "$track-findings"
```

## 工作流选择指南

| 场景 | 推荐技能 | 说明 |
|------|----------|------|
| 常规仓库安全审计 | `security-scan` | 对整个仓库进行标准安全扫描 |
| 关键代码库全面审计 | `deep-security-scan` | 多遍扫描 + 语义合并，确保无遗漏 |
| PR 安全审查 | `security-diff-scan` | 只审查变更部分，高效精确 |
| 处理外部漏洞报告 | `triage-finding` | 导入外部发现，评估本地影响 |
| 修复已知漏洞 | `fix-finding` | 生成修复方案，应用补丁 |
| 安全工单追踪 | `track-findings` | 同步到项目管理工具 |
| 完整安全评估 | 全工作流 | threat-model → scan → discovery → validation → analysis → fix → track |

## 相关技能

| 技能 | 链接 |
|------|------|
| 安全扫描 | [security-scan](/skills/security-scan/) |
| 深度扫描 | [deep-security-scan](/skills/deep-security-scan/) |
| 差异扫描 | [security-diff-scan](/skills/security-diff-scan/) |
| 漏洞发现 | [finding-discovery](/skills/finding-discovery/) |
| 漏洞验证 | [validation](/skills/validation/) |
| 攻击路径分析 | [attack-path-analysis](/skills/attack-path/) |
| 威胁建模 | [threat-model](/skills/threat-model/) |
| 漏洞修复 | [fix-finding](/skills/fix-finding/) |
| 漏洞分级 | [triage-finding](/skills/triage-finding/) |
| 漏洞跟踪 | [track-findings](/skills/track-findings/) |
| 插件概览 | [codex-security](/plugins/codex-security/) |
