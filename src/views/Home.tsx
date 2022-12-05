import React from 'react';
import Math from '../components/math/Math';
import HomeMenu from '../components/menu/HomeMenu';

const Home = () => {
  return (
    // <div
    //   className="h-screen flex flex-col justify-center items-center p-6 "
    //   style={{  minHeight: 'inherit',background:"#2A4858"}}
     
    // >
     
    //   <h1 className='mb-8 text-2xl   '>Calculadora de Tecnicas de Simulacion</h1>
    //   <HomeMenu />
    // </div>

    <div className="relative md:min-h-[80vh] lg:min-h-screen py-8 px-12 before:w-40 before:h-40 before:bg-[#7166f9] before:absolute before:bottom-[20%] before:left-[22%] before:rounded-full before:blur-[120px] after:w-40 after:h-40 after:bg-[#7166f9] after:absolute after:top-[5%] after:-right-[3%] after:rounded-full after:blur-[120px]">
 
  <div className="flex items-center justify-between w-full">
    <div className="w-6/12 lg:w-2/12 flex items-center gap-2">
      <div className="bg-gray-900 w-6 h-6 rounded-full"></div>
      <h1 className="text-xl font-bold">8 semestre</h1>
    </div>
    
   
   
    <div className="w-6/12 lg:hidden flex justify-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </div>
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 md:px-8">
    <div className="md:p-8">
   
      <h1 className="text-5xl md:text-7xl font-semibold mb-8">
        Calculador de <br /> Teoria de colas{" "}
      </h1>
      <div className="flex items-center gap-4 mb-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          alt="Image user"
          className="w-10 h-10"
        />
        <h1 className='text-xl font-bold'>Escoja una de las opciones</h1>
       
      </div>
   
     
      
      
      <div>
      <HomeMenu />
      </div>
    </div>
    <div className="hidden lg:block">
      <img
        src="https://img.freepik.com/vector-gratis/ilustracion-vector-concepto-abstracto-proceso-flujo-trabajo-diseno-automatizacion-aumento-productividad-oficina-procesos-comerciales-metafora-abstracta-software-plataforma-gestion-proyectos-basada-nube_335657-2945.jpg"
        className="w-full object-cover"
      />
    </div>
  </div>
</div>

  );
};

export default Home;
