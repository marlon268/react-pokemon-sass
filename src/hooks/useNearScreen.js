import { useEffect, useState, useRef } from 'react';

// Este hook personalizado me ayuda a cargar las imagenes de
// forma progreiva a medida que el cliente ba haciendo scroll
// asi evito sobrecarga en el navegador

export function useNearScreen() {
   const element = useRef(null);
   const [show, setShow] = useState(false);
   useEffect(
      function () {
         Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
               ? window.IntersectionObserver
               : import('intersection-observer')
         ).then(() => {
            const observer = new window.IntersectionObserver(function (
               entries
            ) {
               const { isIntersecting } = entries[0];
               if (isIntersecting) {
                  setShow(true);
                  observer.disconnect();
               }
            });
            observer.observe(element.current);
         });
      },
      [element]
   );

   return [show, element];
}
