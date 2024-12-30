import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef(({ className = "", ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={`inline-flex p-1 rounded-lg ${className}`}
    {...props}
  />
));

export const TabsTrigger = React.forwardRef(({ className = "", ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={`px-3 py-2 rounded-md transition-colors ${className}`}
    {...props}
  />
));

export const TabsContent = TabsPrimitive.Content;