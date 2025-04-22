// BEGIN
import {extend} from "lodash";

function Point (x, y){
    this.x = x;
    this.y = y;
}
Point.prototype = {
    getX(){
        return this.x;
    },
    getY(){
        return this.y;
    },
    constructor: Point
};

function Segment (beginPoint, endPoint){
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
}
Segment.prototype.getBeginPoint = function () {
    return this.beginPoint;
};
Segment.prototype.getEndPoint = function () {
    return this.endPoint;
};

function reverse(segment){
    const revBegin = new Point(
        segment.getEndPoint().getX(),
        segment.getEndPoint().getY()
    );
    const revEnd = new Point(
        segment.getBeginPoint().getX(),
        segment.getBeginPoint().getY()
    );
    return new Segment(revBegin, revEnd);
}
export { Point, Segment, reverse };
// END
