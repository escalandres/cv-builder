import type { ToastType } from '../types/toast.types';
import '../styles/toast.css';

interface Props {
  type: ToastType;
  icon:string;
  msg:string;
}

export default function Toast({
  type,
  icon,
  msg,
}:Props){
  return(
    <div
      className={`toast ${type}`}
      role="status"
      aria-live="polite"
    >
      <div className="toast-icon">
        {icon}
      </div>
      <div className="toast-message">
        {msg}
      </div>
    </div>
  );
}
