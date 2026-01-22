"use client"

import * as React from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

const SelectContext = React.createContext(undefined)

const useSelectContext = () => {
  const context = React.useContext(SelectContext)
  if (!context) {
    throw new Error("Select components must be used within Select")
  }
  return context
}

const Select = ({ children, value, onValueChange, defaultValue }) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const [open, setOpen] = React.useState(false)
  const triggerRef = React.useRef(null)
  const contentRef = React.useRef(null)

  const currentValue = value !== undefined ? value : internalValue
  const handleValueChange = onValueChange || setInternalValue

  React.useEffect(() => {
    if (!open) return

    const handleClickOutside = (event) => {
      const target = event.target
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        contentRef.current &&
        !contentRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open])

  return (
    <SelectContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        open,
        onOpenChange: setOpen,
        triggerRef,
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === SelectContent) {
          return React.cloneElement(child, {
            ref: contentRef,
          })
        }
        return child
      })}
    </SelectContext.Provider>
  )
}

const SelectGroup = ({ children }) => <>{children}</>
SelectGroup.displayName = "SelectGroup"

const SelectValue = ({ placeholder, children, getLabel }) => {
  const { value } = useSelectContext()
  const displayValue = value 
    ? (getLabel ? getLabel(value) : (children || value))
    : null
  
  return <span className={!value ? "text-gray-500" : ""}>{displayValue || placeholder}</span>
}
SelectValue.displayName = "SelectValue"

const SelectTrigger = ({ className = "", children, ...props }) => {
  const { open, onOpenChange, triggerRef } = useSelectContext()

  return (
    <button
      ref={triggerRef}
      type="button"
      onClick={() => onOpenChange(!open)}
      className={`flex h-9 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ${className}`}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
};

const SelectScrollUpButton = ({ className = "", ...props }) => (
  <div className={`flex cursor-default items-center justify-center py-1 ${className}`} {...props}>
    <ChevronUp className="h-4 w-4" />
  </div>
);

const SelectScrollDownButton = ({
  className = "",
  ...props
}) => (
  <div className={`flex cursor-default items-center justify-center py-1 ${className}`} {...props}>
    <ChevronDown className="h-4 w-4" />
  </div>
);

const SelectContent = ({ className = "", children, position = "popper", ...props }) => {
  const { open, triggerRef } = useSelectContext()
  const contentRef = React.useRef(null)

  React.useEffect(() => {
    if (!open || !contentRef.current || !triggerRef.current) return

    const trigger = triggerRef.current
    const content = contentRef.current
    const rect = trigger.getBoundingClientRect()

    content.style.position = "fixed"
    content.style.top = `${rect.bottom + 4}px`
    content.style.left = `${rect.left}px`
    content.style.zIndex = "9999"
    content.style.minWidth = `${rect.width}px`
  }, [open])

  if (!open) return null

  return (
    <div
      ref={contentRef}
      className={`relative z-[9999] max-h-96 overflow-y-auto overflow-x-hidden rounded-md border bg-white text-gray-900 shadow-md ${className}`}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
};

const SelectLabel = ({ className = "", ...props }) => (
  <div
    className={`py-1.5 pl-8 pr-2 text-sm font-semibold ${className}`}
    {...props}
  />
);

const SelectItem = ({ className = "", children, value, onClick, ...props }) => {
  const { value: selectedValue, onValueChange, onOpenChange } = useSelectContext()
  const isSelected = selectedValue === value

  const handleClick = (e) => {
    onValueChange?.(value)
    onOpenChange(false)
    onClick?.(e)
  }

  return (
    <div
      onClick={handleClick}
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-red-50 hover:bg-red-50 ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  );
};

const SelectSeparator = ({ className = "", ...props }) => (
  <div className={`-mx-1 my-1 h-px bg-gray-200 ${className}`} {...props} />
);

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
