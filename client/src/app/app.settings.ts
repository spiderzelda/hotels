import { AppSettingsBuilder } from './builders/AppSettings.Builder';


export class AppSettings {

  public static Global(): any {

    const JsonParameters = JSON.parse(sessionStorage.getItem('Global'))[0];
    const parameters = new AppSettingsBuilder().BuildGlobalSettingsFromObject(JsonParameters);
    return parameters;
  }

  constructor() { }
}

