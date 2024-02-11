interface Props {
  label: string;
  name: string;
  error?: string;
}

export function ToggleInput({ label, name, error }: Props) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input type="checkbox" value="on" name={name} className="toggle toggle-primary" />
      </label>
      {error && <span className="label-text-alt text-error font-bold">{error}</span>}
    </div>
  );
}