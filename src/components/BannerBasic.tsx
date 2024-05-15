import React from "react";
import GeneratorBanner from "../utils/GeneratorBanner";

/**
 * 
 * @param imgUrl  -> Lista de imagenes, si solo hay un solo elemento en la lista renderizara este   unico elemento, si hay mas de uno renderizara un carrucel de imagenes.
 * @param messageBanner -> Mensaje que va a tener el banner.
 * @param isVideo -> Indica si el banner contiene un video.
 * Ejemplo de como usarlo:
 * <BannerBasic imgUrl={["https://img.freepik.com/foto-gratis/interior-habitacion-dormitorio-hotel_23-2150683421.jpg"]} messageBanner="Haz realidad tus sueños de hospedaje" isVideo={false}/>
 */

interface ImgProps {
    imgUrl: string[],
    messageBanner: string,
    isVideo: boolean;
}



const BannerBasic: React.FC<ImgProps> = ({ imgUrl, messageBanner, isVideo }) => {
    return (
        <section id="banner" className="w-screen h-screen flex justify-center items-center relative">
            <h1 className="text-center">{messageBanner}</h1>

            <div className="w-full h-full absolute -z-10 brightness-[.3] blur-[1px]">
                {isVideo ? ( // Si isVideo es true, renderiza un video
                    <video src={imgUrl.join()} className="w-full h-full"></video>

                ) : ( // Si no es un video, renderiza imágenes
                    imgUrl.map((url, index) => (
                        <GeneratorBanner key={index} imageUrls={[url]} />
                    ))
                )}
            </div>
        </section>
    );
}

export default BannerBasic;
