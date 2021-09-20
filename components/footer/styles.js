import styled from "@emotion/styled";
import { mediaQueries } from "@/utils/mediaQueries";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 538px;
  width: 100%;
  background-color: #1d1e25;

  border: 3px solid purple;

  ${mediaQueries("md")`
    display: flex;
    justify-content: center;
    min-height: 250px;
    width: 100%;
  `}
`;
export const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 538px;

  width: 100%;

  border: 3px solid purple;

  ${mediaQueries("md")`
    position: relative;
    display: grid;
    grid-template-columns: 23% 47% 30%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
      "logo links search"
      "social links copyright";
    min-height: 250px;
    width: 1440px;
  `}
`;

export const EmailContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  height: 83px;
  width: 100%;
  button {
    width: 80px;
    height: 44px;
    margin-left: 8px;
  }
  input {
    width: 230px;
    height: 44px;
    font-size: 13px;
    letter-spacing: -0.1px;
    border-radius: 25px;
    padding-left: 20px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: var(--darkGrayishBlue);
  }

  ${mediaQueries("md")`
    grid-area: search;
    justify-content: flex-start;
    width: 100%;
  `}
`;

export const EmailErrorMessage = styled.p`
  position: absolute;
  bottom: 0;
  padding-left: 20px;
  font-size: 10px;
  font-style: italic;
  color: var(--brightRed);

  ${mediaQueries("md")`
  
  `}
`;
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 48px;
  width: 100%;
  color: white;
  letter-spacing: -0.23px;

  ${mediaQueries("md")`
    grid-area: links;
    height: 100%;
  `}
`;
export const LinkContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  height: 100%;
  font-size: 15px;
  letter-spacing: -0.23px;
  text-align: start;
  font-weight: 400;

  div {
    cursor: pointer;
  }

  div:hover {
    color: var(--brightRed);
  }

  ${mediaQueries("md")`
    gap: 13px;
    justify-content: center;
  `}
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 296px;
  height: 32px;
  margin-top: 45px;

  ${mediaQueries("md")`
    grid-area: social;
    display: flex;
    justify-content: flex-end;
    gap: 13.33px;
    width: 100%;
    margin-left: 10px;
  `}
`;

export const SocialIcon = styled.div`
  cursor: pointer;
  :hover {
    filter: invert(40%) sepia(93%) saturate(1197%) hue-rotate(339deg)
      brightness(99%) contrast(91%);
  }

  ${mediaQueries("md")`
    width: 20px;
    height: 20px;
  `}
`;
export const LogoContainer = styled.div`
  margin-top: 50px;

  ${mediaQueries("md")`
    grid-area: logo;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
  `}
`;
export const Copyright = styled.div`
  margin-top: 30px;

  color: var(--darkGrayishBlue);
  font-size: 13px;
  letter-spacing: -0.2px;

  ${mediaQueries("md")`
    padding-left: 100px;
    grid-area: copyright;
    text-align: left;
  `}
`;
export const TopFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 405px;
  background-color: var(--brightRed);

  ${mediaQueries("md")`
    height: 220px;
    width: 100%;
  `}
`;
export const TopFooterContentContainer = styled.div`
  width: 83%;
  height: 223px;

  ${mediaQueries("md")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1440px;
  `}
`;
export const TopFooterContentTitle = styled.div`
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -1px;
  font-weight: 700;
  text-align: center;

  color: white;

  ${mediaQueries("md")`
    width: 445px;
    text-align: left;
    margin-left: 190px;
  `}
  br {
    display: none;
  }
`;

export const TopFooterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 29px;
  button {
    color: var(--brightRed);
    background-color: white;
  }

  button:hover {
    color: #f98f75;
  }

  ${mediaQueries("md")`
    margin-right: 110px;
  `}
`;
