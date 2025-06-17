import * as React from "react";

import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";

function Textarea({
  className,
  error,
  ...props
}: React.ComponentProps<"textarea"> & { error?: string }) {
  return (
    <figure>
      <textarea
        data-slot="textarea"
        className={cn(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          !!error && "!border-b-red-500 text-red-500",
          className
        )}
        {...props}
      />
      {!!error && (
        <p className="text-red-500 mt-2 text-[12px] flex items-center gap-1">
          <CircleAlert color="red" size={12} />
          {error}
        </p>
      )}
    </figure>
  );
}

export { Textarea };
