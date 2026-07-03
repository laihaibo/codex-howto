---
title: CI/CD 集成
description: 在非交互环境中集成 Codex CLI，包括 GitHub Actions、GitLab CI 等场景
---

# CI/CD 集成

Codex 支持非交互模式（单次任务），可以无缝集成到 CI/CD 流水线中。

## 非交互模式

在非交互模式中，Codex 执行单一任务后退出，并返回退出码：

```bash
codex "修复 src/utils/parser.ts 中的类型错误"
echo $?  # 0 = 成功，非 0 = 失败
```

### 退出码参考

| 退出码 | 含义 | 处理方式 |
|-------|------|---------|
| `0` | 任务成功完成 | 继续流水线 |
| `1` | 一般执行失败 | 查看日志，判断是否为预期问题 |
| `2` | 配置错误 | 检查 config.toml 和环境变量 |
| `3` | 认证失败 | 检查 API 密钥或重新登录 |
| `4` | 网络错误 | 检查网络连接和提供商状态 |
| `5` | 模型不可用 | 检查模型名称和提供商配置 |
| `130` | 用户中断 (Ctrl+C) | 被外部终止 |

### 输出格式控制

通过 CLI 标志控制输出，便于 CI 日志解析：

```bash
# 详细输出（便于调试）
codex --verbose "审查当前 diff 的安全问题"

# 静默模式（仅显示 AI 输出）
codex --quiet "为这个函数写一个简短的描述"

# JSON 格式（便于程序解析）
codex --json "分析这个文件的代码质量"
```

## GitHub Actions 集成

### 基础工作流

```yaml
# .github/workflows/codex-review.yml
name: Codex Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Codex
        run: npm install -g @openai/codex

      - name: Run Codex Review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex --verbose \
            "审查这个 PR 的变更：重点关注性能隐患、安全漏洞和类型安全性"
```

### 带信任级别的工作流

CI 环境中通常将项目目录标记为受信任：

```yaml
- name: Configure Codex
  run: |
    mkdir -p ~/.codex
    cat > ~/.codex/config.toml <<EOF
    [projects."${{ github.workspace }}"]
    trust_level = "trusted"
    EOF
```

## GitLab CI 集成

```yaml
codex-review:
  image: node:20
  variables:
    CODEX_MODEL: "o4-mini"
  before_script:
    - npm install -g @openai/codex
    - export OPENAI_API_KEY=$OPENAI_API_KEY
  script:
    - codex --verbose "审查当前分支相对 main 的所有变更"
  only:
    - merge_requests
```

## 自动修复流水线

```yaml
name: Auto-fix with Codex

on:
  push:
    branches: [main]

jobs:
  fix:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup
        run: |
          npm install -g @openai/codex
          mkdir -p ~/.codex
          cat > ~/.codex/config.toml <<EOF
          [projects."${{ github.workspace }}"]
          trust_level = "trusted"

          [mcp_servers.github]
          url = "https://api.githubcopilot.com/mcp/"
          bearer_token_env_var = "GITHUB_TOKEN"
          EOF
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Fix lint issues
        run: codex "运行 npm run lint 并修复所有可以自动修复的问题"
        continue-on-error: true

      - name: Commit changes
        run: |
          git config user.name "codex-bot"
          git config user.email "bot@example.com"
          git diff --quiet || git commit -am "style: auto-fix lint issues"
          git push
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 安全最佳实践

### 1. API 密钥管理

```yaml
# ✅ 使用 secrets，不硬编码
env:
  OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}

# ❌ 永远不要这样写
env:
  OPENAI_API_KEY: "sk-xxx..."
```

### 2. 信任配置隔离

CI 环境中只信任当前仓库目录：

```toml
[projects."${WORKSPACE_PATH}"]
trust_level = "trusted"
# 不设置全局信任
```

### 3. 响应存储控制

在 CI 中禁用响应存储以保护敏感代码：

```yaml
env:
  CODEX_DISABLE_RESPONSE_STORAGE: "true"
```

## 故障排除

### Codex 在 CI 中无输出

1. 检查 `--verbose` 标志是否启用：`codex --verbose "..."`
2. 检查 API 密钥是否正确设置
3. 检查模型提供商是否可用

### Codex 超时

大型项目可能需要更长的处理时间。考虑：
- 将大任务拆分为多个小任务
- 使用更具体的指令减少探索范围
- 设置 CI 步骤超时时间：`timeout-minutes: 30`

### 网络问题

CI 环境中可能出现企业代理/防火墙拦截：

```yaml
env:
  HTTPS_PROXY: ${{ secrets.HTTPS_PROXY }}
  HTTP_PROXY: ${{ secrets.HTTP_PROXY }}
```

## 下一步

- [命令参考](/guide/commands) — 查看所有 CLI 标志选项
- [安全实践](/best-practices/security) — CI 环境的安全最佳实践
- [任务规划](/best-practices/planning) — 大规模任务的分解策略
