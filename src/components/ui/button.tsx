import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-500 text-white shadow-sm shadow-brand-500/20 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/30",
        secondary:
          "bg-ink-950 text-white hover:bg-ink-900 dark:bg-white dark:text-ink-950 dark:hover:bg-mist-100",
        outline:
          "border border-border-subtle bg-transparent text-foreground hover:border-brand-500 hover:text-brand-600",
        ghost: "bg-transparent text-foreground hover:bg-surface-alt",
        link: "bg-transparent p-0 text-brand-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
