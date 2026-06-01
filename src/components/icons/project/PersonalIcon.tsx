import { outlineIconProps } from '../constants/IconConfig';

export default function PersonalIcon() {
  return (
    <svg {...outlineIconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
        <line x1="7" y1="6" x2="7.01" y2="6" />
        <line x1="10" y1="6" x2="10.01" y2="6" />
        <line x1="13" y1="6" x2="13.01" y2="6" />
        <path d="M15 13l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </svg>
  );
}