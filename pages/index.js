import Image from "next/image";
import Layout from "@/components/layout";
import Slider from "@/components/slider/slider";
import { testimonialData } from "@/components/slider/testimonials";

import {
  Card,
  CardElements1,
  HeroContainer,
  IllustrationContainer,
  SummaryContainer,
  SummaryInfoContainer,
  SummaryInfoTitle,
  SummaryInfo,
  ButtonContainer,
  InformationContainer,
  InformationHeader,
  InformationHeaderTitle,
  InformationHeaderSummary,
  InformationKeyServicesContainer,
  InformationServiceContainer,
  InformationServiceHeader,
  InformationServiceNumber,
  InformationServiceTitle,
  InformationServiceSummary,
} from "../styles/homeStyles";

export default function Home() {
  return (
    <Layout>
      <Card>
        <CardElements1>
          <HeroContainer>
            <IllustrationContainer>
              <Image src="/illustration-intro.svg" layout="fill" />
            </IllustrationContainer>
          </HeroContainer>
          <SummaryContainer>
            <SummaryInfoContainer>
              <SummaryInfoTitle>
                Bring everyone together to build better products.
              </SummaryInfoTitle>
              <SummaryInfo>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </SummaryInfo>
            </SummaryInfoContainer>
            <ButtonContainer>
              <button>Get Started</button>
            </ButtonContainer>
          </SummaryContainer>
        </CardElements1>
        <InformationContainer>
          <InformationHeader>
            <InformationHeaderTitle>
              What’s different
              <br /> about Manage?
            </InformationHeaderTitle>
            <InformationHeaderSummary>
              Manage provides all the functionality your
              <br /> team needs, without the complexity. Our software is
              tailor-made for modern digital product teams.
            </InformationHeaderSummary>
          </InformationHeader>
          <InformationKeyServicesContainer>
            <InformationServiceContainer>
              <InformationServiceHeader>
                <InformationServiceNumber>01</InformationServiceNumber>
                <InformationServiceTitle>
                  Track company-wide progress
                </InformationServiceTitle>
              </InformationServiceHeader>
              <InformationServiceSummary>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </InformationServiceSummary>
            </InformationServiceContainer>
            <InformationServiceContainer>
              <InformationServiceHeader>
                <InformationServiceNumber>02</InformationServiceNumber>
                <InformationServiceTitle>
                  Advanced built-in reports
                </InformationServiceTitle>
              </InformationServiceHeader>
              <InformationServiceSummary>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </InformationServiceSummary>
            </InformationServiceContainer>
            <InformationServiceContainer>
              <InformationServiceHeader>
                <InformationServiceNumber>03</InformationServiceNumber>
                <InformationServiceTitle>
                  Everything you need in one place
                </InformationServiceTitle>
              </InformationServiceHeader>
              <InformationServiceSummary>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </InformationServiceSummary>
            </InformationServiceContainer>
          </InformationKeyServicesContainer>
        </InformationContainer>
        <Slider testimonials={testimonialData} />
      </Card>
    </Layout>
  );
}
