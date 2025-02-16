use handlebars::Handlebars;
use std::collections::BTreeMap;

const TRANSLATE: &str = "translate to {{language}}: ";

// translate
#[tauri::command]
pub async fn t(language: String, prompt_message: String) -> Result<String, String> {
  if prompt_message.is_empty() {
    return Err("Please provide a prompt message".to_string())
  }

  let p = format!("{}{}", TRANSLATE, prompt_message);

  let mut handlebars = Handlebars::new();
  match handlebars.register_template_string("p", p) {
    Ok(_) => println!("Template registered successfully"),
    Err(e) => return Err(format!("Failed to register template: {}", e)),
  }

  let data = BTreeMap::from([("language", language)]);
  match handlebars.render("p", &data) {
    Ok(rendered) => Ok(rendered),
    Err(e) => Err(format!("Failed to render template: {}", e)),
  }
}