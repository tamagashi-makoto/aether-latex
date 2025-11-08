import { invoke } from '@tauri-apps/api/tauri';
import { open, save } from '@tauri-apps/api/dialog';
import { readTextFile, writeTextFile } from '@tauri-apps/api/fs';

export const useTauri = () => {
  // LaTeXコンパイル
  const compileLaTeX = async (content: string): Promise<string> => {
    try {
      const result = await invoke<string>('compile_latex', { content });
      return result;
    } catch (error) {
      console.error('LaTeX compilation failed:', error);
      throw error;
    }
  };

  // ファイルを開く
  const openFile = async (): Promise<string | null> => {
    try {
      const selected = await open({
        multiple: false,
        filters: [{
          name: 'LaTeX',
          extensions: ['tex', 'latex']
        }, {
          name: 'Text',
          extensions: ['txt']
        }]
      });
      
      if (selected && typeof selected === 'string') {
        const content = await readTextFile(selected);
        return content;
      }
      return null;
    } catch (error) {
      console.error('Failed to open file:', error);
      throw error;
    }
  };

  // ファイルを保存
  const saveFile = async (content: string, defaultPath?: string): Promise<boolean> => {
    try {
      const filePath = await save({
        defaultPath,
        filters: [{
          name: 'LaTeX',
          extensions: ['tex']
        }]
      });
      
      if (filePath) {
        await writeTextFile(filePath, content);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to save file:', error);
      throw error;
    }
  };

  // LaTeXがインストールされているかチェック
  const checkLaTeXInstalled = async (): Promise<boolean> => {
    try {
      const result = await invoke<boolean>('check_latex_installed');
      return result;
    } catch (error) {
      console.error('Failed to check LaTeX installation:', error);
      return false;
    }
  };

  return {
    compileLaTeX,
    openFile,
    saveFile,
    checkLaTeXInstalled,
  };
};