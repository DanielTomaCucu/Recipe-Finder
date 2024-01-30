// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiKey: '5d4e68da27f74df386494136871aae0a', // Replace with your actual API key
};


declare global {
  interface Environment {
    production: boolean;
    apiKey: string;
  }
}

export {};
