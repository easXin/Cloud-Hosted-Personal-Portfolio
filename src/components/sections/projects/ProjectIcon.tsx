import { type Project } from '../../../data/projects';
import {
    CogIcon,
    GridIcon,
    MediaIcon,
    PackageIcon,
    PersonalIcon,
    ReportIcon,
    ShieldIcon,
    TrackerIcon,
    ZapIcon,
    DefaultIcon
} from '../../icons';

type ProjectIconProps = {
    name: Project['icon'];
};

const projectIconMap = {
    grid: GridIcon,
    zap: ZapIcon,
    package: PackageIcon,
    shield: ShieldIcon,
    cog: CogIcon,
    report: ReportIcon,
    personal: PersonalIcon,
    tracker: TrackerIcon,
    media: MediaIcon,
    default: DefaultIcon,
};

export default function ProjectIcon({ name }: ProjectIconProps) {
    const Icon = projectIconMap[name] ?? projectIconMap.default;
    return <Icon />;
}
