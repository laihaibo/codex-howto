---
title: 插件系统
description: Codex 插件系统详解，包括插件结构、安装管理和市场浏览
---

# 插件系统

插件（Plugins）是 Codex 的功能扩展包，每个插件可以包含多个技能、MCP 服务器和应用工具。插件通过统一的包格式分发和管理。

## 什么是插件

插件是一种模块化扩展机制，能够：

- 打包多个相关技能
- 提供 MCP 服务器配置
- 注册应用工具
- 通过市场统一分发

::: tip 插件 vs 技能
技能是单一功能单元，插件是技能的容器。一个插件可以包含多个技能、MCP 服务器和应用工具。
:::

## 插件结构

每个插件是一个独立文件夹，核心文件是 `.codex-plugin/plugin.json`：

```
plugin-name/
├── .codex-plugin/
│   ├── plugin.json       # 必需 - 插件清单
│   ├── .app.json         # 可选 - 应用工具配置
│   └── .mcp.json         # 可选 - MCP 服务器配置
├── skills/               # 可选 - 技能目录
│   ├── skill-a/
│   │   └── SKILL.md
│   └── skill-b/
│       └── SKILL.md
├── references/           # 可选 - 参考文档
└── assets/               # 可选 - 资源文件
```

### plugin.json 结构

插件清单文件定义了插件的元数据和组成：

```json
{
  "name": "codex-security",
  "version": "0.1.10",
  "description": "Codex Security workflows for security scans, analysis, and investigation.",
  "author": {
    "name": "OpenAI"
  },
  "homepage": "https://developers.openai.com/codex/security",
  "repository": "https://github.com/openai/plugins",
  "license": "Proprietary",
  "keywords": ["security", "code-review", "appsec"],
  "skills": "./skills/",
  "apps": "./.app.json",
  "mcpServers": "./.mcp.json",
  "interface": {
    "displayName": "Codex Security",
    "shortDescription": "Security scanning for your codebase",
    "longDescription": "Codex Security packages reusable workflows for security scans...",
    "developerName": "OpenAI",
    "category": "Security",
    "capabilities": ["Interactive", "Read", "Write"],
    "brandColor": "#111111",
    "composerIcon": "./assets/logo.png",
    "logo": "./assets/logo.png"
  }
}
```

### 字段说明

| 字段 | 必需 | 说明 |
|------|------|------|
| `name` | ✅ | 插件名称（唯一标识） |
| `version` | ✅ | 语义化版本号 |
| `description` | ✅ | 插件功能描述 |
| `author` | ✅ | 作者信息 |
| `skills` | ❌ | 技能目录路径 |
| `apps` | ❌ | 应用工具配置路径 |
| `mcpServers` | ❌ | MCP 服务器配置路径 |
| `interface` | ❌ | UI 展示信息 |

## 已安装的插件

### 完整插件列表

| 插件名称 | 说明 | 包含技能数 |
|---------|------|-----------|
| `codex-security@openai-api-curated` | 安全扫描工作流 | 10 |
| `build-web-apps@openai-api-curated` | Web 应用构建 | 6 |
| `build-web-data-visualization@openai-api-curated` | 数据可视化 | 1 |
| `remotion@openai-api-curated` | Remotion 视频创建 | 1 |
| `github@openai-api-curated` | GitHub 集成 | 4 |
| `coderabbit@openai-api-curated` | CodeRabbit 代码审查 | 1 |
| `hyperframes@openai-api-curated` | HyperFrames 视频合成 | 4 |
| `magicpath@openai-api-curated` | MagicPath UI 组件 | 1 |
| `superpowers@openai-api-curated` | 超级能力工具集 | 12 |
| `sentry@openai-api-curated` | Sentry 错误监控 | 1 |

### 各插件技能详情

#### codex-security

| 技能 | 说明 |
|------|------|
| `security-scan` | 仓库范围安全扫描 |
| `security-diff-scan` | PR/提交安全扫描 |
| `deep-security-scan` | 深度安全扫描 |
| `finding-discovery` | 发现候选安全问题 |
| `validation` | 验证安全问题 |
| `attack-path-analysis` | 攻击路径分析 |
| `threat-model` | 威胁建模 |
| `triage-finding` | 安全问题分类 |
| `fix-finding` | 修复安全问题 |
| `track-findings` | 跟踪安全问题 |

#### build-web-apps

