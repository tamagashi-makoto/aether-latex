// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

// LaTeX関連のコマンドを定義
#[tauri::command]
fn compile_latex(content: String) -> Result<String, String> {
    // ここにLaTeXコンパイルのロジックを実装
    // 例: pdflatexやlatexmkを呼び出す
    Ok(format!("LaTeX compilation started for content length: {}", content.len()))
}

#[tauri::command]
fn save_file(path: String, content: String) -> Result<(), String> {
    use std::fs::write;
    write(path.clone(), content)
        .map_err(|e| format!("Failed to save file {}: {}", path, e))?;
    Ok(())
}

#[tauri::command]
fn read_file(path: String) -> Result<String, String> {
    use std::fs::read_to_string;
    read_to_string(path.clone())
        .map_err(|e| format!("Failed to read file {}: {}", path, e))
}

#[tauri::command]
fn check_latex_installed() -> Result<bool, String> {
    use std::process::Command;
    
    // LaTeX（pdflatex）がインストールされているかチェック
    let output = Command::new("pdflatex")
        .arg("--version")
        .output();
    
    match output {
        Ok(output) => Ok(output.status.success()),
        Err(_) => Ok(false),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            compile_latex,
            save_file,
            read_file,
            check_latex_installed
        ])
        .setup(|app| {
            #[cfg(debug_assertions)]
            {
                let window = app.get_window("main").unwrap();
                window.open_devtools();
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running Texora application");
}