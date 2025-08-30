'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './Odyssey.module.scss';

const IMAGES = [
  '/images/odyssey/peru/_DSF0812.JPG',
  '/images/odyssey/peru/FAUE4532.JPG',
  '/images/odyssey/peru/GNYB7522.JPG',
  '/images/odyssey/peru/IMG_9416.JPG',
  '/images/odyssey/peru/IMG_9519.JPG',
  '/images/odyssey/peru/IMG_9522.JPG',
  '/images/odyssey/peru/IMG_9565.JPG',
  '/images/odyssey/peru/IMG_E9432.JPG',
  '/images/odyssey/peru/IMG_E9433.JPG',
  '/images/odyssey/peru/IMG_E9454.JPG',
  '/images/odyssey/peru/IMG_E9458.JPG',
  '/images/odyssey/peru/IMG_E9462.JPG',
  '/images/odyssey/peru/IMG_E9554.JPG',
  '/images/odyssey/peru/KDCR2599.JPG',
];

export default function Odyssey() {
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const next = (e?: any) => {
    if (e?.stopPropagation) e.stopPropagation();
    if (index === null) return;
    setIndex((index + 1) % IMAGES.length);
  };
  const prev = (e?: any) => {
    if (e?.stopPropagation) e.stopPropagation();
    if (index === null) return;
    setIndex((index - 1 + IMAGES.length) % IMAGES.length);
  };

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (index !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = prevOverflow || 'unset';
      document.body.classList.remove('modal-open');
    }

    const onKey = (ev: KeyboardEvent) => {
      if (index === null) return;
      if (ev.key === 'Escape') close();
      if (ev.key === 'ArrowRight') next(ev);
      if (ev.key === 'ArrowLeft') prev(ev);
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove('modal-open');
    };
  }, [index]);

  const modal = index !== null ? (
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
            src={IMAGES[index]}
            alt={`Peru ${index + 1}`}
            fill
            sizes="90vw"
            style={{ objectFit: 'contain' }}
          />
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
    <div className={styles.odysseyContainer}>
      <div className={`${styles.parchmentWrapper} ${index !== null ? styles.modalOpen : ''}`}>

        <div className={styles.navigation} />

        <main className={styles.content}>
          <div className={styles.galleryGrid}>
            {IMAGES.map((src, i) => (
              <button
                key={src}
                className={styles.thumb}
                onClick={() => open(i)}
                aria-label={`Ouvrir image ${i + 1}`}
              >
                <div className={styles.thumbInner}>
                  <Image
                    src={src}
                    alt={`Peru ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </button>
            ))}
          </div>
        </main>
  </div>

  {typeof document !== 'undefined' && index !== null ? createPortal(modal, document.body) : null}
    </div>
  );
}
