---
title: plugin-creator - 插件创建
description: 创建和搭建 Codex 插件目录，包括 .codex-plugin/plugin.json 和个人市场条目
---

# plugin-creator - 插件创建

`plugin-creator` 技能提供了创建新 Codex 插件的完整指导，包括插件目录结构搭建、清单文件配置和个人市场条目生成。

## 何时使用

以下场景适合触发 `plugin-creator` 技能：

- 创建新的 Codex 插件
- 添加可选的插件结构和文件
- 生成或更新个人市场条目
- 在开发过程中更新已有本地插件
- 通过 CLI 驱动的缓存清除和重装流程更新插件

## 插件结构

每个 Codex 插件都有一个标准目录结构：

```
my-plugin/
├── .codex-plugin/
│   └── plugin.json          # 必须 - 插件清单文件
├── skills/                   # 可选 - 插件提供的技能
│   └── my-skill/
│       └── SKILL.md
├── .codex-marketplace.json  # 可选 - 个人市场条目
└── README.md                 # 插件说明文档
```

### plugin.json 清单文件

`plugin.json` 是插件的核心配置文件：

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "插件功能描述",
  "author": "你的名字",
  "skills": [
    "skills/my-skill"
  ]
}
```

#### 必要字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `name` | string | 插件名称（必须唯一） |
| `version` | string | 语义化版本号 |
| `description` | string | 插件功能简要描述 |
| `skills` | array | 包含的技能路径列表 |

#### 可选字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `author` | string | 插件作者 |
| `license` | string | 许可证类型 |
| `homepage` | string | 项目主页 URL |

## 使用示例

### 创建新插件

```
帮我创建一个名为 my-security-plugin 的插件
创建一个前端开发辅助插件，包含代码审查和组件生成技能
搭建一个新的视频处理插件目录结构
```

### 生成市场条目

```
为 my-plugin 生成个人市场条目
更新插件的市场元数据
添加插件到个人市场
```

### 更新已有插件

```
在开发中更新 my-plugin 的 SKILL.md
为插件添加新的技能目录
修改插件的版本号和描述
更新市场条目中的技能列表
```

## 开发流程

### 1. 创建插件目录

使用 `plugin-creator` 的模板快速搭建：

```
创建一个包含一个技能的基础插件
创建一个带多个技能和 MCP 服务的完整插件
```

### 2. 配置清单文件

编辑 `.codex-plugin/plugin.json`：

- 设置正确的插件名称和版本
- 声明所有技能路径
- 添加描述和作者信息

### 3. 编写技能

在 `skills/` 目录下创建技能，每个技能包含自己的 `SKILL.md`。

### 4. 生成市场条目

创建 `.codex-marketplace.json`，包含：

- 插件名称和描述
- 版本和更新时间
- 提供的技能列表
- 安装配置

### 5. 安装测试

使用 CLI 命令安装并测试插件：

```bash
codex plugin install ./my-plugin
```

### 6. 缓存清除与重装

开发过程中更新插件时，使用 CLI 驱动的缓存清除和重装流程：

```bash
codex plugin rebuild my-plugin
codex plugin install ./my-plugin --force
```

## 最佳实践

### 命名规范

- **使用小写字母和连字符** — 如 `my-cool-plugin`
- **名称要有描述性** — 让人一眼看出插件用途
- **避免与已有插件重名** — 安装前检查名称唯一性

### 技能组织

- **一个插件可包含多个技能** — 相关功能归类在同一插件下
- **每个技能独立目录** — 不要将所有 SKILL.md 放在一起
- **渐进式披露** — 技能内部遵循引用和脚本的最佳实践

### 版本管理

- **遵循语义化版本** — `主版本.次版本.修订版本`
- **更新时递增版本号** — 每次发布都更新
- **记录变更日志** — 在 README 或 CHANGELOG 中说明

### 市场条目

- **填写完整信息** — 名称、描述、作者、技能列表
- **保持最新** — 插件更新后同步更新市场条目
- **分类清晰** — 帮助其他用户快速找到你的插件

## 相关技能

- [skill-creator](/skills/skill-creator/) — 创建插件中的单个技能
- [skill-installer](/skills/skill-installer/) — 安装和使用插件提供的技能
- [skills 概述](/skills/) — 了解技能系统如何与插件协同工作
- [插件概览](/plugins/) — 查看更多插件相关文档
