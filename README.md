# Texora

<div align="center">

![Texora Logo](src-tauri/icons/128x128.png)

**Tauri、React、TypeScriptで構築されたプロフェッショナルなLaTeXエディタ**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Rust](https://img.shields.io/badge/rust-1.75%2B-orange.svg)](https://www.rust-lang.org/)
[![Tauri](https://img.shields.io/badge/tauri-1.5-blue.svg)](https://tauri.app/)
[![React](https://img.shields.io/badge/react-18.3-61dafb.svg)](https://reactjs.org/)

[English](README.md) | 日本語

</div>

---

## 📖 概要

**Texora**は、モダンなデスクトップLaTeXエディタです。Rust製の高速バックエンド（Tauri）とReactベースのフロントエンドを組み合わせ、軽量かつ高性能なLaTeX編集環境を提供します。

### ✨ 主な特徴

- 🚀 **高速起動** - Tauriによるネイティブアプリケーション
- 💾 **ローカルファイル管理** - ネイティブファイルダイアログでの読み書き
- 📝 **LaTeXコンパイル** - システムのpdflatexとの統合
- 🎨 **モダンUI** - Tailwind CSS & shadcn/ui
- 🔒 **セキュア** - Tauriのセキュリティモデル
- 🌍 **クロスプラットフォーム** - Windows、macOS、Linux対応

---

## 🛠️ 技術スタック

### バックエンド
- **[Tauri](https://tauri.app/)** 1.5 - デスクトップアプリフレームワーク
- **[Rust](https://www.rust-lang.org/)** - システムプログラミング言語

### フロントエンド
- **[React](https://reactjs.org/)** 18.3 - UIライブラリ
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全な開発
- **[Vite](https://vitejs.dev/)** - 高速ビルドツール
- **[Tailwind CSS](https://tailwindcss.com/)** - ユーティリティファーストCSS
- **[shadcn/ui](https://ui.shadcn.com/)** - UIコンポーネント

---

## 📋 システム要件

### 必須
- **Node.js** 18.0以上
- **Rust** 1.75以上
- **npm** または **yarn**

### オプション
- **LaTeX** (TeX Live, MacTeX, MiKTeX) - PDF出力機能を使用する場合

### プラットフォーム別の追加要件

#### macOS
```bash
# Xcode Command Line Tools
xcode-select --install
```

#### Ubuntu / Debian
```bash
sudo apt update
sudo apt install -y \
    libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

#### Fedora
```bash
sudo dnf install \
    webkit2gtk4.0-devel \
    openssl-devel \
    curl \
    wget \
    file \
    gtk3-devel \
    libappindicator-gtk3-devel \
    librsvg2-devel
```

#### Arch Linux
```bash
sudo pacman -S --needed \
    webkit2gtk \
    base-devel \
    curl \
    wget \
    file \
    openssl \
    gtk3 \
    libappindicator-gtk3 \
    librsvg
```

#### Windows
- Microsoft Visual Studio C++ Build Tools
- WebView2（Windows 11には標準搭載）

---

## 🚀 セットアップ

### 1. Rustのインストール

#### macOS / Linux
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

#### Windows
[rustup.rs](https://rustup.rs/)からインストーラーをダウンロードして実行

インストール後、Rustのバージョンを確認：
```bash
rustc --version
cargo --version
```

### 2. リポジトリのクローン

```bash
git clone https://github.com/yourusername/texora.git
cd texora
```

### 3. 依存関係のインストール

```bash
# Node.js依存関係のインストール
npm install
```

macOS以外のプラットフォームでは、上記の「プラットフォーム別の追加要件」セクションのコマンドも実行してください。

### 4. アイコンの生成

```bash
# シェルスクリプト版（ImageMagick使用 - 推奨）
chmod +x generate_icons_texora.sh
./generate_icons_texora.sh

# または Python版（Pillow使用）
pip3 install Pillow
python3 generate_icons_texora.py
```

ImageMagickがインストールされていない場合：
```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt install imagemagick
```

---

## 💻 開発

### 開発サーバーの起動

```bash
npm run tauri:dev
```

このコマンドは以下を実行します：
1. Vite開発サーバーを起動（ホットリロード有効）
2. Tauriアプリケーションウィンドウを開く
3. コード変更を自動的に反映

**注意**: 初回起動時は、Rust依存関係のダウンロードとコンパイルで5〜10分かかります。

### 利用可能なコマンド

```bash
# Vite開発サーバーのみ起動
npm run dev

# TypeScriptの型チェックとビルド
npm run build

# Tauriアプリケーションのビルド
npm run tauri:build
```

### ビルド

#### 開発ビルド（デバッグ情報付き）
```bash
npm run build
```

#### プロダクションビルド（最適化済み）
```bash
npm run tauri:build
```

ビルドされたアプリケーションは `src-tauri/target/release/` に生成されます：

- **macOS**: `bundle/macos/Texora.app` と `bundle/dmg/Texora_0.1.0_x64.dmg`
- **Windows**: `Texora.exe` と `bundle/msi/Texora_0.1.0_x64_en-US.msi`
- **Linux**: `texora` と `bundle/deb/texora_0.1.0_amd64.deb`, `bundle/appimage/texora_0.1.0_amd64.AppImage`

---

## 📂 プロジェクト構造

```
texora/
├── src/                        # React フロントエンド
│   ├── components/             # Reactコンポーネント
│   ├── hooks/                  # カスタムフック
│   │   └── useTauri.ts        # Tauri API統合フック
│   ├── App.tsx                # メインアプリコンポーネント
│   ├── main.tsx               # Reactエントリーポイント
│   └── index.css              # グローバルスタイル
│
├── src-tauri/                  # Tauri/Rust バックエンド
│   ├── src/
│   │   └── main.rs            # Rustメインファイル
│   ├── icons/                 # アプリケーションアイコン
│   ├── Cargo.toml             # Rust依存関係定義
│   ├── tauri.conf.json        # Tauri設定ファイル
│   └── build.rs               # ビルドスクリプト
│
├── public/                     # 静的ファイル
├── package.json               # Node.js依存関係とスクリプト
├── vite.config.ts             # Vite設定
├── tailwind.config.ts         # Tailwind CSS設定
├── tsconfig.json              # TypeScript設定
├── generate_icons_texora.sh   # アイコン生成スクリプト
└── README.md                  # このファイル
```

---

## 🎯 主な機能

### ✅ 実装済み機能

#### ファイル操作
- **ファイルを開く**: ネイティブファイルダイアログでLaTeXファイル（.tex）を開く
- **ファイルを保存**: 編集内容をローカルファイルに保存
- **フォーマットフィルター**: LaTeX、テキストファイルのフィルタリング

#### LaTeX編集
- **テキストエディタ**: シンプルなテキストエリアでのLaTeX編集
- **等幅フォント**: コード編集に適したフォント表示
- **システムチェック**: LaTeXインストール状況の自動検出

#### コンパイル
- **pdflatexサポート**: システムにインストールされたpdflatexでのコンパイル
- **エラー検出**: LaTeXが未インストールの場合の警告表示
- **コンパイル結果表示**: 実行結果の表示エリア

### 🚧 今後の実装予定

- **シンタックスハイライト**: LaTeXコードの見やすい色分け表示
- **自動補完**: LaTeXコマンドの入力補完
- **リアルタイムプレビュー**: 編集結果のリアルタイムPDF表示
- **PDF表示**: コンパイル結果のアプリ内表示
- **エラー表示改善**: コンパイルエラーの行番号表示
- **テンプレート機能**: よく使うLaTeX文書のテンプレート
- **プロジェクト管理**: 複数ファイルからなるプロジェクトの管理

---

## 🔧 Tauri APIの使用例

Texoraは以下のTauri APIを使用しています：

### フロントエンド（TypeScript）

```typescript
import { invoke } from '@tauri-apps/api/tauri';
import { open, save } from '@tauri-apps/api/dialog';
import { readTextFile, writeTextFile } from '@tauri-apps/api/fs';

// LaTeXコンパイル
const result = await invoke<string>('compile_latex', { 
  content: latexCode 
});

// ファイルダイアログを開く
const selected = await open({
  multiple: false,
  filters: [
    { name: 'LaTeX', extensions: ['tex', 'latex'] },
    { name: 'Text', extensions: ['txt'] }
  ]
});

// ファイルを読み込み
if (selected && typeof selected === 'string') {
  const content = await readTextFile(selected);
}

// ファイルを保存
const filePath = await save({
  filters: [{ name: 'LaTeX', extensions: ['tex'] }]
});
if (filePath) {
  await writeTextFile(filePath, content);
}
```

### バックエンド（Rust）

カスタムコマンドの追加方法（`src-tauri/src/main.rs`）：

```rust
#[tauri::command]
fn my_custom_command(arg: String) -> Result<String, String> {
    // 処理を実装
    Ok(format!("受信: {}", arg))
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            my_custom_command,
            compile_latex,
            save_file,
            read_file,
            check_latex_installed
        ])
        .run(tauri::generate_context!())
        .expect("error while running Texora application");
}
```

---

## 🐛 トラブルシューティング

### 開発サーバーが起動しない

```bash
# 1. キャッシュをクリア
rm -rf node_modules package-lock.json
rm -rf src-tauri/target

# 2. 依存関係を再インストール
npm install

# 3. 再起動
npm run tauri:dev
```

### Rustコンパイルエラー

```bash
# Rustツールチェーンを最新版に更新
rustup update

# Cargoキャッシュをクリア
cargo clean
```

### `tailwindcss-animate` エラー

```bash
# 不足しているパッケージをインストール
npm install tailwindcss-animate

# または完全な依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
```

### LaTeXコンパイルが動作しない

```bash
# LaTeXがインストールされているか確認
pdflatex --version

# インストールされていない場合
# macOS
brew install --cask mactex

# Ubuntu/Debian
sudo apt install texlive-full

# Windows
# https://tug.org/texlive/ からインストーラーをダウンロード
```

### アイコンが表示されない

```bash
# アイコンを再生成
./generate_icons_texora.sh

# または手動で確認
ls -la src-tauri/icons/
```

### ビルドエラー: "no targets specified"

```bash
# Cargo.tomlに[[bin]]セクションが含まれているか確認
cat src-tauri/Cargo.toml | grep -A 2 "\[\[bin\]\]"

# なければ追加
# [[bin]]
# name = "texora"
# path = "src/main.rs"
```

### macOSで "main window not found" エラー

```bash
# src-tauri/src/main.rs を確認
# window.get_window("main") が使用されているか確認
```

---

## 🤝 コントリビューション

コントリビューションを歓迎します！以下の手順でお願いします：

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### 開発ガイドライン

- **コードスタイル**: 既存のコードに従う
- **コメント**: 新機能には適切な日本語または英語のコメントを追加
- **型定義**: TypeScriptの型定義を活用
- **フォーマット**: 
  - Rustコードは `cargo fmt` でフォーマット
  - TypeScriptコードは既存のPrettier設定に従う

### バグ報告

バグを見つけた場合は、以下の情報を含めてIssueを作成してください：

- OS とバージョン
- Node.js とRustのバージョン
- エラーメッセージ
- 再現手順

---

## 📝 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

---

## 🔗 関連リンク

### 公式ドキュメント
- [Tauri公式ドキュメント](https://tauri.app/)
- [Tauri API リファレンス](https://tauri.app/v1/api/js/)
- [React公式ドキュメント](https://ja.react.dev/)
- [Rust Book（日本語版）](https://doc.rust-jp.rs/book-ja/)
- [LaTeX Project](https://www.latex-project.org/)

### チュートリアル
- [Tauri入門ガイド](https://tauri.app/v1/guides/getting-started/prerequisites)
- [React + TypeScript チートシート](https://react-typescript-cheatsheet.netlify.app/)

---

## 📧 サポート

質問や問題がある場合：

- **Issue**: [GitHub Issues](https://github.com/yourusername/texora/issues)で報告
- **ディスカッション**: [GitHub Discussions](https://github.com/yourusername/texora/discussions)で質問

---

## 👥 作者

- 開発者名 - [@yourusername](https://github.com/yourusername)

---

## 🙏 謝辞

このプロジェクトは以下の素晴らしいオープンソースプロジェクトを使用しています：

- [Tauri](https://tauri.app/) - デスクトップアプリフレームワーク
- [React](https://reactjs.org/) - UIライブラリ
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [shadcn/ui](https://ui.shadcn.com/) - UIコンポーネント
- [Vite](https://vitejs.dev/) - ビルドツール

---

<div align="center">

❤️ Tauri と React で作られています

**Texora** - プロフェッショナルなLaTeXエディタ

</div>