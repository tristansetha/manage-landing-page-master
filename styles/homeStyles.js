import styled from "@emotion/styled";

export const Card = styled.section`
  width: 375px;
  height: 2265px;
  color: var(--veryDarkBlue);
  @media (min-width: 1440px) {
    overflow: visible;
    width: 1440px;
    height: 2069px;
  }
`;
export const CardElements1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 34%;
  @media (min-width: 1440px) {
    position: relative;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    height: 606px;
    width: 100%;
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 51%;
  width: 100%;
  @media (min-width: 1440px) {
    justify-content: center;
    height: 485px;
    width: 540px;
  }
`;
export const IllustrationContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 318px;
  width: 373px;
  margin-top: 48px;
  @media (min-width: 1440px) {
    position: relative;
    display: block;
    width: 540px;
    height: 485px;
  }
`;
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 49%;
  width: 100%;
  @media (min-width: 1440px) {
    justify-content: space-between;
    align-items: flex-start;
    height: 388px;
    width: 445px;
  }
`;
export const SummaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 28px;
  text-align: center;
  width: 100%;
  @media (min-width: 1440px) {
    justify-content: space-between;
    height: 304px;
    text-align: left;
    align-items: flex-start;
  }
`;
export const SummaryInfoTitle = styled.div`
  padding: 0;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -1px;
  @media (min-width: 1440px) {
    letter-spacing: -1px;
    font-size: 50px;
    line-height: 64px;
  }
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
  @media (min-width: 1440px) {
    margin-top: 16px;
    width: 350px;
    font-size: 16px;
    line-height: 26px;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: center;
  @media (min-width: 1440px) {
  }
`;
export const InformationContainer = styled.div`
  height: 40%;

  @media (min-width: 1440px) {
    height: 763px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
  }
`;
export const InformationHeaderTitle = styled.div`
  padding: 0;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  line-height: 45px;
  letter-spacing: -0.62px;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
export const InformationHeaderSummary = styled.div`
  padding: 16px 26px 26px 26px;

  text-align: center;
  color: var(--darkGrayishBlue);
  font-size: 14px;
  line-height: 28px;
  @media (min-width: 1440px) {
    margin-right: 95px;

    margin-top: 24px;
    padding: 0;
    text-align: left;
  }
`;
export const InformationKeyServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 17px 0 17px;
  @media (min-width: 1440px) {
    padding: 0;
    width: 540px;
    height: 536px;
  }
`;
export const InformationServiceContainer = styled.div`
  width: 359px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :nth-of-type(n + 2) {
    margin-top: 47px;
  }
  @media (min-width: 1440px) {
    position: relative;
    padding: 0;

    width: 100%;
  }
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
  @media (min-width: 1440px) {
    padding: 0;

    width: 100%;
    background: none;
  }
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
  @media (min-width: 1440px) {
    margin-right: 25px;
    width: 67px;
    height: 39px;
  }
`;
export const InformationServiceTitle = styled.div`
  margin-left: 15px;

  @media (min-width: 1440px) {
  }
`;
export const InformationServiceSummary = styled.div`
  padding: 5px 0 0 0;
  font-size: 14px;
  line-height: 28px;
  color: var(--darkGrayishBlue);
  @media (min-width: 1440px) {
    width: 82%;
    padding: 0;
    font-size: 16px;
    line-height: 26px;
    margin-left: 120px;
  }
`;

export const InformationHeader = styled.div`
  @media (min-width: 1440px) {
    height: 224px;
    width: 445px;
  }
`;
