import React from 'react';

const WelcomeMessage = ({ name }) => (
  <div className="w-96 px-5 py-4 bg-white rounded-[32px] flex flex-col justify-start items-start gap-1">
    <div className="self-stretch justify-start text-black text-lg font-normal font-['Rooftop'] leading-tight break-words">
      Hi there, <span className="break-words overflow-wrap-anywhere">{name}</span>! 👋 <br/>
      We're absolutely overjoyed to extend <br/>
      you the following job offer!
    </div>
  </div>
);

export default WelcomeMessage; 