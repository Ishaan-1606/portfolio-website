// src/globals.d.ts
declare global {
    interface Window {
      define: unknown;  // Safer alternative to `any`
    }
  }
  
  export {};
  