'use client'

import React, { useState, useEffect } from 'react'
import AdvisorCard from '../AdvisorCard'
import AdvisorFilters from '../AdvisorFilters'
import HeroSection from '../HeroSection'
import BenefitsGrid from '../BenefitsGrid'
import PowerPlayCTA from '../PowerPlayCTA'
import VideoSection from '../VideoSection'
import TestimonialsCarousel from '../TestimonialsCarousel'
import ResultsHeader from '../ResultsHeader'
import NoResults from '../NoResults'
import { mockAdvisors } from '@/data/mock-advisors'
import type { Advisor, Location, Specialization, AudienceType } from '@/types/advisor'

export default function MarketplacePage() {
  // State for filters
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [selectedSpecializations, setSelectedSpecializations] = useState<Specialization[]>([])
  const [selectedAudience, setSelectedAudience] = useState<AudienceType | null>(null)
  const [filteredAdvisors, setFilteredAdvisors] = useState<Advisor[]>(mockAdvisors)

  const handleLocationChange = (location: Location | null) => setSelectedLocation(location)
  const handleSpecializationsChange = (specializations: Specialization[]) => setSelectedSpecializations(specializations)
  const handleAudienceChange = (audience: AudienceType | null) => setSelectedAudience(audience)

  // Apply filters whenever filter states change
  useEffect(() => {
    let result = [...mockAdvisors]
    
    // Filter by location if selected
    if (selectedLocation) {
      result = result.filter(advisor => advisor.location === selectedLocation)
    }
    
    // Filter by specializations if any are selected
    if (selectedSpecializations.length > 0) {
      result = result.filter(advisor => 
        selectedSpecializations.some(spec => advisor.specializations.includes(spec))
      )
    }
    
    // Filter by audience if selected
    if (selectedAudience) {
      result = result.filter(advisor => 
        advisor.audience.includes(selectedAudience)
      )
    }
    
    setFilteredAdvisors(result)
  }, [selectedLocation, selectedSpecializations, selectedAudience])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Benefits Grid */}
      <BenefitsGrid />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Power Play CTA Carousel */}
      <PowerPlayCTA />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12" id="advisorList">
        {/* Filters */}
        <AdvisorFilters 
          selectedLocation={selectedLocation}
          setSelectedLocation={handleLocationChange}
          selectedSpecializations={selectedSpecializations}
          setSelectedSpecializations={handleSpecializationsChange}
          selectedAudience={selectedAudience}
          setSelectedAudience={handleAudienceChange}
        />
        
        {/* Results Header */}
        <ResultsHeader 
          totalAdvisors={mockAdvisors.length}
          filteredAdvisorsCount={filteredAdvisors.length}
        />
        
        {/* Advisor Cards Grid */}
        {filteredAdvisors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdvisors.map((advisor) => (
              <AdvisorCard key={advisor.id} advisor={advisor} />
            ))}
          </div>
        ) : (
          <NoResults />
        )}
      </div>
      
      {/* Testimonials Carousel */}
      <TestimonialsCarousel />
    </div>
  )
}
