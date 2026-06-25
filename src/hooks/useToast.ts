import { useState } from 'react';

import type { ToastType } from '../types/toast.types';

interface ToastData {
  icon:string;
  msg:string;
  type:ToastType;
}

const TOAST_ICONS:Record<ToastType,string> = {
  success:'✅',
  error:'❌',
  warning:'⚠️',
  info:'ℹ️',
  download:'📥',
  upload:'📤',
  sample:'✨',
  delete:'🗑️',
};

export function useToast(){

  const [toast,setToast] = useState<ToastData|null>(null);

  const showToast = (

    type:ToastType,

    msg:string,

    duration = 3000,

  ) => {

    setToast({
      type,
      icon:TOAST_ICONS[type],

      msg,

    });

    window.setTimeout(

      () => setToast(null),

      duration,

    );

  };

  return {

    toast,

    showToast,

  };

}
