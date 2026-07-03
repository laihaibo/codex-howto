---
title: fix-finding
description: 修复和验证已确认的安全漏洞
---

# fix-finding

修复和验证已确认安全发现的技能。

## 触发条件

```
> 修复这个 SQL 注入漏洞
> 处理这个 XSS 安全问题
> 修复所有中高危发现
```

## 修复流程

1. **确认发现**：理解漏洞本质
2. **创建修复方案**：选择最合适的修复策略
3. **实现修复**：修改代码并确保功能性
4. **验证修复**：确认漏洞已被正确修复
5. **防止回归**：添加测试或 lint 规则

## 修复示例

```python
# 修复前（SQL 注入）
query = f"SELECT * FROM users WHERE id = {user_input}"

# 修复后（参数化查询）
query = "SELECT * FROM users WHERE id = %s"
cursor.execute(query, (user_input,))
```

## 验证步骤

- 确认修复后的代码不再存在原漏洞
- 确保修改没有引入新的安全问题
- 运行测试确保功能正常
