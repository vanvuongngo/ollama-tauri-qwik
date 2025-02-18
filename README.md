# AI Agent for Ollama 2025

## Demo of using Ollama + Tauri v2 + Qwik

This demo is inspired by the project [ollama-tauri-client](https://github.com/elijahmg/ollama-tauri-client) from [Ilya F](https://github.com/elijahmg).

Here we are using [Ollama](https://ollama.com/), [Tauri](https://tauri.app/) with the [Qwik](https://qwik.dev/) frontend framework instead of Svelte.

![ollama-tauri-qwik](https://github.com/user-attachments/assets/829eb474-6e6c-4e39-9ea2-b1feb9d24ae6)


## Get Started

### Prerequisites

1. [Rust](https://www.rust-lang.org/), see https://www.rust-lang.org/learn/get-started

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

2. [nodejs](https://nodejs.org/), see https://nodejs.org/en/download

3. [pnpm](https://pnpm.io/installation) (optional), see https://pnpm.io/installation

```sh
npm install -g pnpm
```

For the qwik frontend (already done in this demo)
```sh
pnpm add -D -w @tauri-apps/api # or `cd apps/ollama-tauri-qwik && npm i -D @tauri-apps/api` 
```

### Start app

To run in development mode

```sh
pnpm dev # or `cd apps/ollama-tauri-qwik && npm tauri dev`
```

To package the desktop application for installations

```sh
pnpm build # or `cd apps/ollama-tauri-qwik && npm tauri build`
```

## The pros of this tech-stack

- [Tauri](https://tauri.app/) is more secure and fast because it is based on [Rust](https://www.rust-lang.org/) and it has a quite small app size by using the OS's native web renderer

- [Qwik](https://qwik.dev/) is a revolution in web frontend technology ...
  - the fastest and modern frontend framework I know
  - it keeps to be fast, you can count of that the performance keeps even with more business features
  - it is secure and highly scaleable as a static site generated (SSG) because Tauri has to serve static files

- [Ollama](https://ollama.com/) is open source and fast tool to use LLMs locally, e.g. [Meta's Llama 3.2](https://ollama.com/library/llama3.2) or [DeepSeek-R1](https://ollama.com/library/deepseek-r1)
  - that means your prompts and data stay fully private in case you have to be complient not to share them to other companies and countries (cloud-provider)
  - also to keep your privacy about your ideas, your thoughts, your private topics ... will not be shared by anyone
  - if you have a requirement to have low latency or you have a lot of data which you can not pass to the internet or your internet connection is not available/ reliable (edge computing)
  - also it is an option to lower your AI cost by hosting your AI on premises
  - or you need your own embedded data (images, pdf ...) which can not be shared to another company and country 
  - it can also be an option if you are worried about potential Censorship
