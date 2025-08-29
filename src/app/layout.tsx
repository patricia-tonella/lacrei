import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import { StyledComponentsProvider } from '@/components/providers/StyledComponentsProvider';
import { GlobalStyles } from '@/styles/globals';
import { ClientLayout } from '@/components/layout/ClientLayout';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Lacrei Saúde - Cuidando da sua saúde com excelência e humanização',
  description:
    'Conectamos você aos melhores profissionais de saúde através de tecnologia inovadora e atendimento personalizado. Sua saúde, nossa prioridade.',
  keywords:
    'saúde, telemedicina, consultas online, exames, vacinação, fisioterapia, psicologia',
  authors: [{ name: 'Lacrei Saúde' }],
  creator: 'Lacrei Saúde',
  publisher: 'Lacrei Saúde',
  robots: 'index, follow',
  openGraph: {
    title: 'Lacrei Saúde - Cuidando da sua saúde com excelência e humanização',
    description:
      'Conectamos você aos melhores profissionais de saúde através de tecnologia inovadora e atendimento personalizado.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Lacrei Saúde',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lacrei Saúde - Cuidando da sua saúde com excelência e humanização',
    description:
      'Conectamos você aos melhores profissionais de saúde através de tecnologia inovadora e atendimento personalizado.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#349E35',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <head>
        {/* CSS para evitar FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body { 
              opacity: 0; 
              transition: opacity 0.3s ease-in-out;
              background-color: #ffffff;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            }
            body.loaded { 
              opacity: 1; 
            }
            .skeleton {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
            * {
              box-sizing: border-box;
            }
            html {
              scroll-behavior: smooth;
            }
            @font-face {
              font-family: 'Nunito';
              font-display: swap;
            }
          `,
          }}
        />
      </head>
      <body className={nunito.className}>
        <StyledComponentsProvider>
          <GlobalStyles />
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsProvider>
        {/* Script para remover skeleton e mostrar conteúdo */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Remover skeleton loading
              const skeletons = document.querySelectorAll('.skeleton');
              skeletons.forEach(skeleton => {
                skeleton.classList.remove('skeleton');
              });
              
              // Mostrar body com fade in
              document.body.classList.add('loaded');
              
              // Preload de imagens críticas
              const criticalImages = document.querySelectorAll('img[data-critical]');
              criticalImages.forEach(img => {
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                }
              });
            });
          `,
          }}
        />
      </body>
    </html>
  );
}
