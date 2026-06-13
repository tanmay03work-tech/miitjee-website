import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | MIITJEE Classes — Best JEE NEET Coaching Patna",
  description: "Discover MIITJEE's structured and comprehensive courses designed to help you achieve top ranks in JEE Main, JEE Advanced, NEET, and Foundation programs.",
  openGraph: {
    title: "Programs | MIITJEE Classes",
    description: "Discover our structured and comprehensive courses designed to help you achieve top ranks.",
    type: "website",
    url: "https://miitjee.com/programs",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
