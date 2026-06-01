import { profileBadges } from '../../../data/profile';

export default function Badges() {
    return(
        <div className="badges">
            <span className="badge">
            <span className="dot" />
                {profileBadges.availability}
            </span>
            <span className="badge clearance">
            <span className="dot" />
                {profileBadges.clearance}
            </span>
            <span className="badge">{profileBadges.citizenship}</span>
            <span className="badge">{profileBadges.location}</span>
        </div>
    );
}