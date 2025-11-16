import { Card, CardContent } from "@/shared/ui/shadcn/card";
import { Car } from "lucide-react";
import { FACILITIES, PARKING_INFO } from "@/constants/facilities";

export default function FacilitiesInfo() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FACILITIES.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">{facility.label}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/10">
        <div className="flex items-start gap-3">
          <Car className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium mb-2">{PARKING_INFO.title}</h4>
            <p className="text-sm text-muted-foreground">
              {PARKING_INFO.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
