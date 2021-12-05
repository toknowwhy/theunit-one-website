import { useIntl } from 'umi';

export type FeatureType = {
  title: string;
  description: string;
};

export const getFeatures = () => {
  const intl = useIntl();
  return [
    {
      title: intl.formatMessage({ id: 'home.feature.open' }),
      description: intl.formatMessage({ id: 'home.feature.open.desc' }),
    },
    {
      title: intl.formatMessage({ id: 'home.feature.verifiable' }),
      description: intl.formatMessage({ id: 'home.feature.verifiable.desc' }),
    },
    {
      title: intl.formatMessage({ id: 'home.feature.incorruptible' }),
      description: intl.formatMessage({
        id: 'home.feature.incorruptible.desc',
      }),
    },
    {
      title: intl.formatMessage({ id: 'home.feature.scalable' }),
      description: intl.formatMessage({ id: 'home.feature.scalable.desc' }),
    },
    {
      title: intl.formatMessage({ id: 'home.feature.permissionless' }),
      description: intl.formatMessage({
        id: 'home.feature.permissionless.desc',
      }),
    },
    {
      title: intl.formatMessage({ id: 'home.feature.trustless' }),
      description: intl.formatMessage({ id: 'home.feature.trustless.desc' }),
    },
  ];
};

export type FAQType = {
  title: string;
  answer: string;
};

export const getFaqs = () => {
  const intl = useIntl();
  return [
    {
      title: intl.formatMessage({ id: 'faq1Title' }),
      answer: intl.formatMessage({ id: 'faq1Answer' }),
    },
    {
      title: intl.formatMessage({ id: 'faq2Title' }),
      answer: intl.formatMessage({ id: 'faq2Answer' }),
    },
    {
      title: intl.formatMessage({ id: 'faq3Title' }),
      answer: intl.formatMessage({ id: 'faq3Answer' }),
    },
    {
      title: intl.formatMessage({ id: 'faq4Title' }),
      answer: intl.formatMessage({ id: 'faq4Answer' }),
    },
    {
      title: intl.formatMessage({ id: 'faq5Title' }),
      answer: intl.formatMessage({ id: 'faq5Answer' }),
    },
  ];
};

export interface TimelineType {
  time?: string;
  events?: Array<string>;
}

export const timelines: Array<TimelineType> = [
  {},
  { time: '2019 - February', events: ['Idea Ignition'] },
  {},
  {
    time: '2021 - May - 5 (5-5-5)',
    events: ['Launch of The Unit v0.1.0', 'Launch of theunit.one'],
  },
  { time: '2021 - October', events: ['Launch of The Unit governance token'] },
  { time: '2021 - November', events: ['Launch of 2ØY'] },
  { time: '2022 - January', events: ['The Blocktree Testnet Launch'] },
  {
    time: '2022 - June - 6 (6-6-6)',
    events: [
      'The Blocktree Aleph-Zero Mainnet Launch, Blocktree Genesis Block',
    ],
  },
  {},
  {},
  {
    time: '2023 - July - 7 (7-7-7)',
    events: ['Layer 2 Launch (Edge-dApps Portal)'],
  },
  {},
];

export const isMobile = window.innerWidth <= 1200;