| 技能 | 说明 |
|------|------|
| `frontend-app-builder` | 前端应用构建 |
| `frontend-testing-debugging` | 前端测试调试 |
| `react-best-practices` | React 最佳实践 |
| `shadcn` | shadcn/ui 组件管理 |
| `stripe-best-practices` | Stripe 集成指南 |
| `supabase-postgres-best-practices` | Supabase/Postgres 优化 |

#### superpowers

| 技能 | 说明 |
|------|------|
| `brainstorming` | 需求探索与设计 |
| `dispatching-parallel-agents` | 并行代理调度 |
| `executing-plans` | 计划执行 |
| `finishing-a-development-branch` | 开发分支收尾 |
| `receiving-code-review` | 接收代码审查 |
| `requesting-code-review` | 请求代码审查 |
| `subagent-driven-development` | 子代理驱动开发 |
| `systematic-debugging` | 系统化调试 |
| `test-driven-development` | 测试驱动开发 |
| `using-git-worktrees` | Git worktree 使用 |
| `using-superpowers` | 超级能力使用指南 |
| `verification-before-completion` | 完成前验证 |

#### github

| 技能 | 说明 |
|------|------|
| `github` | GitHub 通用操作 |
| `gh-address-comments` | 处理 PR 评论 |
| `gh-fix-ci` | 修复 CI 失败 |
| `yeet` | 发布更改到 GitHub |

#### hyperframes

| 技能 | 说明 |
|------|------|
| `hyperframes` | HyperFrames 视频合成 |
| `hyperframes-cli` | HyperFrames CLI 工具 |
| `hyperframes-registry` | HyperFrames 注册表 |
| `website-to-hyperframes` | 网站转视频 |

## 插件管理

### 查看已安装插件

```bash
# 列出所有插件
codex config show plugins

# 或直接查看配置文件
cat ~/.codex/config.toml
```

### 启用/禁用插件

在 `~/.codex/config.toml` 中配置：

```toml
[plugins."plugin-name@openai-api-curated"]
enabled = true   # 启用
# 或
enabled = false  # 禁用
```

### 安装新插件

```bash
# 从市场安装
codex plugins install <plugin-name>

# 从 GitHub 安装
codex plugins install github:owner/repo
```

### 卸载插件

```bash
codex plugins uninstall <plugin-name>
```

### 更新插件

```bash
# 更新单个插件
codex plugins update <plugin-name>

# 更新所有插件
codex plugins update --all
```

## 插件配置

插件通过 `~/.codex/config.toml` 中的 `[plugins.*]` 节点进行管理：

```toml
[plugins."codex-security@openai-api-curated"]
enabled = true

[plugins."build-web-apps@openai-api-curated"]
enabled = true

[plugins."build-web-data-visualization@openai-api-curated"]
enabled = true

[plugins."remotion@openai-api-curated"]
enabled = true

[plugins."github@openai-api-curated"]
enabled = true

[plugins."coderabbit@openai-api-curated"]
enabled = true

[plugins."hyperframes@openai-api-curated"]
enabled = true

[plugins."magicpath@openai-api-curated"]
enabled = true

[plugins."superpowers@openai-api-curated"]
enabled = true

[plugins."sentry@openai-api-curated"]
enabled = true
```

## 插件市场

### 浏览市场

在线浏览可用插件和技能：

- **技能市场**：[https://skills.sh/](https://skills.sh/)
- **官方插件**：通过 `codex plugins search` 搜索

### 搜索插件

```bash
# 搜索插件
codex plugins search "security"

# 搜索技能
npx skills find "react"
```

### 安装前缀

已安装的插件使用 `openai-api-curated` 前缀标识来源：

```
plugin-name@openai-api-curated
```

这表示该插件来自 OpenAI API 策划的插件集合。

## 创建自定义插件

### 使用 plugin-creator 技能

Codex 内置了 `plugin-creator` 技能来指导插件创建：

```bash
> 使用 $plugin-creator 创建一个新的插件
```

### 手动创建

1. 创建插件目录结构
2. 编写 `.codex-plugin/plugin.json`
3. 添加技能到 `skills/` 目录
4. 在配置文件中启用

::: tip 提示
建议先研究现有插件的结构作为参考，特别是 `plugin.json` 的格式。
:::

## 下一步

- [技能系统](/guide/skills-system) - 了解技能扩展机制
- [MCP 系统](/guide/mcp-system) - 学习 MCP 工具集成
- [配置详解](/guide/configuration) - 掌握高级配置
