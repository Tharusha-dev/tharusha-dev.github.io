// @ts-nocheck
import { XMLParser } from 'fast-xml-parser';

export async function load() {
  try {
    const response = await fetch('https://tharushaj.medium.com/feed');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch feed: ${response.status} ${response.statusText}`);
    }
    
    const xmlData = await response.text();
    
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "_",
      isArray: (name) => ['item', 'category'].includes(name),
      parseTagValue: false,
      parseAttributeValue: false,
      trimValues: true
    });
    
    const result = parser.parse(xmlData);
    
    if (!result.rss || !result.rss.channel || !result.rss.channel.item) {
      throw new Error('Invalid RSS feed structure');
    }
    
    const items = result.rss.channel.item;
    
    const posts = items.map(item => {
      try {
        // Extract the post ID/slug from the guid
        let postId = '';
        
        if (typeof item.guid === 'string') {
          postId = item.guid.split('/').pop();
        } else if (item.guid && item.guid._) {
          postId = item.guid._.split('/').pop();
        } else if (item.guid && typeof item.guid === 'object') {
          // Handle case where guid is an object
          postId = item.link ? item.link.split('/').pop() : '';
        } else {
          // Fallback if guid is not available in expected format
          postId = new Date().getTime().toString();
        }
        
        // Create a simple description by stripping HTML tags and limiting length
        let description = 'No description available';
        
        if (item["content:encoded"]) {
          const strippedContent = item["content:encoded"].replace(/<[^>]*>/g, ' ').trim();
          description = strippedContent.substring(0, 200);
          if (strippedContent.length > 200) description += '...';
        } else if (item.description) {
          // Fallback to description field if content:encoded is not available
          const strippedContent = item.description.replace(/<[^>]*>/g, ' ').trim();
          description = strippedContent.substring(0, 200);
          if (strippedContent.length > 200) description += '...';
        }
        
        // Handle categories safely
        let categories = [];
        if (item.category) {
          if (Array.isArray(item.category)) {
            categories = item.category;
          } else {
            categories = [item.category];
          }
        }
        
        return {
          title: item.title || 'Untitled',
          link: `/blog/${postId}`,
          originalLink: item.link || '',
          pubDate: item.pubDate || '',
          description: description,
          author: item["dc:creator"] || 'Unknown Author',
          categories: categories
        };
      } catch (itemError) {
        console.error('Error processing item:', itemError);
        // Return a minimal valid object if an item fails to process
        return {
          title: 'Error Processing Item',
          link: '#',
          originalLink: '',
          pubDate: '',
          description: 'There was an error processing this item.',
          author: '',
          categories: []
        };
      }
    });
    
    return { posts };
  } catch (error) {
    console.error('Error loading blog posts:', error);
    // Return empty posts array instead of throwing to prevent 500 error
    return { 
      posts: [],
      error: error.message 
    };
  }
} 