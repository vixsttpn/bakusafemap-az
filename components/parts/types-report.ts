// types-report
export type ReportType = 'danger'|'police'|'accident'|'repair'
export type ReportStatus = 'active'|'expired'|'verified'|'dismissed'
export interface ReportMeta { id:number; type:ReportType; lng:number; lat:number; time:number; status?:ReportStatus; votes?:number }
