"use server"

export async function getFlightTracks(id: string) {
  const SANDBOX: boolean = process.env.FLIGHT_RADAR_SANDBOX_FLAG === 'true' ? true : false;

  const baseUrl = SANDBOX ? 'https://fr24api.flightradar24.com/api/sandbox/flight-tracks' : 'https://fr24api.flightradar24.com/api/flight-tracks';

  console.log('baseUrl', SANDBOX, baseUrl);

  const query = new URLSearchParams({ flight_id: id });

  const response = await fetch(`${baseUrl}?${query}`, {
    headers: {
      Accept: 'application/json',
      'Accept-Version': 'v1',
      Authorization: `Bearer ${process.env.FLIGHT_RADAR_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch flight tracks: ${response.status} ${response.statusText}`,
    );
  }

  const data = (await response.json()) as FlightTracksResponse;

  return data?.[0]?.tracks || [];
}

type FlightTracksResponse = Array<{
  fr24_id: string;
  tracks: FlightTrack[];
}>;

type FlightTrack = {
  timestamp: string;
  lat: number;
  lon: number;
  alt: number;
  gspeed: number;
  vspeed: number;
  track: number;
  squawk: string;
  callsign: string | null;
  source: string;
};
