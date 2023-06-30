import { CartNav } from '@/components';
import Link from 'next/link';
import Image from 'next/image';

function Custom404() {
    return (
        <div>
            <CartNav/>
            <div className='relative w-[302px] md:w-[694px] h-[173px] md:h-[394px] mt-20 mx-auto'>
                <Image fill={true} src={`/assets/images/Error.png`}/>
            </div>
        </div>
    );
}

export default Custom404;
