export class Environment {

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

    static showFrame(position = 'leftBottom') {
        const align = {
            leftBottom: {
                x: 10,
                y: height - 10
            },
            rightBottom: {
                x: width - 70,
                y: height - 10
            }
        };
        
        let fps = frameRate();
        fill(255);
        stroke(0);
        text("FPS: " + fps.toFixed(2), align[position].x, align[position].y);
    }
}