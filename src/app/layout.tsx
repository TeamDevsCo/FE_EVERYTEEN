import type { Metadata } from "next";
import { DefaultSeo } from "next-seo";
import DEFAULT_SEO from "../../next-seo-config";
import localFont from "next/font/local";
import "../style/globals.style.css";
import "../style/reset.style.css";
import QueryClientProvider from "../components/QueryClientProvider";
import { ClientThemeProvider } from "../components/ClientThemeProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <QueryClientProvider>
                    <DefaultSeo {...DEFAULT_SEO} />
                    <ClientThemeProvider>{children}</ClientThemeProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
{
    /* <>
<NextSeo
  title="Blog"
  canonical={`${METADATA.meta.url}/blog`}
  openGraph={{ url: `${METADATA.meta.url}/blog` }}
/>

<PageTitle title="Blog" desc="개발 관련 공유하고 싶은 내용을 포스팅합니다." />

<SearchContainer handleInputChange={handleInputChange} />

<PostsContainer posts={searchedPosts} />
</> */
}
