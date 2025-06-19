export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface IPO {
  id: string;
  company: string;
  priceBand: string;
  open: string;
  close: string;
  issueSize: string;
  issueType: string;
  listingDate: string;
  status: 'Ongoing' | 'Coming' | 'New Listed';
}

export interface IPOStats {
  totalIPO: number;
  ipoInGain: number;
  ipoInLoss: number;
  upcomingIPO: number;
  newListed: number;
  ongoing: number;
}