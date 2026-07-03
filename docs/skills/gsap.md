---
title: GSAP 动画
description: GSAP 动画参考，包括补间、时间线和性能优化
---

# gsap

GSAP (GreenSock Animation Platform) 动画参考。

## 触发条件

```
> 用 GSAP 制作淡入动画
> 创建一个交错显示的列表动画
> 解释 gsap.timeline() 的用法
```

## 核心概念

### 基本补间

```js
// 基本动画
gsap.to('.box', { x: 100, duration: 1 })

// 从指定状态开始
gsap.from('.box', { opacity: 0, y: 20 })

// 从A到B
gsap.fromTo('.box', { x: 0 }, { x: 100 })
```

### 时间线

```js
const tl = gsap.timeline()
tl.to('.a', { x: 100 })
  .to('.b', { y: 50 }, '-=0.5')  // 重叠 0.5 秒
  .to('.c', { rotation: 360 })
```

### 交错动画

```js
gsap.to('.item', {
  y: 0,
  opacity: 1,
  stagger: 0.1  // 每个元素延迟 0.1 秒
})
```
