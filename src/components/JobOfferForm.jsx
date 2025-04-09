import React, { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button.tsx';
import { Switch } from './ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { LOCATIONS, CURRENCIES, COMPANIES } from '../lib/constants';

const defaultFormData = {
  name: "",
  company: "manychat_sl", // default company
  jobData: {
    jobTitle: "",
    startDate: "",
    location: "",
    salary: "000",
    currency: "EUR",
    probationPeriod: { value: "", isVisible: false },
    signInBonus: { value: "000", isVisible: false },
    stockOptions: { value: "Value", isVisible: false },
    annualBonus: { value: "000", isVisible: false }
  }
};

export function JobOfferForm({ formData = defaultFormData, onChange, onDownload }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const safeFormData = {
    ...defaultFormData,
    ...formData
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      onChange({ ...safeFormData, name: value });
    } else {
      onChange({
        ...safeFormData,
        jobData: {
          ...safeFormData.jobData,
          [name]: value
        }
      });
    }
  };

  const handleCompanyChange = (value) => {
    onChange({
      ...safeFormData,
      company: value
    });
  };

  const handleLocationChange = (value) => {
    onChange({
      ...safeFormData,
      jobData: {
        ...safeFormData.jobData,
        location: value
      }
    });
  };

  const handleCurrencyChange = (value) => {
    onChange({
      ...safeFormData,
      jobData: {
        ...safeFormData.jobData,
        currency: value
      }
    });
  };

  const handleOptionalFieldChange = (name, value) => {
    onChange({
      ...safeFormData,
      jobData: {
        ...safeFormData.jobData,
        [name]: {
          ...safeFormData.jobData[name],
          value: value
        }
      }
    });
  };

  const handleVisibilityChange = (name, checked) => {
    onChange({
      ...safeFormData,
      jobData: {
        ...safeFormData.jobData,
        [name]: {
          ...safeFormData.jobData[name],
          isVisible: checked
        }
      }
    });
  };

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      await onDownload();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <CardTitle>Edit Job Offer</CardTitle>
        <CardDescription>
          Fill in the details for the job offer letter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid gap-4">
            {/* Обязательные поля */}
            <div className="grid gap-2">
              <Label htmlFor="name">Candidate Name</Label>
              <Input
                id="name"
                name="name"
                value={safeFormData.name}
                onChange={handleChange}
                placeholder="Enter candidate's name"
                autoComplete="name"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                value={safeFormData.jobData.jobTitle}
                onChange={handleChange}
                placeholder="e.g. Senior Frontend Engineer"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                name="startDate"
                value={safeFormData.jobData.startDate}
                onChange={handleChange}
                placeholder="e.g. January 1, 2025"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Select
                value={safeFormData.jobData.location}
                onValueChange={handleLocationChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {LOCATIONS.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="salary">Annual Gross Salary</Label>
              <div className="flex gap-2">
                <Input
                  id="salary"
                  name="salary"
                  value={safeFormData.jobData.salary}
                  onChange={handleChange}
                  placeholder="e.g. 60,000"
                  className="flex-1"
                />
                <Select
                  value={safeFormData.jobData.currency}
                  onValueChange={handleCurrencyChange}
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.value} value={currency.value}>
                        {currency.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Опциональные поля */}
            <div className="grid gap-2">
              <div className="flex flex-col rounded-lg border">
                <div className="flex items-center justify-between p-4">
                  <Label htmlFor="probationPeriod">Probation Period</Label>
                  <Switch
                    id="probationPeriod"
                    checked={safeFormData.jobData.probationPeriod.isVisible}
                    onCheckedChange={(checked) => handleVisibilityChange('probationPeriod', checked)}
                  />
                </div>
                {safeFormData.jobData.probationPeriod.isVisible && (
                  <div className="px-4 pb-4">
                    <Input
                      name="probationPeriod"
                      value={safeFormData.jobData.probationPeriod.value}
                      onChange={(e) => handleOptionalFieldChange('probationPeriod', e.target.value)}
                      placeholder="e.g. 3 months"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <div className="flex flex-col rounded-lg border">
                <div className="flex items-center justify-between p-4">
                  <Label htmlFor="signInBonus">Sign-in Gross Bonus</Label>
                  <Switch
                    id="signInBonus"
                    checked={safeFormData.jobData.signInBonus.isVisible}
                    onCheckedChange={(checked) => handleVisibilityChange('signInBonus', checked)}
                  />
                </div>
                {safeFormData.jobData.signInBonus.isVisible && (
                  <div className="px-4 pb-4">
                    <Input
                      name="signInBonus"
                      value={safeFormData.jobData.signInBonus.value}
                      onChange={(e) => handleOptionalFieldChange('signInBonus', e.target.value)}
                      placeholder="e.g. 5,000"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <div className="flex flex-col rounded-lg border">
                <div className="flex items-center justify-between p-4">
                  <Label htmlFor="stockOptions">Stock Options</Label>
                  <Switch
                    id="stockOptions"
                    checked={safeFormData.jobData.stockOptions.isVisible}
                    onCheckedChange={(checked) => handleVisibilityChange('stockOptions', checked)}
                  />
                </div>
                {safeFormData.jobData.stockOptions.isVisible && (
                  <div className="px-4 pb-4">
                    <Input
                      name="stockOptions"
                      value={safeFormData.jobData.stockOptions.value}
                      onChange={(e) => handleOptionalFieldChange('stockOptions', e.target.value)}
                      placeholder="Enter stock options value"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <div className="flex flex-col rounded-lg border">
                <div className="flex items-center justify-between p-4">
                  <Label htmlFor="annualBonus">Annual Gross Bonus</Label>
                  <Switch
                    id="annualBonus"
                    checked={safeFormData.jobData.annualBonus.isVisible}
                    onCheckedChange={(checked) => handleVisibilityChange('annualBonus', checked)}
                  />
                </div>
                {safeFormData.jobData.annualBonus.isVisible && (
                  <div className="px-4 pb-4">
                    <Input
                      name="annualBonus"
                      value={safeFormData.jobData.annualBonus.value}
                      onChange={(e) => handleOptionalFieldChange('annualBonus', e.target.value)}
                      placeholder="e.g. 10,000"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Селектор компании */}
            <div className="grid gap-2 pt-4 border-t">
              <Label htmlFor="company">Company</Label>
              <Select
                value={safeFormData.company}
                onValueChange={handleCompanyChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                  {COMPANIES.map((company) => (
                    <SelectItem key={company.value} value={company.value}>
                      {company.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleDownload}
          variant="default"
          size="lg"
          className="w-full"
          loading={isGenerating}
          disabled={isGenerating}
        >
          {!isGenerating && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          )}
          {isGenerating ? 'Generating PDF...' : 'Download PDF'}
        </Button>
      </CardFooter>
    </Card>
  );
} 