import { Button } from "antd";
import React from "react";

function ButtonComponent({
  labelButton,
  icon,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  backgroundColor,
  borderRadius,
  onClick,
  disable,
  loading,
  title,
  color,
}) {
  return (
    <Button
      icon={icon}
      onClick={onClick}
      disabled={disable}
      loading={loading}
      title={title}
      style={{
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginTop: marginTop,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {labelButton}
    </Button>
  );
}

export default ButtonComponent;
