import React from "react";
import { Counter } from "./index";

import '../../index.css'

export default {
  title: "Components/Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const CounterWithSizesAndViews = () => (
  <>
    <div>
      <Template size={24} />
      <Template size={20} />
      <Template size={16} />
      <Template size={12} />
      <Template size={8} />
    </div>
    <div>
      <Template size={24} view="secondary" />
      <Template size={20} view="secondary" />
      <Template size={16} view="secondary" />
      <Template size={12} view="secondary" />
      <Template size={8} view="secondary" />
    </div>
  </>
);

export const CounterWithPulse = () => (
  <>
    <div>
      <Template size={12} pulse />
      <Template size={8} pulse />
      <Template size={12} view="secondary" pulse />
      <Template size={8} view="secondary" pulse />
    </div>
  </>
);

export const CounterWithStroke = () => (
  <>
    <div>
      <Template size={24} stroke />
      <Template size={24} stroke />
      <Template size={24} view="secondary" stroke />
      <Template size={24} view="secondary" stroke />
    </div>
  </>
);

export const CounterQuantity = () => (
  <>
    <div>
      <Template size={24} value={2} />
      <Template size={24} value={101} />
      <Template size={24} value={2} view="secondary" />
      <Template size={24} value={101} view="secondary" />
    </div>
  </>
);
