import styled from "@emotion/styled";
import { mediaQueries } from "@/utils/mediaQueries";

export const Card = styled.section`
  width: 100%;
  height: 2265px;
  color: var(--veryDarkBlue);
  ${mediaQueries("md")`
    overflow: visible;
    width: 100%;
    max-width: 1440px;
    height: 2069px;`}
`;
export const CardElements1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 34%;
  width: 100%;
  ${mediaQueries("md")`
    position: relative;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    height: 606px;
    width: 100%;`}
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 51%;
  width: 100%;
  ${mediaQueries("md")`
    justify-content: center;
    height: 485px;
    width: 540px;
  `}
`;
export const IllustrationContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 318px;
  width: 373px;
  margin-top: 48px;

  ${mediaQueries("md")`
    position: relative;
    display: block;
    width: 540px;
    height: 485px;
  `}
`;
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 49%;
  width: 100%;
  ${mediaQueries("md")`
  justify-content: space-between;
    align-items: flex-start;
    height: 388px;
    width: 445px;
  `}
`;
export const SummaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 28px;
  text-align: center;
  width: 100%;
  ${mediaQueries("md")`
    justify-content: space-between;
    height: 304px;
    text-align: left;
    align-items: flex-start;
  `}
`;
export const SummaryInfoTitle = styled.div`
  padding: 0;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -1px;

  ${mediaQueries("md")`
    letter-spacing: -1px;
    font-size: 50px;
    line-height: 64px;
  `}
`;
export const SummaryInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 323px;
  margin-top: 10px;
  color: var(--darkGrayishBlue);
  font-size: 16px;
  line-height: 28px;
  ${mediaQueries("md")`
    margin-top: 16px;
    width: 350px;
    font-size: 16px;
    line-height: 26px;
  `}
`;
export const ButtonContainer = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: center;
`;
export const InformationContainer = styled.div`
  height: 40%;
  ${mediaQueries("md")`
    height: 763px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`;
export const InformationHeaderTitle = styled.div`
  padding: 0;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  line-height: 45px;
  letter-spacing: -0.62px;
  ${mediaQueries("md")`
    text-align: left;

  `}
`;
export const InformationHeaderSummary = styled.div`
  padding: 16px 26px 26px 26px;

  text-align: center;
  color: var(--darkGrayishBlue);
  font-size: 14px;
  line-height: 28px;
  ${mediaQueries("md")`
    margin-right: 95px;
    margin-top: 24px;
    padding: 0;
    text-align: left;
  `}
`;
export const InformationKeyServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 17px 0 17px;
  ${mediaQueries("md")`
    padding: 0;
    width: 540px;
    height: 536px;
  `}
`;
export const InformationServiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :nth-of-type(n + 2) {
    margin-top: 47px;
  }
  ${mediaQueries("md")`
    position: relative;
    padding: 0;
    width: 100%;
  `}
`;
export const InformationServiceHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  align-items: center;
  height: 39px;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.29px;
  background-color: var(--veryPaleRed);
  border-radius: 25px 0 0 25px;
  ${mediaQueries("md")`
    padding: 0;
    width: 100%;
    background: none;
  `}
`;
export const InformationServiceNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 67px;

  border-radius: 25px;
  color: var(--varyLightGray);
  background-color: var(--brightRed);
  font-size: 16px;
  ${mediaQueries("md")`
    margin-right: 25px;
    width: 67px;
    height: 39px;
  `}
`;
export const InformationServiceTitle = styled.div`
  margin-left: 15px;
`;
export const InformationServiceSummary = styled.div`
  padding: 5px 0 0 0;
  font-size: 14px;
  line-height: 28px;
  color: var(--darkGrayishBlue);

  ${mediaQueries("md")`
    width: 82%;
    padding: 0;
    font-size: 16px;
    line-height: 26px;
    margin-left: 120px;
  `}
`;

export const InformationHeader = styled.div`
  ${mediaQueries("md")`
  height: 224px;
  width: 445px;   
`}
`;
