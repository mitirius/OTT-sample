export interface Video {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail?: string;
  images?: string[];
  brand?: string;
}

export interface Short {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const BASE_URLS = {
  DUMMY_JSON: 'https://dummyjson.com',
  JSON_PLACEHOLDER: 'https://jsonplaceholder.typicode.com',
};

// Cache to reduce redundant API calls
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchWithCache<T>(
  url: string,
  cacheKey: string
): Promise<T> {
  // Check cache
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data as T;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    const data = (await response.json()) as T;

    // Store in cache
    cache.set(cacheKey, { data, timestamp: Date.now() });

    return data;
  } catch (error) {
    console.error(`Failed to fetch ${cacheKey}:`, error);
    throw error;
  }
}

export async function getTrendingVideos(): Promise<Video[]> {
  const url = `${BASE_URLS.DUMMY_JSON}/products?limit=10`;
  const response = await fetchWithCache<{ products: Video[] }>(
    url,
    'trending-videos'
  );
  return response.products;
}

export async function getRecommendedVideos(): Promise<Video[]> {
  const url = `${BASE_URLS.DUMMY_JSON}/products?limit=12&skip=10`;
  const response = await fetchWithCache<{ products: Video[] }>(
    url,
    'recommended-videos'
  );
  return response.products;
}

export async function getContinueWatching(): Promise<Video[]> {
  const url = `${BASE_URLS.DUMMY_JSON}/products?limit=6&skip=22`;
  const response = await fetchWithCache<{ products: Video[] }>(
    url,
    'continue-watching'
  );
  return response.products;
}

export async function getShorts(): Promise<Short[]> {
  const url = `${BASE_URLS.JSON_PLACEHOLDER}/photos?_limit=12`;
  const response = await fetchWithCache<Short[]>(url, 'shorts');
  return response;
}
