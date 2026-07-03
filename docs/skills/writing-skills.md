---
title: writing-skills
description: 创建新技能、编辑现有技能和验证技能工作
---

# writing-skills

编写高质量技能的指南。

## 核心原则

1. **渐进式披露**：先读 SKILL.md，再按需加载资源
2. **实用导向**：提供实际可用的操作指南
3. **安全可靠**：明确列出风险和降级方案

## 技能结构

```
skill-name/
├── SKILL.md          # 核心指令
├── references/       # 参考资料
├── scripts/          # 脚本工具
└── assets/           # 静态资源
```

## SKILL.md 格式

```markdown
---
name: my-skill
description: 简短描述
---

# 技能名称

## 触发条件
描述何时使用

## 使用方式
步骤说明

## 注意事项
潜在风险和限制
```
