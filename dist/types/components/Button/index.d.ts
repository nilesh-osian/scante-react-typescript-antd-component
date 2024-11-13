import React from 'react';
export interface ButtonProps {
    type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
    onClick?: () => void;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
