---
title: supabase-postgres-best-practices
description: Postgres 性能优化和最佳实践，来自 Supabase
---

# supabase-postgres-best-practices

Postgres 性能优化和最佳实践，基于 Supabase 团队的数据库优化经验。

## 触发条件

- 编写或优化 Postgres 查询
- 设计数据库 schema
- 配置数据库参数
- 诊断慢查询问题
- 优化 RLS 策略

## 核心原则

### 查询优化

```sql
-- 使用 EXPLAIN ANALYZE 分析查询计划
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user@example.com';

-- 为常用查询条件创建索引
CREATE INDEX idx_users_email ON users(email);

-- 使用连接替代子查询
SELECT u.name, p.title 
FROM users u 
JOIN posts p ON u.id = p.user_id;
```

### Schema 设计

- 使用 UUID 或 bigint 主键
- 恰当选择数据类型（避免过度使用 TEXT）
- 规范化与反规范化平衡
- 使用外键约束保证一致性
- 为行级安全 (RLS) 设计策略

### 索引策略

```sql
-- 复合索引注意列顺序
CREATE INDEX idx_posts_user_created 
  ON posts(user_id, created_at DESC);

-- 部分索引减少体积
CREATE INDEX idx_active_users 
  ON users(email) WHERE is_active = true;
```

## 示例提示词

```
> 优化这个慢查询的执行计划
> 设计一个多租户的数据库 schema
> 检查 RLS 策略是否存在性能问题
> 为这个查询添加合适的索引
```
