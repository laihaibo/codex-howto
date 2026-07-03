---
title: 代码开发最佳实践
description: 使用 Codex 进行高效代码开发的指南
---

# 代码开发

## 代码生成模式

### 1. 从类型/接口开始

先定义数据形状，再生成实现：

```typescript
interface UserService {
  findById(id: string): Promise<User>
  create(data: CreateUserDTO): Promise<User>
  update(id: string, data: UpdateUserDTO): Promise<User>
  delete(id: string): Promise<void>
}

// Codex 会根据接口生成实现
```

### 2. 提供测试用例

```
> 为这个排序函数编写实现，需通过以下测试：
> - [3,1,2] → [1,2,3]
> - [] → []
> - [1] → [1]
> - 稳定性测试...
```

## AI 代码审查

### 审查清单

- [ ] 边界条件处理
- [ ] 错误处理完整性
- [ ] 类型安全性
- [ ] 性能隐患（N+1、内存泄露等）
- [ ] 安全漏洞（注入、泄露等）
- [ ] 代码可读性

### 审查指令

```
> 审查这段代码并提出改进建议，重点关注：
> 1. 安全性
> 2. 性能
> 3. 错误处理
```

## TDD 工作流

```bash
# 1. 写测试
> 编写用户认证的测试用例

# 2. 确认测试失败
> 运行测试

# 3. 实现功能
> 实现最小功能让测试通过

# 4. 确认测试通过
> 运行测试

# 5. 重构
> 重构代码优化结构

# 6. 确认通过
> 再次运行测试
```

## 文档生成

让 Codex 自动为代码生成文档：

```
> 为这个公共 API 生成 JSDoc 注释
> 为这个模块创建 README 文档
> 为新同事生成代码走查文档
```
