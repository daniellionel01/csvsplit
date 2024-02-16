import { Split } from "./Split"
import { Merge } from "./Merge"
import { type Component, createSignal, Show } from "solid-js"
import { Diff } from "./Diff"

export const App: Component = () => {
  const [tab, setTab] = createSignal("merge")

  return <div class="w-full px-8 py-4">
    <div class="tabs tabs-lg tabs-bordered">
      <a classList={{ tab: true, "tab-active": tab() === "split" }} onClick={() => setTab("split")}>SPLIT</a>
      <a classList={{ tab: true, "tab-active": tab() === "diff" }} onClick={() => setTab("diff")}>DIFF</a>
      <a classList={{ tab: true, "tab-active": tab() === "filter" }} onClick={() => setTab("filter")}>FILTER</a>
      <a classList={{ tab: true, "tab-active": tab() === "merge" }} onClick={() => setTab("merge")}>MERGE</a>
    </div>
    <div class="pt-10">
      <Show when={tab() === "split"}>
        <Split />
      </Show>
      <Show when={tab() === "diff"}>
        <Diff />
      </Show>
      <Show when={tab() === "merge"}>
        <Merge />
      </Show>
      <Show when={tab() === "filter"}>
        filter content
      </Show>
    </div>
  </div>
}
