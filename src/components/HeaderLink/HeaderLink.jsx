import React from 'react';

import { HashLink  as Link }from 'react-router-hash-link';

function HeaderLink({ to, text, isDarkMode }) {
  return (
    <Link className={`header__link ${isDarkMode ? 'dark-mode' : ''}`} to={to}>
      {text}
    </Link>
  );
}

export default HeaderLink;
