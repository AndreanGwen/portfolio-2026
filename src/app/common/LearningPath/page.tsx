import ShapeGrid from "@/components/ShapeGrid";

export default function LearningPath() {
  return (
    <div className="w-full">
      <div className="w-full h-fit relative px-6 md:px-20 lg:px-35 py-20 overflow-hidden origin-bottom will-change-transform">
        {/* ShapeGrid background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <ShapeGrid
            speed={0.5}
            squareSize={20}
            borderColor="#dadada"
            hoverFillColor="#616161"
            shape="square"
            hoverTrailAmount={0}
            direction="right"
            edgeFadeColor="#efefef"
            edgeFadeWidth={180}
          />
        </div>
      </div>
    </div>
  );
}
