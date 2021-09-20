import Image from "next/image";
import Link from "next/link";
import useToggle from "@/hooks/useToggle";
import styled from "@emotion/styled";
import { mediaQueries } from "@/utils/mediaQueries";

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 59px;
  padding: 0 24px 0 0;
  ${mediaQueries("md")`
    display: flex;
    justify-content: center;
    width: 1440px;
    height: 100px;
  `}
`;

const HamburgerContainer = styled.div`
  cursor: pointer;
  display: flex;
  ${mediaQueries("md")`
    display: none;
  `}
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 24px;
  bottom: -7px;
  display: flex;
  cursor: pointer;
  ${mediaQueries("md")`
    left: 190px;
    bottom: 0px;
  `}
`;
const NavContainer = styled.div`
  display: none;
  position: relative;
  div {
    cursor: pointer;
  }
  div:hover {
    color: var(--darkGrayishBlue);
  }
  ${mediaQueries("md")`
    display: flex;
    flex-direction: row;
    height: 19px;
    font-size: 13px;
    text-align: center;
    div:not(:first-child) {
      margin-left: 32px;
    }
  `}
`;
const ButtonContainer = styled.div`
  display: none;

  ${mediaQueries("md")`
    position: absolute;
    right: 165px;
    display: block;
  `}
`;
const NavModalContainer = styled.div`
  position: absolute;
  top: 110px;
  z-index: 1;
  width: 88%;
  height: 291px;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  letter-spacing: -0.29px;
  text-align: center;
  color: black;
  background-color: white;
  a {
    text-decoration: none;
    color: black;
  }

  ${mediaQueries("md")`
    display: none;
  `}
`;

const Header = ({ headerItems, logo }) => {
  const [value, toggleValue] = useToggle(false);
  const handleOnClick = (value) => {
    toggleValue(value);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        {
          <>
            <Image priority src={logo} height={18} width={110} alt="logo" />
          </>
        }
      </LogoContainer>
      <NavContainer>
        {headerItems.map((element, index) => (
          <Link href={element.href}>
            <div>{element.name}</div>
          </Link>
        ))}
      </NavContainer>
      <NavModalContainer active={value} headerItems={headerItems}>
        {headerItems.map((element, index) => (
          <div>
            <a href={element.href}>{element.name}</a>
          </div>
        ))}
      </NavModalContainer>
      <ButtonContainer>
        <button>Get Started</button>
      </ButtonContainer>
      <HamburgerContainer>
        {value ? (
          <>
            <Image
              onClick={() => handleOnClick(false)}
              src={"/icon-close.svg"}
              height={21}
              width={22}
              alt="hamburger"
            />
          </>
        ) : (
          <>
            <Image
              onClick={() => handleOnClick(true)}
              src={"/icon-hamburger.svg"}
              height={18}
              width={25}
              alt="hamburger"
            />
          </>
        )}
      </HamburgerContainer>
    </HeaderContainer>
  );
};

export default Header;
