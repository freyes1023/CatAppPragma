import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'CatAppPragma',
  webDir: 'www/browser',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,     // ⏱ tiempo visible (ms)
      launchAutoHide: true,         // ✅ mostrar automáticamente
      backgroundColor: '#ffffff',   // ⚠️ importante
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
