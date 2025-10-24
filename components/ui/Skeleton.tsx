import React from "react";
import { cn } from "@/lib/utils";

export const SkeletonBox = ({ className = "" }: { className?: string }) => (
  <div className={cn("animate-pulse bg-white/10 rounded ", className)}></div>
);

export const NavigationSkeleton = () => (
  <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
    <div className="backdrop-blur-3xl border border-white/10 cursor-pointer rounded-full px-6 py-3 bg-white/5">
      <div className="flex gap-6 items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="animate-pulse bg-white/10 h-4 w-16"></div>
        ))}
        <div className="animate-pulse bg-white/10 h-8 w-8 rounded-full"></div>
      </div>
    </div>
  </div>
);

export const CardSkeleton = ({
  type = "project",
  className
}: {
  type?: "project" | "skill" | "experience",
  className?: string
}) => {
  if (type === "skill") {
    return (
      <div className="backdrop-blur-xl border border-white/10 rounded-3xl p-8 bg-white/5">
        <SkeletonBox className="h-6 w-40 mb-6" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <SkeletonBox key={i} className="h-8 w-24 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (type === "experience") {
    return (
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
        <div className="ml-6 backdrop-blur-xl border border-white/10 rounded-3xl p-8 bg-white/5">
          <SkeletonBox className="h-6 w-64 mb-2" />
          <SkeletonBox className="h-5 w-48 mb-4" />
          <SkeletonBox className="h-16 w-full mb-6" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((i) => (
              <SkeletonBox key={i} className="h-8 w-20 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-xl border border-white/10 rounded-3xl p-8 bg-white/5">
      <SkeletonBox className="w-16 h-16 rounded-2xl mb-6" />
      <SkeletonBox className="h-8 w-3/4 mb-4" />
      <SkeletonBox className="h-20 w-full mb-6" />
      <div className="space-y-2 mb-6">
        {[1, 2, 3].map((i) => (
          <SkeletonBox key={i} className="h-4 w-full" />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonBox key={i} className="h-8 w-20 rounded-xl" />
        ))}
      </div>
    </div>
  );
};
