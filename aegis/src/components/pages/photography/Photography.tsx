'use client';

import { useState } from 'react';
import styles from './Photography.module.scss';

const photos = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    category: 'Landscape',
    description: 'Golden hour in the Canadian Rockies',
    image: '/api/placeholder/400/600',
    camera: 'Canon EOS R5',
    settings: 'f/8 • 1/125s • ISO 100'
  },
  {
    id: 2,
    title: 'Urban Architecture',
    category: 'Architecture',
    description: 'Modern lines and shadows in downtown Montreal',
    image: '/api/placeholder/600/400',
    camera: 'Sony A7R IV',
    settings: 'f/11 • 1/60s • ISO 200'
  },
  {
    id: 3,
    title: 'Street Portrait',
    category: 'Portrait',
    description: 'Candid moment in Old Quebec',
    image: '/api/placeholder/400/600',
    camera: 'Fuji X-T4',
    settings: 'f/2.8 • 1/250s • ISO 400'
  },
  {
    id: 4,
    title: 'Northern Lights',
    category: 'Landscape',
    description: 'Aurora borealis over Yukon Territory',
    image: '/api/placeholder/600/400',
    camera: 'Canon EOS R5',
    settings: 'f/2.8 • 15s • ISO 3200'
  },
  {
    id: 5,
    title: 'Autumn Reflections',
    category: 'Nature',
    description: 'Fall colors reflected in still water',
    image: '/api/placeholder/400/600',
    camera: 'Sony A7R IV',
    settings: 'f/16 • 1/30s • ISO 100'
  },
  {
    id: 6,
    title: 'City Lights',
    category: 'Urban',
    description: 'Toronto skyline at dusk',
    image: '/api/placeholder/600/400',
    camera: 'Canon EOS R5',
    settings: 'f/8 • 2s • ISO 100'
  }
];

const categories = ['All', 'Landscape', 'Portrait', 'Architecture', 'Nature', 'Urban'];

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter(photo => photo.category === category));
    }
  };

  const openLightbox = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="photography" className={styles.photography}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Photography Portfolio</h2>
          <p className={styles.subtitle}>
            Capturing moments and emotions through the lens. A collection of my favorite shots from travels and urban exploration.
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.gallery}>
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className={styles.photoCard}
              onClick={() => openLightbox(photo)}
            >
              <div className={styles.photoImage}>
                <div className={styles.imagePlaceholder}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.25 2.1l-.02.02L14.1 2.25H9.1l-.12-.13-.02-.02C8.37 1.96 7.9 2.04 7.9 2.25v3.4l-1.4.7c-.15.1-.25.26-.25.44V19.5c0 .83.67 1.5 1.5 1.5h9.5c.83 0 1.5-.67 1.5-1.5V6.79c0-.18-.1-.34-.25-.44l-1.4-.7V2.25c0-.21-.47-.29-.65-.15zM9.5 3.5h5v2.25L12 7 9.5 5.75V3.5zm2.5 6c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
                <div className={styles.overlay}>
                  <div className={styles.photoInfo}>
                    <h3 className={styles.photoTitle}>{photo.title}</h3>
                    <span className={styles.photoCategory}>{photo.category}</span>
                  </div>
                  <div className={styles.viewIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className={styles.lightboxImage}>
              <div className={styles.lightboxPlaceholder}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.25 2.1l-.02.02L14.1 2.25H9.1l-.12-.13-.02-.02C8.37 1.96 7.9 2.04 7.9 2.25v3.4l-1.4.7c-.15.1-.25.26-.25.44V19.5c0 .83.67 1.5 1.5 1.5h9.5c.83 0 1.5-.67 1.5-1.5V6.79c0-.18-.1-.34-.25-.44l-1.4-.7V2.25c0-.21-.47-.29-.65-.15zM9.5 3.5h5v2.25L12 7 9.5 5.75V3.5zm2.5 6c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
            </div>
            
            <div className={styles.lightboxInfo}>
              <h3 className={styles.lightboxTitle}>{selectedPhoto.title}</h3>
              <p className={styles.lightboxDescription}>{selectedPhoto.description}</p>
              <div className={styles.metadata}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Camera:</span>
                  <span className={styles.metaValue}>{selectedPhoto.camera}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Settings:</span>
                  <span className={styles.metaValue}>{selectedPhoto.settings}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Category:</span>
                  <span className={styles.metaValue}>{selectedPhoto.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
