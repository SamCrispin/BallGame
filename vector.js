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
	
	getAngle(x, y) {
		var theta, dy = y - this.y, dx = x - this.x;
		if (dy == 0) {
			theta = (dx < 0) ? Math.PI * 3/2 : Math.PI / 2;
		} else {
			if (dx > 0) {
				if (dy > 0) theta = Math.atan(dx / dy)
				else theta = Math.PI + Math.atan(dx / dy);
			} else {
				if (dy > 0) theta = 2*Math.PI + Math.atan(dx / dy)
				else theta = Math.PI + Math.atan(dx / dy);
			}
		}
		return theta;
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
