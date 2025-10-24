import type { Route } from "./+types/about";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Garri Tonakanyan" },
    { name: "description", content: "Learn more about Garri Tonakanyan, his design philosophy, and professional experience" },
  ];
}

const sections = [
  {
    title: "LECTURES & MENTORSHIP",
    items: [
      { name: "Communications in Product Design", details: "2022 / Higher School of Economics" },
      { name: "EMERGE Conference", details: "2022 / Startups Mentor" },
      { name: "Central Saint-Martins", details: "2022 / MA Student Mentor" },
      { name: "Experimental Approach ↗", details: "2021 / Yandex Design School" },
      { name: "Design.Peremena Workshops ↗", details: "2019 / 9 Cities in Russia" }
    ]
  },
  {
    title: "AWARDS",
    items: [
      { name: "Creative Use of Real-time Data ↗", details: "2020 / Eurobest / Winner" },
      { name: "Creative Use of Data ↗", details: "2020 / Epica Awards / Bronze" },
      { name: "Mobile Campaigns ↗", details: "2020 / Epica Awards / Bronze" },
      { name: "Data-enhanced Creativity ↗", details: "2020 / Cannes Lions / Shortlist" },
      { name: "Use of Real-time Data ↗", details: "2020 / Cannes Lions / Shortlist" }
    ]
  },
  {
    title: "PUBLIC SPEAKING",
    items: [
      { name: "Q&A on Design Culture", details: "2020 / GPN Digital Transformation" },
      { name: "Design & Productivity ↗", details: "2018 / Kostya Gorskiy's channel" },
      { name: "Q&A on Designer Career ↗", details: "2017 / Yandex.Subbotnik" },
      { name: "Interview", details: "2017 / Federal TV" },
      { name: "A Story of a Schoolboy Who Works at Yandex ↗", details: "2016 / Afisha Daily" }
    ]
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Footer />
      
      <main className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍🎨</span>
                  </div>
                  <p className="text-sm">Portrait Photo</p>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I've been designing things since my teenage years and by the age of 16 I was already working at Yandex, launching products that served millions of people. As a designer, I aim to deliver the most elegant solution which I believe should be visually refined in its details while having the simplest concept at its core.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In my free time I enjoy playing with 3D 🥦 and graphics. It even led to my commission for Wes Anderson's the French Dispatch 🧈 I also run a nice office bar where our team gathers up after busy work days 🍸
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="border-t border-gray-200 pt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-8">{section.title}</h2>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-gray-900 font-medium">{item.name}</span>
                      <span className="text-gray-600 text-sm">{item.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
