import React from 'react';

const MapEmbed = ({ src }) => {
  return (
    <iframe 
      src={src}
      style={{ border: 0, width: '100%', height: '700px' }}
      title="WHO Road Safety"
    ></iframe>
  );
};

const Visual = () => {
  return (
    <div>
      {/* Embed the current map/country view */}
      <MapEmbed src='https://extranet.who.int/roadsafety/death-on-the-roads?embed=true' />
      
      {/* Embed the landing page */}
      <MapEmbed src='https://extranet.who.int/roadsafety/death-on-the-roads/?embed=true' />
    </div>
  );
};

export default Visual;