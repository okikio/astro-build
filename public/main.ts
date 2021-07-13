import { boot } from "delicate-lib";
import { ANIMATE, ApplyCustomEasing, CustomEasing } from "complex-lib";

boot();

ANIMATE.updateOptions({
    target: "#animated-box",

    translateX: CustomEasing([0, 600]),
    ...ApplyCustomEasing({
        translateY: [100, 400],
        easing: "out-bounce"
    }),
    duration: 3000,
    loop: true,
    easing: "linear",
    direction: "alternate"
});