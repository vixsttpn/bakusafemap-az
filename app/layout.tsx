import "./globals.css";
export const metadata={title:"Baku Safe Map v8 - Google-like Free", description:"MapLibre Positron GL - Google-like, free forever, ultra soft"};
export default function RootLayout({children}:{children:any}){
  return (<html lang="ru"><head><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700;800&family=Geist:wght@300;400;700&display=swap" rel="stylesheet"/></head><body>{children}</body></html>);
}
