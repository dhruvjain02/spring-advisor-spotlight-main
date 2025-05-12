import { Advisor, Location, Specialization, AudienceType } from '@/types/advisor'

export const mockAdvisors: Advisor[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    title: 'Senior Financial Advisor',
    bio: 'Experienced financial advisor with 15+ years in wealth management and retirement planning.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    location: Location.Mumbai,
    specializations: [
      Specialization.WealthManagement,
      Specialization.RetirementPlanning,
      Specialization.TaxPlanning
    ],
    audience: [AudienceType.HNI, AudienceType.UHNI],
    rating: 4.8,
    reviewCount: 127,
    hourlyRate: 5000,
    availability: 'Available next week'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    title: 'Investment Specialist',
    bio: 'Expert in mutual funds and stock investments with a focus on long-term wealth creation.',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    location: Location.Delhi,
    specializations: [
      Specialization.MutualFunds,
      Specialization.StockInvestments,
      Specialization.FinancialPlanning
    ],
    audience: [AudienceType.Individual, AudienceType.HNI],
    rating: 4.9,
    reviewCount: 84,
    hourlyRate: 3000,
    availability: 'Limited availability'
  },
  {
    id: '3',
    name: 'Arun Patel',
    title: 'NRI Financial Consultant',
    bio: 'Specialized in helping NRIs manage their investments and tax planning in India.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    location: Location.Bangalore,
    specializations: [
      Specialization.NRIServices,
      Specialization.TaxPlanning,
      Specialization.EstatePlanning
    ],
    audience: [AudienceType.NRI, AudienceType.Corporate],
    rating: 4.7,
    reviewCount: 56,
    hourlyRate: 4000,
    availability: 'Available this week'
  }
]
