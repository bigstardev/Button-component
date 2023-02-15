import React from "react";

import { ElementType, MouseEvent, ReactElement } from "react";
import three_dots from "assets/icons/three_dots.svg";

import * as S from "./Button.styles";

export type ButtonProps = {
  ariaLabel?: string;
  ariaPressed?: boolean;
  buttonType?: "button" | "reset" | "submit" | undefined;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  label?: string | ReactElement;
  size?: "normal" | "large";
  submitting?: boolean;
  variant?: "outlined" | "primary" | "text";
  width?: number | "full";
};

const buttons = {
  outlined: S.Outlined,
  primary: S.Primary,
  text: S.TextButton,
};

/* Button */
const Button = ({
  ariaLabel,
  ariaPressed,
  buttonType = "button",
  clickHandler,
  disabled = false,
  label = "Submit",
  size = "normal",
  submitting = false,
  variant = "primary",
  width,
}: ButtonProps) => {
  const ButtonComponent: ElementType = buttons[variant];

  return (
    <ButtonComponent
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      disabled={disabled || submitting}
      onClick={clickHandler}
      size={size}
      type={buttonType}
      variant={variant}
      width={width}
    >
      {submitting ? (
        <img src={three_dots} alt="Loading..." width="60" height="15" />
      ) : (
        label
      )}
    </ButtonComponent>
  );
};
/* */

export default Button;
