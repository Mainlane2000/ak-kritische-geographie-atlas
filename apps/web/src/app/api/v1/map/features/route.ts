import {NextResponse} from 'next/server';
import type {AtlasMapFeature} from '@ak-atlas/contracts';
// TODO: serverseitigen PostGIS-Adapter ergänzen; öffentliche Route muss published-only erzwingen.
export async function GET(){const data:AtlasMapFeature[]=[];return NextResponse.json({data,meta:{source:'placeholder',publishedOnly:true}},{headers:{'Cache-Control':'public, s-maxage=60, stale-while-revalidate=300'}})}
