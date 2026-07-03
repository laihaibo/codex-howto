---
title: hyperframes-cli
description: HyperFrames CLI 工具使用指南
---

# hyperframes-cli

HyperFrames 命令行工具的使用指南。

## 触发条件

```
> 初始化 HyperFrames 项目
> 渲染视频
> 预览合成
```

## 主要命令

| 命令 | 用途 |
|------|------|
| `init` | 初始化新项目 |
| `lint` | 检查合成有效性 |
| `inspect` | 查看合成详情 |
| `preview` | 在工作室预览 |
| `render` | 渲染为视频文件 |
| `transcribe` | 音频转文字 |
| `tts` | 文字转语音 |
| `doctor` | 环境诊断 |
| `info` | 版本和环境信息 |
| `upgrade` | 升级到最新版本 |
| `compositions` | 列出所有合成 |
| `benchmark` | 性能测试 |

## 使用示例

```bash
hyperframes init my-video
hyperframes preview
hyperframes render --format mp4
hyperframes tts --input "Hello world"
```
