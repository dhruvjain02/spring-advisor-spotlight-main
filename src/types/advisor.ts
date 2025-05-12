export enum Location {
  Mumbai = 'Mumbai',
  Delhi = 'Delhi',
  Bangalore = 'Bangalore',
  Hyderabad = 'Hyderabad',
  Chennai = 'Chennai',
  Pune = 'Pune',
  Remote = 'Remote'
}

export enum Specialization {
  RetirementPlanning = 'Retirement Planning',
  TaxPlanning = 'Tax Planning',
  NRIServices = 'NRI Services',
  EstatePlanning = 'Estate Planning',
  MutualFunds = 'Mutual Funds',
  Insurance = 'Insurance',
  StockInvestments = 'Stock Investments',
  FinancialPlanning = 'Financial Planning',
  WealthManagement = 'Wealth Management',
  DebtManagement = 'Debt Management'
}

export enum AudienceType {
  Individual = 'Individual',
  HNI = 'HNI',
  UHNI = 'UHNI',
  Corporate = 'Corporate',
  NRI = 'NRI'
}

export interface Advisor {
  id: string
  name: string
  title: string
  bio: string
  imageUrl: string
  location: Location
  specializations: Specialization[]
  audience: AudienceType[]
  rating: number
  reviewCount: number
  hourlyRate: number
  availability: string
}
