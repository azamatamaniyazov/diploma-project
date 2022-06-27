export const translateService = (desc, lang) => {
  switch (desc) {
    case "01":
      return lang === "qq" ? "Ashıq" : "Ochiq havo";
    case "09":
      return lang === "qq" ? "Jawın" : "Yomg'ir";
    case "10":
      return lang === "qq" ? "Jawın" : "Yomg'ir";
    case "11":
      return lang === "qq" ? "Gúldirmama" : "Momaqaldiroq";
    case "13":
      return lang === "qq" ? "Qar" : "Qor";
    case "50":
      return lang === "qq" ? "Tuman" : "Tuman";
    case "Нукус":
      return lang === "qq" ? "Nókis" : "Nukus";
    case "Xojayli Shahri":
      return lang === "qq" ? "Xojeli" : "Xojayli";
    case "Kegeyli Shahar":
      return lang === "qq" ? "Kegeyli" : "Kegeyli";
    case "Qo`ng`irot Shahri":
      return lang === "qq" ? "Qońırat" : "Qo`ng`irot";
    case "Chimboy Shahri":
      return lang === "qq" ? "Shimbay" : "Chimboy";
    case "Shumanay Shahri":
      return lang === "qq" ? "Shomanay" : "Shumanay";
    case "Qanliko`l":
      return lang === "qq" ? "Qanlıkól" : "Qonliko`l";
    case "Mo`ynoq Shahri":
      return lang === "qq" ? "Moynaq" : "Mo`ynoq";
    case "Nukus Shahri":
      return lang === "qq" ? "Nókis rayonı" : "Nukus tumani";
    case "Taxtako`pir":
      return lang === "qq" ? "Taxtakópir" : "Taxtako`pir";
    case "Qorao`zak":
      return lang === "qq" ? "Qaraózek" : "Qorao`zak";
    case "Beruniy Shahri":
      return lang === "qq" ? "Beruniy" : "Beruniy";
    case "To`rtko`l Shahri":
      return lang === "qq" ? "Tórtkól" : "To`rtko`l";
    case "Mang`it Shahri":
      return lang === "qq" ? "Manǵıt" : "Mang`it";
    case "Íǵǵallıq":
      return lang === "qq" ? "Íǵǵallıq" : "Namlik";
    case "Samal tezligi":
      return lang === "qq" ? "Samal tezligi" : "Shamol tezligi";
    case "Basım":
      return lang === "qq" ? "Basım" : "Bosim";
    case "Quyash shıǵıwı":
      return lang === "qq" ? "Quyash shıǵıwı" : "Quyosh chiqishi";
    case "Quyash batıwı":
      return lang === "qq" ? "Quyash batıwı" : "Quyosh botishi";
    case "Seziledi":
      return lang === "qq" ? "Seziledi" : "His qilinadi";
    case "Búgin":
      return lang === "qq" ? "Búgin" : "Bugun";
    case "Háptelik hawa rayı maǵlıwmatı":
      return lang === "qq"
        ? "Háptelik hawa rayı maǵlıwmatı"
        : "Haftalik ob-havo ma'lumoti";
    case "Kúnlik rejeler":
      return lang === "qq" ? "Kúnlik rejeler" : "Kunlik reja";
    case "Kún":
      return lang === "qq" ? "Kún" : "Kun";
    case "Kúndiz":
      return lang === "qq" ? "Kúndiz" : "Kunduzi";
    case "Keshki":
      return lang === "qq" ? "Keshki" : "Kechasi";
    case "Ekshembi":
      return lang === "qq" ? "Ekshembi" : "Yakshanba";
    case "Dúshembi":
      return lang === "qq" ? "Dúshembi" : "Dushanba";
    case "Siyshembi":
      return lang === "qq" ? "Siyshembi" : "Seshanba";
    case "Sárshembi":
      return lang === "qq" ? "Sárshembi" : "Chorshanba";
    case "Piyshembi":
      return lang === "qq" ? "Piyshembi" : "Payshanba";
    case "Juma":
      return "Juma";
    case "Shembi":
      return lang === "qq" ? "Shembi" : "Shanba";
    default:
      return lang === "qq" ? "Bultlı" : "Bulutli";
  }
};
