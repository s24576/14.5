import React, { useEffect, useState } from 'react';

function Licznik() {
  const [licznik, setLicznik] = useState(0);

  function lewy(e) {
    if (e.button === 0) {
      e.preventDefault();
      setLicznik((l) => l + 1);
    }
  }

  function prawy(e) {
    e.preventDefault();
    setLicznik((l) => l - 1);
  }

  useEffect(() => {
    document.addEventListener('mousedown', lewy);
    document.addEventListener('contextmenu', prawy);
    return () => {
      document.removeEventListener('mousedown', lewy);
      document.removeEventListener('contextmenu', prawy);
    };
  }, []);

  return <div>Licznik: {licznik}</div>;
}

export default Licznik;
