import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Calendar,
  MapPin,
  Plane,
  Coffee,
  MoreHorizontal,
  Plus,
  Bookmark,
  Sun,
  Utensils,
  Camera,
  Music,
  Search,
  Bell,
  Sparkles
} from 'lucide-react';

export interface TripItem {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  icon: React.ReactNode;
  iconBg: string;
}

export interface SpotItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
}

export const HappyCoHome: React.FC = () => {
  const [activeNav, setActiveNav] = useState('Home');

  const upcomingTrips: TripItem[] = [
    {
      id: '1',
      title: 'Da Nang & Hoi An',
      subtitle: 'Nov 12 - Nov 18 • 4 Friends',
      status: 'Confirmed',
      statusColor: 'bg-emerald-100 text-emerald-800',
      icon: <MapPin className="w-5 h-5 text-orange-600" />,
      iconBg: 'bg-orange-100'
    },
    {
      id: '2',
      title: 'Tokyo City Wanderlust',
      subtitle: 'Dec 24 - Jan 02 • Solo Trip',
      status: 'In Planning',
      statusColor: 'bg-amber-100 text-amber-800',
      icon: <Plane className="w-5 h-5 text-purple-600" />,
      iconBg: 'bg-purple-100'
    },
    {
      id: '3',
      title: 'Saigon Cafe Trail',
      subtitle: 'This Weekend • 2 Places',
      status: 'Ready',
      statusColor: 'bg-blue-100 text-blue-800',
      icon: <Coffee className="w-5 h-5 text-teal-600" />,
      iconBg: 'bg-teal-100'
    }
  ];

  const recommendedSpots: SpotItem[] = [
    {
      id: '1',
      name: 'Banh Mi Madam Khanh',
      desc: 'Street Food & Local Bites • 4.9 ★ (1.2k reviews)',
      icon: <Utensils className="w-5 h-5 text-rose-600" />,
      iconBg: 'bg-rose-100'
    },
    {
      id: '2',
      name: 'Japanese Covered Bridge',
      desc: 'Historical Landmark • Best in morning',
      icon: <Camera className="w-5 h-5 text-teal-600" />,
      iconBg: 'bg-teal-100'
    },
    {
      id: '3',
      name: 'Lantern Boat Night Ride',
      desc: 'Cultural Experience • River Cruise',
      icon: <Music className="w-5 h-5 text-indigo-600" />,
      iconBg: 'bg-indigo-100'
    }
  ];

  return (
    <div className="min-h-screen w-full p-4 sm:p-8 lg:p-12 font-sans text-[#38214A] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: `url('bg_extracted.png')`,
        backgroundColor: '#CBB4D3'
      }}>
      
      {/* 1440px Canvas Container */}
      <div className="w-full max-w-[1360px] flex flex-col gap-6 z-10">

        {/* ================= TOP NAVIGATION BAR ================= */}
        <header className="rounded-[44px] px-8 py-5 flex items-center justify-between shadow-sm backdrop-blur-xl border border-white/40 bg-[#D9D9D9]/20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#38214A] text-white flex items-center justify-center font-extrabold text-xl shadow-md">
              H
            </div>
            <span className="text-2xl font-extrabold tracking-wider text-[#38214A]">HAPPYCO</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-[15px] text-[#38214A]/80">
            {['Home', 'My Trips', 'Destinations', 'Community', 'Itineraries'].map((nav) => (
              <button
                key={nav}
                onClick={() => setActiveNav(nav)}
                className={`transition-all pb-1 ${
                  activeNav === nav
                    ? 'text-[#38214A] font-bold border-b-2 border-[#38214A]'
                    : 'hover:text-[#38214A]'
                }`}
              >
                {nav}
              </button>
            ))}
          </nav>

          {/* User Controls */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#38214A] bg-white/35 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all">
              <Search className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#38214A] bg-white/35 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all">
              <Bell className="w-4 h-4" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 p-0.5 ml-1">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </header>

        {/* ================= MAIN CONTENT WORKSPACE ================= */}
        <main className="rounded-[44px] p-6 lg:p-9 shadow-lg backdrop-blur-2xl border border-white/40 bg-[#D9D9D9]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Hero Callout Card */}
              <div className="rounded-[44px] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[380px] bg-[#CBB4D3]/55 backdrop-blur-xl border border-white/40">
                <div className="flex flex-col gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/40 text-[#38214A] w-fit">
                    <Sparkles className="w-3.5 h-3.5" /> Smart Travel AI
                  </span>
                  <h1 className="text-3xl xl:text-4xl font-extrabold uppercase leading-[1.15] tracking-tight text-[#38214A]">
                    Turn your travel into a real plan with HappyCo
                  </h1>
                  <p className="text-sm text-[#38214A]/80 leading-relaxed font-medium mt-1">
                    Personalized daily agendas, real-time budget forecasting, and collaborative group travel tools designed for unforgettable moments.
                  </p>
                </div>

                {/* Subcard */}
                <div className="rounded-[24px] p-4 mt-6 flex items-center justify-between bg-white/35 backdrop-blur-md border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#38214A] text-white flex items-center justify-center shadow">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-[#38214A]/70">Active Itinerary</div>
                      <div className="font-bold text-base text-[#38214A]">Vietnam Heritage Tour</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/60 text-[#38214A]">Day 3 / 8</span>
                </div>

                {/* Yellow Action Pill */}
                <button className="rounded-[30px] w-full py-4 mt-4 font-bold text-base flex items-center justify-center gap-2 text-[#38214A] bg-[#FFF3AF]/85 hover:bg-[#FFF3AF] backdrop-blur-md border border-white/60 shadow-sm transition-all hover:-translate-y-0.5">
                  <span>Start Planning Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Left: Upcoming Journeys */}
              <div className="rounded-[25px] p-6 flex flex-col gap-4 shadow-sm bg-white/35 backdrop-blur-md border border-white/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#38214A]" />
                    <h2 className="text-lg font-bold text-[#38214A]">Upcoming Journeys</h2>
                  </div>
                  <button className="text-[#38214A]/70 hover:text-[#38214A]">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {upcomingTrips.map((trip) => (
                    <div
                      key={trip.id}
                      className="rounded-[20px] p-3.5 flex items-center justify-between bg-white/30 backdrop-blur-md border border-white/40 hover:bg-white/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${trip.iconBg} flex items-center justify-center`}>
                          {trip.icon}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#38214A]">{trip.title}</div>
                          <div className="text-xs text-[#38214A]/70">{trip.subtitle}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${trip.statusColor}`}>
                        {trip.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Top Right: Exploration Stats */}
              <div className="rounded-[44px] p-6 lg:p-7 flex flex-col gap-5 shadow-sm bg-[#CBB4D3]/55 backdrop-blur-xl border border-white/40">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#38214A]">Your Exploration Overview</h3>
                    <p className="text-xs text-[#38214A]/75">Milestones achieved this travel season</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#2C2C2C] text-white flex items-center justify-center hover:bg-black transition-colors shadow">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-[25px] p-4 flex flex-col justify-between bg-white/35 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all">
                    <span className="text-xs font-semibold text-[#38214A]/70">Total Trips</span>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-2xl font-extrabold text-[#38214A]">14</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">+3 new</span>
                    </div>
                  </div>

                  <div className="rounded-[25px] p-4 flex flex-col justify-between bg-white/35 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all">
                    <span className="text-xs font-semibold text-[#38214A]/70">Saved Places</span>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-2xl font-extrabold text-[#38214A]">86</span>
                      <Bookmark className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>

                  <div className="rounded-[25px] p-4 flex flex-col justify-between bg-white/35 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all">
                    <span className="text-xs font-semibold text-[#38214A]/70">Budget Saved</span>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-2xl font-extrabold text-[#38214A]">$420</span>
                      <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">18%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Right: Active Logistics & Weather Forecast */}
              <div className="rounded-[44px] p-6 lg:p-7 flex flex-col gap-5 shadow-sm bg-[#CBB4D3]/55 backdrop-blur-xl border border-white/40">
                <h3 className="text-lg font-bold text-[#38214A]">Active Plans & Logistics</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Checklist Widget */}
                  <div className="rounded-[25px] p-5 flex flex-col justify-between min-h-[160px] bg-white/35 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#38214A]/70">Itinerary Prep</span>
                        <span className="text-xs font-extrabold text-[#38214A]">75%</span>
                      </div>
                      <h4 className="font-bold text-base text-[#38214A]">Flight & Stay Checklist</h4>
                      <p className="text-xs text-[#38214A]/70 mt-1">3 of 4 bookings confirmed with host verification.</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="w-3/4 bg-white/50 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#38214A] h-full rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-[#2C2C2C] text-white flex items-center justify-center hover:bg-black transition-colors shadow">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Forecast Widget */}
                  <div className="rounded-[25px] p-5 flex flex-col justify-between min-h-[160px] bg-white/35 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#38214A]/70">Live Destination Forecast</span>
                        <h4 className="font-bold text-base text-[#38214A] mt-1">Hoi An Ancient Town</h4>
                      </div>
                      <button className="text-[#38214A]/60 hover:text-[#38214A]">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                      <div className="text-3xl font-extrabold text-[#38214A]">28°C</div>
                      <div className="text-xs text-[#38214A]/80">
                        <div className="font-semibold">Sunny & Warm</div>
                        <div>Ideal for evening lantern walk</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/30 text-xs font-medium text-[#38214A]/80">
                      <Sun className="w-4 h-4 text-amber-500" />
                      <span>Sunset scheduled at 5:42 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right: Community & Recommended Spots */}
              <div className="rounded-[25px] p-6 flex flex-col gap-4 shadow-sm bg-white/35 backdrop-blur-md border border-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#38214A]">Recommended by Travelers</h3>
                    <p className="text-xs text-[#38214A]/70">Curated spots based on your travel interests</p>
                  </div>
                  <button className="text-[#38214A]/70 hover:text-[#38214A]">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {recommendedSpots.map((spot) => (
                    <div
                      key={spot.id}
                      className="rounded-[20px] p-3.5 flex items-center justify-between bg-white/30 backdrop-blur-md border border-white/40 hover:bg-white/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${spot.iconBg} flex items-center justify-center`}>
                          {spot.icon}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#38214A]">{spot.name}</div>
                          <div className="text-xs text-[#38214A]/70">{spot.desc}</div>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/70 hover:bg-white text-[#38214A] transition-colors shadow-sm">
                        Add to Trip
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>
    </div>
  );
};

export default HappyCoHome;

