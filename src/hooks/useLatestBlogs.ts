import { BlogType } from '@/utils/constants';
import axios from 'axios';
import { useQuery } from 'react-query';

const mediumUrl =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@20y';

export const useLatestBlogs = () => {
  return useQuery(['latestBlogs'], async () => getLatestBlogs());
};

const getLatestBlogs = async (): Promise<BlogType[]> => {
  var rss = await axios.get(mediumUrl);
  const res = rss.data.items.slice(0, 3);
  return res.map((item: any) => {
    return {
      title: item.title,
      content: item.content,
      link: item.link,
      thumbnail: item.thumbnail,
    };
  });
};
