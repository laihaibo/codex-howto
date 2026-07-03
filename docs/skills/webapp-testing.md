---
title: webapp-testing
description: Playwright 本地 Web 应用测试工具包
---

# webapp-testing

通过 Playwright 与和测试本地 Web 应用的工具包。

## 触发条件

```
> 测试登录功能
> 截图保存页面状态
> 检查控制台错误
> 验证表单提交
```

## 支持的功能

- ✅ 前端功能验证
- ✅ UI 行为调试
- ✅ 浏览器截图
- ✅ 浏览器日志查看
- ✅ 响应式布局测试

## 工作流程

```typescript
// 导航到页面
await page.goto('http://localhost:3000')

// 与元素交互
await page.fill('#email', 'test@example.com')
await page.click('button[type="submit"]')

// 截图
await page.screenshot({ path: 'result.png' })
```

## 与前端开发配合

- 启动 Vite/Dev Server
- 访问 localhost URL
- 验证渲染和交互
- 捕获控制台错误

## 最佳实践

- 每次测试前确保 dev server 正在运行
- 使用显式等待（waitForSelector）而非固定延时
- 截图保存基线用于比较
