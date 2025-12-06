import { FlightActivity } from '@/app/ui/flight-activity-fix';
import { FlightSkeleton } from '@/app/ui/flights-skeleton';
import { PlaneDetails } from '@/app/ui/plane-details';
import { Suspense } from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PlaneDetails params={params} />
      </Suspense>
      <Suspense fallback={<FlightSkeleton />}>
        <FlightActivity params={params} />
      </Suspense>
    </>
  );
}
