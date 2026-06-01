import { iconProps } from '../constants/IconConfig';

export default function TrackerIcon() {
    return (
        <svg {...iconProps}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h4l2-4 3 8 2-4h7" />
            <path d="M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9" />
            <path d="M12 3c-2.5 2.5-3.5 5.5-3.5 9s1 6.5 3.5 9" />
        </svg>
    );
}