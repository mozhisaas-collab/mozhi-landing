"use client"

import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react"

const DropdownMenuContext = React.createContext(undefined)

const DropdownMenu = ({ children, open: controlledOpen, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const triggerRef = React.useRef(null)
  const open = controlledOpen ?? internalOpen
  const handleOpenChange = onOpenChange ?? setInternalOpen

  React.useEffect(() => {
    if (!open) return

    const handleClickOutside = (event) => {
      const target = event.target
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        !document.querySelector('[data-dropdown-content]')?.contains(target)
      ) {
        handleOpenChange(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleOpenChange(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open, handleOpenChange])

  return (
    <DropdownMenuContext.Provider value={{ open, onOpenChange: handleOpenChange, triggerRef }}>
      {children}
    </DropdownMenuContext.Provider>
  )
}

const DropdownMenuTrigger = ({ className = "", children, asChild, onClick, ...props }) => {
  const context = React.useContext(DropdownMenuContext)
  if (!context) {
    throw new Error("DropdownMenuTrigger must be used within DropdownMenu")
  }
  const { open, onOpenChange, triggerRef } = context

  const handleClick = (e) => {
    onOpenChange(!open)
    onClick?.(e)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      ref: (node) => {
        triggerRef.current = node
        const originalRef = children.ref
        if (typeof originalRef === "function") originalRef(node)
        else if (originalRef) originalRef.current = node
      },
      "data-dropdown-trigger": true,
      ...props,
    })
  }

  return (
    <button
      ref={triggerRef}
      className={className}
      onClick={handleClick}
      data-dropdown-trigger
      {...props}
    >
      {children}
    </button>
  );
};

const DropdownMenuContent = ({ className = "", align = "start", sideOffset = 4, children, ...props }) => {
  const context = React.useContext(DropdownMenuContext)
  if (!context) {
    throw new Error("DropdownMenuContent must be used within DropdownMenu")
  }
  const { open, triggerRef } = context
  const contentRef = React.useRef(null)

  React.useEffect(() => {
    if (!open || !contentRef.current || !triggerRef.current) return

    const trigger = triggerRef.current
    const content = contentRef.current
    const rect = trigger.getBoundingClientRect()

    content.style.position = "fixed"
    content.style.top = `${rect.bottom + sideOffset}px`
    content.style.left = `${rect.left}px`
    content.style.zIndex = "50"
  }, [open, sideOffset])

  if (!open) return null

  return (
    <div
      ref={contentRef}
      data-dropdown-content
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md bg-white p-1 shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const DropdownMenuItem = ({ className = "", children, asChild, inset, onSelect, onClick, ...props }) => {
  const context = React.useContext(DropdownMenuContext)
  const { onOpenChange } = context || { onOpenChange: () => {} }

  const handleClick = (e) => {
    onSelect?.()
    if (context) {
      onOpenChange(false)
    }
    onClick?.(e)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      className: `relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors focus:bg-red-50 hover:bg-red-50 ${inset ? "pl-8" : ""} ${className} ${children.props?.className || ""}`,
      ...props,
    })
  }

  return (
    <button
      className={`relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors focus:bg-red-50 hover:bg-red-50 ${inset ? "pl-8" : ""} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

const DropdownMenuGroup = ({ children }) => <>{children}</>
DropdownMenuGroup.displayName = "DropdownMenuGroup"

const DropdownMenuPortal = ({ children }) => {
  const context = React.useContext(DropdownMenuContext)
  if (!context || !context.open) return null
  return <>{children}</>
}
DropdownMenuPortal.displayName = "DropdownMenuPortal"

const DropdownMenuLabel = ({ className = "", inset, ...props }) => (
  <div
    className={`px-2 py-1.5 text-sm font-semibold ${inset ? "pl-8" : ""} ${className}`}
    {...props}
  />
);

const DropdownMenuSeparator = ({ className = "", ...props }) => (
  <div className={`-mx-1 my-1 h-px bg-gray-200 ${className}`} {...props} />
);

const DropdownMenuShortcut = ({ className = "", ...props }) => {
  return <span className={`ml-auto text-xs tracking-widest opacity-60 ${className}`} {...props} />
};

const DropdownMenuSub = ({ children }) => <>{children}</>
DropdownMenuSub.displayName = "DropdownMenuSub"

const DropdownMenuSubTrigger = ({ className = "", inset, children, ...props }) => (
  <button
    className={`flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-red-50 hover:bg-red-50 ${inset ? "pl-8" : ""} ${className}`}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </button>
);

const DropdownMenuSubContent = ({ className = "", ...props }) => (
  <div
    className={`z-50 overflow-hidden rounded-md bg-white p-1 shadow-lg ${className}`}
    {...props}
  />
);

const DropdownMenuCheckboxItem = ({ className = "", children, checked, ...props }) => (
  <button
    className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-red-50 hover:bg-red-50 ${className}`}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      {checked && <Check className="h-4 w-4" />}
    </span>
    {children}
  </button>
);

const DropdownMenuRadioItem = ({ className = "", children, ...props }) => (
  <button
    className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-red-50 hover:bg-red-50 ${className}`}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Circle className="h-2 w-2 fill-current" />
    </span>
    {children}
  </button>
);

const DropdownMenuRadioGroup = ({ children }) => <>{children}</>
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
