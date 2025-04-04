import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { LOCATIONS, CURRENCIES, COMPANIES, STATISTICS, BENEFITS } from '@/lib/constants';

function ContentSection({ title, data, onUpdate }) {
  const [editedData, setEditedData] = useState(data);

  const handleChange = (index, field, value) => {
    const newData = [...editedData];
    if (typeof newData[index] === 'object') {
      newData[index] = { ...newData[index], [field]: value };
    } else {
      newData[index] = value;
    }
    setEditedData(newData);
    onUpdate(newData);
  };

  return (
    <Card className="p-4 mb-4">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {editedData.map((item, index) => (
        <div key={index} className="mb-4 space-y-2">
          {typeof item === 'object' ? (
            Object.entries(item).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <Label className="w-24">{key}:</Label>
                <Input
                  value={value}
                  onChange={(e) => handleChange(index, key, e.target.value)}
                  className="flex-1"
                />
              </div>
            ))
          ) : (
            <Input
              value={item}
              onChange={(e) => handleChange(index, null, e.target.value)}
              className="w-full"
            />
          )}
        </div>
      ))}
    </Card>
  );
}

function BenefitsEditor({ benefits, onUpdate }) {
  const [selectedLocation, setSelectedLocation] = useState(Object.keys(benefits)[0]);

  return (
    <div className="space-y-4">
      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
        <SelectTrigger>
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(benefits).map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedLocation && (
        <ContentSection
          title={`Benefits for ${selectedLocation}`}
          data={benefits[selectedLocation]}
          onUpdate={(newData) => {
            onUpdate({
              ...benefits,
              [selectedLocation]: newData
            });
          }}
        />
      )}
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

  const handleSave = () => {
    console.log('Saving content:', editedContent);
    // Здесь будет логика сохранения в R2
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Content</DialogTitle>
          <DialogDescription>
            Make changes to your content configuration here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <ContentSection
            title="Locations"
            data={editedContent.locations}
            onUpdate={(newData) => setEditedContent({ ...editedContent, locations: newData })}
          />
          
          <ContentSection
            title="Currencies"
            data={editedContent.currencies}
            onUpdate={(newData) => setEditedContent({ ...editedContent, currencies: newData })}
          />

          <ContentSection
            title="Companies"
            data={editedContent.companies}
            onUpdate={(newData) => setEditedContent({ ...editedContent, companies: newData })}
          />

          <ContentSection
            title="Statistics"
            data={editedContent.statistics}
            onUpdate={(newData) => setEditedContent({ ...editedContent, statistics: newData })}
          />

          <BenefitsEditor
            benefits={editedContent.benefits}
            onUpdate={(newData) => setEditedContent({ ...editedContent, benefits: newData })}
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 