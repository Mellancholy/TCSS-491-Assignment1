class Link {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./linksheet.png"), 0, 0, 96.1, 102.5, 10, 0.3);

        this.x = 0;
        this.y = 0;
        this.speed = 150;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        // if (this.x + 250 > 1024) {
            
        // }
    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./linksheet.png"), 0, 0)
        // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}