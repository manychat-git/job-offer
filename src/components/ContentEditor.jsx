import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { LOCATIONS, CURRENCIES, COMPANIES, STATISTICS, BENEFITS } from '@/lib/constants';

function WhyJoinEditor({ statistics, onUpdate }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedItem, setEditedItem] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedItem({ ...statistics[index] });
  };

  const handleSave = (index) => {
    if (!editedItem?.title?.trim() && !editedItem?.description?.trim()) {
      handleDelete(index);
      return;
    }
    
    const newStats = [...statistics];
    newStats[index] = editedItem;
    onUpdate(newStats);
    setEditingIndex(null);
    setEditedItem(null);
  };

  const handleDelete = (index) => {
    const newStats = statistics.filter((_, i) => i !== index);
    onUpdate(newStats);
    setEditingIndex(null);
    setEditedItem(null);
  };

  const handleAdd = () => {
    setEditingIndex(statistics.length);
    setEditedItem({ title: '', description: '' });
  };

  const handleCancel = (index) => {
    if (index === statistics.length) {
      handleDelete(index);
    }
    setEditingIndex(null);
    setEditedItem(null);
  };

  // Обработчик клика вне карточки
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editingIndex !== null) {
        const cardElement = document.querySelector(`[data-card-index="${editingIndex}"]`);
        if (cardElement && !cardElement.contains(event.target)) {
          handleSave(editingIndex);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingIndex, editedItem]);

  return (
    <div className="space-y-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Why Join Manychat</h2>
      </div>
      <div className="space-y-4">
        {statistics.map((item, index) => (
          <div key={index} className="relative p-4 border rounded-lg group" data-card-index={index}>
            {editingIndex === index ? (
              <div className="space-y-4">
                <Input
                  value={editedItem.title}
                  onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                  className="flex-1"
                  placeholder="Enter title"
                />
                <Textarea
                  value={editedItem.description}
                  onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                  className="min-h-[100px] resize-none"
                  placeholder="Enter the description..."
                />
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCancel(index)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="secondary"
                    size="sm"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <h4 className="font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">{item.description}</p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleEdit(index)}
                    className="h-8 w-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDelete(index)}
                    className="h-8 w-8 text-red-500 hover:text-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
        {editingIndex === statistics.length && (
          <div className="relative p-4 border rounded-lg group" data-card-index={statistics.length}>
            <div className="space-y-4">
              <Input
                value={editedItem.title}
                onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                className="flex-1"
                placeholder="Enter title"
              />
              <Textarea
                value={editedItem.description}
                onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                className="min-h-[100px] resize-none"
                placeholder="Enter the description..."
              />
              <div className="flex justify-end gap-2">
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCancel(statistics.length)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    if (editedItem?.title?.trim() || editedItem?.description?.trim()) {
                      onUpdate([...statistics, editedItem]);
                    }
                    setEditingIndex(null);
                    setEditedItem(null);
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        )}
        <Button 
          onClick={handleAdd}
          className="w-fit"
          variant="secondary"
        >
          Add New Fact
        </Button>
      </div>
    </div>
  );
}

function BenefitsEditor({ benefits, onUpdate }) {
  const [selectedLocation, setSelectedLocation] = useState(Object.keys(benefits)[0]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedItem, setEditedItem] = useState(null);

  // Находим label локации по value
  const getLocationLabel = (value) => {
    const location = LOCATIONS.find(loc => loc.value === value);
    return location ? location.label : value;
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedItem({ ...benefits[selectedLocation][index] });
  };

  const handleSave = (index) => {
    if (!editedItem?.emoji?.trim() && !editedItem?.title?.trim() && !editedItem?.description?.trim()) {
      handleDelete(index);
      return;
    }
    
    const newBenefits = { ...benefits };
    newBenefits[selectedLocation][index] = editedItem;
    onUpdate(newBenefits);
    setEditingIndex(null);
    setEditedItem(null);
  };

  const handleDelete = (index) => {
    const newBenefits = { ...benefits };
    newBenefits[selectedLocation] = newBenefits[selectedLocation].filter((_, i) => i !== index);
    onUpdate(newBenefits);
    setEditingIndex(null);
    setEditedItem(null);
  };

  const handleAdd = () => {
    setEditingIndex(benefits[selectedLocation].length);
    setEditedItem({ emoji: '✨', title: '', description: '' });
  };

  const handleCancel = (index) => {
    if (index === benefits[selectedLocation].length) {
      handleDelete(index);
    }
    setEditingIndex(null);
    setEditedItem(null);
  };

  // Обработчик клика вне карточки
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editingIndex !== null) {
        const cardElement = document.querySelector(`[data-card-index="${editingIndex}"]`);
        if (cardElement && !cardElement.contains(event.target)) {
          handleSave(editingIndex);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingIndex, editedItem]);

  return (
    <div className="space-y-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Benefits</h2>
      </div>
      
      <div className="w-full max-w-xs">
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Select location">
              {getLocationLabel(selectedLocation)}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {Object.keys(benefits).map((location) => (
              <SelectItem key={location} value={location}>
                {getLocationLabel(location)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {selectedLocation && benefits[selectedLocation].map((benefit, index) => (
          <div key={index} className="relative p-4 border rounded-lg group" data-card-index={index}>
            {editingIndex === index ? (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={editedItem.emoji}
                    onChange={(e) => setEditedItem({ ...editedItem, emoji: e.target.value })}
                    className="w-20"
                    placeholder="Emoji"
                  />
                  <Input
                    value={editedItem.title}
                    onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                    className="flex-1"
                    placeholder="Enter title"
                  />
                </div>
                <Textarea
                  value={editedItem.description}
                  onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                  className="min-h-[100px] resize-none"
                  placeholder="Enter the description..."
                />
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCancel(index)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="secondary"
                    size="sm"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <h4 className="font-medium mb-2">
                  <span className="mr-2">{benefit.emoji}</span>
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">{benefit.description}</p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleEdit(index)}
                    className="h-8 w-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDelete(index)}
                    className="h-8 w-8 text-red-500 hover:text-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
        {editingIndex === benefits[selectedLocation].length && (
          <div className="relative p-4 border rounded-lg group" data-card-index={benefits[selectedLocation].length}>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={editedItem.emoji}
                  onChange={(e) => setEditedItem({ ...editedItem, emoji: e.target.value })}
                  className="w-20"
                  placeholder="Emoji"
                />
                <Input
                  value={editedItem.title}
                  onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                  className="flex-1"
                  placeholder="Enter title"
                />
              </div>
              <Textarea
                value={editedItem.description}
                onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                className="min-h-[100px] resize-none"
                placeholder="Enter the description..."
              />
              <div className="flex justify-end gap-2">
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCancel(benefits[selectedLocation].length)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    if (editedItem?.emoji?.trim() || editedItem?.title?.trim() || editedItem?.description?.trim()) {
                      const newBenefits = { ...benefits };
                      newBenefits[selectedLocation] = [...newBenefits[selectedLocation], editedItem];
                      onUpdate(newBenefits);
                    }
                    setEditingIndex(null);
                    setEditedItem(null);
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        )}
        <Button 
          onClick={handleAdd}
          className="w-fit"
          variant="secondary"
        >
          Add New Benefit
        </Button>
      </div>
    </div>
  );
}

export function ContentEditor() {
  const [editedContent, setEditedContent] = useState({
    locations: LOCATIONS,
    currencies: CURRENCIES,
    companies: COMPANIES,
    statistics: STATISTICS,
    benefits: BENEFITS
  });

  const [activeSection, setActiveSection] = useState('locations');

  const handleSave = () => {
    console.log('Saving content:', editedContent);
    // Здесь будет логика сохранения в R2
  };

  const handleOtherSettingsUpdate = (section, newData) => {
    setEditedContent(prev => ({
      ...prev,
      [section]: newData
    }));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'locations':
        return (
          <div className="space-y-8">
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold tracking-tight">Locations</h2>
              </div>
              <div className="space-y-2">
                {editedContent.locations.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={item.label}
                      onChange={(e) => {
                        const newLocations = [...editedContent.locations];
                        const value = e.target.value.toLowerCase().replace(/\s+/g, '-');
                        newLocations[index] = { 
                          value: value,
                          label: e.target.value 
                        };
                        handleOtherSettingsUpdate('locations', newLocations);
                      }}
                      className="flex-1"
                      placeholder="Enter location name"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const newLocations = editedContent.locations.filter((_, i) => i !== index);
                        handleOtherSettingsUpdate('locations', newLocations);
                      }}
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                    </Button>
                  </div>
                ))}
                <Button 
                  onClick={() => handleOtherSettingsUpdate('locations', [...editedContent.locations, { value: '', label: '' }])}
                  className="w-fit mt-4"
                  variant="secondary"
                >
                  Add Location
                </Button>
              </div>
            </div>

            <div className="h-px bg-border my-8" />

            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold tracking-tight">Currencies</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {editedContent.currencies.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={item.label}
                      onChange={(e) => {
                        const newCurrencies = [...editedContent.currencies];
                        const value = e.target.value.toLowerCase().replace(/\s+/g, '-');
                        newCurrencies[index] = { 
                          value: value,
                          label: e.target.value 
                        };
                        handleOtherSettingsUpdate('currencies', newCurrencies);
                      }}
                      className="flex-1"
                      placeholder="Enter currency name"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const newCurrencies = editedContent.currencies.filter((_, i) => i !== index);
                        handleOtherSettingsUpdate('currencies', newCurrencies);
                      }}
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                    </Button>
                  </div>
                ))}
              </div>
              <Button 
                onClick={() => handleOtherSettingsUpdate('currencies', [...editedContent.currencies, { value: '', label: '' }])}
                className="w-fit mt-4"
                variant="secondary"
              >
                Add Currency
              </Button>
            </div>
          </div>
        );
      case 'companies':
        return (
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold tracking-tight">Companies</h2>
            </div>
            <div className="space-y-2">
              {editedContent.companies.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={item.label}
                    onChange={(e) => {
                      const newCompanies = [...editedContent.companies];
                      const value = e.target.value.toLowerCase().replace(/\s+/g, '-');
                      newCompanies[index] = { 
                        value: value,
                        label: e.target.value 
                      };
                      handleOtherSettingsUpdate('companies', newCompanies);
                    }}
                    className="flex-1"
                    placeholder="Enter company name"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const newCompanies = editedContent.companies.filter((_, i) => i !== index);
                      handleOtherSettingsUpdate('companies', newCompanies);
                    }}
                    className="h-8 w-8 text-red-500 hover:text-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </Button>
                </div>
              ))}
              <Button 
                onClick={() => handleOtherSettingsUpdate('companies', [...editedContent.companies, { value: '', label: '' }])}
                className="w-fit mt-4"
                variant="secondary"
              >
                Add Company
              </Button>
            </div>
          </div>
        );
      case 'why-join':
        return (
          <WhyJoinEditor
            statistics={editedContent.statistics}
            onUpdate={(newStats) => setEditedContent({ ...editedContent, statistics: newStats })}
          />
        );
      case 'benefits':
        return (
          <BenefitsEditor
            benefits={editedContent.benefits}
            onUpdate={(newBenefits) => setEditedContent({ ...editedContent, benefits: newBenefits })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" disabled>Edit data [SOON]</Button>
      </DialogTrigger>
      <DialogContent className="!max-w-4xl max-h-[80vh] overflow-hidden p-0">
        <div className="flex flex-col h-[80vh]">
          <div className="flex-1 overflow-hidden">
            <div className="flex h-full">
              <SidebarProvider>
                <Sidebar className="w-56 border-r">
                  <SidebarContent className="w-56">
                    <SidebarGroup>
                      <SidebarGroupLabel>Content Sections</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              onClick={() => setActiveSection('locations')}
                              data-active={activeSection === 'locations'}
                              className="w-full justify-start gap-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                              >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              <span>Locations</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              onClick={() => setActiveSection('companies')}
                              data-active={activeSection === 'companies'}
                              className="w-full justify-start gap-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                              >
                                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                                <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
                                <path d="M12 11v8" />
                                <path d="M8 11v8" />
                                <path d="M16 11v8" />
                              </svg>
                              <span>Companies</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              onClick={() => setActiveSection('why-join')}
                              data-active={activeSection === 'why-join'}
                              className="w-full justify-start gap-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                              >
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                <polyline points="14 2 14 8 20 8" />
                              </svg>
                              <span>Why join</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              onClick={() => setActiveSection('benefits')}
                              data-active={activeSection === 'benefits'}
                              className="w-full justify-start gap-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                              >
                                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                                <path d="M7 7h.01" />
                              </svg>
                              <span>Benefits</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
                <div className="flex-1 overflow-y-auto p-6 pr-12 pt-10 !pb-80">
                  {renderContent()}
                </div>
              </SidebarProvider>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 p-6 border-t bg-background">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 