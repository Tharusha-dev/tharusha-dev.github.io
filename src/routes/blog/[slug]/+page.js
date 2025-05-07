// @ts-nocheck
import { XMLParser } from 'fast-xml-parser';

export async function load({ params, fetch }) {
	try {
		// Use the proxy endpoint instead of directly fetching from Medium
		const response = await fetch('/api/medium-feed');
		
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
		
		// Find the specific post that matches the slug
		const post = items.find(item => {
			try {
				// Extract slug from the guid or link
				let postId = '';
				
				if (typeof item.guid === 'string') {
					postId = item.guid.split('/').pop();
				} else if (item.guid && item.guid._) {
					postId = item.guid._.split('/').pop();
				} else if (item.guid && typeof item.guid === 'object' && item.guid._isPermaLink === 'false' && typeof item.guid._ === 'string') {
					// Make sure guid._ exists and is a string before calling split
					postId = item.guid._.split('/').pop();
				} else if (item.link) {
					// Extract ID from link as fallback
					const linkParts = item.link.split('?')[0].split('/');
					postId = linkParts[linkParts.length - 1];
				}
				
				return postId === params.slug;
			} catch (error) {
				console.error('Error processing item for slug comparison:', error);
				return false;
			}
		});
		
		if (!post) {
			throw new Error(`Post with slug "${params.slug}" not found`);
		}
		
		// Handle categories safely
		let categories = [];
		if (post.category) {
			if (Array.isArray(post.category)) {
				categories = post.category;
			} else {
				categories = [post.category];
			}
		}
		
		return {
			post: {
				title: post.title || 'Untitled',
				link: post.link || '#',
				pubDate: post.pubDate || '',
				content: post["content:encoded"] || post.description || '',
				author: post["dc:creator"] || 'Unknown Author',
				categories: categories,
				// Add additional metadata that might be useful
				guid: typeof post.guid === 'string' ? post.guid : 
					  (post.guid && post.guid._) ? post.guid._ : '',
				description: post.description || '',
				updated: post["atom:updated"] || ''
			}
		};
	} catch (error) {
		console.error('Error loading blog post:', error);
		// Return a minimal valid object instead of throwing to prevent 500 error
		return { 
			post: null,
			error: error.message 
		};
	}
}