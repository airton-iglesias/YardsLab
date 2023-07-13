import { Metadata } from "next";
import "../components/styles.css";



export const metadata: Metadata = {
  title: 'YardsLab',
  icons: {
    icon: '/icons/favicon.png',
    shortcut: '/icons/favicon.png',
    apple: '/icons/favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/favicon.png',
    },
  },
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
    return (
      <html lang="pt-br">
        <body className="scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-white hover:scrollbar-thumb-zinc-700 overflow-y-scroll bg-gradient-to-r from-slate-900 to-slate-700">
            {children}
        </body>
      </html>
    );
  }