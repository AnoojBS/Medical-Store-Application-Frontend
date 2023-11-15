import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-1 bg-dark text-white" style={{ lineHeight: '1', position: 'absolute', bottom: '0', width: '100%' }}>
      <div className="container">
        <p>&copy; 2023 Your Medical Store</p>
        <p>Email: info@yourmedicalstore.com</p>
      </div>
    </footer>
  );
}

export default Footer;
