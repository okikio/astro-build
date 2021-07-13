import { PJAX, App, TransitionManager, HistoryManager, PageManager } from "@okikio/native";
import { Fade } from "./transitions/Fade";

export const app = new App({
    transitions: [
        ["default", Fade],
    ]
});

app
    .set("HistoryManager", new HistoryManager())
    .set("PageManager", new PageManager())
    .set("TransitionManager", new TransitionManager())
    .add(new PJAX());

export const boot = () => {
    try {
        app.boot();
    } catch (err) {
        console.warn("[App] boot failed,", err);
    }
};