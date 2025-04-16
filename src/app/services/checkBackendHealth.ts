import { ENDPOINTS } from '../constants';

export async function checkBackendHealth(
  maxRetries = 3,
  delay = 1000
): Promise<boolean> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(
        `${ENDPOINTS.BASE_URL}${ENDPOINTS.HEALTH_CHECK}`,
        {
          cache: 'no-store',
        }
      );

      if (res.ok) {
        const data = await res.json();
        return data.status === 'ok';
      }
    } catch (error) {
      console.error(`Try ${attempt} failed:`, error);
    }

    if (attempt < maxRetries) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  return false;
}
