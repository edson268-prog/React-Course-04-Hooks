import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ClientInformation } from "./08-useSuspense/ClientInformation";
import { getUserAction } from "./08-useSuspense/api/get-user.action";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import { MemoHook } from "./06-memo/MemoHook";
// import { MemoCounter } from "./06-memo/MemoCounter";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
// import { PokemonPage } from "./03-examples/PokemonPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense>
  </StrictMode>
);
