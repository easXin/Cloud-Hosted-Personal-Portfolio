import { outlineIconProps } from '../constants/IconConfig';

export default function CogIcon() {
    return (
        <svg {...outlineIconProps}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
    );
}