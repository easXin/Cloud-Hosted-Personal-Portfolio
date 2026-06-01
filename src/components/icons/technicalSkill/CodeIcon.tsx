import { iconProps } from '../constants/IconConfig';

export default function CodeIcon() {
    return (
        <svg {...iconProps}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}