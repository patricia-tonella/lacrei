'use client'

import React from 'react'
import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'critical' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonState = 'default' | 'hover' | 'pressed' | 'disabled' | 'focus'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
  className?: string
}

interface ButtonStateStyle {
  background: string
  text: string
  icon: string
  border?: string
  outline?: string
}

const getButtonStyles = (variant: ButtonVariant, state: ButtonState = 'default') => {
  const theme = {
    components: {
      button: {
        states: {
          primary: {
            default: { background: '#018762', text: '#FFFFFF', icon: '#FFFFFF' } as ButtonStateStyle,
            hover: { background: '#007756', text: '#FFFFFF', icon: '#FFFFFF' } as ButtonStateStyle,
            pressed: { background: '#014C37', text: '#FFFFFF', icon: '#FFFFFF' } as ButtonStateStyle,
            disabled: { background: '#B2DFD0', text: '#9CA3AF', icon: '#9CA3AF' } as ButtonStateStyle,
            focus: { background: '#018762', text: '#FFFFFF', icon: '#FFFFFF', border: '#0EA5E9' } as ButtonStateStyle,
          },
          secondary: {
            default: { background: '#FFFFFF', border: '#018762', text: '#018762', icon: '#018762' } as ButtonStateStyle,
            hover: { background: '#DFF2ED', border: '#007756', text: '#007756', icon: '#007756' } as ButtonStateStyle,
            pressed: { background: '#B2DFD0', border: '#014C37', text: '#014C37', icon: '#014C37' } as ButtonStateStyle,
            disabled: { background: '#FFFFFF', border: '#D1D5DB', text: '#9CA3AF', icon: '#9CA3AF' } as ButtonStateStyle,
            focus: { background: '#FFFFFF', border: '#018762', text: '#018762', icon: '#018762', outline: '#0EA5E9' } as ButtonStateStyle,
          },
          critical: {
            default: { background: '#EF4444', text: '#FFFFFF', icon: '#FFFFFF' } as ButtonStateStyle,
            hover: { background: '#DC2626', text: '#FFFFFF', icon: '#FFFFFF' } as ButtonStateStyle,
            pressed: { background: '#B91C1C', text: '#FFFFFF', icon: '#FFFFFF' } as ButtonStateStyle,
            disabled: { background: '#FCA5A5', text: '#9CA3AF', icon: '#9CA3AF' } as ButtonStateStyle,
            focus: { background: '#EF4444', text: '#FFFFFF', icon: '#FFFFFF', border: '#0EA5E9' } as ButtonStateStyle,
          },
          link: {
            default: { background: '#FFFFFF', text: '#0EA5E9', icon: '#0EA5E9' } as ButtonStateStyle,
            hover: { background: '#F0F9FF', text: '#0284C7', icon: '#0284C7' } as ButtonStateStyle,
            pressed: { background: '#E0F2FE', text: '#0369A1', icon: '#0369A1' } as ButtonStateStyle,
            disabled: { background: '#FFFFFF', text: '#9CA3AF', icon: '#9CA3AF' } as ButtonStateStyle,
            focus: { background: '#FFFFFF', text: '#0EA5E9', icon: '#0EA5E9', outline: '#0EA5E9' } as ButtonStateStyle,
          },
        },
      },
    },
  }

  const buttonState = theme.components.button.states[variant][state]
  
  return css`
    background-color: ${buttonState.background};
    color: ${buttonState.text};
    border: ${variant === 'secondary' ? `2px solid ${buttonState.border || '#018762'}` : 'none'};
    outline: ${buttonState.outline ? `2px solid ${buttonState.outline}` : 'none'};
    outline-offset: 2px;
    
    &:hover {
      background-color: ${theme.components.button.states[variant].hover.background};
      color: ${theme.components.button.states[variant].hover.text};
      border-color: ${variant === 'secondary' ? (theme.components.button.states[variant].hover as ButtonStateStyle).border || '#007756' : 'transparent'};
    }
    
    &:active {
      background-color: ${theme.components.button.states[variant].pressed.background};
      color: ${theme.components.button.states[variant].pressed.text};
      border-color: ${variant === 'secondary' ? (theme.components.button.states[variant].pressed as ButtonStateStyle).border || '#014C37' : 'transparent'};
    }
    
    &:focus-visible {
      background-color: ${theme.components.button.states[variant].focus.background};
      color: ${theme.components.button.states[variant].focus.text};
      border-color: ${variant === 'secondary' ? (theme.components.button.states[variant].focus as ButtonStateStyle).border || '#018762' : 'transparent'};
      outline: 2px solid ${(theme.components.button.states[variant].focus as ButtonStateStyle).border || (theme.components.button.states[variant].focus as ButtonStateStyle).outline || '#0EA5E9'};
      outline-offset: 2px;
    }
    
    &:disabled {
      background-color: ${theme.components.button.states[variant].disabled.background};
      color: ${theme.components.button.states[variant].disabled.text};
      border-color: ${variant === 'secondary' ? (theme.components.button.states[variant].disabled as ButtonStateStyle).border || '#D1D5DB' : 'transparent'};
      cursor: not-allowed;
      opacity: 0.6;
    }
  `
}

const StyledButton = styled.button<ButtonProps>`
  /* Propriedades base do Design System */
  height: 48px;
  border-radius: 0.5rem; /* border-radius-lg - mais arredondado */
  padding: 0 1.5rem; /* space-inline-xxm */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  
  /* Tipografia */
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* high200 */
  line-height: 1.2;
  text-align: center;
  
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ icon, iconPosition }) => icon ? '16px' : '0'}; /* spacing-inline-m */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  
  /* Estados base */
  ${({ variant = 'primary' }) => getButtonStyles(variant)}
  
  /* Tamanhos */
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          height: 40px;
          padding: 0 1rem;
          font-size: 1rem;
        `
      case 'lg':
        return css`
          height: 56px;
          padding: 0 2rem;
          font-size: 1.5rem;
        `
      default:
        return css`
          height: 48px;
          padding: 0 1.5rem;
          font-size: 1.25rem;
        `
    }
  }}
  
  /* Ícones */
  .icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    
    svg {
      width: 100%;
      height: 100%;
    }
  }
  
  /* Acessibilidade */
  &:focus-visible {
    outline: 2px solid;
    outline-offset: 2px;
  }
  
  /* Redução de movimento */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  order: ${({ position }) => position === 'left' ? -1 : 1};
`

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  iconPosition = 'left',
  children,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  className,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  const renderIcon = () => {
    if (!icon) return null
    
    return (
      <IconWrapper position={iconPosition} className="icon">
        {icon}
      </IconWrapper>
    )
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={handleClick}
      type={type}
      aria-label={ariaLabel}
      className={className}
      aria-disabled={disabled}
    >
      {iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </StyledButton>
  )
}
