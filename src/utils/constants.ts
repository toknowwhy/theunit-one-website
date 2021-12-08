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
  {
    time: '2021 - Q2',
    events: ['Launch of The Unit v0.1.0', 'Launch of theunit.one'],
  },
  {
    time: '2021 - Q4',
    events: ['Launch of The Unit DAO', 'DeFi partnerships', 'Seed round'],
  },
  {},
  { time: '2022 - Q1', events: ['IDO'] },
  {
    time: '2022 - Q2',
    events: ['Synthetic UNIT farming', 'Puzzle games'],
  },
  {
    time: '2022 - Q3',
    events: ['Synthetic UNIT lending'],
  },
  {},
  {
    time: '2023 - Q1',
    events: ['Launch of The Unit pools on multiple networks'],
  },
  {},
];

export const isMobile = window.innerWidth <= 991;
