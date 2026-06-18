import { useState } from 'react';

interface Toast {
  msg:  string;
  icon: string;
}

export function useToast() {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (msg: string, icon = '✓') => {
    setToast({ msg, icon });
    setTimeout(() => setToast(null), 2800);
  };

  return { toast, showToast };
}
