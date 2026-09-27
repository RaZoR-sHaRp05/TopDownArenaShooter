import { _decorator, Camera, Component, EventKeyboard, EventMouse, Node } from 'cc';
import { PlayerInput } from './PlayerInput';
import { PlayerMovement } from './PlayerMovement';
import { PlayerWeapon } from './PlayerWeapon';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    private inputSystem: PlayerInput | null = null;
    private movementSystem: PlayerMovement | null = null;
    private weaponSystem: PlayerWeapon | null = null;
    private mainCamera: Camera | null = null;

    protected onLoad(): void {
        this.inputSystem = this.getComponent(PlayerInput);
        this.movementSystem = this.getComponent(PlayerMovement);
        this.weaponSystem = this.getComponent(PlayerWeapon);
    }

    public initialize (camera: Camera): void {

    }

    start() {

    }


    protected update(deltaTime: number) {
        
    }


    public processKeyDown(event: EventKeyboard): void { }
    public processKeyUp(event: EventKeyboard): void { }
    public processMouseMove(event: EventMouse): void { }
    public processMouseDown(event: EventMouse): void { }
    public processMouseUp(event: EventMouse): void { }
}


