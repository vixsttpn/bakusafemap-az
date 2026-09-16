// types-route
export interface RoutePoint { lng:number; lat:number }
export interface RouteLeg { distance:number; duration:number; steps:RouteStep[] }
export interface RouteStep { distance:number; duration:number; name:string; maneuver:{type:string;modifier?:string;location:[number,number]} }
export interface Route { distance:number; duration:number; geometry:{type:string;coordinates:[number,number][]}; legs:RouteLeg[] }
