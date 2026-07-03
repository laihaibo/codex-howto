---
layout: doc
title: 安装与设置
description: Codex 的安装方法和环境配置指南
---

# 安装与设置

本章将指导你完成 Codex 的安装和环境配置。

## 环境要求

在安装 Codex 之前，请确保你的系统满足以下要求：

- **操作系统**：Linux、macOS 或 Windows
- **Node.js**：v18.0 或更高版本
- **内存**：至少 4GB RAM
- **网络**：稳定的互联网连接

## 安装方式

### 方式一：通过 npm 安装（推荐）

使用 npm 是最简单的安装方式：

```bash
npm install -g @openai/codex
```

::: tip 建议使用全局安装
全局安装后可以在任何位置使用 `codex` 命令。
:::

### 方式二：通过 curl 脚本安装

如果你不想安装 Node.js，可以使用官方提供的安装脚本：

```bash
curl -fsSL https://openai.com/install.sh | bash
```

### 方式三：从源码构建

适用于高级开发者，需要从源码编译：

```bash
git clone https://github.com/openai/codex.git
cd codex
npm install
npm run build
npm link
```

## 安装验证

安装完成后，运行以下命令验证安装是否成功：

```bash
codex --version
```

预期输出：

```
codex version 0.142.5
```

::: warning 注意
如果提示 `codex: command not found`，请确保全局 npm 目录已添加到系统 PATH 中。
:::

## 环境配置

### 配置 API 密钥

Codex 需要 API 密钥才能正常工作。设置环境变量：

```bash
export OPENAI_API_KEY="your-api-key-here"
```

::: tip 持久化配置
建议将上述环境变量添加到 `~/.bashrc` 或 `~/.zshrc` 中，以便每次启动终端时自动加载。
:::

### 配置文件位置

Codex 使用以下位置的配置文件：

```
~/.codex/config.toml        # 主配置文件（TOML 格式）
~/.codex/auth.json          # 认证凭据
~/.codex/model-catalogs/    # 模型目录
```

> **说明**：Codex 不会自动创建配置文件。你可以通过 `codex config edit` 打开编辑器手动创建，或运行一次 `codex login` 自动生成。

## 卸载

如果不再需要使用 Codex，可以通过以下方式卸载：

```bash
# npm 全局卸载
npm uninstall -g @openai/codex
```

## 常见问题

**Q: 安装时出现 EACCES 权限错误怎么办？**

A: 请使用 `npm config set prefix` 修改全局安装目录，或者使用 `sudo`（仅限 Linux/macOS）。

**Q: 如何更新到最新版本？**

A: 运行以下命令：

```bash
npm update -g @openai/codex
```

## 登录认证

首次使用 Codex 需要完成登录认证。认证有两种方式：

### 方式一：OpenAI SSO 登录

```bash
codex login
```

此命令会打开浏览器完成 OAuth 认证流程。登录凭证会保存在 `~/.codex/auth.json` 中。

### 方式二：API 密钥认证

对于非 OpenAI 模型提供商（如第三方 API），在 `config.toml` 中配置环境变量即可：

```toml
[mcp_servers.my_provider.env]
MY_API_KEY = "your-key"
```

## 下一步

- [了解基础用法](/guide/basic-usage)
- [配置详细说明](/guide/configuration)
