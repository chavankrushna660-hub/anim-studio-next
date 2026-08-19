import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { lazy } from "react";

const AnimStudioClient = lazy(() => import("../anim/AnimStudioClient"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AnimaStudio — Professional 2D & 3D Animation Studio" },
      {
        name: "description",
        content:
          "AnimaStudio is a free browser-based animation studio with vector drawing, 3D extrusion, timeline keyframing and PNG deep editing.",
      },
      { property: "og:title", content: "AnimaStudio — Professional Animation Studio" },
      {
        property: "og:description",
        content:
          "Draw, rig, extrude and animate in the browser. Free forever, works with huge projects.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ClientOnly fallback={<div className="min-h-screen bg-background" />}>
      <AnimStudioClient />
    </ClientOnly>
  );
}
