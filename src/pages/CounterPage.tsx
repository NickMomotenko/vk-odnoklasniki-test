import { Div, Separator, Text } from "@vkontakte/vkui";
import { Counter } from "../components/Counter";

export const CounterPage = () => {
  return (
    <div className="counter-page">
      <Text weight="1">По стилю</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary" value={1} />
        <Counter view="secondary" value={1} />
      </Div>
      <Separator />

      <Text weight="1">По размеру</Text>
      <Text weight="3">Primary</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary" size={8} value={1} />
        <Counter view="primary" size={12} value={1} />
        <Counter view="primary" size={16} value={1} />
        <Counter view="primary" size={20} value={1} />
        <Counter view="primary" size={24} value={1} />
      </Div>
      <Text weight="3">Secondary</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="secondary" size={8} value={1} />
        <Counter view="secondary" size={12} value={1} />
        <Counter view="secondary" size={16} value={1} />
        <Counter view="secondary" size={20} value={1} />
        <Counter view="secondary" size={24} value={1} />
      </Div>
      <Separator />

      <Text weight="1">По наличию stroke</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary" stroke={true} value={1} />
        <Counter view="secondary" stroke={true} value={1} />
        <Counter view="secondary" stroke={true} size={20} value={1} />
        <Counter view="secondary" stroke={true} size={12} value={1} />
        <Counter view="secondary" stroke={true} size={8} value={1} />
      </Div>
      <Separator />

      <Text weight="1">По кол-ву символов</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary" value={1} />
        <Counter view="secondary" value={101} />
      </Div>
      <Separator />

      <Text weight="1">Анимация (только в размерах 8 и 12)</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary" pulse={true} size={8} value={8} />
        <Counter view="primary" pulse={true} size={8} stroke={true} value={8} />
        <Counter view="primary" pulse={true} size={12} value={12} />
        <Counter
          view="primary"
          pulse={true}
          size={12}
          stroke={true}
          value={12}
        />
        <Counter view="secondary" pulse={true} size={8} value={8} />
        <Counter
          view="secondary"
          pulse={true}
          size={8}
          stroke={true}
          value={8}
        />
        <Counter view="secondary" pulse={true} size={12} value={12} />
        <Counter
          view="secondary"
          pulse={true}
          size={12}
          stroke={true}
          value={12}
        />
      </Div>
      <Separator />
    </div>
  );
};
