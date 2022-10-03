export enum SceneInteractionMode {
  ViewOnly,
  SelectActions,
  MoveActions,
  AllActions
}

export enum SceneEvent {
  PointerMove = 'pointermove',
  PointerOver = 'pointerover',
  PointerOut = 'pointerout',
  PointerUp = 'pointerup',
  PointerDown = 'pointerdown',
  ContextMenu = 'contextmenu',
  TouchStart = 'touchstart',
  Wheel = 'wheel',
  Zoom = 'zoom',
  Click = 'click'
}

export enum SceneSelector {
  Canvas = 'canvas'
}
