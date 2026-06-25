import type { TFunction } from 'i18next';

export function translateMonth(
  value: string,
  t: TFunction
): string {

  if (!value || value === 'Present') {
    return value;
  }

  const [month, year] = value.split(' ');

  return `${t(`ui.monthInput.months.${month}`)} ${year}`;
}