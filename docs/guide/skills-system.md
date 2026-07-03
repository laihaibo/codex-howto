---
title: 技能系统
description: Codex 技能系统详解，包括技能类型、触发机制、目录结构和自定义技能创建
---

# 技能系统

技能（Skills）是 Codex 的扩展机制，通过提供特定领域的知识、工作流和工具，将通用 AI 助手转变为专业领域专家。

## 什么是技能

技能是模块化的自包含文件夹，为 Codex 提供：

- **专业工作流** - 特定领域的多步骤流程
- **工具集成** - 与特定文件格式或 API 协作的指令
- **领域知识** - 项目特定的知识、模式和业务逻辑
- **打包资源** - 脚本、参考资料和模板

::: tip 核心理念
技能就像"入职指南"——它们为 Codex 提供任何模型都无法完全拥有的程序化知识。
:::

## 技能类型

### 系统技能

随 Codex 安装的基础技能，位于 `~/.codex/skills/.system/`：

| 技能名称 | 说明 |
|---------|------|
| `imagegen` | AI 图像生成与编辑 |
| `openai-docs` | OpenAI 产品文档查询 |
| `plugin-creator` | 插件创建指南 |
| `skill-creator` | 技能创建指南 |
| `skill-installer` | 技能安装管理 |

### 用户技能

用户自行安装的技能，位于 `~/.agents/skills/`：

| 技能名称 | 说明 |
|---------|------|
| `canvas-design` | 视觉设计与艺术创作 |
| `code-reviewer` | 代码审查工作流 |
| `defuddle` | 网页内容提取 |
| `find-skills` | 技能发现与搜索 |
| `frontend-design` | 前端界面设计指南 |
| `grill-me` | 设计方案面试 |
| `json-canvas` | JSON Canvas 文件编辑 |
| `next-best-practices` | Next.js 最佳实践 |
| `obsidian-bases` | Obsidian 数据库视图 |
| `obsidian-cli` | Obsidian CLI 操作 |
| `obsidian-markdown` | Obsidian Markdown 编辑 |
| `pr-creator` | 创建 Pull Request |
| `ui-ux-pro-max` | UI/UX 设计智能 |
| `webapp-testing` | Web 应用测试工具 |

### 插件技能

通过插件包提供的技能，位于 `~/.codex/plugins/cache/` 下对应插件目录中。每个插件可以包含多个技能。

## 技能触发机制

### 自动触发

Codex 通过技能的 `description` 字段判断何时触发技能。当用户请求匹配技能描述时，Codex 会自动加载该技能。

```yaml
# SKILL.md 中的 frontmatter
---
name: code-reviewer
description: Use this skill to review code. It supports both local changes (staged or working tree) and remote Pull Requests (by ID or URL).
---
```

### 显式触发

用户可以通过 `$` 前缀显式调用技能：

```bash
> 用 $brainstorming 功能探索新的 API 设计方案
> 使用 $security-scan 检查这个仓库
> 通过 $frontend-design 重新设计这个页面
```

### 触发规则

1. **描述匹配** - Codex 读取所有技能的 `description`，判断用户意图是否匹配
2. **显式调用** - 用户通过 `$skill-name` 直接指定
3. **上下文推断** - 根据当前工作内容和对话历史推断

## 技能目录结构

每个技能是一个独立文件夹，核心文件是 `SKILL.md`：

```
skill-name/
├── SKILL.md              # 必需 - 技能定义和指令
├── agents/               # 推荐 - UI 元数据
│   └── openai.yaml       # 技能列表和标签的 UI 信息
├── scripts/              # 可选 - 可执行脚本
│   └── helper.py
├── references/           # 可选 - 参考文档
│   └── api-guide.md
└── assets/               # 可选 - 输出用资源
    └── template.png
```

### SKILL.md 结构

每个 `SKILL.md` 包含两部分：

#### 1. YAML Frontmatter（必需）

