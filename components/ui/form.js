"use client"

import * as React from "react"
import {
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { Label } from "@/components/ui/label"

const Form = FormProvider

const FormFieldContext = React.createContext({})

const FormField = ({
  ...props
}) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const FormItemContext = React.createContext({})

const FormItem = ({ className = "", ...props }) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={`space-y-2 ${className}`} {...props} />
    </FormItemContext.Provider>
  );
};

const FormLabel = ({ className = "", ...props }) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      className={`${error ? "text-destructive" : ""} ${className}`}
      htmlFor={formItemId}
      {...props}
    />
  );
};

const FormControl = ({ asChild, children, ...props }) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      id: formItemId,
      "aria-describedby": !error
        ? `${formDescriptionId}`
        : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props,
    })
  }

  return (
    <div
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    >
      {children}
    </div>
  );
};

const FormDescription = ({ className = "", ...props }) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      id={formDescriptionId}
      className={`text-sm text-muted-foreground ${className}`}
      {...props}
    />
  );
};

const FormMessage = ({ className = "", children, ...props }) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      id={formMessageId}
      className={`text-sm font-medium text-destructive ${className}`}
      {...props}
    >
      {body}
    </p>
  );
};

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

