import '../styles/resize-handle.css';

interface Props {
  onMouseDown:  (e: React.MouseEvent) => void;
  onDoubleClick?: () => void;
}

export default function ResizeHandle({ onMouseDown, onDoubleClick }: Props) {
  return (
    <div
      className="resize-handle"
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
      role="separator"
      aria-orientation="vertical"
      title="Arrastra para redimensionar · doble clic para restablecer"
    >
      <div className="resize-handle-grip" />
    </div>
  );
}
