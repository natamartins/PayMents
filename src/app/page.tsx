import { BoxInfo, BoxNavInfo, Header, Logo, Main, Nav, TitlePrimery, TitleSecondy } from '@/Styles/ComponentsUtils'
import ImgLogo from '@/imgs/MainLogo.svg'
import CadForm from '@/components/Form/Index'

export default function Home() {
  return (
    <>
      <Header>
        <Nav>
          <Logo src={ImgLogo} alt='logo do site: stone currency' />
          <BoxNavInfo>
            <BoxInfo>
              <TitlePrimery>14 de  janeiro 2021</TitlePrimery> |
              <TitlePrimery>21:00 UTC</TitlePrimery>
            </BoxInfo>
            <TitleSecondy>Dados de cambio disponivel pela mornigstar.</TitleSecondy>
          </BoxNavInfo>
        </Nav>
      </Header>
      <Main>
        <CadForm />
      </Main>
    </>
  )
}
