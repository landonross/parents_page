import React from 'react';
import './scrollToTop.css';
import ScrollToTop from 'react-scroll-to-top';

export default function toTop() {
   return (
      <div>
         <ScrollToTop smooth color="#F5F5F5" className="toTop"/>
      </div>
   )
}