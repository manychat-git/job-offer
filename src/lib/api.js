const API_URL = 'https://mcr2.us/api';

export async function fetchContent() {
  try {
    const response = await fetch(`${API_URL}/content`);
    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error;
  }
}

export async function updateContent(newContent) {
  try {
    const response = await fetch(`${API_URL}/content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContent),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update content');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error updating content:', error);
    throw error;
  }
} 