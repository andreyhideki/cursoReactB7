"use client"

import { useState } from "react";
import { photoList } from "../data/photoList";
import { PhotoItem } from "./PhotoItem";
import Modal from "./Modal";

const Photos = () =>{
    const [showModal, setShowModal] = useState(false);
    const [imageOfModal, setImageOfModal] = useState('');

    const openModal = (id: number) => {
        const photo = photoList.find(item => item.id === id);
        if(photo) {
            setImageOfModal(photo.url);
            setShowModal(true);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="mx-2">
            <h1 className="text-4xl mt-5">Fotos Galeria</h1>
            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 ls:grid-cols-3 gap-8">
                {photoList.map(photo => (
                    <PhotoItem photo={photo} key={photo.id} onClick={() => {}} />
                ))}
            </section>

            {showModal && 
                <Modal image={imageOfModal} closeModal={closeModal} />

            }
        </div>
    );
}

export default Photos;