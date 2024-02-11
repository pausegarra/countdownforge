interface Props {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  trLabel?: string;
  brLabel?: string;
  error?: string;
}

export function TextInput({ label, name, placeholder, trLabel, brLabel, type = 'text', error }: Props) {
  return (
    <div className="form-control w-full">
      <div className="label">
        <label className="label-text">{label}</label>
        {trLabel && <span className="label-text-alt">{trLabel}</span>}
      </div>
      <input type={type} placeholder={placeholder} name={name} className="input input-bordered w-full" />
      <div className="label">
        {error && <span className="label-text-alt text-error font-bold">{error}</span>}
        {brLabel && <span className="label-text-alt">{brLabel}</span>}
      </div>
    </div>
  );
}