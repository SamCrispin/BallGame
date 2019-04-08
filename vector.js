class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getMagnitude() {
        return Math.hypot(this.x, this.y);
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }
	
	getMult(scalar) {
		return new Vector(this.x*scalar, this.y*scalar);
	}
	
	getAngle() {
		return Math.tan(this.y/this.x);
	}
	
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }

    limit(vel) {
        var mag = this.getMagnitude();
        if (mag > vel) this.scale(vel / mag);
    }

	getLimit(vel) {
		var mag = this.getMagnitude();
		return (mag > vel) ? this.getMult(vel / mag) : this;
	}
	
    static fromAngle(angle) {
        var vectorX, vectorY;
        vectorX = Math.sin(angle);
        vectorY = Math.cos(angle);
        return new Vector(vectorX, vectorY);
    }
}
