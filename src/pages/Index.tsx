import { SidebarProvider } from "@/components/ui/sidebar";
import { EditorSidebar } from "@/components/EditorSidebar";
import { EditorToolbar } from "@/components/EditorToolbar";
import { CodeEditor } from "@/components/CodeEditor";
import { PDFPreview } from "@/components/PDFPreview";
import { AIAssistantPanel } from "@/components/AIAssistantPanel";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full flex-col">
        <EditorToolbar />
        
        <div className="flex flex-1 overflow-hidden">
          <EditorSidebar />
          
          <main className="flex-1 flex overflow-hidden">
            <CodeEditor />
            <PDFPreview />
            <AIAssistantPanel />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
