import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

export function PDFPreview() {
  return (
    <Card className="flex-1 flex flex-col border-0 rounded-none border-l">
      <div className="border-b border-border bg-muted/30 px-4 py-2 flex items-center justify-between">
        <span className="text-sm font-medium">PDF Preview</span>
        <div className="flex items-center gap-1">
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
            <ZoomOut className="h-3.5 w-3.5" />
          </Button>
          <span className="text-xs text-muted-foreground px-2">100%</span>
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
            <ZoomIn className="h-3.5 w-3.5" />
          </Button>
          <div className="w-px h-4 bg-border mx-1" />
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
            <Maximize2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-8 bg-muted/20 min-h-full flex justify-center">
          {/* Mock PDF page */}
          <div className="w-[595px] bg-white shadow-lg p-12 space-y-6">
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-bold text-gray-900">
                Deep Learning for Climate Prediction
              </h1>
              <p className="text-sm text-gray-600">Jane Smith</p>
              <p className="text-sm text-gray-600">Department of Computer Science</p>
              <p className="text-sm text-gray-600">November 7, 2025</p>
            </div>

            <div className="space-y-4 text-gray-900">
              <div className="space-y-2">
                <h2 className="text-lg font-bold">Abstract</h2>
                <p className="text-sm leading-relaxed text-justify">
                  We present a novel approach to climate modeling using transformer-based
                  architectures that achieves state-of-the-art performance on long-term
                  temperature prediction tasks.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold">1 Introduction</h2>
                <p className="text-sm leading-relaxed text-justify">
                  Climate change poses one of the most significant challenges of our time.
                  Recent advances in deep learning have opened new possibilities for
                  improving climate predictions.
                </p>
                <p className="text-sm leading-relaxed">Our key contributions are:</p>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>A new transformer architecture for spatio-temporal climate data</li>
                  <li>Benchmark results on 10-year predictions</li>
                  <li>Open-source implementation</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold">2 Methodology</h2>
                <p className="text-sm leading-relaxed text-justify">
                  Let x<sub>t</sub> ∈ R<sup>H×W×C</sup> represent the climate state at time t,
                  where H and W are spatial dimensions and C is the number of channels.
                </p>
                <div className="py-3 text-center">
                  <span className="text-sm italic">x̂<sub>t+k</sub> = f<sub>θ</sub>(x<sub>t</sub>, x<sub>t-1</sub>, ..., x<sub>t-n</sub>)</span>
                  <span className="ml-4 text-xs">(1)</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="border border-gray-300 h-32 flex items-center justify-center bg-gray-50">
                  <span className="text-xs text-gray-500">Figure 1: Model architecture</span>
                </div>
                <p className="text-xs text-center text-gray-600">
                  Figure 1: Model architecture overview
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
}
