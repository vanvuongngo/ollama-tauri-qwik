# AI Agent for Ollama

## Idea

This project is inspired by the project [ollama-tauri-client](https://github.com/elijahmg/ollama-tauri-client) from [Ilya F](https://github.com/elijahmg).

It's built with usage of [Ollama](https://ollama.com/) and [Tauri](https://tauri.app/) + [Qwik](https://qwik.dev/)

Here we are using the [Qwik](https://qwik.dev/) O(1) frontend framework instead of Svelte.


## Get Started

### Prerequisites

1. [Rust](https://www.rust-lang.org/), see https://www.rust-lang.org/learn/get-started

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

2. [pnpm](https://pnpm.io/installation) (optional), see https://pnpm.io/installation

```sh
npm install -g pnpm
```

### Start app

To run in development mode

```sh
pnpm tauri dev # or `npm tauri dev`
```

To build from source

```sh
pnpm tauri build # or `npm tauri build`
```
