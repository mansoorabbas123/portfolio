"use client";
import Image from "next/image";
import { Modal } from ".";
import { useMemo, useState } from "react";
import { getProject } from "@/data";
import { IImage } from "@/interfaces";

type Props = {
  slug?: string;
};

export const Gallery = ({ slug }: Props) => {
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null);
  const project = useMemo(() => getProject(slug), [slug]);

  return (
    <>
      <div className="Profolio-wrapper">
        {project?.images.map((el) => (
          <GalleryItem
            key={el.id}
            data={el}
            onClick={() => setSelectedImage(el)}
          />
        ))}
      </div>

      <Modal open={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <h1 className="font-bold mb-3">This is the Screen</h1>
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="relative mx-auto h-7 w-96 overflow-hidden whitespace-nowrap bg-slate-100 rounded bg-opacity-100 truncate pl-8 text-left ">
              https://daisyui.com
            </div>
          </div>
          <div className="flex justify-center  bg-base-200">
            <Image
              src={selectedImage?.img}
              alt="img"
              width={880}
              height={300}
            />
          </div>
        </div>
        <div className="mt-6">
          <h4 className="font-bold text-lg mb-3">Summary</h4>
          {selectedImage?.summary}
        </div>
      </Modal>
    </>
  );
};

function GalleryItem({ onClick, data }: any) {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <figure onClick={onClick}>
        <Image src={data.img} alt="Shoes" width={384} height={227} />
      </figure>
    </div>
  );
}
