import  { Main, Header, Ul, Nav, Li, Img, Box, Article, Section, Div, Small, Span, Hero, Date } from './styles/styles.js';
import { Button } from './components/Button'
import { GlobalStyle } from './styles/GlobalStyles'
import Logo from './logo.svg'

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header>
          <Img src={Logo} alt="logo"/>
          <Nav>
            <Ul>
              <Li>HOME <span></span></Li>
              <Li>ABOUT</Li>
              <Li>SCHEDULES</Li>
              <Li>REGISTER</Li>
              <Li>CONTACT</Li>
            </Ul>
            <Button title="Get Ticket"/>
          </Nav>
        </Header>

        <Article>
          <Section>
            <Small>Mon, Jan 27, 08:00</Small>
            <h1>International Conference on Web Research</h1>
            <Box></Box>
            <Span>Copper Box Area <small>🔴</small> London</Span>
            <Button title="Buy Ticket"/>
          </Section>
          <Div>
              <Date>
                <span>7<h6>MON</h6></span>
                <h1>/</h1>
                <span>206<h6>DAY</h6></span>
                <h1>/</h1>
                <span>642<h6>MIN</h6></span>
                <h1>/</h1>
                <span>53<h6>SEC</h6></span>
              </Date>
              <Hero src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="hero image"/>
          </Div>
        </Article>
      </Main>
    </>
  );
}

export default App;
