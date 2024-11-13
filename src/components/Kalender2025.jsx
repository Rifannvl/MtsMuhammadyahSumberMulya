import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const months = [
  { name: "January", days: 31 },
  { name: "February", days: 28 }, // 2025 is not a leap year
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

const Calendar2025 = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Function to generate days of the month
  const generateCalendar = (monthIndex) => {
    const daysInMonth = months[monthIndex].days;
    const firstDayOfMonth = new Date(2025, monthIndex, 1).getDay(); // Get the first day of the month (0: Sunday, 6: Saturday)
    const weeks = [];
    let currentDay = 1;

    // Create weeks based on the first day of the month
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(null); // Empty cell before the first day of the month
        } else if (currentDay <= daysInMonth) {
          week.push(currentDay++);
        } else {
          week.push(null); // Empty cells after the last day of the month
        }
      }
      weeks.push(week);
      if (currentDay > daysInMonth) break;
    }

    return weeks;
  };

  return (
    <div className="bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-semibold">Kalender Sekolah 2025</h1>
        </div>
      </header>

      {/* Calendar Slider */}
      <main className="container mx-auto py-12 px-6">
        <Slider {...settings}>
          {months.map((month, index) => {
            const calendar = generateCalendar(index);
            return (
              <div
                key={month.name}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                  {month.name} 2025
                </h2>
                <table className="min-w-full table-auto text-left">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="py-2 px-4">Senin</th>
                      <th className="py-2 px-4">Selasa</th>
                      <th className="py-2 px-4">Rabu</th>
                      <th className="py-2 px-4">Kamis</th>
                      <th className="py-2 px-4">Jumat</th>
                      <th className="py-2 px-4">Sabtu</th>
                      <th className="py-2 px-4">Minggu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calendar.map((week, weekIndex) => (
                      <tr key={weekIndex}>
                        {week.map((day, dayIndex) => (
                          <td key={dayIndex} className="py-2 px-4 text-center">
                            {day}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </Slider>
      </main>
    </div>
  );
};

export default Calendar2025;
