import { Injectable } from '@angular/core';
@Injectable()
export class StartupService {

    private static jsonFileURLStatic = 'assets/data/appsettings.json';
    private jsonFileURL = 'assets/Data/appsettings.json';
    private _startupData: any;

    public static loadParametry(EsMobile = false) {
        return new Promise((resolve, reject) => {
            const xobj = new XMLHttpRequest();
            xobj.overrideMimeType('application/json');
            xobj.open('GET', this.jsonFileURLStatic, true);
            xobj.onreadystatechange = () => {
                if (xobj.readyState === 4) {
                    if (xobj.status === 200) {

                        const Parameters = JSON.parse(xobj.responseText).Ambientes[JSON.parse(xobj.responseText).AmbienteSeleccionado];
                        Parameters.Global[0].EsMobile = EsMobile;
                        console.log('Parametria Cargada Exitosamente');
                        sessionStorage.setItem('Global', JSON.stringify(Parameters.Global));
                        resolve();
                    } else {
                        reject('error al cargar parametros');
                    }
                }
            };
            xobj.send(null);
        });
    }

    constructor() { }
}
