import { Affix, Button, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowNarrowUp } from "tabler-icons-react";

export default function CustomAffix() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Affix position={{ bottom: 40, right: 10 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            radius={20}
                            variant="outline"
                            color="violet"
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <ArrowNarrowUp />
                        </Button>
                    )}
                </Transition>
            </Affix>
        </>
    );
}
