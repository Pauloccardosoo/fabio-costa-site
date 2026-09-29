import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-sm text-foreground placeholder:text-ink-500/60 transition-colors focus-visible:border-brand-500 disabled:opacity-50";

export function FieldLabel({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground">
      {children}
      {optional && (
        <span className="ml-1 text-xs font-normal text-ink-500">(opcional)</span>
      )}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {message}
    </p>
  );
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }
>(({ className, invalid, ...props }, ref) => (
  <input
    ref={ref}
    aria-invalid={invalid}
    className={cn(fieldBase, invalid && "border-red-500", className)}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }
>(({ className, invalid, ...props }, ref) => (
  <textarea
    ref={ref}
    aria-invalid={invalid}
    className={cn(fieldBase, "min-h-32 resize-y", invalid && "border-red-500", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }
>(({ className, invalid, children, ...props }, ref) => (
  <select
    ref={ref}
    aria-invalid={invalid}
    className={cn(fieldBase, "appearance-none bg-no-repeat", invalid && "border-red-500", className)}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
