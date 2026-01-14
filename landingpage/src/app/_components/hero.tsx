
import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import alineHome from '../../../public/aline-removebg-preview.png'
import tomTom from '../../../public/tomtom.png'
import Image from 'next/image'

export function Hero(){
    return (
    <section className='bg-[#7c2ae8] text-white relative overflow-hidden'>
      <div>
        <Image
          src={alineHome}
          alt='Foto Professora Aline Vicenti'
          fill
          priority
          className='object-cover opacity-60 lg:hidden'
        />
        <div className='absolute inset-0 bg-black opacity-60 lg:hidden'></div>
      </div>
      <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-15 text-center">Músicas Infantis e Oficinas Criativas</h1>
            <p className="lg:text-lg text-center">Descubra o mundo lúdico da professora Aline Vicenti e suas palestras para educadores.</p>
              <a
              href="#"
              className="bg-fuchsia-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2 mx-auto w-fit"
              >
                <WhatsappLogoIcon className='w-10 h-10'/>
                Contato via WhatsApp
              </a>
              <div className='mb-4 mt-4 flex'>
                <div className='pd-0 w-100 hidden lg:block'>
                  <Image
                    src={tomTom}
                    alt='Tom tom cat image'
                    quality={100}
                    className='object-fill'
                  />
                </div>
              </div>
          </div>
          <div className='hidden md:block h-full relative'>
            <Image
              src={alineHome}
              alt='Foto Professora Aline Vicenti'
              className='object-contain'
              fill
              sizes='(max-width: 768px) 0vw, 50vw'
              quality={100}
              priority
             />
          </div>
        </article>
      </div>
    </section>

    )
}