import React, { useState, useEffect } from 'react';
import { Input } from '@nextui-org/react';

interface ModalFormProps {
  visible: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  columns: { key: string, label: string, type: string, options?: any[] }[];
  initialData: any;
  setFormData: (data: any) => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ visible, onClose, onSave, columns, initialData, setFormData }) => {
  const [localFormData, setLocalFormData] = useState<any>({});

  useEffect(() => {
    setLocalFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? Number(value) : value;
    setLocalFormData((prevData: any) => ({ ...prevData, [name]: parsedValue }));
  };

  useEffect(() => {
    setFormData(localFormData);
  }, [localFormData, setFormData]);

  return (
    <div>
      {columns.map((column) => (
        <div key={column.key} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={column.key}>{column.label}</label>
          {column.type === 'text' || column.type === 'number' ? (
            <Input
              type={column.type}
              name={column.key}
              value={localFormData[column.key] || ''}
              onChange={handleChange}
              fullWidth
            />
          ) : column.type === 'select' ? (
            <select
              name={column.key}
              value={localFormData[column.key] || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">Select an option</option>
              {column.options?.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ModalForm;
