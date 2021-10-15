import React from 'react';

import { Section, SectionText, SectionTitle, Link} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello. <br/>
          I am Danyal Ahmed
        </SectionTitle>
        <SectionText>
          An experienced React.js Developer 
        </SectionText>
        <a href="#about" style={{color: 'white'}}> <Button  onClick={props.handleClick}>Learn More</Button> </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;