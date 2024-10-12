import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <section className="main-content">
      <div className="featured-games">
        <h2>Featured Games</h2>
        <div className="game-list">
          <div className="game-item">Game 1</div>
          <div className="game-item">Game 2</div>
          <div className="game-item">Game 3</div>
        </div>
      </div>
      <div className="promotions">
        <h2>Latest Promotions</h2>
        <p>Get up to 100% bonus on your first deposit!</p>
      </div>
    </section>
  );
};

export default MainContent;