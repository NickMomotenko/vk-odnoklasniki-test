import { Button } from "./index";

import "../../index.css";
import { Counter } from "../Counter";
import { ButtonWithCounter } from "../../compound/ButtonWithCounter";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

const TemplateWithContext = (args) => (
  <ButtonWithCounter {...args}>
    <Button>
      <Counter />
    </Button>
  </ButtonWithCounter>
);

export const ButtonWithSizesAndViews = () => (
  <>
    <div>
      <Template size={28} />
      <Template size={36} />
      <Template size={56} />
    </div>
    <div>
      <Template size={28} view="secondary" />
      <Template size={36} view="secondary" />
      <Template size={56} view="secondary" />
    </div>
  </>
);

export const ButtonStates = () => (
  <>
    <div>
      <Template size={28} labelText="Disabled" disabled />
      <Template size={36} labelText="Disabled" disabled />
      <Template size={56} labelText="Disabled" disabled />
      <Template size={28} labelText="Disabled" view="secondary" disabled />
      <Template size={36} labelText="Disabled" view="secondary" disabled />
      <Template size={56} labelText="Disabled" view="secondary" disabled />
    </div>
    <div style={{ maxWidth: 200 }}>
      <Template size={56} labelText="Вроде тут перебор текста" counter={true} />
      <TemplateWithContext
        size={56}
        labelText="Вроде тут перебор текста"
        counter={true}
        view="primary"
      />
      <Template
        size={56}
        labelText="Вроде тут перебор текста"
        view="secondary"
        counter={true}
      />
      <TemplateWithContext
        size={56}
        labelText="Вроде тут перебор текста"
        counter={true}
        view="secondary"
      />
    </div>
    {/* <div>
      <Template size={56} view="secondary" focused />
    </div> */}
    <div>
      <Template size={56} loading />
      <Template size={56} view="secondary" loading />
      <Template size={36} loading />
      <Template size={36} view="secondary" loading />
      <Template size={28} loading />
      <Template size={28} view="secondary" loading />
    </div>
  </>
);

export const ButtonWithContextCounter = () => (
  <>
    <div>
      <TemplateWithContext size={56} view="primary" value={5} />
      <TemplateWithContext size={36} view="primary" value={5} />
      <TemplateWithContext size={28} view="primary" value={5} />
      <TemplateWithContext size={56} view="secondary" value={5} />
      <TemplateWithContext size={36} view="secondary" value={5} />
      <TemplateWithContext size={28} view="secondary" value={5} />
    </div>
    <div>
      <TemplateWithContext size={56} view="primary" value={55} />
      <TemplateWithContext size={36} view="primary" value={55} />
      <TemplateWithContext size={28} view="primary" value={55} />
      <TemplateWithContext size={56} view="secondary" value={55} />
      <TemplateWithContext size={36} view="secondary" value={55} />
      <TemplateWithContext size={28} view="secondary" value={55} />
    </div>
    <div>
      <TemplateWithContext size={56} view="primary" value={105} />
      <TemplateWithContext size={36} view="primary" value={105} />
      <TemplateWithContext size={28} view="primary" value={105} />
      <TemplateWithContext size={56} view="secondary" value={105} />
      <TemplateWithContext size={36} view="secondary" value={105} />
      <TemplateWithContext size={28} view="secondary" value={105} />
    </div>
   
  </>
);
