import React , {useState} from 'react'

function Socials() {
  const [socialLinks, setSocialLinks] = useState([]);

  const handleAddLink = (platform) => {
    setSocialLinks([...socialLinks, platform]);
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    setSocialLinks(updatedLinks);
  };
  return (
      <div className='flex flex-grow rounded-[10px] drop-shadow-white flex-col h-[500px] bg-bright-gray px-9 pt-4 my-5'>
        <p className='font-bold text-xs'>Social Links</p>
      <div>
        {socialLinks.map((link, index) => (
          <div key={index}>
            <input type="text" value={link} readOnly />
            <button onClick={() => handleDeleteLink(index)}>Delete</button>
          </div>
        ))}
        <button onClick={() => handleAddLink('whatsapp')}>Add WhatsApp</button>
        <button onClick={() => handleAddLink('instagram')}>Add Instagram</button>
        <button onClick={() => handleAddLink('facebook')}>Add Facebook</button>
        <button onClick={() => handleAddLink('mail')}>Add Mail</button>
      </div>
    </div>
  )
}

export default Socials
