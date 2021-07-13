
import { animate } from "@okikio/animate";

import type { ITransition, ITransitionData } from "@okikio/native";

//== Transition
export const Fade: ITransition = {
    name: "default",
    duration: 500,
    manualScroll: true,

    async out({ from }: ITransitionData) {
        let { duration } = this;
        let fromWrapper = from.wrapper;
        let [anim] = await animate({
            target: fromWrapper,
            opacity: [1, 0],
            duration,
        });

        anim.stop();
    },

    async in({ to, scroll }: ITransitionData) {
        let { duration } = this;
        let toWrapper = to.wrapper;

        window.scroll(scroll.x, scroll.y);
        let [anim] = await animate({
            target: toWrapper,
            opacity: [0, 1],
            duration
        });

        anim.stop();
    }
};