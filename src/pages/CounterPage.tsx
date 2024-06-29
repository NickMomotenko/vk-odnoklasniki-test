import { Div, Separator, Text } from "@vkontakte/vkui";
import { Counter } from "../components/Counter";

export const CounterPage = () => {
  return (
    <div className="counter-page">
      <Text weight="1">По стилю</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary">1</Counter>
        <Counter view="secondary">1</Counter>
      </Div>
      <Separator />

      <Text weight="1">По размеру</Text>
      <Text weight="3">Primary</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary" size={8}>
          1
        </Counter>
        <Counter view="primary" size={12}>
          1
        </Counter>
        <Counter view="primary" size={16}>
          1
        </Counter>
        <Counter view="primary" size={20}>
          1
        </Counter>
        <Counter view="primary" size={24}>
          1
        </Counter>
      </Div>
      <Text weight="3">Secondary</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="secondary" size={8}>
          1
        </Counter>
        <Counter view="secondary" size={12}>
          1
        </Counter>
        <Counter view="secondary" size={16}>
          1
        </Counter>
        <Counter view="secondary" size={20}>
          1
        </Counter>
        <Counter view="secondary" size={24}>
          1
        </Counter>
      </Div>
      <Separator />

      <Text weight="1">По наличию stroke</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary" stroke={true}>
          1
        </Counter>
        <Counter view="secondary" stroke={true}>
          1
        </Counter>
        <Counter view="secondary" stroke={true} size={20}>
          1
        </Counter>
        <Counter view="secondary" stroke={true} size={12}>
          1
        </Counter>
        <Counter view="secondary" stroke={true} size={8}>
          1
        </Counter>
      </Div>
      <Separator />

      <Text weight="1">По кол-ву символов</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary">1</Counter>
        <Counter view="secondary">101</Counter>
      </Div>
      <Separator />

      <Text weight="1">Анимация (только в размерах 8 и 12)</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Counter view="primary" pulse={true} size={8}>
          8
        </Counter>
        <Counter view="primary" pulse={true} size={8} stroke={true}>
          8
        </Counter>
        <Counter view="primary" pulse={true} size={12}>
          12
        </Counter>
        <Counter view="primary" pulse={true} size={12} stroke={true}>
          12
        </Counter>
        <Counter view="secondary" pulse={true} size={8}>
          8
        </Counter>
        <Counter view="secondary" pulse={true} size={8} stroke={true}>
          8
        </Counter>
        <Counter view="secondary" pulse={true} size={12}>
          12
        </Counter>
        <Counter view="secondary" pulse={true} size={12} stroke={true}>
          12
        </Counter>
      </Div>
      <Separator />
    </div>
  );
};
