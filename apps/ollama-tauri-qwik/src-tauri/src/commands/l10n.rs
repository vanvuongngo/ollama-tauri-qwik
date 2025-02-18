use handlebars::Handlebars;
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::collections::HashMap;
use tauri::{AppHandle, Emitter};

const TRANSLATE_PROMPT: &str = "translate without notes to {{language}}:";

#[derive(Serialize, Deserialize, Debug)]
struct Json {
    response: Option<String>,
}

#[derive(Clone, Serialize)]
struct Payload {
    message: String,
}

#[tauri::command]
pub async fn t(app: AppHandle, language: String, prompt_message: String) -> Result<(), String> {
    if prompt_message.is_empty() {
        return Err("Please provide a prompt message".to_string());
    }

    let p = format!("{}{}", TRANSLATE_PROMPT, prompt_message);

    let mut handlebars = Handlebars::new();
    match handlebars.register_template_string("p", p) {
      Ok(_) => {
      },
      Err(e) => return Err(format!("Failed to register template: {}", e)),
    }

    let data = BTreeMap::from([("language", language)]);

    match handlebars.render("p", &data) {
      Ok(rendered) => {
        let client = reqwest::Client::new();
        let mut map = HashMap::new();
        map.insert("model", "llama3.2".to_string());
        map.insert("prompt", rendered);

        let mut res = client.post("http://127.0.0.1:11434/api/generate")
            .json(&map)
            .send()
            .await
            .unwrap();

        while let Some(chunk) = res.chunk().await.expect("Failed on chunks") {
          let json: Json = serde_json::from_slice(&chunk).expect("Failed on parsing");
          let message = json.response.unwrap_or("".into());

          app.emit("t-answer", Payload { message: message }).unwrap();
        }

        Ok(())
      }
      Err(e) => Err(format!("Failed to render template: {}", e))
    }
}
