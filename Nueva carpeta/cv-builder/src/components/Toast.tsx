interface Props {
  icon: string;
  msg:  string;
}

export default function Toast({ icon, msg }: Props) {
  return (
    <div className="toast">
      <span>{icon}</span>
      {msg}
    </div>
  );
}
