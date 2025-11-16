import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface IProjectData {
  IMAGE: StaticImageData;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
}

export function Projects({ data }: { data: Record<string, IProjectData> }) {
  return (
    <div id="projects" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">projects.</h2>

      <div className="space-y-12 mt-4">
        {Object.entries(data)
          .slice(0, 4)
          .map(([key, value], index) => {
          const isEven = index % 2 === 0;

          return (
            <React.Fragment key={key}>
              <div className="items-start gap-12 grid lg:grid-cols-2 cursor-target">
                <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={value.IMAGE || "/placeholder.svg"}
                      alt={key}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`space-y-6 border-muted-foreground hover:border-primary border-l size-full transition-all duration-300 pl-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div>
                    <h2 className="mb-1 font-medium text-2xl">{key}</h2>

                    <p className="flex items-center gap-1 text-sm">
                      {value.LIVE_PREVIEW && (
                        <a
                          className="flex items-center gap-1"
                          href={value.LIVE_PREVIEW}
                        >
                          live preview <ArrowUpRight size={18} />
                        </a>
                      )}
                      {value.GITHUB && (
                        <a
                          className="flex items-center gap-1"
                          href={value.GITHUB}
                        >
                          github <ArrowUpRight size={18} />
                        </a>
                      )}
                    </p>
                  </div>
                  <ul className="space-y-1 mt-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
                    {value.DESCRIPTION.map((desc, index) => (
                      <li key={index}>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap items-center gap-2 mt-2 pl-3">
                    {value.TECH_STACK.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-muted px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < Object.entries(data).slice(0, 4).length - 1 && (
                <div className="border-muted-foreground/20 border-t" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href={"/projects"}
          className="inline-flex justify-center items-center bg-background hover:bg-accent disabled:opacity-50 shadow-sm px-4 py-2 border border-input rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-muted-foreground text-sm whitespace-nowrap transition-colors hover:text-accent-foreground cursor-target disabled:pointer-events-none"
        >
          View all projects
        </Link>
      </div>
    </div>
  );
}
