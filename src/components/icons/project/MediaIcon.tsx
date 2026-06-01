import { iconProps } from '../constants/IconConfig';

export default function MediaIcon() {
    return (
        <svg {...iconProps}>
            <rect x="3" y="5" width="18" height="12" rx="2" />
            <polygon points="10 9 15 12 10 15 10 9" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    );
}