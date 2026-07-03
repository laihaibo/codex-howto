---
title: skill-installer - 技能安装
description: 从精选列表或 GitHub 仓库安装 Codex 技能到本地环境
---

# skill-installer - 技能安装

`skill-installer` 技能帮助你发现、选择和安装 Codex 技能，从精选列表或外部 GitHub 仓库将新技能引入你的开发环境。

## 何时使用

以下场景适合触发 `skill-installer` 技能：

- 浏览可安装的精选技能列表
- 从 GitHub 仓库安装技能
- 了解当前已安装的技能
- 发现和推荐新的有用技能

## 安装方式

Codex 技能支持两种安装来源：

### 1. 精选列表（Curated List）

Codex 维护了一系列高质量的可安装技能，你可以直接从中选择安装。

```
展示所有可安装的技能列表
安装 canvas-design 技能
安装 code-reviewer 技能
有哪些与前端开发相关的技能？
```

### 2. GitHub 仓库

你也可以从公共或私有 GitHub 仓库安装技能：

```
从 https://github.com/xxx/my-skill 安装技能
安装这个私有仓库的技能：ssh://git@github.com/org/skill.git
```

## 安装位置

所有用户安装的技能统一存储在 `$CODEX_HOME/skills/` 目录下：

```
$CODEX_HOME/
└── skills/
    ├── canvas-design/
    │   └── SKILL.md
    ├── code-reviewer/
    │   └── SKILL.md
    └── my-custom-skill/
        ├── SKILL.md
        └── scripts/
```

其中 `$CODEX_HOME` 通常为 `~/.codex`。

> **注意**：不要将所有技能混放在同一目录下，每个技能应有独立的子目录。

## 使用示例

### 浏览和选择

```
列出所有可以安装的技能
有哪些与 React 开发相关的技能？
展示前端设计相关的可安装技能
帮我找到能提升代码质量的工具技能
```

### 安装技能

```
安装 defuddle 技能
安装 webapp-testing 技能
安装 magicpath 技能
```

### 从 GitHub 安装

```
从这个仓库安装技能：https://github.com/user/codex-skill-demo
安装这个技能：https://github.com/obsidian-cli/obsidian-skill
```

### 验证安装

```
哪些技能已经安装好了？
检查 skill-creator 是否安装成功
安装失败了，能帮我排查一下吗？
```

## 技能发现

如果你不知道有什么技能可用，可以通过以下方式探索：

### 1. 列出已安装技能

Codex 每次会话开始时会列出所有可用技能（包括内置和已安装的）。

### 2. 使用分类探索

按类别查找技能：

| 类别 | 示例技能 |
|------|----------|
| **前端开发** | `frontend-design`, `react-best-practices`, `shadcn` |
| **设计** | `canvas-design`, `ui-ux-pro-max`, `imagegen` |
| **开发流程** | `pr-creator`, `code-reviewer`, `coderabbit` |
| **集成工具** | `obsidian-cli`, `sentry`, `webhook` |
| **文档** | `openai-docs`, `defuddle`, `json-canvas` |

### 3. 搜索关键词

在精选列表中搜索特定功能：

```
搜索与数据库相关的技能
有哪些代码分析类的技能？
有处理 Markdown 的技能吗？
```

## 安装后使用

安装完成后，Skill 会在下次 Codex 会话中自动可用。你可以：

- 通过名称直接引用：`$canvas-design`
- 通过任务描述触发：与 Skill 描述匹配的任务会自动激活
- 查看 Skill 详情：Codex 会展示 Skill 的用途说明

## 最佳实践

1. **验证来源** — 从 GitHub 安装时，确认仓库的可信度
2. **检查评分** — 精选列表中带有 Source Reputation 和 Benchmark Score 的技能更可靠
3. **查看代码片段** — Code Snippet 数量多的技能通常更完善
4. **按需安装** — 不要一次性安装太多技能，避免触发冲突

## 相关技能

- [skill-creator](/skills/skill-creator/) — 创建自定义技能
- [find-skills](/skills/find-skills/) — 交互式发现新技能
- [plugin-creator](/skills/plugin-creator/) — 创建包含技能的插件
