import React from 'react';
import generalScreenshot from '@images/inschat-general-light.png';

const InsChatGeneralChatVisual = () => (
  <figure className="inschat-general-presentation">
    <div className="inschat-general-presentation-header">
      <span>General chat / real interface</span>
      <span>04 / Everyday assistant</span>
    </div>
    <div className="inschat-general-screenshot">
      <img
        src={generalScreenshot}
        alt="Authentic InsChat General mode screen in the Light theme with the welcome prompt and composer"
      />
    </div>
    <figcaption>
      <strong>The same calm surface, without the health layer.</strong>
      <span>General chat keeps InsChat useful beyond health conversations.</span>
    </figcaption>
  </figure>
);

export default InsChatGeneralChatVisual;
