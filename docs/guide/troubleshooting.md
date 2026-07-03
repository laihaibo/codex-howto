---
title: 故障排除
description: Codex CLI 常见问题的诊断和解决方案
---

# 故障排除

本章汇总了使用 Codex CLI 时最常见的错误场景及其解决方案。

## 启动问题

### `command not found: codex`

安装后无法找到 `codex` 命令：

```bash
# 检查全局 npm 路径
npm config get prefix

# 确保路径在 PATH 中
export PATH="$(npm config get prefix)/bin:$PATH"

# 永久生效（添加到 ~/.bashrc 或 ~/.zshrc）
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.bashrc
```

### `EACCES` 权限错误

npm 全局安装时出现权限错误：

```bash
# 方案 1：修改 npm 前缀
mkdir ~/.npm-global
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH

# 方案 2：使用 Node 版本管理器（推荐）
# 安装 nvm 后使用：
nvm install node
npm install -g @openai/codex
```

### 版本不匹配

`codex --version` 显示的版本与预期不符：

```bash
# 强制重新安装
npm uninstall -g @openai/codex
npm install -g @openai/codex@latest
```

## 认证问题

### `Authentication failed` / `401 Unauthorized`

```bash
# 重新登录
codex login

# 或刷新 API 密钥
export OPENAI_API_KEY="your-new-key"
echo 'export OPENAI_API_KEY="your-new-key"' >> ~/.bashrc
```

### `403 Forbidden`

检查当前订阅是否包含请求的模型：

```bash
# 切换到允许的模型
CODEX_MODEL="gpt-4o-mini" codex "hello"
```

### `Token expired`

```bash
# 重新认证
codex login

# 验证凭据文件权限
ls -la ~/.codex/auth.json
chmod 600 ~/.codex/auth.json
```

## MCP 服务器问题

### 服务器启动失败

| 错误 | 原因 | 解决方案 |
|------|------|---------|
| `Connection refused` | 服务进程未启动 | 检查 `command` 和 `args` 是否正确 |
| `Timeout` | 启动超时 | 增加 `startup_timeout_sec` |
| `ENOENT` | 命令不存在 | 确认可执行文件已安装并在 PATH 中 |

### 诊断步骤

```bash
# 1. 手动测试 MCP 命令是否工作
npx -y @upstash/context7-mcp@latest

# 2. 验证 uvx 可用
uvx --version

# 3. 检查环境变量
echo $GITHUB_PAT_TOKEN

# 4. 增加超时
# 在 config.toml 中：
# startup_timeout_sec = 120
```

### 工具不可用

MCP 服务器启动但工具列表为空：

1. 等待服务器完全启动（可能需要几秒）
2. 检查工具审批模式是否设置为 `deny`：
   ```toml
   # 检查是否有误配置的 deny
   [mcp_servers.my_server.tools.some_tool]
   approval_mode = "deny"  # 改为 "approve" 或删除此行
   ```

## 模型问题

### `Model not found`

```bash
# 检查模型名称拼写
codex config show model

# 检查模型提供商是否配置
codex config show model_providers
```

### 响应质量差

| 现象 | 可能原因 | 解决方案 |
|------|---------|---------|
| 幻觉代码 | 模型能力不足 | 切换到更强的模型 |
| 不遵循指令 | 提示词过于模糊 | 提供更具体的上下文和约束 |
| 输出截断 | 达到上下文窗口限制 | 用更少的文件、更短的提示 |

### 推理速度慢

```toml
# 降低推理深度
model_reasoning_effort = "medium"

# 切换到更快的模型
model = "o4-mini"
```

## 文件操作问题

### `Sandbox denied` / `需要审批`

Codex 拒绝执行文件写入或命令：

```bash
# 临时使用强制沙箱模式
codex --sandbox

# 或解除沙箱（信任模式）
codex --no-sandbox

# 或配置项目信任
# ~/.codex/config.toml:
[projects."/path/to/project"]
trust_level = "trusted"
```

### 文件变更未保存

检查：
1. Codex 是否有写权限（沙箱限制）
2. 编辑器是否有文件锁定（关闭冲突的程序）
3. 磁盘空间是否充足

## 沙箱与权限

### 理解权限提示

```
⚠️  需要审批：执行命令 rm -rf node_modules
   原因：项目信任级别为 untrusted
   是否允许？ [y/N]
```

遇到此提示时：
- 如果是预期操作 → 按 `y` 确认
- 如果操作有风险 → 按 `N` 拒绝
- 如果经常遇到 → 考虑将项目标记为 `trusted`

### 重置权限决策

Codex 会记住你的审批决策。如需重置：

```bash
# 删除会话缓存（平台相关）
rm -rf ~/.codex/sessions/
```

## 网络问题

### 连接超时

```bash
# 检查代理设置
echo $HTTP_PROXY
echo $HTTPS_PROXY

# 如果需要代理
export HTTPS_PROXY=http://your-proxy:8080
```

### 提供商不可用

```bash
# 切换到备用提供商
MODEL=gpt-4o codex "hello"

# 检查 API 状态页面
# OpenAI: https://status.openai.com
```

## 调试技巧

### 查看详细日志

```bash
# --verbose 标志输出详细信息
codex --verbose "重构这个模块"

# 查看 MCP 通信日志
# 日志位置可能因平台而异
```

### 干净重启

问题持续时，尝试干净重启：

```bash
# 1. 清除配置
mv ~/.codex/config.toml ~/.codex/config.toml.bak

# 2. 重新配置
codex config edit

# 3. 重新测试
codex "Hello, world"
```

## 获取帮助

如果以上方案不能解决问题：

1. 运行 `codex --help` 查看完整命令列表
2. 检查 [GitHub Issues](https://github.com/openai/codex/issues)
3. 在 Codex 交互模式中描述问题，它会提供针对性的建议

## 下一步

- [配置详解](/guide/configuration) — 了解所有配置选项
- [命令参考](/guide/commands) — 查看所有 CLI 标志
- [MCP 系统](/guide/mcp-system) — 排查 MCP 相关问题
