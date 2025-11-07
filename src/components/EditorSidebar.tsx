import { FileText, Folder, Sparkles, History, Settings, FileCode, Image } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const projectFiles = [
  { name: "main.tex", icon: FileCode, path: "/" },
  { name: "introduction.tex", icon: FileText, path: "/intro" },
  { name: "methodology.tex", icon: FileText, path: "/method" },
  { name: "results.tex", icon: FileText, path: "/results" },
  { name: "references.bib", icon: FileCode, path: "/refs" },
];

const aiFeatures = [
  { title: "AI Assistant", icon: Sparkles, badge: "active" },
  { title: "Debug Helper", icon: Settings, badge: null },
  { title: "Citation Manager", icon: FileText, badge: null },
  { title: "Figure Generator", icon: Image, badge: null },
];

export function EditorSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">LaTeX</span>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-sm">Research Paper</h2>
              <p className="text-xs text-muted-foreground">NeurIPS 2025</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
            <span className="text-primary-foreground font-bold text-xs">L</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea className="flex-1">
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs">
              {!isCollapsed && "Project Files"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projectFiles.map((file) => (
                  <SidebarMenuItem key={file.name}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={file.path}
                        end
                        className="flex items-center gap-2 hover:bg-sidebar-accent"
                        activeClassName="bg-sidebar-accent text-sidebar-accent-foreground"
                      >
                        <file.icon className="h-4 w-4" />
                        {!isCollapsed && <span className="text-sm">{file.name}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-4">
            <SidebarGroupLabel className="text-xs">
              {!isCollapsed && "AI Features"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {aiFeatures.map((feature) => (
                  <SidebarMenuItem key={feature.title}>
                    <SidebarMenuButton className="flex items-center gap-2">
                      <feature.icon className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="text-sm flex-1">{feature.title}</span>
                          {feature.badge && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-ai-primary text-white">
                              {feature.badge}
                            </span>
                          )}
                        </>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
