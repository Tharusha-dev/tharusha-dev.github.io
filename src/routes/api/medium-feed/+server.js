export async function GET() {
  try {
    const response = await fetch('https://tharushaj.medium.com/feed');
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch Medium feed', errorMessage: response.statusText }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    const xmlData = await response.text();
    
    // Return the XML data with appropriate headers
    return new Response(xmlData, {
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    return new Response(JSON.stringify({ error: error.message, errorMessage: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 