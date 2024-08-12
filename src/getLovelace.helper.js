export function getLovelaceCast() {
  let root = document.querySelector("hc-main");
  root = root && root.shadowRoot;
  root = root && root.querySelector("hc-lovelace");
  root = root && root.shadowRoot;
  root = root && root.querySelector("hui-view");

  if (root) {
    const ll = root.lovelace;
    ll.current_view = root.___curView;
    return ll;
  }

  return null;
}

export function getLovelace() {
  let root = document.querySelector("home-assistant");
  root = root && root.shadowRoot;
  root = root && root.querySelector("home-assistant-main");
  root = root && root.shadowRoot;
  root =
    root &&
    root.querySelector(
      "app-drawer-layout partial-panel-resolver, ha-drawer partial-panel-resolver",
    );
  root = (root && root.shadowRoot) || root;
  root = root && root.querySelector("ha-panel-lovelace");
  root = root && root.shadowRoot;
  root = root && root.querySelector("hui-root");

  if (root) {
    const ll = root.lovelace;
    ll.current_view = root.___curView;
    return ll;
  }

  return null;
}
