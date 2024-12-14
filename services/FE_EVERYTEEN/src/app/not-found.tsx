import { NextPage } from "next";

const NotFound: NextPage = () => {
    return (
        <div className='ml-auto flex h-screen flex-col items-center justify-center gap-y-5'>
            <div className='text-5xl text-black'>이 페이지는 존재하지 않습니다.</div>
        </div>
    );
};

export default NotFound;
