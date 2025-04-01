import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('references.json');
  return {
    references: await response.json()
  };
};