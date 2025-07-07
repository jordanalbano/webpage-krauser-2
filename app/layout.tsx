import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/theme-provider';


export const metadata: Metadata = {
  title: 'Krauser - Desarrollamos el futuro del software',
  description: 'Soluciones con IA, ecommerce y cloud para empresas que piensan en mañana. Especialistas en desarrollo de software con inteligencia artificial.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="theme-transition">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}