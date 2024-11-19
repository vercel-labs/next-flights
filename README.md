## Next Flight Tracker

This demo was built to showcase the improved errors overlay, dynamic data fetching, and the new `use cache` API during Next.js Conf 2024. It uses experimental features that are not yet available in a stable release.

Learn more:

- [`dynamicIO`](https://nextjs.org/docs/canary/app/api-reference/next-config-js/dynamicIO)
- [`use cache`](https://nextjs.org/docs/canary/app/api-reference/directives/use-cache)

Created by [@matiasngf](https://github.com/matiasngf) and [@delbaoliveira](https://github.com/delbaoliveira).

## Getting started

1. Run `pnpm i` followed by `pnpm dev` to install the dependencies and start the development server.

2. Add your API keys to the `.env` file.

- `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`: The map is generated using [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/).
- `FLIGHT_RADAR_TOKEN`: Real flight tracking data is provided by [flightradar24.com](https://www.flightradar24.com/). It requires a [subscription](https://fr24api.flightradar24.com/subscriptions-and-credits), but also provides a sandbox key.
- `FLIGHT_RADAR_SANDBOX_FLAG`: Set this to `true` to use the sandbox environment of the FlightRadar24 API, which provides mock data for testing purposes. Set it to `false` to use the live environment.
- `AVIATIONSTACK_API_TOKEN`: The specific flight data is provided by [aviationstack.com](https://aviationstack.com/). The personal subscription is **free**. However, we found the API was unreliable, and to reduce the risk of showing an incomplete flight informationduring the keynote, we used mock data.

3. Navigate to [http://localhost:3000/explore/sfo](http://localhost:3000/explore/sfo) to see the demo.

> We recommend leaving the [`serverComponentsHRMcache` config option](https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsHmrCache) enabled while developing to reduce API calls between saves. However, we disabled it during the keynote to allow us to refetch data across Fast Refresh.
