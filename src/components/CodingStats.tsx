import { useScrollReveal } from "@/hooks/useScrollReveal";

const generateCalendarData = () => {
  const data = [];
  for (let i = 0; i < 28 * 7; i++) {
    const random = Math.random();
    let level = 0;
    if (random > 0.85) level = 4;
    else if (random > 0.7) level = 3;
    else if (random > 0.5) level = 2;
    else if (random > 0.3) level = 1;
    data.push(level);
  }
  return data;
};

const CodingStats = () => {
  const heading = useScrollReveal();
  const calendar = useScrollReveal({ threshold: 0.1 });
  const data = generateCalendarData();

  const levelColors = [
    "bg-[#161b22] hover:bg-[#21262d]",
    "bg-[#0e4429] hover:bg-[#1a5c3a]",
    "bg-[#006d32] hover:bg-[#00853e]",
    "bg-[#26a641] hover:bg-[#34c053]",
    "bg-[#39d353] hover:bg-[#51e86a]",
  ];

  return (
    <section id="stats" className="space-y-6 w-full">
      <div ref={heading.ref} className={`reveal-card ${heading.isVisible ? 'visible' : ''}`}>
        <h2 className="text-xs uppercase tracking-widest text-foreground font-black">
          Coding Activity
        </h2>
      </div>

      <div 
        ref={calendar.ref} 
        className={`p-5 rounded-xl border border-border/40 bg-card/10 space-y-4 reveal-card ${calendar.isVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-row items-center justify-between text-xs text-muted-foreground pb-2 border-b border-border/30">
          <p className="font-semibold text-foreground">GitHub Contributions</p>
          <p>847 commits in the past year</p>
        </div>

        {/* Calendar Grid wrapper */}
        <div className="overflow-x-auto w-full pt-2">
          <div className="flex gap-[3px] min-w-[340px]">
            {/* Days of week labels */}
            <div className="flex flex-col justify-between text-[9px] text-muted-foreground/60 pr-2 select-none h-[68px]">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Grid layout */}
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {data.map((level, idx) => (
                <div
                  key={idx}
                  className={`w-[7px] h-[7px] sm:w-2 sm:h-2 rounded-[1px] ${levelColors[level]} transition-all cursor-pointer hover:scale-125`}
                  title={`Level ${level} activity`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Legend footer */}
        <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1">
          <div className="flex items-center gap-4">
            <p>Longest Streak: <span className="text-foreground font-bold">34 days</span></p>
            <p>Active Months: <span className="text-foreground font-bold">12/12</span></p>
          </div>
          <div className="flex items-center gap-1.5 select-none">
            <span>Less</span>
            <div className="w-2 h-2 rounded-[1px] bg-[#161b22]" />
            <div className="w-2 h-2 rounded-[1px] bg-[#0e4429]" />
            <div className="w-2 h-2 rounded-[1px] bg-[#006d32]" />
            <div className="w-2 h-2 rounded-[1px] bg-[#26a641]" />
            <div className="w-2 h-2 rounded-[1px] bg-[#39d353]" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
