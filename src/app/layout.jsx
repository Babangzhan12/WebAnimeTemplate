import { Gabarito } from "next/font/google";
import Navbar from "../components/Navbar";

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "900"],
  style: ["normal"],
});

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
