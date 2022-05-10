import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { contact } from '../models/contact.class'
import '../pure/style/contactComponent.css'
import { status } from '../models/status.enum'

function ContactComponent({contacto}) {
  const [contact, setContact] = useState(contacto )
  // const [first, setfirst] = useState(0)
  const changeState= ()=>{
    let tempContact = contact
    if(contact.online){
       
      tempContact.online = status.OFFLINE
      setContact({...tempContact,online:status.OFFLINE})
    }else{
      tempContact.online = status.ONLINE
      setContact({ ...tempContact, online: status.ONLINE })
    }
    
    
    console.log(contact)
  }
  return (
    <div className='boxContact'>
      <div className='boxName'>
        <h3>{contact.name}</h3>
        <h3>{contact.lastname}</h3>
      </div>
      <div className='boxStatus'>
        <h4>{contact.email}</h4>
        
        <h4 >Estado:
          <span className={contact.online ? 'online' : 'offline'}>
            {contact.online ? ' Contacto En Línea' : ' Contacto No Disponible'}
          </span>
        </h4>

      </div>
      <div>
        <button onClick={changeState}>Cambiar estado</button>
      </div>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(contact)

}

export default ContactComponent
