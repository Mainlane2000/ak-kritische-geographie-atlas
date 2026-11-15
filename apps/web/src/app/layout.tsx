import type { Metadata } from 'next';
import 'maplibre-gl/dist/maplibre-gl.css';
import './globals.css';
export const metadata: Metadata = { title: 'Atlas – AK Kritische Geographie Köln', description: 'Offene Forschungs- und Wissensplattform.' };
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="de"><body>{children}</body></html>;
}
