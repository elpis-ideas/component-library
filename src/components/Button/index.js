import React from "react";
import PropTypes from "prop-types";

import ButtonStyles from "./buttonstyles.module.scss";

export default function Button(props) {
  const {
    variant,
    label,
    color,
    disableShadow,
    disabled,
    size,
    onClick,
    style,
    startIcon,
    endIcon,
  } = props;
  if (disabled) {
    return (
      <button
        onClick={onClick}
        style={style}
        className={`${ButtonStyles.button} ${ButtonStyles[`button_${size}`]}  ${
          ButtonStyles[`${variant}_disabled`]
        }`}
        disabled
      >
        {props.startIcon && startIcon}
        {label}
        {props.endIcon && endIcon}
      </button>
    );
  }
  if (disableShadow) {
    return (
      <button
        onClick={onClick}
        style={style}
        className={`${ButtonStyles.button} ${ButtonStyles[`button_${size}`]} ${
          ButtonStyles[`${variant}_${color}`]
        }`}
      >
        {props.startIcon && startIcon}
        {label}
        {props.endIcon && endIcon}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${ButtonStyles.button} ${ButtonStyles[`button_${size}`]} ${
        ButtonStyles[`${variant}_${color}`]
      } ${ButtonStyles.withShadow}`}
    >
      {props.startIcon && startIcon}
      {label}
      {props.endIcon && endIcon}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outlined", "text"]),
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

Button.defaultProps = {
  variant: "default",
  color: "primary",
  size: "md",
  label: "Default",
  disableShadow: false,
  disabled: false,
};
