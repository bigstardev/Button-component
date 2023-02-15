import { useState } from "react";
import Button from "../Button/Button";
import { delay } from "utils";
import * as S from "./App.styles";

function App() {
  const [submitting, setSubmitting] = useState(false);

  const submitForm = () => {
    setSubmitting(true);
    delay(3000).then(() => setSubmitting(false));
  };

  return (
    <S.AppContainer>
      <S.ButtonTypeContainer>
        <S.ButtonTypeLabel>Primary Button</S.ButtonTypeLabel>
        <Button clickHandler={submitForm} submitting={submitting} />
        <Button
          label="Primary-large"
          size="large"
          clickHandler={submitForm}
          submitting={submitting}
        />
      </S.ButtonTypeContainer>
      <S.ButtonTypeContainer>
        <S.ButtonTypeLabel>Text Button</S.ButtonTypeLabel>
        <Button
          label="Text-normal"
          variant="text"
          clickHandler={submitForm}
          submitting={submitting}
        />
        <Button
          label="Text-large"
          size="large"
          variant="text"
          clickHandler={submitForm}
          submitting={submitting}
        />
      </S.ButtonTypeContainer>

      <S.ButtonTypeContainer>
        <S.ButtonTypeLabel>Outlined Button</S.ButtonTypeLabel>
        <Button
          label="Outlined-normal"
          variant="outlined"
          clickHandler={submitForm}
          submitting={submitting}
        />
        <Button
          label="Outlined-large"
          size="large"
          variant="outlined"
          clickHandler={submitForm}
          submitting={submitting}
        />
      </S.ButtonTypeContainer>
      <S.ButtonTypeContainer>
        <S.ButtonTypeLabel>Disabled Button</S.ButtonTypeLabel>
        <Button
          disabled={true}
          clickHandler={submitForm}
          submitting={submitting}
        />
        <Button
          buttonType="submit"
          disabled={true}
          size="large"
          clickHandler={submitForm}
          submitting={submitting}
        />
      </S.ButtonTypeContainer>
      <S.ButtonTypeContainer>
        <S.ButtonTypeLabel>Custom Width Button</S.ButtonTypeLabel>
        <Button
          label="width-120px"
          clickHandler={submitForm}
          submitting={submitting}
          width={120}
        />
        <Button
          label="width-160px"
          size="large"
          clickHandler={submitForm}
          submitting={submitting}
          width={160}
        />
      </S.ButtonTypeContainer>
    </S.AppContainer>
  );
}

export default App;
