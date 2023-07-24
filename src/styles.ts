import { CSSProperties } from 'react';

export const wrapper = {
  position: 'relative',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
} as CSSProperties;

export const widget = {
  position: 'absolute',
  top: '25px',
  width: '300px',
  height: '200px',
  padding: '12px',
  borderRadius: '16px',
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  fontSize: '12px',
  fontWeight: 'normal',
  background: 'white',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px',
  zIndex: '41189',
} as CSSProperties;

export const content = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
} as CSSProperties;

export const title = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '16px',
  fontWeight: 'bold',
} as CSSProperties;

export const text = {
  margin: '0',
  padding: '0',
} as CSSProperties;

export const buttons = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
} as CSSProperties;

export const button = {
  width: '80px',
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  border: 'none',
  borderRadius: '16px',
  cursor: 'pointer',
  boxShadow:
    'rgba(50, 50, 93, 0.15) 0 2px 4px -1px, rgba(0, 0, 0, 0.1) 0 1px 2px -1px',
  background: 'none',
} as CSSProperties;

export const form = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
} as CSSProperties;

export const rating = {
  width: '100%',
  height: '22px',
  padding: '0 4px',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  fontSize: '12px',
  fontWeight: 'normal',
} as CSSProperties;

export const span = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '12px',
  fontWeight: 'normal',
} as CSSProperties;

export const label = {
  width: '100%',
  borderRadius: '8px',
} as CSSProperties;

export const chars = {
  margin: '0',
  padding: '0',
  textAlign: 'right',
} as CSSProperties;

export const input = {
  width: '100%',
  padding: '6px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  boxSizing: 'border-box',
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  fontSize: '12px',
  fontWeight: 'normal',
} as CSSProperties;

export const textarea = {
  width: '100%',
  height: '45px',
  padding: '6px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  boxSizing: 'border-box',
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  fontSize: '12px',
  fontWeight: 'normal',
} as CSSProperties;

export const submit = {
  padding: '4px',
  width: '100%',
  maxWidth: '125px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow:
    'rgba(50, 50, 93, 0.15) 0 2px 4px -1px, rgba(0, 0, 0, 0.1) 0 1px 2px -1px',
  background: 'none',
  fontSize: '12px',
  fontWeight: 'normal',
} as CSSProperties;

export const ff = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
} as CSSProperties;

export const footer = {
  textAlign: 'center',
  fontSize: '10px',
  color: '#94a3b8',
} as CSSProperties;

export const branding = {
  textAlign: 'inherit',
  color: '#94a3b8',
  fontSize: '10px',
  fontWeight: 'bold',
  textDecoration: 'none',
} as CSSProperties;
