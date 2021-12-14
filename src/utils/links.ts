const githubBaseUrl = 'https://github.com/toknowwhy';
const serverBaseUrl = 'https://api.20y.org';

export const githubUrl = githubBaseUrl;
export const serverUrl = serverBaseUrl;
export const twitterUrl = 'https://twitter.com/TheUnit_one';
export const mediumUrl = 'https://blog.20y.org';
export const discordUrl = 'https://discord.gg/4MjRckMJZN';
export const valuesUrl = `${githubBaseUrl}/20y-values-paper/blob/main/toknowwhy-values.md`;
export const unitPaperUrl = `${githubBaseUrl}/the-unit-paper/blob/main/the_unit_paper.pdf`;
export const docsUrl = 'https://docs.theunit.one';
export const forumUrl = 'https://forum.theunit.one';
export const telegramUrl = 'https://t.me/unit_one';
export const youtubeUrl =
  'https://www.youtube.com/channel/UCanPo-YOO7pVTXEW_W8PR2w';
export const snapshotUrl = 'https://snapshot.org/#/shuajj.eth';
export const resourcesUrl = `${githubBaseUrl}/the-blocktree-resources-paper/blob/main/the-blocktree-resources-paper.pdf`;
export const siteUrl = 'https://theunit.one';
export const graphUrl = 'https://graph.theunit.one';
export const appUrl = 'https://app.theunit.one';

interface MenuLinkType {
  name: string;
  link: string;
  external?: boolean;
}

interface MenuType {
  title: string;
  links: Array<MenuLinkType>;
}

export const menuLinks: Array<MenuType> = [
  {
    title: 'The Unit',
    links: [
      {
        name: 'Enter App',
        link: appUrl,
        external: true,
      },
      {
        name: 'Whitepaper',
        link: unitPaperUrl,
        external: true,
      },
    ],
  },
  {
    title: 'Developers',
    links: [
      {
        name: 'Road Map',
        link: '/road-map',
      },
      {
        name: 'Docs',
        link: docsUrl,
        external: true,
      },
      {
        name: 'Github',
        link: githubUrl,
        external: true,
      },
      {
        name: 'Jobs',
        link: '/jobs',
      },
    ],
  },
  {
    title: 'Learn',
    links: [
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'FAQ',
        link: '/faq',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Blog',
        link: mediumUrl,
        external: true,
      },
      {
        name: 'Discord',
        link: discordUrl,
        external: true,
      },
      {
        name: 'Twitter',
        link: twitterUrl,
        external: true,
      },
      {
        name: 'Telegram',
        link: telegramUrl,
        external: true,
      },
      {
        name: 'Youtube',
        link: youtubeUrl,
        external: true,
      },
    ],
  },
];
