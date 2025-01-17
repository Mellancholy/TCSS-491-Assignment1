class Link {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./linksheet.png"), 0, 307.5, 96, 102.5, 10, 0.3);

        this.x = 0;
        this.y = 0;
        this.speed = 150;
    };

    update() {
        if (this.x < 774 && this.y == 0) {
            this.x += this.speed * this.game.clockTick;
        } else if (this.x + 250 == 774) {
            this.x = 774;
        } else if (this.y < 400 && this.x >= 774) {
            this.animator.yStart = 0;
            this.y += this.speed * this.game.clockTick;
        } else if (this.y + 175 == 449) {
            this.y = 449;
        } else if (this.x > 0) {
            this.animator.yStart = 102.5;
            this.x -= this.speed * this.game.clockTick;
        } else if (this.x == 0) {
            this.x = 0;
        } else if (this.y > 0) {
            this.animator.yStart = 205;
            this.y -= this.speed * this.game.clockTick;
        } else if (this.y < 0) {
            this.x = 0;
            this.y = 0;
            this.animator.yStart = 307.5;
        }

    };

    draw(ctx) {
        // ctx.drawImage(ASSET_MANAGER.getAsset("./linksheet.png"), 0, 0)
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}