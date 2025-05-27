import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Input } from "@/components/ui/input";
import News from "@/components/News";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "X clone",
  description: "A clone of X website built with Next.js and Tailwind css ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />

            {/* Main Content + News Section */}
            <div className="flex flex-row w-full">
              {/* Main Content Area (2/3) */}
              <div className=" pr-4">
                {children}
              </div>

              {/* News Section (1/3) */}
              
              <div className=" pl-4 border-l">
                <h2 className="text-lg font-semibold mb-2"></h2>
                
           <News/>
              </div>
            </div>
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
