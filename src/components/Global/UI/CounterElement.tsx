"use client";

import CountUp from "react-countup";
import { counterElementType } from "@/config/types";

const CounterElement = ({ counter }: { counter: counterElementType }) => {
  return (
    <h2 className={`${counter?.style}`}>
      <CountUp
        start={0}
        end={parseFloat(counter?.counterNumber.toFixed(2))}
        duration={2.75}
        decimal=","
        enableScrollSpy={true}
        scrollSpyOnce
        delay={0}
        decimalPlaces={2}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
      {counter?.sizeText && <span>{counter?.sizeText}</span>}
    </h2>
  );
};

export default CounterElement;
