export type AtlasItemType='place'|'project'|'event'|'publication'|'actor'|'concept';
export interface PointGeometry{type:'Point';coordinates:[longitude:number,latitude:number]}
export interface AtlasMapFeature{id:string;slug:string;title:string;summary?:string;itemType:AtlasItemType;topics:string[];geometry:PointGeometry}
export interface ApiError{code:string;message:string;details?:unknown}
export interface ApiResponse<T>{data:T;meta?:Record<string,unknown>}
export interface PaginatedResponse<T> extends ApiResponse<T[]>{meta:{page:number;pageSize:number;total?:number;nextCursor?:string}}
export interface MapFeaturesQuery{bbox:[west:number,south:number,east:number,north:number];types?:AtlasItemType[];topics?:string[];limit?:number}
