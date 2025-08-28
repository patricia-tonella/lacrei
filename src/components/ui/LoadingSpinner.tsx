'use client'

import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`

const SpinnerContainer = styled.div<{ $size?: 'sm' | 'md' | 'lg' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '16px'
      case 'lg': return '32px'
      default: return '24px'
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '16px'
      case 'lg': return '32px'
      default: return '24px'
    }
  }};
`

const Spinner = styled.div<{ $size?: 'sm' | 'md' | 'lg' }>`
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-top: 2px solid ${({ theme }) => theme.colors.emerald[60]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

const LoadingText = styled.span`
  margin-left: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  animation: ${pulse} 1.5s ease-in-out infinite;
`

const SkeletonBox = styled.div<{ $width?: string; $height?: string }>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '20px'};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.neutral[100]} 25%,
    ${({ theme }) => theme.colors.neutral[200]} 50%,
    ${({ theme }) => theme.colors.neutral[100]} 75%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  text?: string
}

interface SkeletonProps {
  width?: string
  height?: string
  className?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  showText = false, 
  text = 'Carregando Lacrei Saúde...' 
}) => {
  return (
    <SpinnerContainer $size={size}>
      <Spinner $size={size} />
      {showText && <LoadingText>{text}</LoadingText>}
    </SpinnerContainer>
  )
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  width, 
  height, 
  className 
}) => {
  return (
    <SkeletonBox 
      $width={width} 
      $height={height} 
      className={className}
    />
  )
}

export const PageLoader: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <LoadingSpinner size="lg" showText />
      <div style={{ marginTop: '2rem' }}>
        <Skeleton width="300px" height="24px" />
        <Skeleton width="200px" height="16px" />
      </div>
    </div>
  )
}

export const SectionLoader: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem 1rem'
    }}>
      <LoadingSpinner size="md" />
      <div style={{ marginTop: '1rem' }}>
        <Skeleton width="200px" height="20px" />
      </div>
    </div>
  )
}
