import Image from 'next/image';
import BackgroundGlow from './assets/background-glow.svg';
import Plane from './assets/plane.svg';
import Stars from './assets/stars.svg';
import { getPlaneDetails } from '../utils/get-plane-details';
import { PlaneDetailsType } from './types';
import { Suspense } from 'react';

export async function PlaneDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const plane = (await getPlaneDetails(id)) as PlaneDetailsType;

  return (
    <Suspense fallback={<div>Loading plane details...</div>}>
      <div className="text-white">
        <div className="relative aspect-video xl:aspect-[7/3] max-w-screen-lg mx-auto">
          <div className="absolute left-0 top-0 w-full h-full">
            <Image
              className="absolute inset-0 object-cover"
              src={BackgroundGlow}
              alt=""
              fill
              priority
            />
            <div className="stars-container absolute inset-0 mix-blend-lighten opacity-60">
              <Image
                className="absolute inset-0 object-contain"
                src={Stars}
                alt="starts"
                fill
                priority
              />
              <Image
                className="absolute inset-0 object-contain -translate-x-full"
                src={Stars}
                alt="starts"
                fill
              />
            </div>
            <div className="absolute inset-4">
              <Image
                className="absolute inset-0 object-contain"
                src={Plane}
                alt="plane"
                fill
                priority
              />
              <div className="absolute left-[61%] top-[54%] w-[5%] aspect-square -translate-x-1/2 -translate-y-1/2">
                <div className="plane-light" />
              </div>
            </div>
          </div>
          <div className="relative p-4 text-lg font-bold max-w-screen-lg mx-auto">
            <h1 className="relative">
              {plane.model_name}/{plane.registration_number}
            </h1>
            <p>{plane.airline.name}</p>
          </div>
        </div>
        <div className="p-4 max-w-screen-lg mx-auto">
          <div className="flex gap-4 leading-tight text-sm opacity-70">
            <div className="shrink-0">
              <p className="leading-tight">{plane.plane_age} years old</p>
              <p className="leading-tight">{plane.miles_flown} miles</p>
            </div>
            <p className="text-pretty">{plane.description}</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
