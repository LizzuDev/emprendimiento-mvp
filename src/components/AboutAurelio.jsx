import React from 'react';
import { Compass, GraduationCap, ArrowRight, Leaf } from 'lucide-react';
import presentandoSvg from '../assets/expresiones/presentando.svg';

export function AboutAurelio({ onStartTest }) {
  return (
    <article className="w-full puce-container py-12 md:py-16 text-left space-y-16 font-sans text-slate-800">
      
      {/* 1. Header Institucional de Sección */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-dorado"></span>
          <span className="text-xs uppercase tracking-wider text-[#00a8cc] font-semibold">
            Símbolos Institucionales • PUCE
          </span>
        </div>
        <h1 className="font-sans text-2xl sm:text-4xl font-bold text-[#003b81] leading-tight">
          Aurelio: La Mascota y Orientador PUCE
        </h1>
        <p className="text-slate-600 text-sm mt-2 max-w-3xl">
          Conoce la historia y el significado del oso de anteojos oficial de la Pontificia Universidad Católica del Ecuador.
        </p>
      </div>

      {/* 2. Disposición Editorial Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Gráfico / Panel de Aurelio */}
        <div className="lg:col-span-5">
          <div className="bg-[#002756] border-t-4 border-dorado p-8 text-center text-white shadow-sm rounded-[2px]">
            <div className="py-6 flex justify-center">
              <img src={presentandoSvg} alt="Aurelio" className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-md" />
            </div>

            <div className="pt-5 border-t border-blue-900 text-left">
              <span className="text-xs uppercase tracking-wider text-dorado font-semibold block">
                Especie Andina Emblemática
              </span>
              <h2 className="font-sans text-lg font-bold text-white mt-1">
                Tremarctos ornatus
              </h2>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Único úrsido autóctono de Sudamérica, protector de los páramos andinos y las cuencas hídricas del Ecuador.
              </p>
            </div>
          </div>
        </div>

        {/* Narrativa Histórica e Institucional */}
        <div className="lg:col-span-7 space-y-5">
          <div className="border-l-4 border-[#00a8cc] pl-5">
            <h2 className="font-sans text-lg font-bold text-slate-800 mb-1.5">
              Símbolo de Fortaleza y Resiliencia
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              La PUCE adoptó al oso de anteojos porque encarna la perseverancia académica, el arraigo ético y el compromiso con la vida.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-[2px]">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              Legado Fundacional
            </span>
            <h3 className="font-sans text-base font-bold text-slate-800 mb-1.5">
              Padre Aurelio Espinosa Pólit, S.J.
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Su nombre rinde homenaje al humanista y cofundador de la PUCE en 1946, cuya visión de rigor y ética guía a los futuros estudiantes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 border border-slate-200 bg-white rounded-[2px]">
              <div className="flex items-center gap-2 mb-1">
                <Leaf className="w-4 h-4 text-[#00a8cc]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                  Compromiso Ecológico
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Conservación del oso andino en la Reserva Yanacocha y Chocó Andino.
              </p>
            </div>

            <div className="p-3.5 border border-slate-200 bg-white rounded-[2px]">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-4 h-4 text-[#00a8cc]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                  Guía Vocacional
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Acompañamiento en el test respondiendo dudas sobre carreras y campus.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onStartTest}
              className="bg-[#00a8cc] hover:bg-[#008fae] text-white font-semibold text-xs tracking-wider uppercase px-6 py-3.5 transition-colors rounded-[2px] flex items-center gap-2 shadow-sm"
            >
              <Compass className="w-4 h-4 text-white" />
              <span>Iniciar Test Vocacional</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

      </div>

    </article>
  );
}
