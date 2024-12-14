import * as React from "react";
import { vars } from "@everyteen/themes";
declare const _Button: React.ForwardRefExoticComponent<{
    color?: keyof typeof vars.colors.$scale;
    isDisabled?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    size?: "xs" | "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export { _Button as Button };
