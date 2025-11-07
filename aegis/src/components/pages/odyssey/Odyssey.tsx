'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Odyssey.module.scss';

interface TravelDestination {
  id: string;
  titleKey: string;
  locationKey: string;
  dateKey: string;
  descriptionKey: string;
  coverImage: string;
  photoCount: number;
}

const TRAVELS: TravelDestination[] = [
  {
    id: 'santa-cruz-peru',
    titleKey: 'odyssey.santaCruz.title',
    locationKey: 'odyssey.santaCruz.location',
    dateKey: 'odyssey.santaCruz.date',
    descriptionKey: 'odyssey.santaCruz.description',
    coverImage: '/images/odyssey/peru/GNYB7522.JPG',
    photoCount: 14
  }
];

export default function Odyssey() {
  const { t } = useLanguage();
  
  return (
    <div className={styles.odysseyContainer}>
      <div className={styles.textureLayer}></div>
      <div className={styles.parchmentWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>{t('odyssey.page.title')}</h1>
          <p className={styles.subtitle}>
            {t('odyssey.page.subtitle')}
          </p>
        </header>

        <main className={styles.content}>
          <div className={styles.travelsGrid}>
            {TRAVELS.map((travel) => (
              <Link 
                key={travel.id} 
                href={`/odyssey/${travel.id}`}
                className={styles.travelCard}
              >
                <div className={styles.travelImageWrapper}>
                  <Image
                    src={travel.coverImage}
                    alt={t(travel.titleKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{ objectFit: 'cover' }}
                    className={styles.travelImage}
                  />
                  <div className={styles.travelOverlay}>
                    <span className={styles.photoCount}>{travel.photoCount} {t('odyssey.card.photos')}</span>
                  </div>
                </div>
                
                <div className={styles.travelInfo}>
                  <div className={styles.travelMeta}>
                    <span className={styles.travelLocation}>{t(travel.locationKey)}</span>
                    <span className={styles.travelDate}>{t(travel.dateKey)}</span>
                  </div>
                  
                  <h2 className={styles.travelTitle}>{t(travel.titleKey)}</h2>
                  
                  <p className={styles.travelDescription}>
                    {t(travel.descriptionKey)}
                  </p>
                  
                  <div className={styles.readMore}>
                    {t('odyssey.card.readMore')}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
