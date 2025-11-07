import { Play, Download, Upload, Save, GitBranch, Settings, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function EditorToolbar() {
  return (
    <header className="h-14 border-b border-border bg-background flex items-center px-4 gap-3">
      <SidebarTrigger />

      <div className="flex items-center gap-2 flex-1">
        <Button size="sm" className="gap-2">
          <Play className="h-4 w-4" />
          Compile
        </Button>

        <Button size="sm" variant="outline" className="gap-2">
          <Save className="h-4 w-4" />
          Save
        </Button>

        <div className="h-6 w-px bg-border mx-2" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Download PDF</DropdownMenuItem>
            <DropdownMenuItem>Download Source</DropdownMenuItem>
            <DropdownMenuItem>Export to ZIP</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button size="sm" variant="outline">
          <Upload className="h-4 w-4" />
        </Button>

        <Button size="sm" variant="outline">
          <GitBranch className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant="outline" className="gap-1.5">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs">Compiled 2s ago</span>
        </Badge>

        <Button size="sm" variant="ghost">
          <Info className="h-4 w-4" />
        </Button>

        <Button size="sm" variant="ghost">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
