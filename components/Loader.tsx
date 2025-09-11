
import { assets } from '@/constants';
import Image from 'next/image';

const Loader = () => {
    return (
        <div className="w-full h-screen flex-center">
            <Image
                src={assets.loader}
                alt="Loading..."
                width={80}
                height={80}
            />
        </div>
    );
};

export default Loader;
