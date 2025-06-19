// lib/env.ts
export const env = {
  FORMSPREE_ENDPOINT: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT as string,
};
if (!env.FORMSPREE_ENDPOINT) {
  throw new Error('Missing required environment variable: NEXT_PUBLIC_FORMSPREE_ENDPOINT');
}