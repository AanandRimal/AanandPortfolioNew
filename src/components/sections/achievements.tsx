interface IAchievementData {
  TITLE: string;
  DESCRIPTION: string;
  YEAR: string;
  CATEGORY: string;
}

export function Achievements({ data }: { data: Record<string, IAchievementData> }) {
  return (
    <div id="achievements" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">achievements.</h2>

      <ul className="flex flex-col gap-6 mt-4">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="cursor-target">
            <div className="pl-4 border-muted-foreground hover:border-primary border-l size-full transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-primary/90 text-lg font-medium">{value.TITLE}</p>
                  <p className="text-muted-foreground text-sm mt-1">{value.DESCRIPTION}</p>
                  <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mt-2">
                    {value.CATEGORY}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-sm">{value.YEAR}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
