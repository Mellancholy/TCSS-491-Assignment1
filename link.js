class Link {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./LinkCropped.png"), 0, 0, 96.2, 106, 10, 0.3);

        this.x = 0;
        this.y = 0;
        this.speed = 150;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        // ctx.drawImage(ASSET_MANAGER.getAsset("./LinkCropped.png"), 0, 0)
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}