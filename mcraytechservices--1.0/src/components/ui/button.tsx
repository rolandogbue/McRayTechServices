// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const buttonVariants = cva(
// 	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
// 	{
// 		variants: {
// 			variant: {
// 				default: "bg-primary text-primary-foreground hover:bg-primary/90",
// 				primary: "bg-blue-600 text-white hover:bg-blue-700",
// 				secondary:
// 					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
// 				destructive:
// 					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
// 				outline:
// 					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
// 				ghost: "hover:bg-accent hover:text-accent-foreground",
// 				link: "text-primary underline-offset-4 hover:underline",
// 			},
// 			size: {
// 				default: "h-10 px-4 py-2",
// 				sm: "h-9 rounded-md px-3",
// 				lg: "h-11 rounded-md px-8",
// 				icon: "h-10 w-10",
// 			},
// 		},
// 		defaultVariants: {
// 			variant: "default",
// 			size: "default",
// 		},
// 	}
// );

// export interface ButtonProps
// 	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
// 		VariantProps<typeof buttonVariants> {
// 	asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
// 	({ className, variant, size, asChild = false, ...props }, ref) => {
// 		const Comp = asChild ? Slot : "button";
// 		return (
// 			<Comp
// 				className={cn(buttonVariants({ variant, size, className }))}
// 				ref={ref}
// 				{...props}
// 			/>
// 		);
// 	}
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-soft-lg hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive/90 hover:shadow-soft-lg",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:shadow-soft hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-soft",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium:
          "bg-primary text-primary-foreground shadow-glow hover:shadow-glow-lg hover:scale-[1.02] btn-shine",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
