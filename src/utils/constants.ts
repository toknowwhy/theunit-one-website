import trustlessImg from '@/assets/Trustless.png';
import secureImg from '@/assets/Secure.png';
import scalableImg from '@/assets/Scalable.png';
import verifiableImg from '@/assets/Verifiable.png';
import permissionlessImg from '@/assets/Permissionless.png';
import openImg from '@/assets/Open.png';
import { useIntl } from 'umi';

export type FeatureType = {
  title: string;
  description: string;
  img: string;
};

export const getFeatures = () => {
  const intl = useIntl();
  return [
    {
      title: intl.formatMessage({ id: 'home.feature.open' }),
      description: intl.formatMessage({ id: 'home.feature.open.desc' }),
      img: openImg,
    },
    {
      title: intl.formatMessage({ id: 'home.feature.verifiable' }),
      description: intl.formatMessage({ id: 'home.feature.verifiable.desc' }),
      img: verifiableImg,
    },
    {
      title: intl.formatMessage({ id: 'home.feature.incorruptible' }),
      description: intl.formatMessage({
        id: 'home.feature.incorruptible.desc',
      }),
      img: secureImg,
    },
    {
      title: intl.formatMessage({ id: 'home.feature.scalable' }),
      description: intl.formatMessage({ id: 'home.feature.scalable.desc' }),
      img: scalableImg,
    },
    {
      title: intl.formatMessage({ id: 'home.feature.permissionless' }),
      description: intl.formatMessage({
        id: 'home.feature.permissionless.desc',
      }),
      img: permissionlessImg,
    },
    {
      title: intl.formatMessage({ id: 'home.feature.trustless' }),
      description: intl.formatMessage({ id: 'home.feature.trustless.desc' }),
      img: trustlessImg,
    },
  ];
};
