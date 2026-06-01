import { type SkillCategory } from '../../../data/skills';
import {
    CodeIcon,
    MonitorIcon,
    ServerIcon,
    DatabaseIcon,
    LayersIcon,
    ToolIcon,
    CloudIcon,
    DefaultIcon
} from '../../icons';

type TechnicalSkillIconProps = {
    name: SkillCategory['icon'];
};

const technicalSkillIconMap = {
    code: CodeIcon,
    monitor: MonitorIcon,
    server: ServerIcon,
    database: DatabaseIcon,
    layers: LayersIcon,
    tool: ToolIcon,
    cloud: CloudIcon,
    default: DefaultIcon,
};

export default function TechSkillIcon({ name }: TechnicalSkillIconProps) {
    const Icon = technicalSkillIconMap[name] ?? technicalSkillIconMap.default;
    return <Icon />;
}
