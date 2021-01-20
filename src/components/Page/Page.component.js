import React from 'react';
import { ThemeContext } from '../../App';
import './Page.css';

const Page = () => (
  <ThemeContext.Consumer>
    <div className="container">cala strona na czarno-biało</div>
  </ThemeContext.Consumer>
);

export default Page;