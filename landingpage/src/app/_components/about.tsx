import Image from 'next/image'
import Link from 'next/link'
import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import { CatIcon, InstagramLogoIcon, FacebookLogoIcon, YoutubeLogoIcon, TiktokLogoIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr"
import alineSobre1 from '../../../public/image_aline/img_aline_microfone_yellow.png'
import alineSobre2 from '../../../public/image_aline/img_aline_yellow_abertos.png'

export function About(){

    return(
        <section className='bg-[#d6f3f3] text-black py-16'>
            <div className='container px-4 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='relative'>
                        <div className='relative w-90 md:w-130 h-[400px] rounded-3xl overflow-hidden'>
                            <Image
                                src={alineSobre1}
                                alt='Foto Professora Aline Vicenti'
                                className='object-cover hover:scale-110 duration-300'
                                fill
                                // sizes='(max-width: 768px) 0vw, 50vw'
                                quality={100}
                                priority
                            />
                        </div>
                        <div className='absolute w-50 h-35 right-10 -bottom-8 border-4 overflow-hidden rounded-lg border-white'>
                            <Image
                                src={alineSobre2}
                                alt='Foto Professora Aline Vicenti'
                                fill
                                quality={100}
                                className='object-cover hover:scale-110 duration-300'
                                priority
                            />
                        </div>
                    </div>
                    <div className='space-y-6 mt-10'>
                        <h2 className='text-4xl font-bold'>Sobre</h2>
                        <p>Aline Vicenti é idealizadora do Projeto Decantar Kids e referência no Brasil em técnica vocal infantil. Reconhecida pelo seu método vocal, une conteúdos técnicos sólidos e cuidadosamente fundamentados a um profundo respeito pela infância, tendo a ludicidade como elemento central no processo de aprendizagem e no desenvolvimento saudável da voz infantil. Educadora musical e professora de canto, possui licenciatura em música, especialização em pedagogia, formação em fonoaudiologia educacional e estudos voltados especificamente para a voz, integrando de forma consistente os conhecimentos pedagógicos, musicais e vocais. Ao longo de sua trajetória, teve como referência aulas, estudos e orientações com professores de excelência tanto da música erudita quanto da música popular, construindo uma visão ampla, sensível e técnica sobre o ensino do canto. Atua há mais de 15 anos na educação musical e atualmente atende alunos de todo o Brasil e de diversos outros países, de forma totalmente online. Seu trabalho se destaca por tornar a técnica vocal infantil acessível, segura e lúdica, especialmente por meio de aulas individuais. Criadora de conteúdo para o YouTube e desenvolvedora de materiais pedagógicos, utiliza a música como ferramenta de desenvolvimento, expressão e autonomia, consolidando o Decantar Kids como um método estruturado que impacta crianças, famílias e educadores e fortalece o ensino consciente da voz desde a infância.
                        </p>
                        <a
                            href='#'
                            className='bg-[#E84C3D] text-white font-bold flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'
                        >
                            <WhatsappLogoIcon className='w-5 h-5 text-white font-bold'/>
                            Contato via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}