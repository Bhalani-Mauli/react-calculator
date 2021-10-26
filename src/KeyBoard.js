import React from 'react';

export const KeyBoard = ({ buttonListener }) => {
  return (
    <div className="cal-wrapper" onClick={buttonListener}>
      <button value="clear" className="cal-button cal-clear">
        CE
      </button>
      <button value="0" className="cal-button cal-number">
        0
      </button>
      <button value="/" className="cal-button cal-opretor">
        /
      </button>
      <button value="+" className="cal-button cal-opretor">
        +
      </button>

      <button value="7" className="cal-button cal-number">
        7
      </button>
      <button value="8" className="cal-button cal-number">
        8
      </button>
      <button value="9" className="cal-button cal-number">
        9
      </button>
      <button value="-" className="cal-button cal-opretor">
        -
      </button>

      <button value="4" className="cal-button cal-number">
        4
      </button>
      <button value="5" className="cal-button cal-number">
        5
      </button>
      <button value="6" className="cal-button cal-number">
        6
      </button>
      <button value="*" className="cal-button cal-opretor">
        *
      </button>

      <button value="1" className="cal-button cal-number">
        1
      </button>
      <button value="2" className="cal-button cal-number">
        2
      </button>
      <button value="3" className="cal-button cal-number">
        3
      </button>
      <button value="=" className="cal-button cal-opretor">
        =
      </button>
    </div>
  );
};
