import { PopulationCompositionGraphViewer } from "@/widgets/populationCompositionGraphViewer/ui";
import { PopulationCompositionViewControlPanel } from "@/widgets/populationCompositionViewControlPanel/ui/";

const RootPage = () => {
  return (
    <main className="mx-auto flex min-h-svh max-w-screen-desktop grid-cols-3 flex-col items-center justify-between gap-8 px-8 pb-8 pt-24 tablet:grid">
      <div className="min-h-full w-full tablet:col-[1_/_2] ">
        <PopulationCompositionViewControlPanel />
      </div>
      <div className="relative order-first size-full tablet:order-none tablet:col-[2_/_4]">
        <PopulationCompositionGraphViewer className="sticky top-24  h-[calc(100svh_-_8rem)] w-full" />
      </div>
    </main>
  );
};

export { RootPage };
