---
title: stripe-best-practices
description: Stripe 集成最佳实践，包括支付、订阅和平台对接
---

# stripe-best-practices

Stripe 集成决策指南，涵盖 API 选择、平台设置和订阅管理。

## 触发条件

- 集成 Stripe 支付
- 设置订阅/计费系统
- 构建marketplace平台
- 处理订阅生命周期
- 迁移旧版 Stripe API

## API 选择

| 场景 | 推荐方案 |
|------|---------|
| 简单一次性支付 | Checkout Sessions |
| 复杂支付流程 | PaymentIntents |
| 平台/市场 | Connect Accounts v2 |
| 定期扣款 | Billing Subscriptions |
| 金融账户 | Treasury |

## 示例提示词

```
> 集成 Stripe Checkout 实现一次性付款
> 创建一个包含免费试用的订阅计划
> 设置 Stripe Connect 让卖家接收付款
> 从 PaymentIntents 迁移到 Checkout Sessions
```

## 集成模式

### Checkout Sessions（推荐）

```ts
// 创建结账会话
const session = await stripe.checkout.sessions.create({
  line_items: [{ price: 'price_xxx', quantity: 1 }],
  mode: 'payment',
  success_url: `${origin}/success`,
  cancel_url: `${origin}/cancel`,
})
```

### PaymentIntents

适用于需要自定义 UI 或复杂支付流程的场景。

### Connect 平台

- Accounts v2 创建关联账户
- Controller 属性配置平台能力
- 分离支付与接单流程
