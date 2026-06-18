interface Props {
  bullets:  string[];
  onChange: (bullets: string[]) => void;
}

export default function BulletEditor({ bullets, onChange }: Props) {
  const update = (i: number, val: string) => {
    const next = [...bullets];
    next[i] = val;
    onChange(next);
  };

  const add    = () => onChange([...bullets, '']);
  const remove = (i: number) => onChange(bullets.filter((_, j) => j !== i));

  return (
    <div className="bullet-list">
      {bullets.map((b, i) => (
        <div key={i} className="bullet-row">
          <input
            value={b}
            onChange={e => update(i, e.target.value)}
            placeholder="Describe an achievement or responsibility..."
          />
          <button className="btn-icon" onClick={() => remove(i)} title="Remove">✕</button>
        </div>
      ))}
      <button className="btn-add" onClick={add}>＋ Add bullet</button>
    </div>
  );
}
