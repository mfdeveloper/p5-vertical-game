export class Environment {

    static init() {

        if (this.isDev()) {

            this.frameUi = createDiv('FPS: 0');
            this.frameUi.id = 'frameRate';
            this.frameUi.style('fontWeight', 'bold');
        }
    }

    static isDev() {
        return this.isEnv();
    }

    static isProd() {
        return this.isEnv('production');
    }

    static isEnv(name = 'development') {
        if (process && process.env) {
            return process.env.NODE_ENV == name;
        }
    }

    static showFrame(position = 'leftBottom', color = 'white') {
        const align = {
            leftBottom: {
                x: 10,
                y: height - 10
            },
            rightBottom: {
                x: width - 70,
                y: height - 10
            },
            topRight: {
                x: width - 70,
                y: 20
            }
        };

        if (this.frameUi) {

            let fps = frameRate();
            this.frameUi.position(align[position].x, align[position].y);
            this.frameUi.style('color', color);
            this.frameUi.style('display', 'block');

            this.frameUi.html("FPS: " + fps.toFixed(2));
        }
    }

    static hideFrame() {
        if (this.frameUi) {

            this.frameUi.style('display', 'none');
        }
    }
}