import React from 'react';
import GlobalStyle from './styles/global';
import {
  Header,
  Nav,
  Section,
  HeaderSection,
  ArticleSection,
  FooterSection,
  Aside,
  Footer,
  Container,
} from './style';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header>Header</Header>
      <Container>
        <Nav>Nav</Nav>
        <Section>
          <HeaderSection>Header Section</HeaderSection>
          <ArticleSection>Article Section</ArticleSection>
          <FooterSection>Footer Section</FooterSection>
        </Section>
        <Aside>Aside</Aside>
      </Container>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
