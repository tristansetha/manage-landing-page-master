import Header from "./header/header";
import Footer from "./footer/footer";
import styled from "@emotion/styled";
import { mediaQueries } from "@/utils/mediaQueries";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 3226px;

  ${mediaQueries("md")`
    display: flex;
    height: 2639px;
    width: 100%;
  `}/* @media (min-width: 1440px) {
    display: flex;
    height: 2639px;
    width: 100%;
  } */
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url("/bg-tablet-pattern.svg"), url("/bg-tablet-pattern.svg");
  background-repeat: repeat-y;
  background-repeat: no-repeat;
  background-size: 475px, 350px;
  background-position: 40px -100px, 240px 500px;

  ${mediaQueries("md")`
    height: 2639px;
    width: 1440px;
    background-image: url("/bg-tablet-pattern.svg"),
      url("/bg-tablet-pattern.svg");
    background-repeat: repeat-y;
    background-repeat: no-repeat;
    background-size: 475px, 350px;
    background-position: 100% -100px, 240px 500px;
  `}/* @media (min-width: 1440px) {
    height: 2639px;
    width: 1440px;
    background-image: url("/bg-tablet-pattern.svg"),
      url("/bg-tablet-pattern.svg");
    background-repeat: repeat-y;
    background-repeat: no-repeat;
    background-size: 475px, 350px;
    background-position: 100% -100px, 240px 500px;
  } */
`;

const MainContainer = styled.main`
  width: 100%;

  /* border: 5px solid blue; */

  ${mediaQueries("md")`
    display: flex;
    justify-content: center;
  `}/* @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
  } */
`;

export default function Layout({ children }) {
  const headerItems = [
    {
      name: "Pricing",
      href: "/",
    },
    {
      name: "About Us",

      href: "/",
    },
    {
      name: "Careers",
      href: "/",
    },
    {
      name: "Community",
      href: "/",
    },
  ];

  return (
    <Container>
      <Background>
        <Header headerItems={headerItems} logo="/logo.svg" />
        <MainContainer>{children}</MainContainer>
      </Background>
      <Footer logo="/logo-invert.svg"></Footer>
    </Container>
  );
}
