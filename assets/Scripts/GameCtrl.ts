import { _decorator, Camera, Component, EventKeyboard, EventMouse, Node, Prefab } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {


    @property({ type: Player, tooltip: "Player node"})
    public player: Player | null = null;

    @property({ type: Camera, tooltip: "Main camera"})
    public camera: Camera | null = null;

    @property({ type: Prefab, tooltip: "Bullet prefab"})
    public bulletPrefab: Prefab | null = null;

    @property({ type: Node, tooltip: "Bullet container"})
    public bulletContainer: Node | null = null;


    start() {

    }

    protected onDestroy(): void {
        
    }

    update(deltaTime: number) {
        
    }

    private onKeyDown(event: EventKeyboard): void { }
    private onKeyUp(event: EventKeyboard): void { }
    private onMouseMove(event: EventMouse): void { }
    private onMouseDown(event: EventMouse): void { }
    private onMouseUp(event: EventMouse): void { }
}


