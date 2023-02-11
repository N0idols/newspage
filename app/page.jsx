import { Inter } from "@next/font/google";

import Hero from "./Hero";
import Recents from "./Recents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Hero />
      <Recents />
    </main>
  );
}
