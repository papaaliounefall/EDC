import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

/** Conteneur label + contrôle + message d'erreur, partagé par tous les formulaires. */
export const FormField: React.FC<FormFieldProps> = ({ id, label, error, required, children }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-xs font-mono uppercase tracking-wider text-[#D8D8CF] mb-2"
    >
      {label}
      {required ? ' *' : ''}
    </label>
    {children}
    {error && (
      <p role="alert" className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
        <AlertCircle className="w-3 h-3 shrink-0" />
        {error}
      </p>
    )}
  </div>
);

interface FieldControlOptions {
  error?: boolean;
  /** Variante compacte (modale) vs standard (section contact) */
  dense?: boolean;
}

/** Classes communes des champs input/select/textarea. */
export const fieldControlClass = ({ error, dense }: FieldControlOptions = {}): string =>
  [
    'w-full bg-anthracite-800 border text-white text-sm focus:outline-none focus:border-ocre',
    dense ? 'px-3.5 py-2.5' : 'px-4 py-3',
    error ? 'border-red-500 ring-1 ring-red-500' : 'border-anthracite-600',
    'transition-colors',
  ].join(' ');
