import React, { useState, useCallback } from "react";

import { clickout } from "../helper/clickout";

interface State {
  id: string;
  novalue: string;
  options: object;
  setValue: Function;
  name: string;
  zIndex: number | null;
  parent: string | null;
}

const AbsoluteSelect = ({ state }: { state: State }) => {
  const [show, setShow] = useState(false);

  const c = useCallback(() => {
    clickout([state.id, state.id + "-sel"], state.id, setShow, false);
  }, []);

  if (state.parent) {
    $(`#${state.parent}`).off("click", `#${state.parent}`, c).click(c);
  } else {
    $(document).off("click", `#${state.parent}`, c).click(c);
  }

  return (
    <div
      className='select-rel'
      style={{
        margin: "15px 0",
        zIndex: state?.zIndex || "unset",
      }}
    >
      <div
        className='select-sel'
        onClick={() => setShow((prev) => !prev)}
        id={state.id + "-sel"}
      >
        {state.name || state.novalue}
        <div className='grow' />
        <div
          className='mitem-caret'
          style={{
            transform: (!show && "rotate(-90deg)") || "unset",
          }}
        />
      </div>

      {show && (
        <div className='select-selch s-selch' id={state.id}>
          {state.options.map((opt) => (
            <div
              className='select-ch'
              onClick={() => {
                state.setValue(opt.value);
                setShow(false);
              }}
            >
              {opt.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AbsoluteSelect;
