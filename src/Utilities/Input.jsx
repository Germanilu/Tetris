//Depending on wich key was pressed i connect the string with the action and export the Key Action

//Object for Action
export const Action = {
    Left: "Left",
    FastDrop: "FastDrop",
    Pause: "Pause",
    Quit: "Quit",
    Right: "Right",
    Rotate: "Rotate",
    SlowDrop: "SlowDrop"
};

//Object for Key Code
export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.SlowDrop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    KeyQ: Action.Quit,
    KeyP: Action.Pause,
    Space: Action.FastDrop
};

//Given an action either ( SlowDrop or FastDrop) keeping the action given 
export const actionIsDrop = (action) => [Action.SlowDrop, Action.FastDrop].includes(action);

export const actionForKey = (keyCode) => Key[keyCode];