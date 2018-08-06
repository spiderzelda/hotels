import { AppSettings } from '../models/AppSettings.model';

export class AppSettingsBuilder {

    public BuildGlobalSettingsFromObject(data: any): any {

        const globalConfig = AppSettings.Global;

        if (!data.EndPoints.API) { console.log('Parametro EndPoints.API no cargado '); }
        globalConfig.EndPoints.API = data.EndPoints.API;
        return globalConfig;
    }
}