```yaml
---
name: my-skill
description: >
  描述技能的功能和触发条件。这段描述是触发技能的关键，
  需要清晰说明技能做什么以及何时使用。
---
```

- `name` - 技能名称
- `description` - 技能描述（触发依据）

#### 2. Markdown 正文（必需）

技能的具体指令和工作流，仅在技能触发后加载。

## 创建自定义技能

### 步骤 1：确定需求

首先明确技能要解决的问题：

- 是否有重复性的工作流？
- 是否需要特定领域知识？
- 是否需要外部工具或 API？

### 步骤 2：初始化技能

使用系统技能 `skill-creator` 的脚本初始化：

```bash
# 在用户技能目录下创建
cd ~/.agents/skills
mkdir my-skill
cd my-skill

# 使用初始化脚本
~/.codex/skills/.system/skill-creator/scripts/init_skill.py \
  --interface "display_name=我的技能,short_description=执行特定任务,default_prompt=使用这个技能来..."
```

### 步骤 3：编写 SKILL.md

```yaml
---
name: my-skill
description: >
  这个描述决定了何时触发技能。需要包含：
  1. 技能做什么
  2. 何时使用
  3. 触发关键词
---

# My Skill

## 工作流

### 步骤 1：准备
描述准备工作...

### 步骤 2：执行
描述执行过程...

### 步骤 3：验证
描述验证方法...
```

### 步骤 4：添加资源（可选）

```bash
# 添加脚本
mkdir scripts
# 放入 Python/Bash 脚本...

# 添加参考文档
mkdir references
# 放入参考文档...

# 添加模板资源
mkdir assets
# 放入模板文件...
```

### 步骤 5：验证技能

```bash
~/.codex/skills/.system/skill-creator/scripts/quick_validate.py ~/.agents/skills/my-skill
```

### 步骤 6：测试迭代

在实际任务中测试技能效果，根据反馈持续优化。

## 技能编写原则

### 精简至上

上下文窗口是公共资源。技能与系统提示、对话历史和其他技能共享上下文窗口。

**核心原则：Codex 本身已经很聪明。只添加它不知道的内容。**

```yaml
# ❌ 冗余 - Codex 已经知道
description: "JavaScript 是一种编程语言..."

# ✅ 有价值 - 项目特定知识
description: "本项目使用自定义的 auth 中间件，位于 src/middleware/auth.ts..."
```

### 适当的自由度

根据任务的脆弱性匹配指令的详细程度：

| 自由度 | 适用场景 | 形式 |
|--------|---------|------|
| 高 | 多种方案可行 | 文字说明 |
| 中 | 有推荐模式 | 伪代码或参数化脚本 |
| 低 | 操作易出错 | 具体脚本，少量参数 |

### 保护验证完整性

使用子代理进行前向测试时：
- 传递原始素材，而非你的结论
- 避免泄露预期答案
- 使用独立线程进行独立验证

## 技能管理

### 安装技能

```bash
# 通过 CLI 安装
codex skills install <skill-name>

# 从 GitHub 安装
npx skills add owner/repo@skill-name -g -y
```

### 搜索技能

```bash
# 搜索可用技能
codex skills search "react testing"

# 在线浏览
npx skills find react
```

### 更新技能

```bash
# 更新所有技能
npx skills update

# 检查更新
npx skills check
```

### 卸载技能

```bash
codex skills uninstall <skill-name>
```

## 技能发现

当用户询问"如何做 X"或"有没有 X 的技能"时，Codex 会：

1. 检查已安装技能中是否有匹配项
2. 搜索在线技能市场
3. 推荐合适的安装命令

浏览技能市场：[https://skills.sh/](https://skills.sh/)

## 下一步

- [插件系统](/guide/plugins-system) - 了解插件扩展机制
- [MCP 系统](/guide/mcp-system) - 学习 MCP 工具集成
- [配置详解](/guide/configuration) - 掌握高级配置
