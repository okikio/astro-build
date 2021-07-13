import { boot } from "delicate-lib";
import { ANIMATE, ApplyCustomEasing } from "complex-lib";
boot();

ANIMATE.updateOptions({
    target: "#animated-box",
    ...ApplyCustomEasing({
        translateX: [0, 500],
        translateY: [100, 500],
        easing: "spring"
    }),
    duration: 3000,
    loop: true,
    easing: "linear",
    direction: "alternate"
});