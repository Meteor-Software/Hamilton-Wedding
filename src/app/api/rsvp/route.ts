import { NextRequest, NextResponse } from 'next/server';

interface RSVPData {
  name: string;
  surname: string;
  attendance: 'yes' | 'no';
}

export async function POST(request: NextRequest) {
  try {
    console.log('RSVP API route called');
    const data: RSVPData = await request.json();
    console.log('Received data:', data);
    
    // Validate required fields
    if (!data.name || !data.surname || !data.attendance) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: new Date().toISOString(),
      name: data.name,
      surname: data.surname,
      attendance: data.attendance,
      halal: 'no', // Default to no halal meals
      fullName: `${data.name} ${data.surname}`
    };

    // Get the Google Apps Script web app URL from environment variables
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL ? 'Set' : 'Not set');
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    console.log('Sending data to Google Sheets:', sheetData);
    // Send data to Google Sheets via Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
    });

    console.log('Google Sheets response status:', response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Sheets API error:', errorText);
      return NextResponse.json(
        { error: 'Failed to save RSVP data' },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log('Google Sheets result:', result);
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'RSVP submitted successfully' 
      });
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to save RSVP data' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing RSVP:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
