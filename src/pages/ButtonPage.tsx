import { Div, Separator, Text } from "@vkontakte/vkui";
import { Button } from "../components/Button";

export const ButtonPage = () => {
  return (
    <div>
      <Text weight="1">По стилю</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Button view="primary" />
        <Button view="secondary" />
      </Div>
      <Separator />

      <Text weight="1">По размеру</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Button view="primary" size={28} labelText="Размер 28" />
        <Button view="primary" size={36} labelText="Размер 36" />
        <Button view="primary" size={56} labelText="Размер 56" />
      </Div>
      <Div>
        <Button view="secondary" size={28} labelText="Размер 28" />
        <Button view="secondary" size={36} labelText="Размер 36" />
        <Button view="secondary" size={56} labelText="Размер 56" />
      </Div>
      <Separator />

      <Text weight="1">По наличию counter</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Button view="primary" size={36} counter={true} />
        <Button view="secondary" size={36} counter={true} />
      </Div>
      <Separator />

      <Text weight="1">
        Focused (работает по tab на клавиатуре)
      </Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Button view="primary" size={28} />
        <Button view="secondary" size={36} />
      </Div>
      <Separator />

      <Text weight="1">Состояния кнопки</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Button view="primary" size={28} labelText="Enabled" />
        <Button view="primary" size={28} labelText="Disabled" disabled />
        <Button view="primary" size={28} labelText="Loading" loading />
      </Div>
      <Div>
        <Button view="secondary" size={28} labelText="Enabled" />
        <Button view="secondary" size={28} labelText="Disabled" disabled />
        <Button view="secondary" size={28} labelText="Loading" loading />
      </Div>
      <Separator />

      <Text weight="1">Лоадер</Text>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Button view="primary" size={28} labelText="Enabled" loading />
        <Button view="primary" size={36} labelText="Enabled" loading />
        <Button view="primary" size={56} labelText="Enabled" loading />
      </Div>
      <Div style={{ display: "flex", alignItems: "center" }}>
        <Button view="secondary" size={28} labelText="Enabled" loading />
        <Button view="secondary" size={36} labelText="Enabled" loading />
        <Button view="secondary" size={56} labelText="Enabled" loading />
      </Div>

      <Separator />

      <Text weight="1">Текст не помещается....</Text>
      <Div style={{ display: "flex", alignItems: "center", maxWidth: "250px" }}>
        <Button
          view="primary"
          size={28}
          labelText="Текста слишком много , караул, что делать"
          counter
        />
      </Div>
      <Separator />
    </div>
  );
};
