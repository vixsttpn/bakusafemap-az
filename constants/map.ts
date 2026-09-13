export const AZ_BOUNDS={north:41.9,south:38.4,west:44.6,east:51.0,center:{lat:40.4093,lng:49.8671}};
export const MAP_BOUNDS=[[AZ_BOUNDS.south,AZ_BOUNDS.west],[AZ_BOUNDS.north,AZ_BOUNDS.east]] as [[number,number],[number,number]];
export const reportTypes=[
{id:'roadwork',label:'Ремонт дороги',color:'#FFD6A5',desc:'Ведутся работы'},
{id:'accident',label:'Авария',color:'#FFB3BA',desc:'ДТП, объезд'},
{id:'closed',label:'Дорога закрыта',color:'#D5C4F5',desc:'Проезд невозможен'},
{id:'water',label:'Вода / Лужа',color:'#A8D8EA',desc:'Затопление'},
{id:'pothole',label:'Яма на дороге',color:'#FFE4A5',desc:'Опасная яма'},
{id:'police',label:'Полиция',color:'#A5C8FF',desc:'Проверка'},
{id:'construction',label:'Стройка',color:'#C5E8A5',desc:'Техника'},
{id:'light',label:'Светофор',color:'#FFCFC5',desc:'Не работает'},
];
