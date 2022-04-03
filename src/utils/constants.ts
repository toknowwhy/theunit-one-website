import { useIntl } from 'umi';

export const currentWorldPopulation = 7953953000;
export const averageLifeExpectancyInYears = 73.2;
export const unitInUsdDefault = 2.5;

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

export interface BlogPostType {
  image: string;
  content: string;
  link: string;
}

export const blogs: Array<BlogPostType> = [
  {
    image: 'https://miro.medium.com/max/1400/0*BMDXkpB7fNWORf0m',
    content:
      'Many people have been looking excitedly and nervously at the USD charts of cryptocurrencies, hoping prices would go higher to sell and make profits. But what if cryptocurrencies aren’t going away and could even outgrow the current financial system? Then looking at USD prices would become increasingly meaningless as the current financial system gives way to the new one. What if this is already happening in a big way? What if we are not far from the point of inflection?    ',
    link: 'https://blog.20y.org/unit-vs-usd-chainlink-edition-34c174908b2a',
  },
  {
    image: 'https://miro.medium.com/max/1400/0*13OHql0L1bQA5qKo',
    content:
      'The Unit is the crypto benchmark. This article shows how The Unit index can help you make portfolio decisions. Technical analysts, traders, and crypto holders alike pay attention to what we are about to introduce to you. Rather than looking at USD charts, we created charts against The Unit, an index that tracks the most significant coins by capitalization and volume. As a result, we have created a unit of value called “unit” (Ø).',
    link: 'https://blog.20y.org/an-intro-to-the-unit-717d4a7b46dc',
  },
  {
    image: 'https://miro.medium.com/max/1400/0*XngyqbbGXQDqfKWa',
    content:
      'As of today, those in the crypto-verse continue to fight about which currency will dominate the internet. Will it be Bitcoin, will it be Ethereum, will it be some other one? However, as the cryptocurrency space keeps unfolding, it’s clear we are continuing to diversify codebases and people’s risks into many different currencies. For this main reason, we need a better way to measure value than currencies alone.',
    link: 'https://blog.20y.org/the-unit-a-community-managed-crypto-native-unit-of-account-80069bfb08a6',
  },
];

export const isMobile = window.innerWidth <= 991;
