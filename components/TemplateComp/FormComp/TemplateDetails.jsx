import React from 'react'
import Templates from './Templates'
import Details from './Details'
import Socials from './Socials'
import Cover from './Cover'

function TemplateDetails({ onCompanyChange, onNameChange, onRoleChange,onCompanyLinkChange,
  onBioChange ,onAddressChange,onPhoneNumberChange }) {
  return (
    <div className=' flex flex-col flex-grow'>
      <Templates/>
      <Cover/>
      <Details 
      onCompanyChange={onCompanyChange}
      onNameChange={onNameChange}
      onRoleChange={onRoleChange}
      onCompanyLinkChange={onCompanyLinkChange}
      onBioChange={onBioChange}
      onAddressChange={onAddressChange}
      onPhoneNumberChange={onPhoneNumberChange}/>

    </div>
  )
}

export default TemplateDetails
