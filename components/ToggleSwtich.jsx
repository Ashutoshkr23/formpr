import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function ToggleSwtich(props) {
    const [enabled, setEnabled] = useState(props.boolean);

    const style1 = 'background: linear-gradient(91.67deg, #96FFAD 0.94%, #66D3E1 101.73%);'

    return (
        <div className="max-w-[1208px] mx-auto flex justify-end items-center gap-2 font-bold uppercase">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                style={{ background: enabled ? 'linear-gradient(91.67deg, #96FFAD 0.94%, #66D3E1 101.73%' : 'white' }}
                className={`relative inline-flex ${props.outlineCSS} shrink-0 rounded-full border-2 border-black transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`} >
                <span className="sr-only">Use setting</span>
                <span aria-hidden="true" className={`${enabled ? `${props.rightSideCircleCSS}` : 'translate-x-2 bg-white'} mt-1 pointer-events-none inline-block ${props.circleCSS} transform rounded-full border-2 border-black shadow-lg ring-0 transition duration-200 ease-in-out`} />
            </Switch>
            {enabled ? props.onText : props.offText}
        </div>
    )
}