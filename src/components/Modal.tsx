type Props = {
    image: string;
    closeModal: () => void;
}

export const Modal = ({ image, closeModal}: Props) => {
    return (
        <div>
            <div>
                <h1>Modal</h1>
                <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                    <img src={image} alt="" className="max-w-screen max-h-screen" />
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl">
                x
            </div>
        </div>
    );
}

export default Modal