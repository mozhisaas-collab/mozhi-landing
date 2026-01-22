import * as React from "react"

const Card = ({ className = "", ...props }) => (
  <div
    className={`shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm ${className}`}
    {...props}
  />
);

const CardHeader = ({ className = "", ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
);

const CardTitle = ({ className = "", ...props }) => (
  <div
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
);

const CardDescription = ({ className = "", ...props }) => (
  <div
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
);

const CardContent = ({ className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);

const CardFooter = ({ className = "", ...props }) => (
  <div
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  />
);
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}

