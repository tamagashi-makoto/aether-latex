import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  AlertCircle, 
  CheckCircle, 
  Send, 
  Lightbulb,
  FileText,
  TrendingUp
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AIAssistantPanel() {
  return (
    <Card className="w-80 flex flex-col border-0 rounded-none border-l">
      <div className="border-b border-border bg-gradient-to-r from-ai-primary/10 to-ai-primary/5 px-4 py-2.5 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-ai-primary" />
        <span className="text-sm font-medium">AI Assistant</span>
        <Badge variant="outline" className="ml-auto text-xs">Active</Badge>
      </div>

      <Tabs defaultValue="debug" className="flex-1 flex flex-col">
        <TabsList className="w-full rounded-none border-b">
          <TabsTrigger value="debug" className="flex-1 text-xs">Debug</TabsTrigger>
          <TabsTrigger value="suggest" className="flex-1 text-xs">Suggest</TabsTrigger>
          <TabsTrigger value="chat" className="flex-1 text-xs">Chat</TabsTrigger>
        </TabsList>

        <TabsContent value="debug" className="flex-1 m-0">
          <ScrollArea className="h-[calc(100vh-14rem)]">
            <div className="p-4 space-y-3">
              {/* Error notification */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <div className="flex-1 space-y-1">
                    <p className="text-xs font-medium text-destructive">
                      Undefined control sequence
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Line 27: <code className="bg-muted px-1 py-0.5 rounded">\customCommand</code> is not defined
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      This command should be defined in your preamble or custom.sty
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button size="sm" variant="default" className="h-7 text-xs">
                    Auto-fix
                  </Button>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Details
                  </Button>
                </div>
              </div>

              {/* Success notification */}
              <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-success">
                      Compilation successful
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      0 errors, 2 warnings
                    </p>
                  </div>
                </div>
              </div>

              {/* Info notification */}
              <div className="bg-info/10 border border-info/20 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 text-info mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <p className="text-xs font-medium">Optimization tip</p>
                    <p className="text-xs text-muted-foreground">
                      Consider using <code className="bg-muted px-1 py-0.5 rounded">\usepackage&#123;microtype&#125;</code> for better typography
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="suggest" className="flex-1 m-0">
          <ScrollArea className="h-[calc(100vh-14rem)]">
            <div className="p-4 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Citations</span>
                </div>
                <div className="bg-ai-secondary border border-ai-border rounded-lg p-3 space-y-2">
                  <p className="text-xs">
                    Consider citing <strong>Hinton et al. (2006)</strong> when discussing deep learning history in Section 1
                  </p>
                  <Button size="sm" variant="outline" className="h-7 text-xs w-full">
                    Add citation
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>Structure</span>
                </div>
                <div className="bg-ai-secondary border border-ai-border rounded-lg p-3 space-y-2">
                  <p className="text-xs">
                    The transition from Section 2.3 to 3.1 is abrupt. Consider adding a signposting sentence.
                  </p>
                  <Button size="sm" variant="outline" className="h-7 text-xs w-full">
                    Generate transition
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Consistency</span>
                </div>
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-3 space-y-2">
                  <p className="text-xs">
                    Notation inconsistency: "V_max" (24×) vs "Vmax" (3×)
                  </p>
                  <Button size="sm" variant="outline" className="h-7 text-xs w-full">
                    Unify notation
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="chat" className="flex-1 m-0">
          <ScrollArea className="h-[calc(100vh-14rem)]">
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs">
                    How can I create a 3-column table with centered headers?
                  </p>
                </div>
                <div className="bg-ai-secondary border border-ai-border rounded-lg p-3">
                  <p className="text-xs mb-2">Here's the LaTeX code:</p>
                  <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
{`\\begin{table}[htbp]
  \\centering
  \\begin{tabular}{c|c|c}
    \\hline
    Header 1 & Header 2 & Header 3 \\\\
    \\hline
    Data 1 & Data 2 & Data 3 \\\\
  \\end{tabular}
\\end{table}`}
                  </pre>
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border p-3">
        <div className="flex gap-2">
          <Input 
            placeholder="Ask AI assistant..." 
            className="h-8 text-xs"
          />
          <Button size="sm" className="h-8 w-8 p-0">
            <Send className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
