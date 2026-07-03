import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Codex 使用指南',
  description: 'Codex CLI 助手的指令、最佳实践及已安装扩展的使用方法',
  lang: 'zh-CN',
  base: '/codex-howto/',

  ignoreDeadLinks: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/' },
      { text: '技能', link: '/skills/' },
      { text: '插件', link: '/plugins/' },
      { text: 'MCP 服务', link: '/mcp/' },
      { text: '最佳实践', link: '/best-practices/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '什么是 Codex', link: '/guide/' },
            { text: '安装与配置', link: '/guide/installation' },
            { text: '基本使用', link: '/guide/basic-usage' },
            { text: '配置文件详解', link: '/guide/configuration' },
            { text: '常用命令', link: '/guide/commands' }
          ]
        },
        {
          text: '进阶使用',
          items: [
            { text: '技能系统', link: '/guide/skills-system' },
            { text: '插件系统', link: '/guide/plugins-system' },
            { text: 'MCP 服务', link: '/guide/mcp-system' },
            { text: '工作模式', link: '/guide/work-modes' }
          ]
        }
      ],
      '/skills/': [
        {
          text: '系统内置技能',
          items: [
            { text: '技能概览', link: '/skills/' },
            { text: 'imagegen - 图像生成', link: '/skills/imagegen' },
            { text: 'openai-docs - OpenAI 文档', link: '/skills/openai-docs' },
            { text: 'skill-creator - 技能创建', link: '/skills/skill-creator' },
            { text: 'skill-installer - 技能安装', link: '/skills/skill-installer' },
            { text: 'plugin-creator - 插件创建', link: '/skills/plugin-creator' }
          ]
        },
        {
          text: 'Build Web Apps 插件技能',
          items: [
            { text: 'frontend-app-builder', link: '/skills/frontend-app-builder' },
            { text: 'frontend-testing-debugging', link: '/skills/frontend-testing' },
            { text: 'react-best-practices', link: '/skills/react-best-practices' },
            { text: 'shadcn', link: '/skills/shadcn' },
            { text: 'stripe-best-practices', link: '/skills/stripe' },
            { text: 'supabase-postgres-best-practices', link: '/skills/supabase' }
          ]
        },
        {
          text: '数据可视化技能',
          items: [
            { text: 'data-visualization', link: '/skills/data-visualization' }
          ]
        },
        {
          text: 'Codex Security 安全技能',
          items: [
            { text: '安全扫描概览', link: '/skills/security-overview' },
            { text: 'security-scan', link: '/skills/security-scan' },
            { text: 'deep-security-scan', link: '/skills/deep-security-scan' },
            { text: 'security-diff-scan', link: '/skills/security-diff-scan' },
            { text: 'finding-discovery', link: '/skills/finding-discovery' },
            { text: 'validation', link: '/skills/validation' },
            { text: 'attack-path-analysis', link: '/skills/attack-path' },
            { text: 'threat-model', link: '/skills/threat-model' },
            { text: 'fix-finding', link: '/skills/fix-finding' },
            { text: 'triage-finding', link: '/skills/triage-finding' },
            { text: 'track-findings', link: '/skills/track-findings' }
          ]
        },
        {
          text: 'GitHub 技能',
          items: [
            { text: 'github 使用指南', link: '/skills/github' },
            { text: 'gh-fix-ci', link: '/skills/gh-fix-ci' },
            { text: 'gh-address-comments', link: '/skills/gh-address-comments' },
            { text: 'yeet - 发布到 GitHub', link: '/skills/yeet' }
          ]
        },
        {
          text: 'Superpowers 技能',
          items: [
            { text: 'using-superpowers', link: '/skills/using-superpowers' },
            { text: 'brainstorming', link: '/skills/brainstorming' },
            { text: 'writing-plans', link: '/skills/writing-plans' },
            { text: 'test-driven-development', link: '/skills/tdd' },
            { text: 'systematic-debugging', link: '/skills/debugging' },
            { text: 'dispatching-parallel-agents', link: '/skills/parallel-agents' },
            { text: 'subagent-driven-development', link: '/skills/subagent-development' },
            { text: 'executing-plans', link: '/skills/executing-plans' },
            { text: 'requesting-code-review', link: '/skills/requesting-review' },
            { text: 'receiving-code-review', link: '/skills/receiving-review' },
            { text: 'verification-before-completion', link: '/skills/verification' },
            { text: 'finishing-a-development-branch', link: '/skills/finishing-branch' },
            { text: 'using-git-worktrees', link: '/skills/git-worktrees' },
            { text: 'writing-skills', link: '/skills/writing-skills' }
          ]
        },
        {
          text: 'HyperFrames 技能',
          items: [
            { text: 'hyperframes 概览', link: '/skills/hyperframes' },
            { text: 'hyperframes-cli', link: '/skills/hyperframes-cli' },
            { text: 'hyperframes-registry', link: '/skills/hyperframes-registry' },
            { text: 'website-to-hyperframes', link: '/skills/website-to-hyperframes' },
            { text: 'gsap 动画', link: '/skills/gsap' }
          ]
        },
        {
          text: '其他技能',
          items: [
            { text: 'canvas-design', link: '/skills/canvas-design' },
            { text: 'code-reviewer', link: '/skills/code-reviewer' },
            { text: 'coderabbit', link: '/skills/coderabbit' },
            { text: 'defuddle', link: '/skills/defuddle' },
            { text: 'find-skills', link: '/skills/find-skills' },
            { text: 'frontend-design', link: '/skills/frontend-design' },
            { text: 'grill-me', link: '/skills/grill-me' },
            { text: 'json-canvas', link: '/skills/json-canvas' },
            { text: 'magicpath', link: '/skills/magicpath' },
            { text: 'next-best-practices', link: '/skills/next-best-practices' },
            { text: 'obsidian 技能', link: '/skills/obsidian' },
            { text: 'pr-creator', link: '/skills/pr-creator' },
            { text: 'remotion', link: '/skills/remotion' },
            { text: 'sentry', link: '/skills/sentry' },
            { text: 'ui-ux-pro-max', link: '/skills/ui-ux-pro-max' },
            { text: 'webapp-testing', link: '/skills/webapp-testing' }
          ]
        }
      ],
      '/plugins/': [
        {
          text: '插件系统',
          items: [
            { text: '插件概览', link: '/plugins/' },
            { text: 'build-web-apps', link: '/plugins/build-web-apps' },
            { text: 'build-web-data-visualization', link: '/plugins/build-web-data-visualization' },
            { text: 'codex-security', link: '/plugins/codex-security' },
            { text: 'coderabbit', link: '/plugins/coderabbit' },
            { text: 'github', link: '/plugins/github' },
            { text: 'hyperframes', link: '/plugins/hyperframes' },
            { text: 'magicpath', link: '/plugins/magicpath' },
            { text: 'remotion', link: '/plugins/remotion' },
            { text: 'sentry', link: '/plugins/sentry' },
            { text: 'superpowers', link: '/plugins/superpowers' }
          ]
        }
      ],
      '/mcp/': [
        {
          text: 'MCP 服务',
          items: [
            { text: 'MCP 概览', link: '/mcp/' },
            { text: 'MiniMax', link: '/mcp/minimax' },
            { text: 'Context7', link: '/mcp/context7' },
            { text: 'Sequential Thinking', link: '/mcp/sequential-thinking' },
            { text: 'Memory', link: '/mcp/memory' },
            { text: 'Filesystem', link: '/mcp/filesystem' },
            { text: 'Time', link: '/mcp/time' },
            { text: 'Fetch', link: '/mcp/fetch' },
            { text: 'GitHub', link: '/mcp/github' }
          ]
        }
      ],
      '/best-practices/': [
        {
          text: '最佳实践',
          items: [
            { text: '概览', link: '/best-practices/' },
            { text: '提示词技巧', link: '/best-practices/prompting' },
            { text: '任务规划', link: '/best-practices/planning' },
            { text: '代码开发', link: '/best-practices/coding' },
            { text: '安全实践', link: '/best-practices/security' },
            { text: '调试技巧', link: '/best-practices/debugging' },
            { text: '协作工作流', link: '/best-practices/collaboration' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openai/codex' }
    ],

    footer: {
      message: '基于 Codex CLI v0.142.5',
      copyright: 'Made with VitePress'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
