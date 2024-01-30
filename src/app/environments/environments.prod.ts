// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiKey: 'fd8cb7cd56msh63112d812ceb5a3p191452jsn136850188e6d', // Replace with your actual API key
};


declare global {
  interface Environment {
    production: boolean;
    apiKey: string;
  }
}

export {};
