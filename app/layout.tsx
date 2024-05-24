import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import 'normalize.css/normalize.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Netleak',
  description: 'Netflix like',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body style={bodyStyle}>
        <header style={{height: "8vh", width: "100vw", display: 'flex', justifyContent: "center", alignItems: "center"}}>test</header>
        {children}
        <footer>test</footer>
      </body>
    </html>
  );
}

const bodyStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
};
