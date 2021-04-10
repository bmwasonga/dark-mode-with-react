// this will toggle between light and dark modes

import { useEffect, useState } from 'react';

export default () => {
  const key = 'isDarkMode';
  const [isDark, setIsDark] = useState(() => {
    try {
      //get from local storage the key
      const item = window.localStorage.getItem(key);
      //JSON.parse converts from a string to boolean
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      // if error return false else return light mode
      return false;
    }
  });

  useEffect(() => {
    const className = 'dark';
    if (isDark) {
      window.document.body.classList.add(className);
    } else {
      window.document.body.classList.remove(className);
    }
  }, [isDark]);
  return [isDark, setIsDark];
};
