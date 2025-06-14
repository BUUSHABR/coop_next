export interface PortfolioItinerary {
  _id: string;
  title: string;
  description: string;
  image: string;
}

export interface Portfolio {
  _id: string;
  title: string;
  description: string;
  portfolio_banner:string;
  category:string;
  itineraries: PortfolioItinerary[];
  video: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

import { apiFetch } from './client';


export async function getAllPortfolios(): Promise<Portfolio[]> {
  return apiFetch<Portfolio[]>('/portfolio');
}

export async function getPortfolioById(id: number | string): Promise<Portfolio> {
  return apiFetch<Portfolio>(`/portfolio/${id}`);
}
