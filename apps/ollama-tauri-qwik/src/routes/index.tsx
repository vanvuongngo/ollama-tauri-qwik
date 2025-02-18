import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

type TranslateAnswer = {
  chunk: string;
};

const languages = [
  "english",
  "german",
  "vietnamese",
  "italian",
  "mandarin-chinese",
  "hindi",
  "spanish",
  "french",
  "modern-standard arabic",
  "standard arabic",
  "bengali",
  "portuguese",
  "russian",
  "urdu",
  "japanese",
  "egyptian arabic",
  "turkish",
  "yue chinese",
  "swahili",
  "tagalog",
  "Korean",
  "iranian persian",
  "Thai",
  "Levantine Arabic",
];
const PROMPT_MESSAGE =
  "Hi, I am your personal assistent. How can I help you today?";

export default component$(() => {
  const message = useSignal(PROMPT_MESSAGE);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    listen<TranslateAnswer>("t-answer", (event) => {
      message.value += event.payload.chunk;
    });
  });

  return (
    <>
      <h1>Ollama Tauri Qwik demo</h1>

      <fieldset>
        <div>
          <label for="language-select">Choose a language:</label>
          <select
            name="language"
            id="language-select"
            onChange$={(e) => {
              const target = e.target as HTMLInputElement;
              if (target.value) {
                target.checked = true;
                if (target.value === "english") {
                  message.value = PROMPT_MESSAGE;
                  return;
                }

                message.value = "";
                invoke("t", {
                  language: target.value,
                  promptMessage: PROMPT_MESSAGE,
                }).catch((error) => console.error(error));
              }
            }}
          >
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <div class="message">{message.value}</div>
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
