# Codex 使用指南

基于 VitePress 构建的 Codex CLI 助手中文文档站，涵盖安装配置、技能系统、插件使用及最佳实践。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 内容结构

| 目录 | 说明 |
|---|---|
| `docs/guide/` | 入门指南与进阶使用 |
| `docs/skills/` | 系统内置技能及插件技能文档 |
| `docs/plugins/` | 插件系统使用指南 |
| `docs/mcp/` | MCP 服务配置与说明 |
| `docs/best-practices/` | 最佳实践与协作工作流 |

## 部署

推送至 `main` 分支后，GitHub Actions 自动构建并部署到 [GitHub Pages](https://pages.github.com/)。

## License

MIT
