import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const time = setInterval(setDate(new Date()), 1000);
    return () => {
      clearInterval(time);
    };
  }, [new Date()]);

  return (
    <div>
      { date.toLocaleTimeString() }
    </div>
  );
};

export default Clock;
