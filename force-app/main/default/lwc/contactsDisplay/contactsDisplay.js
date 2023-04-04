import { LightningElement } from 'lwc';
import CONTACT from '@salesforce/schema/Contact';
import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';

export default class ContactsDisplay extends LightningElement {

    objectApiName=CONTACT;
    fields = [CONTACT_FIRSTNAME, CONTACT_LASTNAME, CONTACT_EMAIL];
    displays=false;
    
    handleCLicks(){
            if(this.displays){
                this.display=false;
                console.log(this.display);
            }else{
                this.display=true;
                console.log(this.display);
            }
    }
}