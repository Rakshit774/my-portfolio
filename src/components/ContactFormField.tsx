
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  animationDelay?: string;
  isVisible?: boolean;
}

export const ContactFormField = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  rows = 4,
  animationDelay = '0s',
  isVisible = true
}: FormFieldProps) => {
  return (
    <div className={`transition-all duration-500 ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    }`} style={{ animationDelay }}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <Textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          value={value}
          onChange={onChange}
          className="transition-all duration-300 focus:ring-2 focus:ring-purple-500"
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          className="transition-all duration-300 focus:ring-2 focus:ring-purple-500"
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
};
