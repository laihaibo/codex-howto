---
title: AGENTS.md 项目配置
description: 使用 AGENTS.md 为 Codex 提供项目特定的指令和上下文信息
---

# AGENTS.md 项目配置

AGENTS.md 文件让你能为特定项目目录提供持久化的指令，Codex 在进入该目录时会自动加载这些指令。

## 什么是 AGENTS.md

AGENTS.md 是一种项目级配置文件，用于告诉 Codex：

- 项目的编码规范和风格约定
- 目录结构和模块组织方式
- 特定框架或工具的使用模式
- 团队的工作流程约定
- 安全注意事项和限制

::: tip 设计理念
AGENTS.md 就像给新入职工程师的「入职指南」——它提供 Codex 作为通用模型可能不知道的项目专属知识。
:::

## 文件位置

AGENTS.md 文件可以放置在项目目录树中的任何位置。Codex 会从当前工作目录开始向上查找，并在每次会话开始时加载找到的所有 AGENTS.md 文件。

```
my-project/
├── AGENTS.md                    # 根级指令（所有子目录继承）
├── src/
│   ├── AGENTS.md                # src 目录特定指令
│   ├── components/
│   │   └── AGENTS.md            # 组件目录特定指令
│   └── utils/
│       └── AGENTS.md            # 工具函数目录特定指令
└── docs/
    └── AGENTS.md                # 文档目录特定指令
```

### 嵌套优先级

当存在多个 AGENTS.md 文件时，离当前工作目录最近的文件优先级更高。这意味着你可以在子目录中覆盖根级的指令。

## 与 config.toml 的关系

AGENTS.md 和 `~/.codex/config.toml` 中的信任配置共同作用：

| 配置来源 | 作用 | 优先级 |
|---------|------|--------|
| `config.toml` `[projects.*]` | 定义操作权限（文件读/写、命令执行） | 基础信任层 |
| 项目根级 AGENTS.md | 定义全局指令和约定 | 项目上下文层 |
| 子目录 AGENTS.md | 定义局部覆盖指令 | 高优先级 |

::: warning 重要
AGENTS.md 中**不应**放置安全策略声明（如信任级别），这些应只在 `config.toml` 中配置。AGENTS.md 只负责提供辅助指令。
:::

## 编写指南

### 简洁至上

AGENTS.md 的内容会在每次会话开始时加载到上下文中。保持精简，只添加 Codex 不知道的信息：

```markdown
# ✅ 有价值的 AGENTS.md 内容

## 编码规范
- 使用 Composition API（Vue 3）或 Hooks（React 18+）
- 所有 API 调用通过 `src/api/` 下的统一封装
- 错误处理使用自定义 `AppError` 类

## 目录结构
- `src/composables/` — 可复用的状态逻辑
- `src/features/` — 按业务域组织的模块
- `src/lib/` — 第三方服务封装
```

```markdown
# ❌ 冗余的 AGENTS.md 内容

- JavaScript 是一种编程语言（Codex 已经知道）
- 项目使用 npm 管理依赖（通用常识）
- Git 的基本用法说明
```

### 场景化指令

根据不同场景提供针对性指令：

## 分支和提交

- 分支命名：`feature/`、`fix/`、`docs/`、`refactor/` 前缀
- 提交信息遵循 Conventional Commits 格式
- 英文提交信息，中文 PR 描述

## 测试

- 使用 Vitest，运行命令：`npm run test:unit`
- E2E 测试使用 Playwright
- 覆盖率阈值：80%

## 代码审查清单

提交前确认：
- [ ] 类型检查通过（`npm run typecheck`）
- [ ] Lint 无错误（`npm run lint`）
- [ ] 相关测试已添加
- [ ] console.log 已移除
```

## 团队协作场景

### 新成员入职

在项目根级 AGENTS.md 中加入入门信息，新成员（或 Codex）能快速了解项目：

```markdown
## 快速开始

\```bash
npm install
npm run dev
\```

项目在 http://localhost:3000 启动。

## 关键依赖

- 状态管理：Pinia
- UI 组件库：Element Plus
- HTTP 客户端：Axios（封装在 `src/api/index.ts`）
- 构建工具：Vite 5
```

### 单仓库 Monorepo

在 monorepo 中，每个子包可以有自己的 AGENTS.md：

```
monorepo/
├── AGENTS.md              # 全局约定
├── packages/
│   ├── web/
│   │   └── AGENTS.md      # Web 包特定约定
│   ├── mobile/
│   │   └── AGENTS.md      # 移动端特定约定
│   └── shared/
│       └── AGENTS.md      # 共享代码约定
```

## 常见模式

### 1. 框架特定指南

```markdown
## Vue 3 约定

- 始终使用 `<script setup>` 语法
- 组件文件使用 PascalCase 命名
- Props 使用 TypeScript interface 定义
- 事件使用 `defineEmits` 声明
```

### 2. API 调用模式

```markdown
## API 规范

\```typescript
// 标准 API 调用模式
import { api } from '@/utils/request'

interface UserListResponse {
  data: User[]
  total: number
}

export const fetchUsers = (params: QueryParams) =>
  api.get<UserListResponse>('/api/users', { params })
\```
```

### 3. 数据库约定

```markdown
## Prisma 约定

- Schema 文件：`prisma/schema.prisma`
- 迁移命令：`npx prisma migrate dev`
- 客户端位置：`src/lib/prisma.ts`
- 不直接修改迁移文件
```

## 验证 AGENTS.md 生效

启动 Codex 后，可以通过以下方式确认 AGENTS.md 已加载：

1. 让 Codex 描述项目的编码规范
2. 让 Codex 按照 AGENTS.md 中的规范生成代码
3. 检查生成的代码是否符合 AGENTS.md 中的约定

## 下一步

- [配置详解](/guide/configuration) — 了解 config.toml 配置
- [工作模式](/guide/work-modes) — 了解信任级别和权限
