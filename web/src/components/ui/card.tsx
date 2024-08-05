import * as React from "react";
import { cn } from "@/lib/utils";

// Base Card Component
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-white text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Card Header Component
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-2 p-6 border-b border-gray-200 bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg",
        className
      )}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// Card Title Component
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-3xl font-bold leading-tight text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// Card Description Component
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-gray-600 mt-2", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

// Card Content Component
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

// Card Footer Component
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-6 border-t border-gray-200 bg-gray-100 rounded-b-lg",
        className
      )}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
