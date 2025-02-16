import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { invoke } from "@tauri-apps/api/core";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    invoke("t", {
      language: "german",
      promptMessage:
        "Hi, I am your personal assistent. How can I help you today?",
    })
      .then((message) => console.log("ANSWER:", message))
      .catch((error) => console.error(error));
  });

  return (
    <>
      <h1>Hi</h1>
      <div>Happy coding.</div>
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
