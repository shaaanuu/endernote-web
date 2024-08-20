import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Endernote",
  description:
    "EnderNote is a sleek and powerful note-taking application designed to boost your productivity.",
  icons: {
    icon: "/enderman.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
