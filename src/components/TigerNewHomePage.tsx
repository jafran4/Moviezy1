import React from "react";
import { MediaItem, OTTPlan, OTTService } from "../types";
import TigerSubscriptionSection from "./TigerSubscriptionSection";

interface TigerNewHomePageProps {
  trending?: MediaItem[];
  top10?: MediaItem[];
  popular?: MediaItem[];
  tvShows?: MediaItem[];
  actionHits?: MediaItem[];
  scifiHits?: MediaItem[];
  topRated?: MediaItem[];
  upcoming?: MediaItem[];
  myListIds?: Set<string | number>;
  onPlayMedia?: (item: MediaItem) => void;
  onOpenDetail?: (item: MediaItem) => void;
  onToggleMyList?: (item: MediaItem) => void;
  onSelectPlan: (plan: OTTPlan, service: OTTService) => void;
  onOpenStore?: () => void;
}

export const TigerNewHomePage: React.FC<TigerNewHomePageProps> = ({
  onSelectPlan,
}) => {
  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-20 selection:bg-amber-500 selection:text-black pt-14">
      {/* ========================================================= */}
      {/* TIGER OTT SUBSCRIPTION & PRICING PLANS (PRIMARY HOME)     */}
      {/* ========================================================= */}
      <section className="m-0 p-0">
        <TigerSubscriptionSection onSelectPlan={onSelectPlan} />
      </section>
    </div>
  );
};

export default TigerNewHomePage;
