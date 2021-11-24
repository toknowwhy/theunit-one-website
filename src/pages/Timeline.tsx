import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { timelines, TimelineType } from '@/utils/constants';
import AliceCarousel, { DotsItem } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Timeline.less';
import pathImg from '@/assets/path.png';
import indicatorImg from '@/assets/timeline-indicator.png';
import indicatorEmptyImg from '@/assets/indicator-empty.png';

export default (): React.ReactNode => {
  const responsive = {
    0: { items: 1 },
    769: { items: 2 },
    1024: { items: 3 },
  };

  const { innerWidth } = window;

  const years = ['2019', '2021', '2022', '2023'];
  var allItems = timelines;
  var showButtons = true;
  if (innerWidth < 1024) {
    allItems = allItems.filter((item: TimelineType) => item.time != undefined);
  }
  if (innerWidth < 769) {
    showButtons = false;
  }

  const items = allItems.map((obj: TimelineType, index: number) => {
    if (obj.time && obj.events) {
      return (
        <div key={index}>
          <div className={styles.events}>
            <img
              className={styles.indicator}
              src={index < 2 ? indicatorImg : indicatorEmptyImg}
            />
            <div className={styles.allEvents}>
              <h2>{obj.time}</h2>
              {obj.events.map((event: String, index: number) => (
                <p>{event}</p>
              ))}
            </div>
          </div>
          <img className={styles.bgdImage} src={pathImg} />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <div className={styles.empty}></div>
          <img className={styles.bgdImage} src={pathImg} />
        </div>
      );
    }
  });

  const renderDotsItem = (dotItem: DotsItem) => {
    if (!showButtons) return null;

    const { isActive, activeIndex } = dotItem;

    return (
      <span className={styles.dot + ' ' + (isActive && styles.active)}>
        {years[activeIndex]}
      </span>
    );
  };

  return (
    <PageContainer>
      <div className={styles.title}>Road Map</div>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        disableDotsControls={showButtons}
        items={items}
        responsive={responsive}
        renderDotsItem={renderDotsItem}
      />
    </PageContainer>
  );
};
