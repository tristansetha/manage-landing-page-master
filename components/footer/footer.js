import Image from "next/image";
import { useState } from "react";

import {
  FooterContainer,
  FooterContentContainer,
  EmailContainer,
  EmailErrorMessage,
  LinksContainer,
  LinkContainerRow,
  SocialLinkContainer,
  SocialIcon,
  LogoContainer,
  Copyright,
  TopFooterContainer,
  TopFooterContentContainer,
  TopFooterContentTitle,
  TopFooterButtonContainer,
} from "./styles.js";

const Footer = ({ logo }) => {
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleInvalidEmail = (e) => {
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!regex.test(e.target.value)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  };

  return (
    <>
      <TopFooterContainer>
        <TopFooterContentContainer>
          <TopFooterContentTitle>
            Simplify how your team works
            <br /> today.
          </TopFooterContentTitle>
          <TopFooterButtonContainer>
            <button>Get Started</button>
          </TopFooterButtonContainer>
        </TopFooterContentContainer>
      </TopFooterContainer>
      <FooterContainer>
        <FooterContentContainer>
          <EmailContainer>
            <input
              style={{
                border: `${
                  invalidEmail ? "3px solid var(--brightRed)" : "none"
                }`,
              }}
              onChange={handleInvalidEmail}
              type="text"
              placeholder="Updates in your inbox…"
            />
            <button>Go</button>
            <EmailErrorMessage
              style={{ display: `${invalidEmail ? "block" : "none"}` }}
            >
              Please insert a valid email
            </EmailErrorMessage>
          </EmailContainer>
          <LinksContainer>
            <LinkContainerRow>
              <div>Home</div>
              <div>Pricing</div>
              <div>Products</div>
              <div>About Us</div>
            </LinkContainerRow>
            <LinkContainerRow>
              <div>Careers</div>
              <div>Community</div>
              <div>Privacy Policy</div>
            </LinkContainerRow>
          </LinksContainer>
          <SocialLinkContainer>
            <SocialIcon>
              <Image
                src={"/icon-facebook.svg"}
                height={30}
                width={30}
                alt="facebook"
              />
            </SocialIcon>
            <SocialIcon>
              <Image
                src={"/icon-youtube.svg"}
                height={30}
                width={30}
                alt="facebook"
              />
            </SocialIcon>
            <SocialIcon>
              <Image
                src={"/icon-twitter.svg"}
                height={24}
                width={30}
                alt="facebook"
              />
            </SocialIcon>
            <SocialIcon>
              <Image
                src={"/icon-pinterest.svg"}
                height={30}
                width={30}
                alt="facebook"
              />
            </SocialIcon>
            <SocialIcon>
              <Image
                src={"/icon-instagram.svg"}
                height={30}
                width={30}
                alt="facebook"
              />
            </SocialIcon>
          </SocialLinkContainer>
          <LogoContainer>
            <Image
              src={logo}
              height={22}
              width={154}
              alt="logo"
              layout="fixed"
            />
          </LogoContainer>
          <Copyright>Copyright 2020. All Rights Reserved</Copyright>
        </FooterContentContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
