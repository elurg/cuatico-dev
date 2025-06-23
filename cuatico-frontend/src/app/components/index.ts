// Components Barrel File

// Export UI components
export * from './ui';

// Export business components
// Exportar Card con un nombre específico para evitar ambigüedad
export { Card as BusinessCard } from './card/card';
export * from './card2/card2';
// La exportación de card3 se ha eliminado porque no existe
export * from './course-card/course-card';
export * from './course-card-hybrid/course-card-hybrid';
export * from './label-input/label-input';
export * from './input-file/input-file';
export * from './navbar/navbar';
export * from './sidebar/sidebar';
export * from './footer/footer';
export * from './searchbar/searchbar';
export * from './calendar/calendar';
export * from './mini-calendar/mini-calendar';
export * from './certificate/certificate';
export * from './module/module';
export * from './recommended-courses/recommended-courses';