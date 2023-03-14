export {capitalize};

const capitalize = (text) => {
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring}`;
  };


  //node project-one/src/capitalize.js
