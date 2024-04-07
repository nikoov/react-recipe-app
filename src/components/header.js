import React from 'react';

const Header = ({ onCuisineChange, onDietaryChange, onSpiceLevelChange }) => {
  return (
    <header className="site-header" style={{ background: 'cream', color: 'gold', padding: '20px' }}>
      <div className="row align-middle align-justify">
        <div className="site-header--section">
          <h2 style={{ color: 'gold' }}>Cuisine Preference</h2>
          <div className="site-header--options">
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onCuisineChange('Italian')}>Italian</button>
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onCuisineChange('Indian')}>Indian</button>
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onCuisineChange('Mexican')}>Mexican</button>
            {/* Add more buttons for different cuisines */}
          </div>
        </div>
        <div className="site-header--section">
          <h2 style={{ color: 'gold' }}>Spice Level Preference</h2>
          <div className="site-header--options">
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onSpiceLevelChange('Mild')}>Mild</button>
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onSpiceLevelChange('Medium')}>Medium</button>
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onSpiceLevelChange('Hot')}>Hot</button>
            {/* Add more buttons for spice level */}
          </div>
        </div>
        <div className="site-header--section">
          <h2 style={{ color: 'gold' }}>Dietary Restrictions</h2>
          <div className="site-header--options">
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onDietaryChange('Vegetarian')}>Vegetarian</button>
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onDietaryChange('Vegan')}>Vegan</button>
            <button style={{ background: 'white', color: 'gold', marginRight: '10px' }} onClick={() => onDietaryChange('Gluten-Free')}>Gluten-Free</button>
            {/* Add more buttons for dietary preferences */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
