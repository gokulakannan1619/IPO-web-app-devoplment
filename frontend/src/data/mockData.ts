import { IPO, IPOStats } from '../types';

export const mockIPOStats: IPOStats = {
  totalIPO: 30,
  ipoInGain: 20,
  ipoInLoss: 9,
  upcomingIPO: 15,
  newListed: 25,
  ongoing: 2
};

export const mockIPOData: IPO[] = [
  {
    id: '1',
    company: 'Adani Power',
    priceBand: '₹ 329 - 136',
    open: '2023-06-03',
    close: '2024-06-05',
    issueSize: '45530.15 Cr.',
    issueType: 'Book Built',
    listingDate: '2023-06-10',
    status: 'Ongoing'
  },
  {
    id: '2',
    company: 'VBL LTD',
    priceBand: '₹ 229 - 136',
    open: '2024-06-03',
    close: '2024-06-05',
    issueSize: '1330.15 Cr.',
    issueType: 'Book Built',
    listingDate: '2018-06-10',
    status: 'Coming'
  },
  {
    id: '3',
    company: 'Tata Motor',
    priceBand: '₹ 12549 - 136',
    open: '2024-06-03',
    close: '2024-06-05',
    issueSize: '1340.15 Cr.',
    issueType: 'Book Built',
    listingDate: '2016-06-10',
    status: 'New Listed'
  },
  {
    id: '4',
    company: 'HDFC LTD',
    priceBand: '₹ 1244 - 136',
    open: '2024-06-03',
    close: '2024-06-05',
    issueSize: '830.15 Cr.',
    issueType: 'Book Built',
    listingDate: '2029-06-11',
    status: 'Coming'
  },
  {
    id: '5',
    company: 'Tata Motor',
    priceBand: '₹ 629 - 136',
    open: '2024-06-01',
    close: '2024-06-05',
    issueSize: '820.15 Cr.',
    issueType: 'Book Built',
    listingDate: '2023-06-10',
    status: 'Ongoing'
  }
];