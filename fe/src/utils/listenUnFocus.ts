// type Visibility = "visible" | "hidden";
type VisibilityChangeHandler = (v: VisibilityState) => void;

export function listenUnFocus(fn: VisibilityChangeHandler) {
  const visProp = getHiddenProp();
  if (visProp) {
    const eventName =
      visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(
      eventName,
      () => {
        const visibility = getVisibilityState() as "visibilityState";
        if (!visibility) return;
        fn(document[visibility]);
      },
      false
    );
  }
}

const prefixes = ["webkit", "moz", "ms", "o"];

function getHiddenProp(): string | null {
  // if 'hidden' is natively supported just return it
  if ("hidden" in document) return "hidden";

  // otherwise loop over all the known prefixes until we find one
  for (let i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + "Hidden" in document)
      return prefixes[i] + "Hidden";
  }

  // otherwise it's not supported
  return null;
}

function getVisibilityState(): string | null {
  if ("visibilityState" in document) return "visibilityState";
  for (let i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + "VisibilityState" in document)
      return prefixes[i] + "VisibilityState";
  }
  // otherwise it's not supported
  return null;
}
