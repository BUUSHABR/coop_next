const BASE_URL = 'https://api.coopgames.in/api';

export async function apiFetch<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const errorBody = await res.text(); // fallback if no JSON
    throw new Error(`API error: ${res.status} ${errorBody}`);
  }

  return res.json() as Promise<T>;
}
