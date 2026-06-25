import type { ReactNode, ButtonHTMLAttributes } from 'react';
import '../styles/ui.css';

type Variant = 'teal' | 'ghost' | 'danger' | 'success';

type Size = 'md' | 'sm';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const VARIANT_CLASS: Record<Variant, string> = {
  teal: 'btn-teal',
  ghost: 'btn-ghost',
  danger: 'btn-danger',
  success: 'btn-success',
};

const SIZE_CLASS: Record<Size, string> = {
  md: '',
  sm: 'btn-sm',
};

export default function Button({
  variant = 'ghost',
  size = 'md',
  type = 'button',
  children,
  className = '',
  ...props
}: Props) {

  const classes = [
    'btn',
    VARIANT_CLASS[variant],
    SIZE_CLASS[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (

    <button
      type={type}
      className={classes}
      {...props}
    >

      {children}

    </button>

  );

}
