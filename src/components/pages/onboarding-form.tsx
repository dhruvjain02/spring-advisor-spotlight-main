'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import type { Location, Specialization, AudienceType } from '@/types/advisor'
import { Location as LocationEnum, Specialization as SpecializationEnum, AudienceType as AudienceTypeEnum } from '@/types/advisor'

const locations = Object.values(LocationEnum);
const specializations = Object.values(SpecializationEnum);
const audienceTypes = Object.values(AudienceTypeEnum);

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  bio: z.string().min(10, {
    message: 'Bio must be at least 10 characters.',
  }),
  location: z.nativeEnum(LocationEnum),
  specializations: z.array(z.nativeEnum(SpecializationEnum)).min(1, {
    message: 'Please select at least one specialization.',
  }),
  audience: z.array(z.nativeEnum(AudienceTypeEnum)).min(1, {
    message: 'Please select at least one audience type.',
  }),
})

export default function OnboardingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      title: '',
      bio: '',
      specializations: [],
      audience: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'Form submitted!',
      description: 'Thank you for your submission.',
    })
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card shadow-sm rounded-lg p-6 border">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">List Your Advisory Practice</h1>
            <p className="text-muted-foreground">Join the Spring Money advisor network and connect with clients who value trusted financial guidance</p>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Why join Spring Money's RIA Marketplace?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">1</div>
                <div>
                  <h3 className="font-medium">Targeted Visibility</h3>
                  <p className="text-sm text-muted-foreground">Reach clients specifically looking for registered advisors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">2</div>
                <div>
                  <h3 className="font-medium">Trust Badge</h3>
                  <p className="text-sm text-muted-foreground">Spring Money verification increases client confidence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">3</div>
                <div>
                  <h3 className="font-medium">Quality Leads</h3>
                  <p className="text-sm text-muted-foreground">Connect with financially educated clients</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">4</div>
                <div>
                  <h3 className="font-medium">Professional Profile</h3>
                  <p className="text-sm text-muted-foreground">Showcase your expertise and services</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-8">Complete this form to apply for listing on Spring Money's advisor marketplace. Our team will review your application and get in touch with next steps.</p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Your professional title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about yourself..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="specializations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specializations</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange([...field.value, value])}
                      value={field.value[field.value.length - 1]}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your specializations" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {specializations.map((specialization) => (
                          <SelectItem key={specialization} value={specialization}>
                            {specialization}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {field.value.map((spec) => (
                        <div
                          key={spec}
                          className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                        >
                          {spec}
                          <button
                            type="button"
                            onClick={() => field.onChange(field.value.filter((s) => s !== spec))}
                            className="text-green-600 hover:text-green-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="audience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange([...field.value, value])}
                      value={field.value[field.value.length - 1]}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your target audience" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {audienceTypes.map((audience) => (
                          <SelectItem key={audience} value={audience}>
                            {audience}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {field.value.map((aud) => (
                        <div
                          key={aud}
                          className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                        >
                          {aud}
                          <button
                            type="button"
                            onClick={() => field.onChange(field.value.filter((a) => a !== aud))}
                            className="text-green-600 hover:text-green-800"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="mt-8 space-y-4">
                <Button type="submit" className="w-full">Apply to Join</Button>
                <p className="text-xs text-center text-muted-foreground">By applying, you agree to Spring Money's Terms of Service and Privacy Policy</p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
