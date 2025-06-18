import React from 'react';
import './PropertySummary.css';

function PropertySummary() {
  return (
    <section className="property-summary">
      <div className="summary-item">
        <h3>N20,000</h3>
        <p>per night</p>
      </div>
      
      <div className="summary-item">
        <h4><strong><i><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  
        viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  
        stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bed">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M22 17v-3h-20" /><path d="M2 8v9" />
          <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" /></svg></i> </strong></h4>
          <p>1 Bedroom</p>
      </div>
      <div className="summary-item">
        <h5><strong><i><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  
        viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  
        stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bath">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
          <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" /><path d="M4 21l1 -1.5" /><path d="M20 21l-1 -1.5" />
          </svg></i> </strong></h5> 
          <p>1 Bathroom</p>
      </div>
      <div className="summary-item">
        <h6><strong><i><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  
        viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  
        stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg></i></strong></h6>
          <p>Guests: 5 max</p>
      </div>
    </section>
  );
}

export default PropertySummary;
