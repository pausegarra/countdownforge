interface Props {
  label: string;
  name: string;
  error?: string;
  checked?: boolean;
}

export function ToggleInput({ label, name, error, checked }: Props) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input type="checkbox" value="on" name={name} className="toggle toggle-primary" defaultChecked={checked} />
      </label>
      {error && <span className="label-text-alt text-error font-bold">{error}</span>}
    </div>
  );
}