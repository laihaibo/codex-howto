---
title: react-best-practices
description: React 和 Next.js 性能优化指南，来自 Vercel Engineering
---

# react-best-practices

React 和 Next.js 性能优化最佳实践，基于 Vercel 工程团队的经验总结。

## 触发条件

- 编写、审查或重构 React 组件
- 优化 Next.js 页面性能
- 改进数据获取模式
- 减少打包体积
- 提升应用整体性能

## 核心原则

### 组件优化

```tsx
// 使用 React.memo 避免不必要的重渲染
const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>
})

// 使用 useMemo 缓存计算结果
const processedData = useMemo(() => {
  return heavyComputation(rawData)
}, [rawData])

// 使用 useCallback 保持函数引用稳定
const handleClick = useCallback(() => {
  doSomething(id)
}, [id])
```

### 数据获取

```tsx
// Next.js 服务端组件中的数据获取
async function Page({ params }) {
  const data = await fetch(`/api/items/${params.id}`)
  return <ItemDetail data={data} />
}
```

### 代码分割

```tsx
// 动态导入减少首屏体积
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />
})
```

## 性能检查清单

- ✅ 避免不必要的重渲染
- ✅ 正确使用 React.memo / useMemo / useCallback
- ✅ 路由级别的代码分割
- ✅ 图片和字体优化
- ✅ 服务端组件减少客户端 JS

## 示例提示词

```
> 审查这个 React 组件并提出性能优化建议
> 这个列表组件有 10000 项数据，如何优化滚动性能？
> 把这个类组件重构为使用 hooks 的函数组件
```
