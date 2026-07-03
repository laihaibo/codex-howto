---
title: HyperFrames 插件
description: HTML 视频合成、动画、标题卡、字幕、音频反应视觉效果和场景转场插件
---

# HyperFrames 插件

HyperFrames 插件提供在 HTML 中创建视频合成、动画、标题卡、字幕、配音、音频反应视觉效果和场景转场的能力。

## 功能概述

- 🎬 HTML 视频合成与动画
- 📝 标题卡和字幕
- 🔊 音频反应视觉效果（节拍同步、辉光、脉冲）
- 🎙️ 文本转语音配音
- 🎨 动画文本高亮
- 🔄 场景转场（交叉擦除、揭示、着色器转场）
- 📦 组件注册表管理

## 包含的技能

### 技能列表

| 技能名称 | 描述 |
|---------|------|
| `hyperframes` | 在 HyperFrames HTML 中创建视频合成、动画、字幕、配音等 |
| `hyperframes-cli` | HyperFrames CLI 工具（初始化、检查、预览、渲染、转录、TTS） |
| `hyperframes-registry` | 安装和连接注册表中的块和组件到合成中 |
| `website-to-hyperframes` | 将网站捕获并转换为 HyperFrames 视频 |
| `gsap` | GSAP 动画参考 |

---

## 视频合成 (`hyperframes`)

在 HyperFrames HTML 中创建视频内容。

### 触发时机

- 构建 HTML 视频内容
- 添加字幕或字幕同步到音频
- 生成 TTS 旁白
- 创建音频反应动画（节拍同步、辉光、脉冲）
- 添加动画文本高亮（标记扫过、手绘圆圈、爆发线条）
- 添加场景转场（交叉擦除、揭示、着色器转场）

### 示例提示词

```
创建一个 30 秒的产品宣传视频合成
```

```
为这个视频添加同步字幕
```

```
生成这段脚本的 TTS 配音
```

```
创建一个随音乐跳动的辉光效果
```

---

## CLI 工具 (`hyperframes-cli`)

HyperFrames 命令行工具支持项目的全生命周期管理。

### 可用命令

| 命令 | 功能 |
|------|------|
| `hyperframes init` | 初始化新项目 |
| `hyperframes lint` | 检查合成文件 |
| `hyperframes inspect` | 检查视觉布局 |
| `hyperframes preview` | 在工作室中预览 |
| `hyperframes render` | 渲染为视频 |
| `hyperframes transcribe` | 转录音频 |
| `hyperframes tts` | 文本转语音 |
| `hyperframes doctor` | 诊断环境问题 |
| `hyperframes browser` | 浏览器操作 |
| `hyperframes info` | 显示项目信息 |
| `hyperframes upgrade` | 升级工具 |
| `hyperframes compositions` | 管理合成 |
| `hyperframes docs` | 查看文档 |
| `hyperframes benchmark` | 运行基准测试 |

### 示例命令

```bash
hyperframes init my-video
hyperframes preview
hyperframes render --output video.mp4
hyperframes tts --text "欢迎来到我们的产品" --output narration.mp3
```

---

## 注册表管理 (`hyperframes-registry`)

安装和连接注册表中的块（blocks）和组件（compositions）到合成中。

### 触发时机

- 运行 `hyperframes add`
- 安装块或组件
- 连接已安装的项目到 `index.html`
- 处理 `hyperfiles.json`

### 示例提示词

```
安装 `hero-banner` 块
```

```
添加 `audio-reactive-glow` 组件到我的合成
```

---

## 网站转视频 (`website-to-hyperframes`)

捕获网站并转换为 HyperFrames 视频。

### 触发时机

- 用户提供 URL 想要视频
- 说"捕获这个网站"、"把这个变成视频"
- 创建社交广告、产品导览或基于网站的视频

### 示例提示词

```
捕获 https://example.com 并创建一个宣传视频
```

```
把这个网站的产品页面变成一个 15 秒的广告
```

---

## GSAP 动画 (`gsap`)

GSAP（GreenSock Animation Platform）动画参考。

### 覆盖范围

- `gsap.to()`, `gsap.from()`, `gsap.fromTo()`
- 缓动函数
- 交错动画（stagger）
- 时间线（`gsap.timeline()`）
- 嵌套和播放控制
- 性能优化（transforms, will-change, quickTo）

### 触发时机

- 在 HyperFrames 合成中编写 GSAP 动画

### 示例提示词

```
使用 gsap.timeline() 创建一个序列动画
```

```
为这个交错动画添加 ease 缓动效果
```
