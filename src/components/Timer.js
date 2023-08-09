import { useEffect } from 'react';

const Timer = function ({ dispatch, secondsRemaining }) {
  const min = String(Math.floor(secondsRemaining / 60)).padStart(2, 0);
  const seconds = String(secondsRemaining % 60).padStart(2, 0);

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min}:{seconds}
    </div>
  );
};

export default Timer;
