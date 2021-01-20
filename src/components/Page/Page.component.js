import React from 'react';
import { ThemeContext } from '../../App';
import './Page.css';

const Page = () => (
  <ThemeContext.Consumer>
    <div className="container">cala strona</div>
  </ThemeContext.Consumer>
);

export default Page;