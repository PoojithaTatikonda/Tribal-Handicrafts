import React from 'react';
import '../pages/HoemPrivate.css'; // Optional CSS for private home

const HomePrivate = () => {
  return (
    <div className="home-private">
      <header>
        <h2>Welcome back to Tribal Handicrafts</h2>
      </header>
      <div className="content">
        <p>Explore exclusive content available only to registered users!</p>
        <img src='https://gaatha.org/wp-content/uploads/usage_2-46.jpg' />
        {/* Add any other authenticated user-specific content here */}
      </div>
    </div>
  );
};

export default HomePrivate;
