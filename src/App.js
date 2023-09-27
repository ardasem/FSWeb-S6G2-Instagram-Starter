/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React from "react";
import { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import sahteVeri from "./sahte-veri.js";
import "./App.css";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu.js";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler.js";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [kullanicilar, setKullanicilar] = useState(
    gonderiler
      .filter((obj) => obj.hasOwnProperty("username"))
      .map((obj) => obj.username)
  );
  const [searchState, setSearchState] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
      const updatedGonderiler = gonderiler.map((g)=>{
        if(g.id === gonderiID ){
          const updatedGonderi = {...g};
          updatedGonderi.likes +=1;
          return updatedGonderi;
        }

              return g;
      })

      setGonderiler(updatedGonderiler)
  
        
  };

  const changeHandler = (value) => {
    if (value === "") {
      setSearchState(value);
      setGonderiler(sahteVeri);
    } else {
      setSearchState(value);
      const filteredValue = sahteVeri.filter((g) =>
        g.username.includes(searchState)
      );
      if(filteredValue.length>0){
        setGonderiler(filteredValue);
      } 
    }
  };

  return (
    <div className="App">
      <AramaCubugu
        searchState={searchState}
        setSearchState={setSearchState}
        changeHandler={changeHandler}
      />
      <Gonderiler gonderiler={gonderiler} gonderiyiBegen={gonderiyiBegen} />
    </div>
  );
};

export default App;
