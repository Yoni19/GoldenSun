import React from "react";
import { FormattedMessage } from 'react-intl';
import StudyCase from "../StudyCase"
import NavWorks from "../../components/NavWorks"


const Works = () => {
  return (
    <div>

<section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title"><FormattedMessage id="works.title" /></h1>
            <h2 class="subtitle">
            <FormattedMessage id="works.subtitle" />
            </h2>
          </div>
        </div>
      </section>

      <NavWorks />  
  
    </div>
  );
};

export default Works;
