interface inputProps {
  name: string;
  type: any;
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ name, type, label, placeholder, onChange }: inputProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
