import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { StatCard, ArticleCard } from "../components";

const OverviewSection = () => (
  <>
    <p className="font-bold leading-snug not-italic relative shrink-0 text-typo-heading-medium text-black">
      Overview
    </p>
    <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full">
      <StatCard
        value="10"
        label="Total Documents"
        icon={
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        }
      />
      <StatCard
        value="412"
        label="Total Mail"
        icon={
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        }
      />
      <StatCard
        value="54"
        label="Total Apps"
        icon={
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
        }
      />
      <StatCard
        value="7"
        label="Total Board"
        icon={
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v11a2 2 0 01-2 2z"
            />
          </svg>
        }
      />
    </div>
  </>
);

const ArticlesSection = () => (
  <>
    <p className="font-bold leading-snug not-italic relative shrink-0 text-typo-heading-medium text-black">
      Overview
    </p>
    <div className="flex flex-wrap gap-4 items-start relative shrink-0 w-full">
      <ArticleCard
        title="Next Week"
        content="President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday."
        image={
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 01-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L18 8m-4 4l.586.586a2 2 0 002.828 0L20 14m-6-6l2-2m-2 2l-2-2"
            />
          </svg>
        }
      />
      <ArticleCard
        title="Next Week"
        content="President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday."
        image={
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 01-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L18 8m-4 4l.586.586a2 2 0 002.828 0L20 14m-6-6l2-2m-2 2l-2-2"
            />
          </svg>
        }
      />
      <ArticleCard
        title="A look back at 2025"
        content="President Lee Jae Myung came into office in June, filling the void left by former President Yoon Suk Yeol. The transition reshaped the political landscape. The conservative People Power Party saw its"
        image={
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 01-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L18 8m-4 4l.586.586a2 2 0 002.828 0L20 14m-6-6l2-2m-2 2l-2-2"
            />
          </svg>
        }
      />
      <ArticleCard
        title="NIS refutes Coupang"
        content="South Korea’s National Intelligence Service on Tuesday denied Coupang interim"
        image={
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 01-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L18 8m-4 4l.586.586a2 2 0 002.828 0L20 14m-6-6l2-2m-2 2l-2-2"
            />
          </svg>
        }
      />
    </div>
  </>
);

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <OverviewSection />
      <ArticlesSection />
    </DashboardLayout>
  );
}
