---
title: 安全实践
description: Codex 使用过程中的沙箱模型、信任级别和代码安全指南
---

# 安全实践

本章涵盖两个层面：**如何保护自己免受 AI 误操作影响**（沙箱/信任），以及**如何让 AI 生成更安全的代码**。

---

## 第一部分：运行时安全（保护自己）

### 理解沙箱模型

Codex 的沙箱系统控制它在你的机器上能做什么：

| 模式 | 文件读取 | 文件写入 | 命令执行 | 网络访问 |
|------|---------|---------|---------|---------|
| 信任模式 (trusted) | ✅ 允许 | ✅ 允许 | ✅ 自动 | ✅ 允许 |
| 沙箱模式 (untrusted) | ✅ 允许 | ⚠️ 审批 | ⚠️ 审批 | ⚠️ 审批 |

> **关键概念**：信任级别按项目目录配置。信任一个目录意味着"我接受 Codex 在该目录中执行任何操作"。

### 信任级别配置

```toml
# ~/.codex/config.toml
[projects."/home/haha/codes/my-app"]
trust_level = "trusted"

[projects."/tmp/downloads"]
trust_level = "untrusted"
```

### 何时信任 vs 何时不信任

#### ✅ 应该标记为 trusted 的场景

- 自己长期维护的项目
- 团队共享的内部代码库
- CI/CD 环境的临时构建目录

#### ❌ 应该保持 untrusted 的场景

- 从外部下载的代码
- 来自客户的示例代码
- 不确定安全性的开源项目
- 系统目录（`/etc`、`/usr` 等）

### 审批流程

当操作需要审批时，Codex 会显示：

```
⚠️ 需要审批：执行命令 rm -rf node_modules
  原因：项目信任级别为 untrusted
  是否允许？ [y/N]
```

决策建议：
- **低风险操作**（`git status`、`npm test`）→ 批准
- **中风险操作**（文件删除、文件覆盖）→ 确认意图后决定
- **高风险操作**（`rm -rf`、修改系统文件）→ 拒绝并手动执行

### 安全使用清单

- [ ] 仅对了解的项目标记为 `trusted`
- [ ] 定期审查 `config.toml` 中的信任项目列表
- [ ] 不在对话中粘贴 API 密钥或密码
- [ ] 使用 Secret Scanning 防止密钥泄露
- [ ] 定期更新 Codex 以获得最新的安全修复

---

## 第二部分：代码安全（编写更安全的代码）

### 在提示词中加入安全约束

```
> 实现用户登录 API：
> - 使用 bcrypt 进行密码哈希（salt rounds ≥ 12）
> - 防止 SQL 注入（使用参数化查询）
> - 限制登录频率（每分钟最多 5 次）
> - 不在错误消息中泄露用户是否存在
```

### 常见安全审查关注点

| 风险类型 | AI 常犯的错误 | 提示词修正 |
|---------|------------|----------|
| 输入验证 | 忘记 sanitize | "所有用户输入必须经过 sanitize 处理" |
| 认证 | 弱密码策略 | "遵循 OWASP 认证最佳实践" |
| 加密 | 使用明文存储 | "敏感数据使用 AES-256 加密" |
| 错误处理 | 泄露内部信息 | "错误消息不暴露内部实现细节" |

### 使用 Codex Security 插件

Codex Security 插件提供自动化的安全扫描能力：

| 扫描类型 | 触发方式 | 适用场景 |
|---------|---------|---------|
| 仓库安全扫描 | "扫描这个仓库的安全问题" | 日常安全审计 |
| 深度安全扫描 | "深度安全分析" | 发布前最终检查 |
| 差异扫描 | "检查这次变更的安全性" | PR 安全审查 |

::: tip 何时用 Codex Security 插件 vs 普通提示词
- **Codex Security 插件**：全面系统性扫描，包括攻击路径分析、漏洞验证
- **普通提示词 + 安全约束**：开发过程中的增量安全控制，在编写代码时就确保安全
:::

### Secret Scanning

Codex 会自动扫描提交中的密钥和令牌：

```
> 扫描最近 5 次提交中是否包含密钥
> 帮我检查这个 PR 中是否有硬编码的 API key
```

如果发现密钥泄露：

1. 立即撤销已泄露的密钥
2. 使用 `git filter-branch` 或 `BFG` 从历史中移除
3. 将密钥移至环境变量或密钥管理服务

### 防御性编程提示模板

```
请重构 @src/utils/api.ts 中的错误处理：
- 所有外部输入视为不可信
- 对 API 返回数据进行类型验证
- 添加合理的超时和重试策略
- 敏感信息不出现在错误日志中
```

## 安全参考资料

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — Web 安全风险清单
- [CWE Top 25](https://cwe.mitre.org/top25/) — 软件弱点分类
- [Security Skills 文档](/skills/security-overview/) — Codex Security 插件工作流
- [Secret Scanning 工具](/mcp/github/) — GitHub Secret Scanning API

## 下一步

- [工作模式详解](/guide/work-modes) — 配置信任级别
- [AGENTS.md 项目配置](/guide/agents-md-guide) — 在项目中嵌入安全约定
- [Codex Security 插件](/plugins/codex-security/) — 全面安全扫描工具
