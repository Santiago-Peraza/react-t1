import React, {useState} from 'react'
import {contact} from '../models/contact.class'
import {status} from '../models/status.enum'
import  ContactComponent  from '../pure/contactComponent'

export default function ContactContainer() {

  // const contacto = new contact('Juan','Perez', 'juan@perez.com', status.ONLINE )
  var contacto =   new contact('Juan', 'Perez', 'juan@perez.com', status.ONLINE)

  
  return (
    <div>
      <div>
        <h1> Mis contactos</h1>
        
      </div>
      
      <ContactComponent contacto = {contacto} ></ContactComponent>
     
   
    </div>
  )
}
