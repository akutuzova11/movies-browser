import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column; 
  max-width: 100%;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.black};
  justify-content: center;  
  height: clamp(34vh, 49vw, 105vh);
  padding: 0 16px 0 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 105%;
    margin-left: -9px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background: ${({ theme }) => theme.gradient.desktop};
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-bottom: 0;
    margin-bottom: -8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.DesktopMax}px) {
    &::before {
      background: ${({ theme }) => theme.gradient.desktopMax};
      width: 114%;
      margin-left: -104px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.laptopMax}px) {
    &::before {
      background: ${({ theme }) => theme.gradient.laptopMax};
      width: 103%;
      margin-left: -6px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.mobileS}px) {
    &::before {
      background: ${({ theme }) => theme.gradient.mobileS};
      width: 105%;
    }
    height: clamp(17vh, 56vw, 105vh);
    max-height: fit-content;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;  
  align-items: center;
  overflow: hidden;
  max-width: 1368px;
  height: auto;
  margin: auto;  

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-width: 293px;    
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.mobileS}px) {    
    height: clamp(19vh, 41vw, 105vh);
  }
`;

export const BannerImage = styled.img`
  width: 95%; 
  height: 100%;
  height: clamp(33vh, 50vw, 105vh);
  object-fit: cover;
  object-position: center;  
  z-index: 0; 
  position: absolute;
  top: 0;
  left: 0; 
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-width: 288px;    
    height: clamp(17vh, 56vw, 105vh);
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.mobileS}px) {
    height: clamp(2vh, 59vw, 105vh);
  }
`;

export const BannerContent = styled.div`
  position: absolute;
  bottom: 56px;
  color: ${({ theme }) => theme.color.white};
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  opacity: ${({ $imageLoaded }) => ($imageLoaded ? 1 : 0)};
  visibility: ${({ $imageLoaded }) => ($imageLoaded ? "visible" : "hidden")};
  transition: opacity 0.0s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpointBanner.DesktopMax}px) {
    bottom: 8px;
    gap: 12px;
    margin-bottom: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.tabletMax}px) {
    bottom: 8px;
    gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.tabletMedium}px) {
    bottom: 8px;
    gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    bottom: -8px;
    gap: 4px;
    margin-bottom: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpointBanner.mobileS}px) {
    bottom: 0px;
    gap: 4px;
    margin-bottom: 8px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: clamp(32px, 4vw, 64px);
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpointBanner.tabletMax}px) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    margin: 0;
  }
`;
