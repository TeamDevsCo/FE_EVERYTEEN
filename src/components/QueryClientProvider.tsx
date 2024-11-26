"use client";

import React, { PropsWithChildren } from "react";
import {
    QueryClient,
    QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function QueryClientProvider({ children }: PropsWithChildren) {
    return (
        <ReactQueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </ReactQueryClientProvider>
    );
}
