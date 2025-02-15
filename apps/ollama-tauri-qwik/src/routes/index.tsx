import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi</h1>
      <div>
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "AI Agent with Ollama Tauri Qwik",
  meta: [
    {
      name: "description",
      content: "AI Agent with Ollama Tauri Qwik to enable using AI engines",
    },
  ],
};
