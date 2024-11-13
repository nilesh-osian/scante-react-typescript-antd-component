import React from 'react';
import { Button as AntButton } from 'antd';

export interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  onClick,
  children
}) => {
  return (
    <AntButton type={type} onClick={onClick}>
      {children}
    </AntButton>
  );
};

export default Button;
