import React from 'react';

interface InputProps {
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = 'text',
  value,
  onChange,
  className = '',
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-bronze-400 focus:outline-none transition-colors ${className}`}
    />
  );
};

export default Input;
