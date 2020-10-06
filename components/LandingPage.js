import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from '../helpers/AnimationRevealPage'
import Hero from '../components/hero/Hero'

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;
  
    return (
      <AnimationRevealPage>
        <Hero roundedHeaderButton={true} />
        </AnimationRevealPage>
        )
        }