export type ContactIcon =
| 'email'
| 'linkedin'
| 'github'
| 'download'
| 'default';

export type ContactCategory = {
    info: string;
    toHref: string;
    icon: ContactIcon;
    text: string;
};

export type ContactRowCategory = {
    toHref: string;
    icon: ContactIcon;
    text: string;
};

export const contactRow : ContactRowCategory[] = [
    {
        toHref: 'mailto:eric.xinw1@gmail.com',
        icon: 'email',
        text: 'Contact Me',
    },
    {
        toHref: '/myResume.pdf',
        icon: 'download',
        text: 'Download Résumé',
    },
    {
        toHref: 'https://linkedin.com/in/ericxin',
        icon: 'linkedin',
        text: 'LinkedIn',
    },
    {
        toHref: 'https://github.com/easxin',
        icon: 'github',
        text: 'GitHub',
    },
];

export const contact: ContactCategory[] = [
    {
        info: 'eric.xinw1@gmail.com',
        toHref: 'mailto:eric.xinw1@gmail.com',
        icon: 'email',
        text: 'Contact Me',
    },
    {
        info: 'linkedin.com/in/ericxin',
        toHref: 'https://linkedin.com/in/ericxin',
        icon: 'linkedin',
        text: 'LinkedIn',
    },
    {
        info: 'github.com/easxin',
        toHref: 'https://github.com/easxin',
        icon: 'github',
        text: 'GitHub',
    },
    {
        info: 'Résumé (PDF)',
        toHref: '/myResume.pdf',
        icon: 'download',
        text: 'Download Résumé',
    },
];