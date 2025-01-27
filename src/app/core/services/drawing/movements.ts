import { Point } from '@models/drawings/elements';

export const getPointPositionOnEllipseCurve =
    (semiMajorAxis: number, semiMinorAxis: number, angle: number): Point => {

        const x = semiMajorAxis * Math.cos(angle);
        const y = semiMinorAxis * Math.sin(angle);
        return { x, y };
    }