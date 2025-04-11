import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "./ui/toggle-group";
import {
  Card,
  CardContent,
  CardDescription,
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
    signInBonus: { 
      value: "000", 
      isVisible: false, 
      paymentPeriod: "1",
      showPaymentPeriodText: true 
    },
    stockOptions: { value: "Value", isVisible: false },
    annualBonus: { value: "000", isVisible: false },
    postRelocationSalary: { value: "000", isVisible: true }
  }
};

export function JobOfferForm({ formData = defaultFormData, onChange }) {
  const safeFormData = {
    ...defaultFormData,
    ...formData,
    jobData: {
      ...defaultFormData.jobData,
      ...formData?.jobData,
      signInBonus: {
        ...defaultFormData.jobData.signInBonus,
        ...formData?.jobData?.signInBonus,
        paymentPeriod: formData?.jobData?.signInBonus?.paymentPeriod || "1"
      },
      postRelocationSalary: formData?.jobData?.postRelocationSalary || { value: "000", isVisible: true }
    }
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
                  <div className="px-4 pb-4 space-y-4">
                    <Input
                      name="signInBonus"
                      value={safeFormData.jobData.signInBonus.value}
                      onChange={(e) => handleOptionalFieldChange('signInBonus', e.target.value)}
                      placeholder="e.g. 5,000"
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="showPaymentPeriodText"
                        checked={safeFormData.jobData.signInBonus.showPaymentPeriodText}
                        onCheckedChange={(checked) => {
                          onChange({
                            ...safeFormData,
                            jobData: {
                              ...safeFormData.jobData,
                              signInBonus: {
                                ...safeFormData.jobData.signInBonus,
                                showPaymentPeriodText: checked
                              }
                            }
                          });
                        }}
                      />
                      <Label 
                        htmlFor="showPaymentPeriodText" 
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
                      >
                        <span>paid after the</span>
                        <ToggleGroup
                          type="single"
                          value={safeFormData.jobData.signInBonus.paymentPeriod}
                          onValueChange={(value) => {
                            if (value) {
                              onChange({
                                ...safeFormData,
                                jobData: {
                                  ...safeFormData.jobData,
                                  signInBonus: {
                                    ...safeFormData.jobData.signInBonus,
                                    paymentPeriod: value
                                  }
                                }
                              });
                            }
                          }}
                          className="inline-flex h-auto bg-transparent p-0 gap-1"
                        >
                          <ToggleGroupItem 
                            value="1" 
                            className="h-auto px-1 py-0 rounded-sm data-[state=on]:bg-transparent data-[state=on]:text-primary data-[state=on]:underline hover:bg-transparent cursor-pointer"
                          >
                            first
                          </ToggleGroupItem>
                          <span>/</span>
                          <ToggleGroupItem 
                            value="2" 
                            className="h-auto px-1 py-0 rounded-sm data-[state=on]:bg-transparent data-[state=on]:text-primary data-[state=on]:underline hover:bg-transparent cursor-pointer"
                          >
                            second
                          </ToggleGroupItem>
                        </ToggleGroup>
                        <span>month</span>
                      </Label>
                    </div>
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

            <div className="grid gap-2">
              <div className="flex flex-col rounded-lg border">
                <div className="flex items-center justify-between p-4">
                  <Label htmlFor="postRelocationSalary">Reveal post-relocation salary</Label>
                  <Switch
                    id="postRelocationSalary"
                    checked={safeFormData.jobData.postRelocationSalary.isVisible}
                    onCheckedChange={(checked) => handleVisibilityChange('postRelocationSalary', checked)}
                  />
                </div>
                {safeFormData.jobData.postRelocationSalary.isVisible && (
                  <div className="px-4 pb-4">
                    <Input
                      name="postRelocationSalary"
                      value={safeFormData.jobData.postRelocationSalary.value}
                      onChange={(e) => handleOptionalFieldChange('postRelocationSalary', e.target.value)}
                      placeholder="e.g. 60,000"
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
    </Card>
  );
} 