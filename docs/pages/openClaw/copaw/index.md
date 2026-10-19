# selenium

> https://copaw.agentscope.io/

## 安装

```
// mac
curl -fsSL https://copaw.agentscope.io/install.sh | bash

// windows(PowerShell)
irm https://copaw.agentscope.io/install.ps1 | iex

```

## 本地模型配置

- step-1: ollama 安装

```
irm https://ollama.com/install.ps1 | iex
```

- step-2: 下载模型

```
ollama pull qwen3-vl:8b
```

- step-3: 运行模型

```
ollama run qwen3-vl:8b

ollama run gpt-oss:20b

ollama run gemma3:12b
```

- step-4: 运行 copaw

```
copaw app
```

- step-5: 在 copaw 后台配置本地模型

设置 - 模型 - 提供商 - Ollama - 模型 - 自动获取模型 - LLM 配置

## 