import GlobalStyles from '@/GlobalStyles'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { BoxInfo, BoxNavInfo, Header, Main, Nav, TitlePrimery, TitleSecondy } from '@/Styles/ComponentsUtils'
import ImgLogo from '@/imgs/MainLogo.svg'
import Image from 'next/image'
import { dataHoraFormatada } from '@/utils/GetTimeAndDate'

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
          <Nav>
            <Image src={ImgLogo} alt='logo do site: stone currency' />
            <BoxNavInfo>
              <BoxInfo>
                <TitlePrimery>{dataHoraFormatada}</TitlePrimery>
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
