import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { LOCATIONS, CURRENCIES, COMPANIES, STATISTICS, BENEFITS } from '@/lib/constants';

export function ContentEditor({ open, onOpenChange }) {
  const [activeTab, setActiveTab] = useState("locations");
  const [editedData, setEditedData] = useState({
    locations: LOCATIONS,
    currencies: CURRENCIES,
    companies: COMPANIES,
    statistics: STATISTICS,
    benefits: BENEFITS
  });

  const handleValueChange = (section, index, field, value) => {
    setEditedData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const renderSimpleList = (section, data) => (
    <div className="grid gap-4">
      {data.map((item, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Value</Label>
                <Input 
                  value={item.value} 
                  onChange={(e) => handleValueChange(section, index, 'value', e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label>Label</Label>
                <Input 
                  value={item.label} 
                  onChange={(e) => handleValueChange(section, index, 'label', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderStatistics = () => (
    <div className="grid gap-4">
      {editedData.statistics.map((stat, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Title</Label>
                <Input 
                  value={stat.title} 
                  onChange={(e) => handleValueChange('statistics', index, 'title', e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label>Description</Label>
                <Input 
                  value={stat.description} 
                  onChange={(e) => handleValueChange('statistics', index, 'description', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderBenefits = () => (
    <div className="grid gap-6">
      {Object.entries(editedData.benefits).map(([location, benefits]) => (
        <Card key={location}>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">{location}</h3>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label>Emoji</Label>
                        <Input 
                          value={benefit.emoji} 
                          onChange={(e) => {
                            const newBenefits = {...editedData.benefits};
                            newBenefits[location][index].emoji = e.target.value;
                            setEditedData(prev => ({...prev, benefits: newBenefits}));
                          }}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Title</Label>
                        <Input 
                          value={benefit.title} 
                          onChange={(e) => {
                            const newBenefits = {...editedData.benefits};
                            newBenefits[location][index].title = e.target.value;
                            setEditedData(prev => ({...prev, benefits: newBenefits}));
                          }}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Description</Label>
                        <Input 
                          value={benefit.description} 
                          onChange={(e) => {
                            const newBenefits = {...editedData.benefits};
                            newBenefits[location][index].description = e.target.value;
                            setEditedData(prev => ({...prev, benefits: newBenefits}));
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Content</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 gap-4">
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="currencies">Currencies</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          <div className="mt-4">
            <TabsContent value="locations">
              {renderSimpleList('locations', editedData.locations)}
            </TabsContent>
            <TabsContent value="currencies">
              {renderSimpleList('currencies', editedData.currencies)}
            </TabsContent>
            <TabsContent value="companies">
              {renderSimpleList('companies', editedData.companies)}
            </TabsContent>
            <TabsContent value="statistics">
              {renderStatistics()}
            </TabsContent>
            <TabsContent value="benefits">
              {renderBenefits()}
            </TabsContent>
          </div>
        </Tabs>
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => {
            console.log('Saving:', editedData);
            onOpenChange(false);
          }}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 