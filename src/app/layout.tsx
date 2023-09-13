import GlobalStyles from '@/GlobalStyles'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { BoxInfo, BoxNavInfo, Header, Main, Nav, TitlePrimery, TitleSecondy } from '@/Styles/ComponentsUtils'
import ImgLogo from '@/imgs/MainLogo.svg'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <GlobalStyles />
        <Header>
          <Nav>
            <Image src={ImgLogo} alt='logo do site: stone currency' />
            <BoxNavInfo>
              <BoxInfo>
                <TitlePrimery>14 de  janeiro 2021</TitlePrimery> | <TitlePrimery>21:00 UTC</TitlePrimery>
              </BoxInfo>
              <TitleSecondy>Dados de cambio disponivel pela mornigstar.</TitleSecondy>
            </BoxNavInfo>
          </Nav>
        </Header>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  )
}
