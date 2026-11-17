'use client';
import {useEffect,useRef,useState} from 'react';
import maplibregl,{Map as MapLibreMap} from 'maplibre-gl';
import type {AtlasMapFeature} from '@ak-atlas/contracts';

const demo:AtlasMapFeature[]=[
{id:'demo-1',slug:'beispielprojekt',title:'Beispielprojekt: Stadt und Raum',summary:'Platzhalter für einen redaktionell gepflegten Eintrag.',itemType:'project',topics:['Stadt','Raumproduktion'],geometry:{type:'Point',coordinates:[6.9603,50.9375]}},
{id:'demo-2',slug:'beispielort',title:'Beispielort: Öffentlicher Raum',summary:'Demonstriert einen zweiten Atlas-Eintrag.',itemType:'place',topics:['Öffentlicher Raum'],geometry:{type:'Point',coordinates:[6.9498,50.9413]}}
];
export default function MapView(){
 const ref=useRef<HTMLDivElement>(null); const mapRef=useRef<MapLibreMap|null>(null);
 const [chosen,setChosen]=useState<AtlasMapFeature|null>(null); const [origin,setOrigin]=useState('Lokale Beispieldaten'); const [mapError,setMapError]=useState<string|null>(null);
 useEffect(()=>{if(!ref.current||mapRef.current)return;
 let disposed=false;
 const map=new maplibregl.Map({container:ref.current,style:process.env.NEXT_PUBLIC_MAP_STYLE_URL||'https://demotiles.maplibre.org/style.json',center:[6.955,50.939],zoom:12});
 const handleMapError=(event:maplibregl.ErrorEvent)=>setMapError(event.error?.message||'Die Karte konnte nicht geladen werden.');
 map.on('error',handleMapError); map.addControl(new maplibregl.NavigationControl(),'top-right');mapRef.current=map;
 map.on('load',async()=>{
  let items=demo;
  try{const r=await fetch('/api/v1/map/features?bbox=6.8,50.8,7.1,51.1');if(!r.ok)throw new Error(`API-Fehler (${r.status})`);const j=await r.json();if(Array.isArray(j.data)&&j.data.length){items=j.data;setOrigin('API-Daten')}}catch(error){setMapError(error instanceof Error?error.message:'Die Atlas-Daten konnten nicht geladen werden.')}
  if(disposed)return;
  map.addSource('atlas',{type:'geojson',data:{type:'FeatureCollection',features:items.map(x=>({type:'Feature',id:x.id,geometry:x.geometry,properties:{id:x.id}}))}});
  map.addLayer({id:'atlas-points',type:'circle',source:'atlas',paint:{'circle-radius':9,'circle-color':'#176b61','circle-stroke-color':'#fff','circle-stroke-width':2}});
  map.on('click','atlas-points',e=>{const id=e.features?.[0]?.properties?.id;const item=items.find(x=>x.id===id);if(item)setChosen(item)});
  map.on('mouseenter','atlas-points',()=>map.getCanvas().style.cursor='pointer');map.on('mouseleave','atlas-points',()=>map.getCanvas().style.cursor='');
 });
 return()=>{disposed=true;map.remove();mapRef.current=null};
 },[]);
 return <section className="shell" aria-label="Interaktive Atlas-Karte"><div ref={ref} className="map"/><aside className="side"><h3>Atlas-Einträge</h3><p>Datenquelle: {origin}. Wähle einen Kartenpunkt aus.</p>{mapError&&<p role="alert">Kartenfehler: {mapError}</p>}{chosen?<article aria-live="polite"><h4>{chosen.title}</h4><p>{chosen.summary}</p><p><b>Typ:</b> {chosen.itemType}</p><p><b>Themen:</b> {chosen.topics.join(', ')}</p></article>:<p>Ein Punkt öffnet hier die Detailinformationen.</p>}<hr/><p>Die Beispieldaten sind Platzhalter. Echte Inhalte werden über Directus gepflegt.</p></aside></section>
}
