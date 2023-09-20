import GlobalStyles from '@/GlobalStyles'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Footer, Header, Main, TitlePrimery } from '@/Styles/ComponentsUtils'
import NavBar from '@/components/NavBar/Index'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'PayMents',
  description: 'web of coins.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <GlobalStyles />
        <Header>
          <NavBar />
        </Header>
        <Main>
          {children}
        </Main>
        <Footer>
          <TitlePrimery>Natã Martins © - 2023</TitlePrimery>
        </Footer>
      </body>
    </html>
  )
}
