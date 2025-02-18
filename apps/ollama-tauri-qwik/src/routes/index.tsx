import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

type TranslateAnswer = {
  message: string;
};

export default component$(() => {
  const message = useSignal("");

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    listen<TranslateAnswer>("t-answer", (event) => {
      message.value += event.payload.message;
      console.log(`payload: ${JSON.stringify(event.payload, null, 2)}`);
    });

    invoke("t", {
      // german, vietnamese, italian, mandarin-chinese, hindi, spanish, french,
      // Modern-Standard Arabic, Standard Arabic, Bengali, Portuguese, Russian,
      // Urdu (india, parkistan), Japanese,Egyptian Arabic, Turkish,Yue Chinese,
      // Swahili, Tagalog (filipino), Korean, Iranian Persian, Thai, Levantine Arabic
      language: "german",
      promptMessage:
        "Hi, I am your personal assistent. How can I help you today?",
    }).catch((error) => console.error(error));
  });

  return (
    <>
      <h1>Ollama Tauri Qwik demo</h1>
      <div>{message.value}</div>
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
