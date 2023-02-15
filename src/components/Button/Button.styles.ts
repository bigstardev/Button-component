import styled from "styled-components/macro";

export const Button = styled.button<{
  confirmation?: boolean;
  size?: "normal" | "large";
  width?: number | "full";
}>`
  font-weight: 700;
  letter-spacing: 0.01em;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ size }) => {
    switch (size) {
      case "large":
        return "9px 20px";
      case "normal":
        return "6px 16px";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "large":
        return "16px";
      case "normal":
        return "14px";
    }
  }};
  line-height: ${({ size }) => {
    switch (size) {
      case "large":
        return "24px";
      case "normal":
        return "20px";
    }
  }};
  ${({ width }) => {
    switch (width) {
      case "full":
        return "width: 100%";
      case undefined:
        return null;
      default:
        return `width: ${width}px;`;
    }
  }};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

export const Primary = styled(Button)`
  background-color: var(--green-500);
  color: var(--white);

  &:hover {
    background-color: var(--green-700);
  }

  &[disabled] {
    background-color: var(--primary-100);
    color: var(--primary-400);

    svg {
      fill: var(--primary-400);
    }
  }
`;

export const Outlined = styled(Button)`
  border: 1px solid var(--primary-150);
  color: var(--primary-900);

  &:hover {
    color: var(--green-700);
    border-color: var(--green-700);
  }

  &[disabled] {
    border-color: var(--primary-150);
    color: var(--primary-200);
  }

  &[aria-pressed="true"] {
    border-color: var(--green-500);

    &:hover {
      border-color: var(--green-700);
    }
  }
`;

export const TextButton = styled(Button)`
  color: var(--primary-900);

  &:hover {
    color: var(--green-700);
  }

  &[disabled] {
    color: var(--primary-200);
  }
`;
