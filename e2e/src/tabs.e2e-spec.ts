import { browser, element, by, $, Button} from 'protractor';
import { ProtractorBrowser } from 'protractor';
import { protractor } from 'protractor/built/ptor';


describe('Mi prueba',()=>{
    // codigo de configuración
    beforeEach(()=>{
        browser.get("/");
    });

    //Prueba 1
    it ("Titulo de la Página", () => {
        expect(element(by.css('.ion-card-title')).getText()).toContain("en linea");
    });

    //PRUEBA 2
    it("El usuario puede navegar a la pestaña modificar",  ()=>{
       //browser.driver.sleep(500);
        expect(element(by.css('.ion-button')).getText()).toContain("Guardar");
    });

   
});