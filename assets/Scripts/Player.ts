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
        this.mainCamera = camera
    }

    start() {

    }


    protected update(deltaTime: number) {
        if (this.inputSystem && this.movementSystem) {
            let moveDir = this.inputSystem.getMoveDirection()
            this.movementSystem.updateMovement(moveDir);
        }
    }


    public processKeyDown(event: EventKeyboard): void { 
        if (this.inputSystem) this.inputSystem.handleKeyDown(event);
    }
    public processKeyUp(event: EventKeyboard): void { 
        if (this.inputSystem) this.inputSystem.handleKeyUp(event);
    }
    public processMouseMove(event: EventMouse): void { 
        if (this.inputSystem && this.movementSystem && this.mainCamera) {
            let targetAngle = this.inputSystem.handleMouseMove(event, this.mainCamera, this.node.getWorldPosition());
            this.movementSystem.updateRotation(targetAngle);
        }
    }
    public processMouseDown(event: EventMouse): void { 
        if (this.inputSystem) this.inputSystem.handleMouseDown(event);
    }
    public processMouseUp(event: EventMouse): void { 
        if (this.inputSystem) this.inputSystem.handleMouseUp(event);
    }
}


