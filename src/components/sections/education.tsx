import Image, { StaticImageData } from "next/image";

interface IEducationData {
  INSTITUTION: string;
  MAJOR: string;
  DURATION: string;
  LOCATION: string;
  LOGO: StaticImageData;
}

export function Education({ data }: { data: Record<string, IEducationData> }) {
  return (
    <div id="education" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">education.</h2>

      <ul className="flex flex-col gap-8 mt-4">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="cursor-target">
             <div className="pl-4 border-muted-foreground hover:border-primary border-l size-full transition-all duration-300">
               <div className="flex justify-between items-start">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                     <Image
                       src={value.LOGO}
                       alt={value.INSTITUTION}
                       width={48}
                       height={48}
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div>
                     <p className="text-primary/90 text-lg font-medium">{value.INSTITUTION}</p>
                     <p className="text-muted-foreground text-sm">{value.MAJOR}</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-muted-foreground text-sm">{value.DURATION}</p>
                   <p className="text-muted-foreground text-xs">{value.LOCATION}</p>
                 </div>
               </div>
             </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
