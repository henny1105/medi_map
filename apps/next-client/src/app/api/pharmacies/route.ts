import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  if (!lat || !lng) {
    console.error("Latitude or longitude missing");
    return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
  }

  const API_KEY = process.env.NEXT_PUBLIC_DATA_API_KEY;
  const baseUrl = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire';
  const url = `${baseUrl}?serviceKey=${API_KEY}&WGS84_LAT=${lat}&WGS84_LON=${lng}&numOfRows=100&pageNo=1&_type=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const pharmacies = data.response?.body?.items || [];

    return NextResponse.json(pharmacies);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: 'Failed to fetch pharmacy data' }, { status: 500 });
  }
}
