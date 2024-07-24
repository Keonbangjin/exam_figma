import Image from "next/image";
import pointer from '../assets/pointer.svg';
import restagelImg from '../assets/Rectangle layout-img.svg';

interface PageProps {
    pageName: string;
}

const Page: React.FC<PageProps> = ({ pageName }) => {
    return (
        <div className="relative flex items-center justify-center">
            <Image className="z-0" src={restagelImg} alt="res" />
            <div className="absolute top-10 w-[500px] h-[100px] flex flex-col items-center justify-center mt-[70px]">
                <h1 className="text-5xl font-medium mb-5">{pageName}</h1>
                <h2 className="flex gap-5 text-base font-medium">Home <Image src={pointer} alt="res" /> {pageName}</h2>
            </div>
        </div>
    );
};

export default Page;
