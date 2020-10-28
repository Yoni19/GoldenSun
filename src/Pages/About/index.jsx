import React from 'react';
import { FormattedMessage } from 'react-intl';

// About.jsx
const About = () => {

return(
<div>
    <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title"> <FormattedMessage id="about.title" /></h1>
        <h2 class="subtitle">
        <FormattedMessage id="about.subtitle" /> 
        </h2>
      </div>
    </div>
  </section>

</div>
  )
}
export default About