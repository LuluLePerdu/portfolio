'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './SantaCruzBlog.module.scss';

interface PhotoStory {
  src: string;
  titleKey: string;
  descriptionKey: string;
  highlight?: boolean;
}

const PHOTO_STORIES: PhotoStory[] = [
  {
    src: '/images/odyssey/peru/_DSF0812.JPG',
    titleKey: 'blog.santacruz.photo1.title',
    descriptionKey: 'blog.santacruz.photo1.description',
    highlight: true
  },
  {
    src: '/images/odyssey/peru/FAUE4532.JPG',
    titleKey: 'blog.santacruz.photo2.title',
    descriptionKey: 'blog.santacruz.photo2.description',
  },
  {
    src: '/images/odyssey/peru/GNYB7522.JPG',
    titleKey: 'blog.santacruz.photo3.title',
    descriptionKey: 'blog.santacruz.photo3.description',
    highlight: true
  },
  {
    src: '/images/odyssey/peru/IMG_9416.JPG',
    titleKey: 'blog.santacruz.photo4.title',
    descriptionKey: 'blog.santacruz.photo4.description',
  },
  {
    src: '/images/odyssey/peru/IMG_9519.JPG',
    titleKey: 'blog.santacruz.photo5.title',
    descriptionKey: 'blog.santacruz.photo5.description',
    highlight: true
  },
  {
    src: '/images/odyssey/peru/IMG_9522.JPG',
    titleKey: 'blog.santacruz.photo6.title',
    descriptionKey: 'blog.santacruz.photo6.description',
  },
  {
    src: '/images/odyssey/peru/IMG_9565.JPG',
    titleKey: 'blog.santacruz.photo7.title',
    descriptionKey: 'blog.santacruz.photo7.description',
  },
  {
    src: '/images/odyssey/peru/IMG_E9432.JPG',
    titleKey: 'blog.santacruz.photo8.title',
    descriptionKey: 'blog.santacruz.photo8.description',
    highlight: true
  },
  {
    src: '/images/odyssey/peru/IMG_E9433.JPG',
    titleKey: 'blog.santacruz.photo9.title',
    descriptionKey: 'blog.santacruz.photo9.description',
  },
  {
    src: '/images/odyssey/peru/IMG_E9454.JPG',
    titleKey: 'blog.santacruz.photo10.title',
    descriptionKey: 'blog.santacruz.photo10.description',
  },
  {
    src: '/images/odyssey/peru/IMG_E9458.JPG',
    titleKey: 'blog.santacruz.photo11.title',
    descriptionKey: 'blog.santacruz.photo11.description',
  },
  {
    src: '/images/odyssey/peru/IMG_E9462.JPG',
    titleKey: 'blog.santacruz.photo12.title',
    descriptionKey: 'blog.santacruz.photo12.description',
  },
  {
    src: '/images/odyssey/peru/IMG_E9554.JPG',
    titleKey: 'blog.santacruz.photo13.title',
    descriptionKey: 'blog.santacruz.photo13.description',
  },
  {
    src: '/images/odyssey/peru/KDCR2599.JPG',
    titleKey: 'blog.santacruz.photo14.title',
    descriptionKey: 'blog.santacruz.photo14.description',
    highlight: true
  },
];

export default function SantaCruzBlog() {
  const { t } = useLanguage();
  const [index, setIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const next = (e?: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
    const evt = e as { stopPropagation?: () => void } | undefined;
    if (evt && typeof evt.stopPropagation === 'function') evt.stopPropagation();
    setIndex((prev) => (prev === null ? null : (prev + 1) % PHOTO_STORIES.length));
  };
  const prev = (e?: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
    const evt = e as { stopPropagation?: () => void } | undefined;
    if (evt && typeof evt.stopPropagation === 'function') evt.stopPropagation();
    setIndex((prev) => (prev === null ? null : (prev - 1 + PHOTO_STORIES.length) % PHOTO_STORIES.length));
  };

  useEffect(() => {
    if (!mounted) return;
    
    const prevOverflow = document.body.style.overflow;
    if (index !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = prevOverflow || 'unset';
      document.body.classList.remove('modal-open');
    }

    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        close();
        return;
      }
      if (ev.key === 'ArrowRight') {
        setIndex((prev) => (prev === null ? prev : (prev + 1) % PHOTO_STORIES.length));
      }
      if (ev.key === 'ArrowLeft') {
        setIndex((prev) => (prev === null ? prev : (prev - 1 + PHOTO_STORIES.length) % PHOTO_STORIES.length));
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove('modal-open');
    };
  }, [index]);

  const currentPhoto = index !== null ? PHOTO_STORIES[index] : null;

  const modal = index !== null && currentPhoto ? (
    <div className={styles.modal} onClick={close} role="dialog" aria-modal="true">
      <button
        className={styles.modalClose}
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        aria-label="Fermer la fenêtre"
      >
        ✕
      </button>

      <button
        className={`${styles.modalNav} ${styles.navLeft}`}
        onClick={(e) => prev(e)}
        aria-label="Image précédente"
      >
        ‹
      </button>

      <div className={styles.modalImage} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalImageInner}>
          <Image
            src={currentPhoto.src}
            alt={t(currentPhoto.titleKey)}
            fill
            sizes="90vw"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className={styles.modalCaption}>
          <h3 className={styles.modalTitle}>{t(currentPhoto.titleKey)}</h3>
          <p className={styles.modalDescription}>{t(currentPhoto.descriptionKey)}</p>
        </div>
      </div>

      <button
        className={`${styles.modalNav} ${styles.navRight}`}
        onClick={(e) => next(e)}
        aria-label="Image suivante"
      >
        ›
      </button>
    </div>
  ) : null;

  return (
    <div className={styles.blogContainer}>
      <div className={styles.textureLayer}></div>
      <div className={styles.blogHeader}>
        <Link href="/odyssey" className={styles.backLink}>
          ← {t('blog.santacruz.backToOdyssey')}
        </Link>
        
        <div className={styles.headerContent}>
          <h1 className={styles.blogTitle}>{t('blog.santacruz.title')}</h1>
          <p className={styles.blogSubtitle}>{t('blog.santacruz.subtitle')}</p>
          <div className={styles.blogMeta}>
            <span className={styles.metaItem}>{t('blog.santacruz.location')}</span>
            <span className={styles.metaSeparator}>•</span>
            <span className={styles.metaItem}>{t('blog.santacruz.date')}</span>
            <span className={styles.metaSeparator}>•</span>
            <span className={styles.metaItem}>{PHOTO_STORIES.length} {t('blog.santacruz.photos')}</span>
          </div>
        </div>
      </div>

      <div className={styles.blogIntro}>
        <p className={styles.introText}>
          {t('blog.santacruz.intro')}
        </p>
      </div>

      <div className={styles.masonryGrid}>
        {PHOTO_STORIES.map((photo, i) => (
          <article
            key={photo.src}
            className={`${styles.photoCard} ${photo.highlight ? styles.highlight : ''}`}
            onClick={() => open(i)}
          >
            <div className={styles.photoWrapper}>
              <Image
                src={photo.src}
                alt={t(photo.titleKey)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className={styles.photoImage}
              />
              <div className={styles.photoOverlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.photoTitle}>{t(photo.titleKey)}</h3>
                </div>
              </div>
            </div>
            <div className={styles.photoCaption}>
              <p className={styles.photoDescription}>{t(photo.descriptionKey)}</p>
            </div>
          </article>
        ))}
      </div>

      {mounted && index !== null ? createPortal(modal, document.body) : null}
    </div>
  );
}
