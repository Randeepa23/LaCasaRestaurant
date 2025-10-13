import * as React from "react"

import { cn } from "@/lib/utils"

interface ProgressBarProps {
  progress: number
  className?: string
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <div className={cn("relative h-1 w-full overflow-hidden bg-background/30 rounded-full", className)}>
      <div 
        className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}