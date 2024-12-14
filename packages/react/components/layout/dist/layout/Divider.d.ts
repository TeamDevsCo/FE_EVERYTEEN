import * as React from "react";
import { vars } from "@everyteen/themes";
declare const _Divider: React.ForwardRefExoticComponent<{
    orientation?: "horizontal" | "vertical";
    color?: keyof typeof vars.colors.$scale;
    size?: number;
    variant?: "solid" | "dashed";
} & React.HTMLAttributes<HTMLHRElement> & React.RefAttributes<HTMLHRElement>>;
export { _Divider as Divider };
