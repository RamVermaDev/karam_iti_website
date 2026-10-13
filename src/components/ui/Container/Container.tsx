import React from 'react';
import styles from './Container.module.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  as: Component = 'div',
  className = '',
  ...props
}) => {
  return (
    <Component
      className={`${styles.container} ${styles[size] || styles.lg} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
