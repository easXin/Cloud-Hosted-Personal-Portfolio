export type ContactIcon =
  | 'email'
  | 'linkedin'
  | 'github'
  | 'download'
  | 'default';

export type ContactCategory = {
  text: string;
  toHref: string;
  icon: ContactIcon;
};

export const contactCategories: ContactCategory[] = [
  {
    text: 'eric.xinw1@gmail.com',
    toHref: 'mailto:eric.xinw1@gmail.com',
    icon: 'email',
  },
  {
    text: 'linkedin.com/in/ericxin',
    toHref: 'https://linkedin.com/in/ericxin',
    icon: 'linkedin',
  },
  {
    text: 'github.com/easxin',
    toHref: 'https://github.com/easxin',
    icon: 'github',
  },
  {
    text: 'Résumé (PDF)',
    toHref: '/myResume.pdf',
    icon: 'download',
  },
];