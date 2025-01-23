'use client';

import { useEffect } from 'react';
import { incrementViewCount } from '@/lib/actions';

const ViewCounter = ({ slug }) => {
  useEffect(() => {
    // Function to parse cookies
    const parseCookies = () => {
      return document.cookie
        .split('; ')
        .reduce((acc, cookie) => {
          const [key, value] = cookie.split('=');
          acc[key] = value ? decodeURIComponent(value) : '';
          return acc;
        }, {});
    };

    const cookies = parseCookies();
    if (!cookies[slug]) {
      // Increment view count
      incrementViewCount(slug);
      // Set cookie for the post slug
      document.cookie = `${slug}=true; path=/; max-age=31536000`; // Expires in one year
    }
  }, [slug]);

  return null;
};

export default ViewCounter;