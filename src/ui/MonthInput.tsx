import type { ChangeEvent } from 'react';
import type { TFunction } from 'i18next';

import '../styles/ui.css';

interface Props {
  value: string;
  onChange: (val: string) => void;
  allowPresent?: boolean;
  placeholder?: string;
  t: TFunction;
}

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function toISO(val: string): string {
  if (!val || val === 'Present') {
    return '';
  }

  const [mon, year] = val.split(' ');

  const m = MONTHS.indexOf(mon);

  if (m === -1 || !year) {
    return '';
  }

  return `${year}-${String(m + 1).padStart(2, '0')}`;
}

function fromISO(iso: string): string {
  if (!iso) {
    return '';
  }

  const [year, month] = iso.split('-');

  const m = parseInt(month, 10) - 1;

  if (m < 0 || m > 11 || !year) {
    return '';
  }

  return `${MONTHS[m]} ${year}`;
}

export default function MonthInput({
  value,
  onChange,
  allowPresent = false,
  placeholder,
  t,
}: Props) {

  const isPresent = value === 'Present';

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {

    const iso = e.target.value;

    onChange(
      iso
        ? fromISO(iso)
        : ''
    );
  };

  const handlePresent = (
    e: ChangeEvent<HTMLInputElement>
  ) => {

    onChange(
      e.target.checked
        ? 'Present'
        : ''
    );
  };

  return (
    <div className="month-input-wrap">

      <input
        type="month"
        className="month-input"
        value={
          isPresent
            ? ''
            : toISO(value)
        }
        onChange={handleChange}
        disabled={isPresent}
        placeholder={
          placeholder ??
          t('ui.monthInput.placeholder')
        }
      />

      {allowPresent && (
        <label className="month-present-label">

          <input
            type="checkbox"
            checked={isPresent}
            onChange={handlePresent}
          />

          {t('ui.monthInput.present')}

        </label>
      )}

    </div>
  );
}