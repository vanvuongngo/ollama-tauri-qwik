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

4. Running [Ollama](https://ollama.com/) local or configure the connection here [config](https://github.com/vanvuongngo/ollama-tauri-qwik/blob/1a1713bd3bb21442e9b00acbaeea445e8ecc9fff/apps/ollama-tauri-qwik/src-tauri/src/commands/l10n.rs#L49)

### Start app

To run in development mode

```sh
pnpm dev # or `cd apps/ollama-tauri-qwik && npm tauri dev`
```

To package the desktop application for installations

```sh
pnpm build # or `cd apps/ollama-tauri-qwik && npm tauri build`
```

### Change ollama host

Currently the app is using hard coded localhost. To adapt the Ollama host, see:

https://github.com/vanvuongngo/ollama-tauri-qwik/blob/992519315a6c461239ffa84603934cd0473c3814/apps/ollama-tauri-qwik/src-tauri/src/commands/l10n.rs#L49

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

## The story behind this template

It was a typical Tuesday evening when Van Vuong, a skilled JavaScript developer, stumbled upon an 
interesting open-source project on GitHub. The project, called "ollama-tauri-client" caught his 
attention with its innovative use of AI-powered Large Language Models (LLMs) in a desktop app 
template. As he delved deeper into the codebase, Van Vuong realized that the project's creator had 
used Rust as the backend language and web technologies for building the frontend.

Intrigued by the combination of technologies, Van Vuong decided to take the project under his wing 
and create a fork of it. He named his fork "ollama-tauri-qwik," aiming to showcase the possibilities 
of using AI-powered LLMs in a desktop app template.

As Van Vuong worked on ollama-tauri-qwik, he encountered a common problem when working with JavaScript: 
its single-threaded nature made it challenging to handle streaming data out-of-the-box. This 
limitation resulted in poor UX experiences whenever he called an LLM. The UI would freeze 
until the entire response was processed, which defeated the purpose of using AI in real-time.

Determined to overcome this hurdle, Van Vuong turned to Rust as his new backend language. With its 
multi-threaded capabilities and efficient memory management, Rust proved to be the perfect 
choice for ollama-tauri-qwik's Tauri backend. He leveraged Inter-Process Communication (IPC) between 
the frontend and backend to stream tokens immediately, eliminating the need for synchronous 
API calls.

Van Vuong's experience with JavaScript also gave him an edge when working with Ollama, a popular 
LLM server used as the LLMA provider in ollama-tauri-qwik. He was well-versed in using Ollama and 
knew its strengths and weaknesses, making it easier to integrate the AI model into his 
project.

As Van Vuong continued to work on ollama-tauri-qwik, he realized that the fork's potential went beyond 
just demonstrating the feasibility of LLMs in a desktop app template. The project could be 
used as a proof-of-concept for other developers interested in exploring AI-powered tools. By 
sharing his expertise and codebase with the community, Van Vuong aimed to inspire others to 
experiment with AI and push the boundaries of what was possible.

With ollama-tauri-qwik nearing completion, Van Vuong's fork had become more than just an interesting 
project – it had turned into a valuable resource for anyone looking to tap into the power of 
LLMs. As he shared his work on GitHub, Van Vuong couldn't help but wonder what other exciting 
possibilities would arise from this intersection of AI and desktop app development.

The ollama-tauri-qwik story didn't end there; it was just beginning, with the potential to inspire a 
new wave of developers to explore the frontiers of AI-powered tools.
