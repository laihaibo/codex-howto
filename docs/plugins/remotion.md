---
title: Remotion 插件
description: 在 React 中使用 Remotion 创建视频的最佳实践插件
---

# Remotion 插件

Remotion 插件提供在 React 中创建视频的最佳实践支持。Remotion 是一个用 React 编写视频的框架，允许你使用组件、Hooks 和 JavaScript 来创建动态视频内容。

## 功能概述

- 🎬 使用 React 组件创建视频
- 📐 声明式视频编程
- ⏱️ 基于时间轴的动画
- 🔄 动态数据驱动视频

## 包含的技能

### 技能列表

| 技能名称 | 描述 |
|---------|------|
| `remotion-best-practices` | Remotion 视频创建最佳实践 |

---

## Remotion 最佳实践 (`remotion-best-practices`)

Remotion 视频创建的最佳实践指南。

### 触发时机

- 编写新的 Remotion 组件
- 创建视频动画
- 处理时间轴和帧率
- 优化视频渲染性能
- 使用 Remotion Hooks（如 `useCurrentFrame`, `useVideoConfig`）

### 核心概念

- **Composition**：视频的基本单位，定义宽度、高度、帧率和时长
- **Sequencing**：控制组件在时间轴上的排列
- **Interpolation**：Remotion 的核心动画引擎，支持多种缓动函数
- **useCurrentFrame()**：获取当前帧号的 Hook
- **useVideoConfig()**：获取视频配置（fps, width, height, durationInFrames）

### 示例提示词

```
用 Remotion 创建一个 10 秒的文本动画视频
```

```
使用 useCurrentFrame 实现一个倒计时动画
```

```
如何优化 Remotion 视频的渲染性能？
```

```
为这个数据可视化创建动态视频
```

### 示例代码结构

```tsx
import { Composition, useCurrentFrame, interpolate } from "remotion";

export const MyVideo = () => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity }}>
      欢迎使用 Remotion！
    </div>
  );
};

const root = () => {
  return (
    <Composition
      id="MyVideo"
      component={MyVideo}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
```
