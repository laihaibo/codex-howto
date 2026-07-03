---
title: using-git-worktrees
description: Git worktree 隔离，用于功能工作和执行计划
---

# using-git-worktrees

Git worktree 隔离技能，用于并行功能开发和执行计划。

## 触发条件

```
> 在新的 worktree 中实现这个功能
> $git-worktrees 隔离这个分支的开发
```

## 适用场景

- 功能工作与当前工作区隔离
- 执行计划需要干净环境
- 同时处理多个功能分支

## 工作流

```bash
# 创建新的 worktree
cd /path/to/project
codex worktree create feature/new-feature

# 在新的 worktree 中工作
cd /tmp/codex-worktrees/feature-new-feature
# 开发完成后合并回原项目
```

## 优势

- 不污染当前工作区
- 可以在不同上下文间快速切换
- 执行失败不影响原项目
