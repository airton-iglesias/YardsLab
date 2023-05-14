import "./components/styles.css";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="pt-br">
        <body className="scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-white hover:scrollbar-thumb-zinc-700 overflow-y-scroll">{children}</body>
      </html>
    );
  }