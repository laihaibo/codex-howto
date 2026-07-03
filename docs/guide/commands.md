---
title: 命令参考
description: Codex CLI 的完整命令和参数参考，包括子命令、标志选项和常用模式
---

# 命令参考

本章提供 Codex CLI 的完整命令参考，包括所有子命令、标志选项和常用使用模式。

## 基本语法

```bash
codex [选项] [子命令] [参数]
```

## 全局标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--help` | `-h` | 显示帮助信息 |
| `--version` | `-V` | 显示版本号 |
| `--continue` | `-c` | 继续上一次的会话 |

## 启动模式

### 交互模式

启动一个新的交互式会话：

```bash
cd /path/to/project
codex
```

### 单次任务模式

执行单个任务后自动退出：

```bash
codex "创建一个 React 组件用于显示用户头像"
codex "修复 src/utils/parser.js 中的内存泄漏"
```

### 继续会话

恢复上一次的对话上下文：

```bash
codex --continue
# 或简写
codex -c
```

## 子命令

### `login` - 登录认证

登录 Codex 服务：

```bash
codex login
```

此命令会打开浏览器进行 OAuth 认证流程。

### `config` - 配置管理

查看和管理配置：

```bash
# 查看当前配置
codex config show

# 打开配置文件
codex config edit
```

### `sessions` - 会话管理

管理历史会话：

```bash
# 列出所有会话
codex sessions list

# 查看会话详情
codex sessions show <session_id>

# 删除会话
codex sessions delete <session_id>
```

### `mcp` - MCP 服务器管理

管理 MCP 服务器配置：

```bash
# 列出已配置的 MCP 服务器
codex mcp list

# 添加新的 MCP 服务器
codex mcp add <name> --command <cmd> --args <args...>

# 移除 MCP 服务器
codex mcp remove <name>
```

### `skills` - 技能管理

管理已安装的技能：

```bash
# 列出已安装的技能
codex skills list

# 搜索可用技能
codex skills search <query>

# 安装技能
codex skills install <skill-name>

# 卸载技能
codex skills uninstall <skill-name>
```

## CLI 标志和选项

### 模型相关

| 标志 | 说明 | 示例 |
|------|------|------|
| `--model <name>` | 指定模型 | `codex --model gpt-5` |
| `--provider <name>` | 指定提供商 | `codex --provider longcat` |
| `--reasoning <level>` | 推理深度 | `codex --reasoning high` |

### 行为控制

| 标志 | 说明 | 示例 |
|------|------|------|
| `--sandbox` | 强制沙箱模式 | `codex --sandbox` |
| `--no-sandbox` | 禁用沙箱 | `codex --no-sandbox` |
| `--plan` | 进入计划模式 | `codex --plan` |
| `--yes` | 自动确认所有操作 | `codex --yes` |

### 输出控制

| 标志 | 说明 | 示例 |
|------|------|------|
| `--quiet` | 静默模式 | `codex --quiet` |
| `--verbose` | 详细输出 | `codex --verbose` |
| `--json` | JSON 格式输出 | `codex --json` |

## 常用模式

### 1. 快速修复

```bash
# 修复指定文件中的问题
codex "修复 src/auth.ts 中的类型错误"

# 运行测试并修复
codex "运行测试并修复所有失败的用例"
```

### 2. 代码生成

```bash
# 创建新组件
codex "创建一个 Modal 组件，支持自定义标题和内容"

# 生成测试
codex "为 UserService 类编写单元测试"
```

### 3. 代码审查

```bash
# 审查当前更改
codex "审查我当前的代码更改"

# 审查指定文件
codex "审查 src/utils/ 目录下的所有文件"
```

### 4. 重构

```bash
# 重构指定模块
codex "将 UserService 从 class 重构为函数式风格"

# 性能优化
codex "优化 database.js 中的查询性能"
```

### 5. 文档生成

```bash
# 生成 JSDoc
codex "为 src/utils/ 下的所有函数添加 JSDoc 注释"

# 生成 README
codex "根据项目结构生成 README.md"
```

## 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `OPENAI_API_KEY` | API 密钥 | - |
| `CODEX_MODEL` | 默认模型 | 配置文件中的值 |
| `CODEX_MODEL_PROVIDER` | 默认提供商 | 配置文件中的值 |
| `CODEX_DISABLE_RESPONSE_STORAGE` | 禁用响应存储 | `false` |
| `CODEX_HOME` | 配置目录 | `~/.codex` |

## 退出码

| 退出码 | 说明 |
|--------|------|
| `0` | 成功执行 |
| `1` | 一般错误 |
| `2` | 配置错误 |
| `3` | 认证失败 |
| `4` | 网络错误 |
| `5` | 模型不可用 |
| `130` | 用户中断 (Ctrl+C) |

## 快捷键

在交互模式下可用的键盘快捷键：

| 快捷键 | 功能 |
|--------|------|
| `Enter` | 发送输入 |
| `Shift+Enter` | 插入换行 |
| `Ctrl+C` | 取消当前操作 |
| `Ctrl+D` | 退出会话 |
| `Esc` | 中断 AI 输出 |
| `↑` / `↓` | 浏览历史输入 |
| `Tab` | 自动补全 |

## 输入技巧

### 引用文件

使用 `@` 符号引用项目中的文件：

```bash
codex "@src/utils/auth.ts 添加 token 刷新逻辑"
```

### 多行输入

在交互模式下使用 `Shift+Enter` 插入换行，或者使用 heredoc：

```bash
codex "$(cat <<'EOF'
请帮我完成以下任务：
1. 创建用户注册 API
2. 添加输入验证
3. 编写单元测试
EOF
)"
```

### 管道输入

```bash
echo "解释这段代码" | codex
cat error.log | codex "分析这个错误日志"
```

## 配置文件

Codex 会在以下位置查找配置：

```
~/.codex/config.toml          # 主配置
~/.codex/auth.json            # 认证信息
~/.codex/model-catalogs/      # 模型目录
```

::: tip 提示
使用 `codex config edit` 可以快速打开配置文件进行编辑。
:::

## 下一步

- [配置详解](/guide/configuration) - 深入了解配置选项
- [工作模式](/guide/work-modes) - 了解不同模式的特点
- [技能系统](/guide/skills-system) - 学习使用技能扩展能力
