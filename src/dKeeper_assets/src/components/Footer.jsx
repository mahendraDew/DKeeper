import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Mahendra Dewangan</p>
    </footer>
  );
}

export default Footer;
