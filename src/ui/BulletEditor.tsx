import type { TFunction } from 'i18next';

import '../styles/ui.css';

interface Props {
  bullets: string[];
  onChange: (bullets: string[]) => void;
  t: TFunction;
}

export default function BulletEditor({
  bullets,
  onChange,
  t,
}: Props) {

  const update = (
    index:number,
    value:string
  ) => {
    const next = [...bullets];
    next[index] = value;
    onChange(next);
  };

  const add = () => {
    onChange([
      ...bullets,
      ''
    ]);
  };

  const remove = (index:number) => {
    onChange(
      bullets.filter((_,i) => i !== index)
    );
  };

  return (
    <div className="bullet-list">
      {bullets.map((bullet,index)=>(
        <div
          key={index}
          className="bullet-row"
        >
          <input
            value={bullet}
            onChange={e =>
              update(
                index,
                e.target.value
              )
            }
            placeholder={t('ui.bullets.placeholder')}
          />
          <button
            type="button"
            className="btn-icon"
            title="Remove"
            onClick={() => remove(index)}
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn-add"
        onClick={add}
      >
        ＋ Add bullet
      </button>
    </div>
  );
}