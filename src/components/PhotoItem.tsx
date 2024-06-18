import { Photo } from "../types/photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}
export const PhotoItem = ({ photo, onClick }: Props) =>{
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={photo.url} key={photo.id} alt="" className="w-full"/>
        </div>
    );
}