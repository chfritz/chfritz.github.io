import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.jpeg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://chfritz.github.io',
  author: {
    avatar,
    name: 'Christian Fritz',
    headline: 'Robotics, AI, and Philosophy',
    location: 'Menlo Park, CA',
  },
  seo: {
    title: 'Christian Fritz, homepage, blog',
    description: '',
    type: 'website',
    image: MetaDefaultImage
  }
};