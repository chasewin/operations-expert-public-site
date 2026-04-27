window.PROTOCOL_DATA = {
  "generatedAt": "2026-04-27T09:28:21.103Z",
  "statusLine": "这里集中展示外部接入 AI 默认应遵守的 workflow 协议链路、触发方式、读写对象和执行脚本。",
  "mapItems": [
    {
      "id": "map-deliverables",
      "workflow": "deliverables",
      "title": "交付物刷新",
      "statusLabel": "协议定义",
      "summary": "把活动分析、问题卡、方法卡和站点文档重新写回前端可读数据层。",
      "triggerSource": "交付物对象变更后执行",
      "reads": [
        "private/01-交付物/01-活动分析/",
        "private/01-交付物/02-站点分析/",
        "private/01-交付物/03-网站背景/",
        "private/02-专家能力/01-问题库/",
        "private/02-专家能力/02-方法库/"
      ],
      "writes": [
        "demo/lite/cards-data.js",
        "demo/lite/cards-content.js",
        "demo/lite/cards-extras.js"
      ],
      "scripts": [
        "generate-lite-viewer-index.mjs",
        "generate-deliverables-audit.mjs"
      ]
    },
    {
      "id": "map-training",
      "workflow": "training",
      "title": "训练层刷新",
      "statusLabel": "协议定义",
      "summary": "把活动卡自动整理成训练候选、待整合清单和训练层巡检结果。",
      "triggerSource": "活动分析完成后执行",
      "reads": [
        "private/01-交付物/01-活动分析/",
        "private/02-专家能力/04-训练会话/"
      ],
      "writes": [
        "private/03-系统管理/01-索引/indexes/auto-generated-training-candidates.md",
        "private/03-系统管理/01-索引/indexes/pending-integration-summary.md",
        "private/03-系统管理/01-索引/indexes/training-layer-structure-audit.md"
      ],
      "scripts": [
        "generate-training-candidates.mjs",
        "generate-pending-integration-summary.mjs",
        "generate-training-layer-structure-audit.mjs"
      ]
    },
    {
      "id": "map-ingest",
      "workflow": "ingest",
      "title": "文件摄入",
      "statusLabel": "协议定义",
      "summary": "扫描 inbox，并把新的原始资料转成可继续处理的文本输入。",
      "triggerSource": "有新文件进入 inbox 时执行",
      "reads": [
        "inbox/"
      ],
      "writes": [
        "inbox/_converted/",
        "private/03-系统管理/01-索引/indexes/inbox-ingestion-status.md"
      ],
      "scripts": [
        "run-ingestion-pipeline.mjs"
      ]
    },
    {
      "id": "map-growth",
      "workflow": "growth",
      "title": "成长链路刷新",
      "statusLabel": "协议定义",
      "summary": "把已确认成长、待确认成长和案例关联重新写回成长可视层。",
      "triggerSource": "成长对象变更后执行",
      "reads": [
        "private/02-专家能力/07-待确认成长/",
        "private/02-专家能力/08-已确认成长/"
      ],
      "writes": [
        "demo/lite/growth-data.js",
        "demo/lite/growth-links-data.js",
        "private/03-系统管理/01-索引/indexes/confirmed-growth-index.md",
        "private/03-系统管理/01-索引/indexes/pending-growth-index.md",
        "private/03-系统管理/01-索引/indexes/case-growth-links.md",
        "private/03-系统管理/01-索引/indexes/growth-workflow-application-map.md"
      ],
      "scripts": [
        "generate-confirmed-growth-index.mjs",
        "generate-pending-growth-index.mjs",
        "generate-expert-layer-structure-audit.mjs",
        "generate-case-growth-links.mjs",
        "generate-growth-workflow-application-map.mjs"
      ]
    },
    {
      "id": "map-capability",
      "workflow": "capability",
      "title": "能力库同步",
      "statusLabel": "协议定义",
      "summary": "把已确认成长同步进能力调用层，并刷新启动规则和质量巡检。",
      "triggerSource": "已确认成长变更后执行",
      "reads": [
        "private/02-专家能力/08-已确认成长/",
        "private/02-专家能力/09-专家能力库/"
      ],
      "writes": [
        "private/02-专家能力/09-专家能力库/",
        "private/03-系统管理/01-索引/indexes/task-startup-routing-map.md",
        "private/03-系统管理/01-索引/indexes/expert-capability-library-quality-audit.md"
      ],
      "scripts": [
        "sync-expert-capability-library.mjs",
        "generate-task-startup-routing-map.mjs",
        "generate-expert-capability-library-quality-audit.mjs"
      ]
    },
    {
      "id": "map-knowledge-health-check",
      "workflow": "knowledge-health-check",
      "title": "知识健康检查",
      "statusLabel": "协议定义",
      "summary": "统一汇总训练层、成长层、承接完整性和调用层质量，判断专家记忆当前是否健康。",
      "triggerSource": "活动、成长、能力或模板变更后执行；也可定时执行",
      "reads": [
        "private/01-交付物/01-活动分析/",
        "private/02-专家能力/",
        "private/03-系统管理/02-模板/"
      ],
      "writes": [
        "private/03-系统管理/01-索引/indexes/planning-learning-index.md",
        "private/03-系统管理/01-索引/indexes/pending-integration-summary.md",
        "private/03-系统管理/01-索引/indexes/training-layer-structure-audit.md",
        "private/03-系统管理/01-索引/indexes/expert-layer-structure-audit.md",
        "private/03-系统管理/01-索引/indexes/activity-knowledge-coverage-audit.md",
        "private/03-系统管理/01-索引/indexes/semantic-completeness-audit.md",
        "private/03-系统管理/01-索引/indexes/expert-capability-library-quality-audit.md",
        "private/03-系统管理/01-索引/indexes/knowledge-health-check.md"
      ],
      "scripts": [
        "generate-planning-learning-index.mjs",
        "generate-pending-integration-summary.mjs",
        "generate-pending-growth-index.mjs",
        "generate-confirmed-growth-index.mjs",
        "generate-training-layer-structure-audit.mjs",
        "generate-expert-layer-structure-audit.mjs",
        "generate-activity-knowledge-coverage-audit.mjs",
        "generate-semantic-completeness-audit.mjs",
        "generate-task-startup-routing-map.mjs",
        "generate-expert-capability-library-quality-audit.mjs",
        "generate-knowledge-health-check.mjs"
      ]
    },
    {
      "id": "map-system-check",
      "workflow": "system-check",
      "title": "系统巡检",
      "statusLabel": "协议定义",
      "summary": "把当前高频索引、规则影响和结构巡检串成一次全量检查。",
      "triggerSource": "做阶段性核查时执行",
      "reads": [
        "private/01-交付物/",
        "private/02-专家能力/",
        "private/03-系统管理/02-模板/"
      ],
      "writes": [
        "private/03-系统管理/01-索引/indexes/rule-change-impact-map.md",
        "private/03-系统管理/01-索引/indexes/training-layer-structure-audit.md",
        "private/03-系统管理/01-索引/indexes/expert-layer-structure-audit.md",
        "private/03-系统管理/01-索引/indexes/expert-capability-library-quality-audit.md"
      ],
      "scripts": [
        "generate-lite-viewer-index.mjs",
        "generate-training-candidates.mjs",
        "generate-pending-integration-summary.mjs",
        "run-ingestion-pipeline.mjs",
        "generate-confirmed-growth-index.mjs",
        "generate-pending-growth-index.mjs",
        "generate-expert-layer-structure-audit.mjs",
        "generate-training-layer-structure-audit.mjs",
        "generate-rule-change-impact-map.mjs",
        "generate-growth-workflow-application-map.mjs",
        "generate-task-startup-routing-map.mjs",
        "generate-expert-capability-library-quality-audit.mjs",
        "generate-semantic-completeness-audit.mjs",
        "generate-deliverables-audit.mjs"
      ]
    }
  ],
  "formattedAt": "2026-04-27 09:28:21Z"
};
