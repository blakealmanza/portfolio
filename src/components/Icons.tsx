import styles from "./Icons.module.css";

type IconProps = { size?: number; className?: string };

const rotation = { right: 0, "up-right": -45, up: -90, down: 90, left: 180 } as const;

export function ArrowIcon({ direction = "right", size = 16, className }: IconProps & { direction?: keyof typeof rotation }) {
  return (
    <svg
      className={`${styles.icon} ${className ?? ""}`}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ rotate: `${rotation[direction]}deg` }}
    >
      <path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ size = 16, className }: IconProps) {
  return (
    <svg className={`${styles.icon} ${className ?? ""}`} viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
