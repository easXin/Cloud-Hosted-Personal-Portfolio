import { type ContactCategory } from '../../../data/contact';
import {
    EmailIcon,
    LinkedinIcon,
    GithubIcon,
    DownloadIcon,
    DefaultIcon,
} from '../../icons';

type ContactIconProps = {
    name: ContactCategory['icon'];
};

const contactIconMap = {
    email: EmailIcon,
    linkedin: LinkedinIcon,
    github: GithubIcon,
    download: DownloadIcon,
    default: DefaultIcon,
};

export default function ContactIcon({ name }: ContactIconProps) {
    const Icon = contactIconMap[name] ?? contactIconMap.default;
    return <Icon />;
}