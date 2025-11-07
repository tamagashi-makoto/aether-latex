import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const sampleLatex = `\\documentclass[11pt]{article}
\\usepackage{amsmath}
\\usepackage{graphicx}
\\usepackage{hyperref}

\\title{Deep Learning for Climate Prediction}
\\author{Jane Smith\\\\Department of Computer Science}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{abstract}
We present a novel approach to climate modeling using
transformer-based architectures that achieves
state-of-the-art performance on long-term temperature
prediction tasks.
\\end{abstract}

\\section{Introduction}

Climate change poses one of the most significant
challenges of our time \\cite{ipcc2021}. Recent advances
in deep learning have opened new possibilities for
improving climate predictions.

Our key contributions are:
\\begin{itemize}
  \\item A new transformer architecture for spatio-temporal
        climate data
  \\item Benchmark results on 10-year predictions
  \\item Open-source implementation
\\end{itemize}

\\section{Methodology}

Let $x_t \\in \\mathbb{R}^{H \\times W \\times C}$ represent
the climate state at time $t$, where $H$ and $W$ are
spatial dimensions and $C$ is the number of channels.

\\begin{equation}
  \\hat{x}_{t+k} = f_\\theta(x_t, x_{t-1}, ..., x_{t-n})
\\end{equation}

\\begin{figure}[htbp]
  \\centering
  \\includegraphics[width=0.8\\linewidth]{figures/architecture.png}
  \\caption{Model architecture overview}
  \\label{fig:architecture}
\\end{figure}

\\section{Results}

Our model achieves a mean absolute error of...

\\end{document}`;

export function CodeEditor() {
  return (
    <Card className="flex-1 flex flex-col border-0 rounded-none">
      <div className="border-b border-border bg-muted/30 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">main.tex</span>
          <span className="text-xs text-muted-foreground">● Modified</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>Lines: 52</span>
          <span>•</span>
          <span>UTF-8</span>
          <span>•</span>
          <span>LaTeX</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex">
          {/* Line numbers */}
          <div className="select-none bg-muted/20 px-3 py-4 text-right text-xs text-editor-lineNumber font-mono">
            {sampleLatex.split("\n").map((_, i) => (
              <div key={i} className="leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code content */}
          <pre className="flex-1 p-4 text-sm font-mono bg-editor-bg leading-6 overflow-x-auto">
            <code className="text-foreground">{sampleLatex}</code>
          </pre>
        </div>
      </ScrollArea>
    </Card>
  );
}
